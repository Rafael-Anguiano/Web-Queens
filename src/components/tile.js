
function Tile({number, bgColor="light", fgColor="dark"}) {
    return (
        <div className={`col tile bg-${bgColor}`}>
            <p className={`text-${fgColor} text-center`}>{number}</p>
        </div>
    )
}

export default Tile