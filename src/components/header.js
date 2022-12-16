import { useState } from "react"


const Header = ({setBoardsize, currentValue}) => {
    let [value, setValue] = useState({currentValue})
    const handleSubmit = (e) => {
        if(value.target.value === 2 || value.target.value === 3){
            alert(`There's no possible Solution for a board of size ${value.target.value}`)
            return false
        }
        e.preventDefault()
        setBoardsize(value.target.value)
    }
    return(
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <h1 class="navbar-brand">
                N-Queens
                </h1>
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input 
                        id="myValue" 
                        aria-label="Number"
                        className="form-control me-2" 
                        placeholder="Number" 
                        type="number" 
                        min={1}
                        max={30}
                        onChange={setValue} 
                        ></input>
                    <button type="submit" className="btn btn-success">Calculate</button>
                </form>
            </div>
        </nav>
    )
}

export default Header