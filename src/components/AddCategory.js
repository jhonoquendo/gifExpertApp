import React, {useState} from 'react'

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState("Hola mundo")

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setinputValue(e.target.value)
    }

    const handleSubmmit = (e) => {
        e.preventDefault();
        console.log("Submit hecho")
    } 

    return (
            <form onSubmit={handleSubmmit}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
    )
}
