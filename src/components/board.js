// Chess board
import Row from "./row";
import Solution from "./solution";

function Board({size}) {
    const alphabetASCII = Array.from(Array(size)).map((e, i) => i + 65);
    const alphabet = alphabetASCII.map((x) => ` ${String.fromCharCode(x)}`);

    return (
        <div className="board">
            <Row numbers={alphabet}/>
            <Solution size={size} />
        </div>
    )
}

export default Board