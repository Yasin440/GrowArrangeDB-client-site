import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import initializeFirebase from "../components/Register/Firebase/firebase.init";

//initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const auth = getAuth();
    //toggle registration and login form
    const [isLogin, setIsLogin] = useState(true);
    const [user, setUser] = useState({});
    const [cars, setCars] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [jwtToken, setJwtToken] = useState('');
    const [manageAllOrders, setManageAllOrders] = useState();
    const [manageMyOrders, setManageMyOrders] = useState();



    //registerWithEmailPassword
    const registerWithEmailPassword = (email, password, name, navigate) => {
        setError('');
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                //saveUser to DB
                saveUserDB(email, name, 'POST');
                //update name in firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                        setError('');
                    })
                    .catch((error) => {
                        setError(error.message);
                    })
                navigate('/home');
            })
    }

    //logInWithEmailPassword
    const logInWithEmailPassword = (email, password) => {
        setError('');
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
    }

    //logIn with google
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUserDB(user.email, user.displayName, 'PUT');
            })
            .catch((error) => {
                // Handle Errors here.
                setError(error.message);
            })
            .finally(() => setLoading(false))
    }

    //observed User state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setJwtToken(idToken);
                    })
            }
            else {
                setUser({});
            }
            setLoading(false)
        });
        return () => unSubscribe;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //***/== logOut user ==/***//
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                //log out success
            }).catch((error) => {
                // An error happened.
            })
            .finally(() => {
                setLoading(false);
            });
        ;
    }

    //***/== save user info to database ==/***//
    const saveUserDB = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://agile-coast-57726.herokuapp.com/clients', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    const [categories, setCategories] = useState();
    //==get category
    useEffect(() => {
        fetch('https://agile-coast-57726.herokuapp.com/getCategory')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    //== get admin validation in true of false ==//
    useEffect(() => {
        fetch(`https://nameless-river-31605.herokuapp.com/client/isAdmin/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
            })
    }, [user.email])

    //== get all cars ==//
    useEffect(() => {
        fetch('https://nameless-river-31605.herokuapp.com/cars/all')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])


    //get all order info from database
    useEffect(() => {
        fetch('https://nameless-river-31605.herokuapp.com/orderedCars/all')
            .then(res => res.json())
            .then(data => setManageAllOrders(data))
    }, [])

    //get my order info from database with email
    useEffect(() => {
        fetch(`https://nameless-river-31605.herokuapp.com/orderedCars/${user?.email}`)
            .then(res => res.json())
            .then(data => setManageMyOrders(data))
    }, [user.email])

    return {
        user,
        cars,
        isLogin,
        setIsLogin,
        setCars,
        admin,
        error,
        loading,
        jwtToken,
        manageMyOrders,
        setManageMyOrders,
        manageAllOrders,
        setManageAllOrders,
        registerWithEmailPassword,
        logInWithEmailPassword,
        setLoading,
        signInWithGoogle,
        logOut,
        categories
    }
}

export default useFirebase;