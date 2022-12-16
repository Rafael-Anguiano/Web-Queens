
function Tile({number, color=false, rowNumber, index, size}) {
    let bgColor
    let fgColor
    if (rowNumber % 2 === 0) {
        color = !color
    }
    if(number === 'Q') {
        color = "set2"
    }
    if(index === 0 || index === size+1){
        color = false
    }
    switch(color){
        case true:
            bgColor = "dark"
            fgColor = "light"
            break;
        case "set2":
            bgColor = "danger  fw-bold"
            fgColor = "light"
            break;
        default:
            bgColor = "light"
            fgColor = "dark"
    }
    return (
        <div className={`tile col tile bg-${bgColor} border p-0`}>
            <p className={`text-${fgColor} bold text-center m-2`}>{number}</p>
        </div>
    )
}

export default Tile