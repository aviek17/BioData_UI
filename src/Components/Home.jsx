import React,{useState, useEffect} from 'react'

const Home = () => {
    const [userData, setUserData] = useState('');
    const [show,setShow] = useState(false);

    const homePage = async () => {
        try {
            const res = await fetch("/getdata", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"

            });
            const data = await res.json();

            // console.log(data);
            setUserData(data.name)
            setShow(true)
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
        homePage();
    }, [])
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">Welcome!</p>
                    <h1>{userData}</h1>
                    <h3>
                        {show ? 'Welcome back' : 'We are MERN Developers'}
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Home
