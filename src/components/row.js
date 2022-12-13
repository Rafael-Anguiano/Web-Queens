import Tile from './tile'

function Row ({numbers, color}) {
    let bgColor = "light"
    let fgColor = "dark"
    switch(color){
        case "set1":
            bgColor = "dark"
            fgColor = "light"
            break;
        case "set2":
            bgColor = "danger"
            fgColor = "light"
            break;
    }
    return (
        <div className='container'>
            <div className="row align-items-center">
            {numbers.map(number=>(<Tile number={number} bgColor={bgColor} fgColor={fgColor}/>))}
            </div>
        </div>
    )
}

    export default Row;