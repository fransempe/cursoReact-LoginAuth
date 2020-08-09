import React from 'react'

export default function Home() {
    return (
            <div className="jumbotron">
                <h1 className="display-4">Curso UCIP ReactJS | Login </h1>
                <p className="lead">Esta es la App que permite loguearte utilizando token, consumiento una API en Heroku.</p>
                <hr className="my-4" />
                <p>En este enlace podrás acceder a la APP de hoteles</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" 
                    href="https://curso-react-hotel-app.vercel.app/" 
                    role="button">Hoteles APP</a>
                </p>
            </div>
    )
}
