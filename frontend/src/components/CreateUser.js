import { useState } from "react"

export default function CreateUser() {
    const [textName, setTextName] = useState('')
    const [textPassword, setTextPassword] = useState('')
    function handleTextName(e) {
        setTextName(e.target.value)
    }
    function handleTextPasswor(e) {
        setTextPassword(e.target.value)
    }
    function handleClickForm(e) {
        e.preventDefault()

        fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: textName,
                password: textPassword
            })
        }).then(() => {
            setTextName('')
            setTextPassword('')
        })
    }
    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" onChange={handleTextName} value={textName}/>
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" onChange={handleTextPasswor} value={textPassword}/>
            <input type="submit" value="Create User" onClick={handleClickForm} />
        </form>
    )
}