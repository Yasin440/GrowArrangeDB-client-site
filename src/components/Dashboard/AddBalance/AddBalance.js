import React from 'react';
import './AddBalance.css';
import paymentImg from '../../../media/Payment Methods-01.png';

const AddBalance = () => {
    return (
        <div className='addBalance'>
            <div className="content">
                <h1>Add Balance <span>With...</span></h1>
                <p>আমাদের সাইট এ বিকাশ, নগদ, রকেট এর মাধ্যমে টাকা এড করতে পারবেন ।</p>
                <img width="60%" src={paymentImg} alt="Img" />
                <p><span>সবনিম্ন 100 টাকা</span> এড করতে পারবেন
                    টাকা অবশ্যই <span>সেন্ড মানি</span> করবেন
                    টাকা পাঠানোর পরে ওয়েবসাইট এর <span>Ticket</span> অপশন এ যেয়ে মেসেজ করুণ ।</p>
                <div className='list'>
                    <ul>
                        <li><span>Subject:</span> Payment</li>
                        <li><span>Payment Method :</span></li>
                        <li><span>Sender Number :</span></li>
                        <li><span>Transaction ID :</span></li>
                        <li><span>Sended Amount :</span></li>
                        <li><span>Message:</span> "If any"</li>
                    </ul>
                </div>
                <p>আপনার এ্যাকাউন্টে ব্যালেন্স <span>০-১ ঘন্টার</span> মধ্যে যোগ হবে ।</p>
                <p>কোনো কিছু বুঝতে সমস্যা হলে ওয়েবসাইট এর messenger এ <span>message</span> করবেন - ধন্যবাদ।</p>

            </div>
        </div>
    );
};

export default AddBalance;