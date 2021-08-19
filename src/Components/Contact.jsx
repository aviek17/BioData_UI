import React, { useState, useEffect } from 'react'
import phone from "../Images/phone.jpg"
import email from "../Images/email.jpg"
import address from "../Images/address.jpg"

const Contact = () => {
    // const history = useHistory()
    const [userData, setUserData] = useState({name:"",email:"",phone:"",message:""});

    const callContactPage = async () => {
        try {
            const res = await fetch("/contact", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"

            });
            const data = await res.json();

            // console.log(data);
            setUserData({...userData,name:data.name,email:data.email,phone:data.phone})
            // console.log(userData);



            if (!res.status === 200) {
                throw new Error("Error occured here")
            }


        } catch (err) {
            console.log(err);
            // history.push("/login")
        }
    }

    useEffect(() => {
        callContactPage();
    }, [])

    const handleInputs = (event) => {
        const name = event.target.name
        const value = event.target.value

        setUserData({...userData,[name]:value})
    }

    const submitMessage = async (event) => {
        event.preventDefault();

        const {name,email,phone,message} = userData;

        const res = await fetch('/message',{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                name:name,email:email,phone:phone,message:message
            })
        })
        const data = await res.json()
        console.log(data);

        if(!data){
            console.log("message not send");
        }else{
            alert("message sent")
            setUserData({
                ...userData,message:""
            })
        }
    }

    return (
        <>
            <div className="contact_info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                            <div className="contact_info_item  d-flex justify-content-start align-items-center">
                                <img src={phone} alt="phone" className="phone_icon" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Phone
                                    </div>
                                    <div className="contact_info_text">
                                        {userData.phone}
                                    </div>
                                </div>
                            </div>
                            <div className="contact_info_item  d-flex justify-content-start align-items-center">
                                <img src={email} alt="phone" className="phone_icon" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Email
                                    </div>
                                    <div className="contact_info_text">
                                        {userData.email}
                                    </div>
                                </div>
                            </div>
                            <div className="contact_info_item  d-flex justify-content-start align-items-center">
                                <img src={address} alt="phone" className="phone_icon" />
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Address
                                    </div>
                                    <div className="contact_info_text">
                                        Silchar Assam
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact form */}

            <div className="contact_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_form_container py-5">
                                <div className="contact_form_title">
                                    Get in Touch
                                    <form id="contact_form" method="POST">
                                        <div className="contact_form_name d-flex justify-content-between align-items-between">
                                            <input type="text" id="contact_form_name" className="contact_form_name input_field contact_form_title"
                                                placeholder="Name"  value={userData.name}
                                                name="name"
                                                onChange={handleInputs} required={true}/>

                                            <input type="email" id="contact_form_email" className="contact_form_email input_field contact_form_title"
                                                placeholder="Email" value={userData.email}
                                                name="email"
                                                onChange={handleInputs} required={true}
                                            />
                                            <input type="number" id="contact_form_phone" className="contact_form_phone input_field contact_form_title"
                                                placeholder="Phone No" value={userData.phone}
                                                name="phone"
                                                onChange={handleInputs} required={true}
                                            />
                                        </div>
                                        <div className="contact_form_text mt-5">
                                            <textarea className="text_field contact_form_image" placeholder="Message" value={userData.message}
                                            name="message"
                                            onChange={handleInputs} cols="30" rows="10"></textarea>
                                        </div>
                                        <div className="contact_form_button">
                                            <button className="button contact_submit_button" onClick={submitMessage} type="submit">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
