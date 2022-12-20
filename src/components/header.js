import { useState } from "react"
import { FaChessQueen } from "react-icons/fa"


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
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <h1 className="navbar-brand m-0">
                    <span><FaChessQueen className="me-2"/>N-Queens Problem</span>
                </h1>
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input 
                        id="myValue" 
                        aria-label="Number"
                        className="form-control me-2"
                        placeholder={`Size: ${currentValue}`} 
                        type="number" 
                        min={1}
                        max={45}
                        onChange={setValue} 
                        ></input>
                    <button type="submit" className="btn btn-success">Calculate</button>
                </form>
            </div>
        </nav>
    )
}

export default Header