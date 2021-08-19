import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"



const AboutUs = () => {

    const history = useHistory()
    const [userData, setUserData] = useState({});

    const callAboutPage = async () => {
        try {
            const res = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"

            });
            const data = await res.json();

            console.log(data);
            setUserData(data)
            console.log(userData);



            if (!res.status === 200) {
                throw new Error("Error occured here")
            }


        } catch (err) {
            console.log(err);
            history.push("/login")
        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])

    return (
        <>
            <div className="container emp-profile">
                <form method="GET">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="profile-img" src="" alt="user" />
                            {/* <input type="file" className="profile-img" /> */}
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>{userData.name}</h5>
                                <h6>{userData.work}</h6>
                                <p className="profile-rating mt-3 mb-5">
                                    Rankings:
                                    <span>1/10</span>
                                </p>

                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle='tab' id="home-tab" href="#home" role="tab">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle='tab' id="profile-tab" href="#profile" role="tab">Timeline</a>
                                    </li>

                                </ul>
                            </div>

                        </div>
                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-button" name="btnAddMore" value="Edit Profile" />
                        </div>

                    </div>
                    <div className="row">
                        {/* left side url */}
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>Work Links</p>
                                <a href="https://www.youtube.com/" target="_aviek">YouTube</a><br />
                                <a href="https://www.instagram.com/" target="_aviek">Instagram</a><br />
                                <a href="https://www.facebook.com/" target="_aviek">Facebook</a><br />
                                <a href="https://github.com/" target="_aviek">Github</a><br />
                                <a href="https://twitter.com/?lang=en" target="_aviek">Twitter</a><br />
                            </div>
                        </div>


                        {/* right side data */}
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            User Id
                                        </div>
                                        <div className="col-md-6">
                                            {userData._id}
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            Name
                                        </div>
                                        <div className="col-md-6">
                                            {userData.name}
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            Email
                                        </div>
                                        <div className="col-md-6">
                                            {userData.email}
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            Phone
                                        </div>
                                        <div className="col-md-6">
                                            {userData.phone}
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            Profession
                                        </div>
                                        <div className="col-md-6">
                                            {userData.work}
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            Experience
                                        </div>
                                        <div className="col-md-6">
                                            Expert
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            Hourly Rate
                                        </div>
                                        <div className="col-md-6">
                                            100$
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            Projects
                                        </div>
                                        <div className="col-md-6">
                                            203
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            Jobs
                                        </div>
                                        <div className="col-md-6">
                                            Amazon Facebook
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            Current Project
                                        </div>
                                        <div className="col-md-6">
                                            BioData
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default AboutUs