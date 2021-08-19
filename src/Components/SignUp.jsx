import React, { useState } from 'react'
import register from "../Images/register.jpg"
import { NavLink, useHistory } from 'react-router-dom'
const SignUp = () => {

    const history = useHistory();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: ""

    });

    let name, value;
    const getValue = (event) => {
        name = event.target.name         // will store the name for the field of the form
        value = event.target.value       // will store the value for the corresponding value of that field

        setUser({ ...user, [name]: value })      // previous value by spread operator , new value by  --->   [field name] : corresponding value
    }

    const submitData = async (event) => {
        event.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                uname: name, uemail: email, uphone: phone, uwork: work, upassword: password, ucpassword: cpassword
            })
        });

        const data = await res.json()
        console.log(data.status);
        // I need to change the data to res 
        if (data.status === 422 || !data) {
            window.alert("Unsuccessfull Registration");
            console.log("Unsuccessfull Registration");
        } else {
            window.alert(" Registration Successfull");
            console.log("Successfull Registration");

            history.push("/login");
        }


    }



    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">
                                Registration Form
                            </h2>
                            <form className="register-form" id="register-form" method="POST">
                                {/* <div className="form-group">
                                    <input type="file" name="image" id="image" />
                                </div> */}
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="name" id="name" autoComplete="off"
                                        placeholder="Name" value={user.name} onChange={getValue}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email material-icons-name"></i></label>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                        placeholder="Email" value={user.email} onChange={getValue}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone"><i className="zmdi zmdi-phone-in-talk material-icons-name"></i></label>
                                    <input type="number" name="phone" id="phone" autoComplete="off"
                                        placeholder="Mobile No" value={user.phone} onChange={getValue}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work"><i className="zmdi zmdi-slideshow material-icons-name"></i></label>
                                    <input type="text" name="work" id="work" autoComplete="off"
                                        placeholder="Profession" value={user.work} onChange={getValue}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"><i className="zmdi zmdi-lock material-icons-name"></i></label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        placeholder="Password" value={user.password} onChange={getValue}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword"><i className="zmdi zmdi-lock material-icons-name"></i></label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                        placeholder="Confirm Password" value={user.cpassword} onChange={getValue}
                                    />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={submitData} />
                                </div>
                            </form>

                        </div>
                        <div className="signup-image">
                            <figure>
                                <img src={register} alt="Registration Image" />
                            </figure>
                            <NavLink to="/login" className="signup-image-link">Already Registered?</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp
