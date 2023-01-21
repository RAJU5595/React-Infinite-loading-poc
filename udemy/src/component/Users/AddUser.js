import Card from "../UI/Card"

const AddUser = () => {

    const addUserHandler = event => {
        event.preventDefault()
    }

    return (
        <Card>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/><br/>
                <label htmlFor="age">Age</label>
                <input id="age" type="number"/><br/>
                <button type="submit">Add User</button>
            </form>
        </Card>
    )
}

export default AddUser