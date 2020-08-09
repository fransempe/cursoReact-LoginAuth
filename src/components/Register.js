import React from 'react'

export default function Register() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Name" name="name"/>
                <input type="email" placeholder="Email" name="email"/>
                <input className="input" type="password" placeholder="Password" name="password" />
                <button>
                    Register
                </button>
            </form>
        </div>
    )
}
