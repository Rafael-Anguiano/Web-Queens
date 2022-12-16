// Chess board
import Row from "./row";
import Solution from "./solution";

function Board({size}) {
    size = parseInt(size);
    const alphabetASCII = Array.from(Array(size)).map((e, i) => i + 65);
    const alphabet = alphabetASCII.map((x) => ` ${String.fromCharCode(x)}`)
    alphabet.unshift("//");
    alphabet.push("//");
    return (
        <div className="board">
            <Row numbers={alphabet} rowNumber={0} isAlphabet={true}/>
            <Solution size={size}/>
            <Row numbers={alphabet} rowNumber={0} isAlphabet={true}/>
        </div>
    )
}

export default Board