import {useSelector, useDispatch} from 'react-redux'
import { counterActions } from '../../store'

const Counter = () =>{

    const counter = useSelector(state => state.counter.counter)

    const dispatch = useDispatch()

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(5))
    }

    const toggleCounterHandler = () => {}

    return (
        <div>
            <h1>Counter</h1>
            <h1>{counter}</h1>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={increaseHandler}>Incrementby5</button>
            <button onClick={toggleCounterHandler}>Toggle counter</button>
        </div>
    )
}

export default Counter

// class Counter extends Component{
//     toggleCounterHandler = () =>{
        
//     }
//     incrementHandler = () => {
//         this.props.increment()
//     }
//     decrementHandler = () =>{
//         this.props.decrement()
//     }
//     render(){
//         return (
//             <div>
//                 <h1>Counter</h1>
//                 <h1>{this.props.counter}</h1>
//                 <button onClick={this.incrementHandler}>Increment</button>
//                 <button onClick={this.decrementHandler}>Decrement</button>
//                 <button onClick={this.toggleCounterHandler}>Toggle counter</button>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         counter : state.counter
//     }
// }

// const mapDispatchToProps = (dispath) =>{
//     return {
//         increment : () => dispath({type : 'increment'}),
//         decrement : () => dispath({type : 'decrement'})
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter)