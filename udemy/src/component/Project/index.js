import { useEffect,useRef, useState } from "react"
import axios from 'axios'

const Project = () => {

    const inputRef = useRef()
    const [apiData,setData] = useState([])
    const toggleHandler =() =>{
        inputRef.current.focus()
    }

    console.log(apiData)

    const getTheData = async() => {
        let data = []
        for(let i=1;i<=10;i++){
            //promises.push(fetch(`https://jsonplaceholder.typicode.com/posts/${i}/comments`).then(jsonData => {console.log(data)}))
            // await fetch(`https://jsonplaceholder.typicode.com/posts/${i}/comments`).then(response => response.json()).then(jsonData => data.push(...jsonData))
            data.push(axios.get(`https://jsonplaceholder.typicode.com/posts/${i}/comments`))
        }
        Promise.all(data).then(
            function(results){
                setData(results)
            } 
        )
    }

    useEffect(()=>{
        getTheData()
    },[])

    return (
        <div>
            <input ref={inputRef} type="text"/><br/>
            <button onClick={toggleHandler}>Toggle</button>
        </div>
    )
}

export default Project