import React , {useEffect,useContext} from 'react'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const Logout = () => {
    const {state,dispatch} = useContext(UserContext);
    const history = useHistory()
    //using promises

    useEffect(() => {
        fetch('/logout',{
             method: 'get',
             headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({type:'USER',payload:false})
            history.push('/login', {replace: 'true'});
            if (!res.status === 200) {
                throw new Error("Error occured here")
            }
        }).catch((err) => {
            console.log(err);
        })
    });

    return (
        <>
            <h1>logout</h1>
        </>
    )
}

export default Logout
