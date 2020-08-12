import React, {useState} from 'react'
import { register } from '../services/auth'

export default function Register() {

    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        confirmpassword:''
    });

        
    const onHandleSubmit = async (e) =>{
        try {
            e.preventDefault()
            validations();
            const datos = await register(user);

        } catch (error) {
            alert(error.message)
        }

    }

    const onHandleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        
    }
    const validations = () =>{
        
    }
    return (
        <div className="row">             
                <div className="col-md-3 mx-auto">
                    <div className="card mt-4 text-center">
                        <div className="card-header">
                            <h1>Account Register</h1>
                        </div>
                        <img src="/img/logo.png" className="rounded-circle mx-auto d-block m-4 logo" alt="" />
                        <div className="card-body">
                            <form onSubmit={onHandleSubmit}>
                             <div className="form-group">
                                    <input onChange={onHandleChange} type="text" placeholder="Name" name="name" value={user.name} />
                                </div>
                                <div className="form-group">
                                    <input onChange={onHandleChange} type="email" placeholder="Email" name="email" value={user.email} />
                                </div>
                                <div className="form-group">
                                    <input onChange={onHandleChange} className="input" type="password" placeholder="Password" name="password" value={user.password} />
                                </div>
                                <div className="form-group">
                                    <input onChange={onHandleChange} className="input" type="password" placeholder="Confirm Password" name="confirmpassword" value={user.confirmpassword} />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}
