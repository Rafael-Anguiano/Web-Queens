import Tile from './tile'

function Row ({numbers, rowNumber, isAlphabet=false, size}) {
    return (
        <div className='container'>
            <div className="row align-items-center">
            {numbers.map((number, index)=>{
                if(isAlphabet){
                    return <Tile number={number} key={index} index={index}/>
                }
                if(index %2 === 0){
                    return <Tile number={number} key={index} color={true} rowNumber={rowNumber} index={index} size={size}/>
                }
                if(index %2 === 1){
                    return <Tile number={number} key={index} color={false} rowNumber={rowNumber} index={index} size={size}/>
                }
                return <></>
            })}
            </div>
        </div>
    )
}

    export default Row;