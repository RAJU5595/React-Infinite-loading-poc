import { Component,useState } from "react";

// class Test extends Component {
//     state = {title : '', amount : ''}

//     titleHandler = (event) =>{
//         this.setState({title : event.target.value})
//     } 

//     amountHandler = event => {
//         this.setState({amount : event.target.value})
//     }

//     getFormData = (event) =>{
//         event.preventDefault()
//     }

//     render(){
//         console.log(this.state)
//         return (
//             <form onSubmit={this.getFormData}>
//                 <label>Title</label>
//                 <input type="text" onChange={this.titleHandler}/><br/>
//                 <label>Amount</label>
//                 <input type="text" onChange={this.amountHandler} /><br/>
//                 <button type="submit">Submit</button>
//             </form>
//             )
//     }
// }

const Test = () => {
    const [state,setState] = useState({title:'',amount : ''})
    const titleHandler = event =>{
        setState({...state,title:event.target.value})
    }
    const amountHandler = event =>{
        setState({...state,amount : event.target.value})
    }

    const getFormData = event => {
        event.preventDefault()
    }

    console.log(state)

    return (
        <form onSubmit={getFormData}>
            <label>Title</label>
            <input type="text" onChange={titleHandler}/><br/>
            <label>Amount</label>
            <input type="text" onChange={amountHandler} /><br/>
            <button type="submit">Submit</button>
        </form>
        )
}

export default Test