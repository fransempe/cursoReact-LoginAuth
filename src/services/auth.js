const apiUrl = process.env.REACT_APP_API_URL  ;

export const login = async (user) => {

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

    try {
        const res = await fetch(apiUrl + "/auth/login", options)
        if (res.status !== 200) {
            throw new Error("error de email o password")
        }
        const datos = await res.json()

    return datos;

} catch (error) {
    localStorage.removeItem('Token');
    throw error;
}}

export const register = async (user) =>{

    const data = JSON.stringify({
        fullname: user.name,
        email: user.email,
        password: user.password
    });


    const options = {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await fetch(apiUrl + "/auth/register", options)
        if (res.status !== 200) {
            throw new Error("error al registrar usuario")
        }
        const datosRegister = await res.json()
        return datosRegister;

    } catch (error) {
        throw error
    }

}