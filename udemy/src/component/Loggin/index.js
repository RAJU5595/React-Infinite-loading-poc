import { useState,useEffect} from "react"

const Loggin = props =>{

    const [isLoggin,setIsLoggin]= useState(false)

    useEffect(()=>{
        const storedUser = localStorage.getItem('isLoggedIn')

        if(storedUser === '1'){
            setIsLoggin(true)
        }
    },[])

    const logginHandler = (email,pwd) =>{
        setIsLoggin(true)
        localStorage.setItem('isLoggedIn',"1")
    }

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggin(false)
    }

    return (
        isLoggin ? <div>
                <h1>Hi Welcome</h1>
                <button onClick={logoutHandler}>Logout</button>
            </div> : 
        <form onSubmit={logginHandler}>
        name :<input type="text"/><br/>
        pwd :<input type="text"/><br/>
        <button type="submit">Submit</button>
        </form> 
    )

}

export default Loggin