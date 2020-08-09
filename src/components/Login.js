import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom';


export default function Login() {


    const Token = localStorage.getItem('Token');
    const tokenParse = JSON.parse(Token);

    const [user, setUser] = useState({
        email:'',
        password:''
    });

    const [status, setStatus] = useState({undefined})


    const data = JSON.stringify({
        email: user.email,
        password: user.password
    })

    const options = {
        method: 'POST',
        headers:{ 
            'Content-Type' :'application/json'
            },
        body: data
    }
    const onHandleSubmit = async (e) =>{
        e.preventDefault()
        try {

            const res = await fetch("https://redis-auth.herokuapp.com/auth/login", options)
            const datos = await res.json()
            setStatus(res.status);
            localStorage.setItem('Token', JSON.stringify(datos.access_token))
            

        } catch (error) {
            localStorage.removeItem('Token');
        }
    }

    const onHandleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        
    }

    return ( 

            <div className="row">             
                <div className="col-md-3 mx-auto">
                    <div className="card mt-4 text-center">
                        <div className="card-header">
                            <h1>Account Login</h1>
                        </div>
                        <img src="/img/logo.png" className="rounded-circle mx-auto d-block m-4 logo" alt="" />
                        <div className="card-body">
                            <form onSubmit={onHandleSubmit}>
                                <div className="form-group">
                                    <input onChange={onHandleChange} type="email" placeholder="Email" name="email" value={user.email} />
                                </div>
                                <div className="form-group">
                                    <input onChange={onHandleChange} className="input" type="password" placeholder="Password" name="password" value={user.password} />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Login
                                    </button>
                                </div>
                            </form>
                            { tokenParse && <Redirect to="/about" /> }
                        </div>
                    </div>
                </div>

            </div>
            
    )
}
