
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
        <div className={`tile col tile bg-${bgColor} border p-0 d-flex align-items-center justify-content-center text-center`} style={{maxWidth: "3rem", height: "3rem", width: "3rem"}}>
            <p className={`text-${fgColor} bold m-0`} >{number}</p>
        </div>
    )
}

export default Tile