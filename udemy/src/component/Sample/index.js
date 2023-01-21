import {useState} from 'react'

const Sample = (props) => {

    const [title,setTitle] = useState(props.name);

    const clickHandler = () => {
        setTitle('Updated')
    }

    return (
        <div>
            <h1>Hi,{title} </h1>
            <button onClick={clickHandler}>change name</button>
        </div>
    )
    
}

export default Sample