import React, {useState} from 'react'

export default function About() {

    const Token = localStorage.getItem('Token');
    const tokenParse = JSON.parse(Token);

    const aboutDataInit = "";
    const [aboutData, setAboutData] = useState(aboutDataInit);

    const options = {
        method: 'GET',
        headers: 
        {
            'Authorization': 'Bearer ' + tokenParse
        }
    }

    const handleAbout = async () => {
        const respuesta = await fetch("https://redis-auth.herokuapp.com/about", options );
        const datos = await respuesta.json();
        setAboutData(datos.message);
    }

    handleAbout();

    return (
        <div>
            <h4>{aboutData}</h4>
        </div>
        
    )
}
