import React from 'react';
import Footer from './Base/Footer';
import Header from './Base/Header';
import './Contact.css';

function Contact() {

function handleSubmit(event) {
    event.preventDefault();
    window.location.replace("http://localhost:3000/Home")
    alert("Thank you for submitting your information!")
}
return (
    <div>
    <>
    <Header />
    </>
    <p>Contact Form</p>
    <>
        <div className="Contact">
            <form onSubmit={handleSubmit}>
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.."/>
                    

                
                

                <label for="email">Email Address</label>
                <input type="text" id="email" name="email" placeholder="Your email.."/>

                <label for ="Comments">Comments/Complaints</label>
                <textarea id="Comments" name="Comments" placeholder="Comments/Complaints"rows ="4"></textarea> 


                <input type="submit" value="Submit"/> 
            </form>
        </div>
    </>
    <>
    <Footer />
    </>
    </div>
);
}

export default Contact;
