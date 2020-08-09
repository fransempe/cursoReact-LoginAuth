import React, {useState} from 'react'

export default function Register() {

    const Token = localStorage.getItem('Token');
    const tokenParse = JSON.parse(Token);

    const [user, setUser] = useState({
        name:'',
        email:'',
        password:''
    });


    const data = JSON.stringify({
        name: user.name,
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

            const res = await fetch("https://redis-auth.herokuapp.com/auth/register", options)
            const datos = await res.json()  
            console.log(datos);          

        } catch (error) {
            
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
                            <h1>Account Register</h1>
                        </div>
                        <img src="/img/logo.png" className="rounded-circle mx-auto d-block m-4 logo" alt="" />
                        <div className="card-body">
                            <form onSubmit={onHandleSubmit}>
                             <div className="form-group">
                                    <input onChange={onHandleChange} type="text" placeholder="Name" name="Name" value={user.name} />
                                </div>
                                <div className="form-group">
                                    <input onChange={onHandleChange} type="email" placeholder="Email" name="email" value={user.email} />
                                </div>
                                <div className="form-group">
                                    <input onChange={onHandleChange} className="input" type="password" placeholder="Password" name="password" value={user.password} />
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
