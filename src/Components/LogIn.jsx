import React,{useState,useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import login from '../Images/Login.jpg'
import {UserContext} from "../App"

const LogIn = () => {

    const {state,dispatch} = useContext(UserContext);


    const history = useHistory();
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const logInUser = async(event) => {
        event.preventDefault();
        const res =await fetch("/signin",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               uemail: email, upassword: password,
            })
        });
        const data = await res.json()
        console.log(data);
        if(data.status === 400 || !data || data.status === 422){
            window.alert('Invalid Credentials');
        }else{
            dispatch({type:'USER',payload:true});
            window.alert('LogIn Successfull');
            history.push("/");
        }
    }

    return (
        <>
             <section className="signin">
                <div className="container mt-5">
                    <div className="signin-content">
                    <div className="signin-image">
                            <figure>
                                <img src={login} alt="LogIn Image" />
                            </figure>
                            <NavLink to="/signup" className="signup-image-link">Dont have account? Create One...</NavLink>
                        </div>
                        <div className="signin-form">
                            <h2 className="form-title">
                                Log In
                            </h2>
                            <form className="register-form" id="register-form">
                                
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email material-icons-name"></i></label>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                        placeholder="Email" value={email}  onChange={(event)=>setEmail(event.target.value)}
                                    />
                                </div>
                                
                               
                                <div className="form-group">
                                    <label htmlFor="password"><i className="zmdi zmdi-lock material-icons-name"></i></label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        placeholder="Password" value={password}  onChange={(event)=>setPassword(event.target.value)}
                                    />
                                </div>
                                
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="LogIn" 
                                        onClick={logInUser}
                                    />
                                </div>
                            </form>

                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogIn
