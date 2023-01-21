import { useState,useRef } from "react"

const Form = ()=>{

    const nameInputRef = useRef()
    const amountInputRef = useRef()

    // const [inputData ,  setInputData] = useState({
    //     title:'',
    //     amount :''
    // })

    // const titleChangeHandler =(event)=>{
    //    setInputData({
    //     ...inputData,
    //     title : event.target.value
    //    })
        // setInputData((prevState)=>{
        //     return {...prevState,title : event.target.value}
        // })
    //     setEnteredTitle(event.target.value)
    // } 

    // const amountChangeHandler = event => {
        // setInputData((prevState)=>{
        //     return {...prevState, amount : event.target.value}
        // })
    //     setAmount(event.target.value)
    // }

    const getFormData = (event) => {
        event.preventDefault();
        console.log(nameInputRef.current.value)
        console.log(amountInputRef.current.value)
        nameInputRef.current.value = ''
        amountInputRef.current.value = ''
    }

    return (
    <form onSubmit={getFormData}>
        <label>Title</label>
        <input type="text" ref={nameInputRef}/><br/>
        <label>Amount</label>
        <input type="text" ref={amountInputRef}/><br/>
        <button type="submit">Submit</button>
    </form>
    )
}

export default Form