import Row from "./row";

const fillBoard = (queens) => {
    const array = [...queens];
    let board = [];
    for(let index = 0; index < queens.size; index++){
        board.push([]);
        for(let index2 = 0; index2 < queens.size; index2++){
            if(index2 !== array[index]){
                board[index].push(0);
                continue;
            }
            board[index].push(1);
        }
    }
    for(let index = 0; index < queens.size; index++){
    }

    return board;
}

/**
 * fillAvailableRows
 * Complexity: O(n)
 * @param {integer} boardSize 
 * @returns {Array}
 */
function fillAvailableRows(boardSize){
    let availableRows = [];
    for(let index = 0; index<boardSize; index++){
        availableRows.push(index);
    }
    return availableRows
}

const validate = (state, row, column, boardSize) => {
    return  ( !state.queens.has(state.availableRows[row]) &&
            !state.positiveDiagonal.has((boardSize-1) - state.availableRows[row] - column) &&
            !state.negativeDiagonal.has(column - state.availableRows[row]) )
}

/**
 * 
 * @param {Object} state 
 * @param {integer} column 
 * @param {integer} boardSize 
 * @returns 
 */
function PlacingQueens( state, column, boardSize ){
    let laps = 0;
    let row = Math.floor(Math.random() * (state.availableRows.length - 0));

    for(row; row < state.availableRows.length; row++){

        if( validate(state, row, column, boardSize) ){

            state.queens.add(state.availableRows[row]);
            state.positiveDiagonal.add((boardSize-1)-state.availableRows[row]-column);
            state.negativeDiagonal.add(column-state.availableRows[row]);
            let [value] = state.availableRows.splice(row,1);

            if(state.queens.size === boardSize) return [true, state.queens]

            var [status, returnedQueens] = PlacingQueens(state, column+1, boardSize)

            if(status) return [status, returnedQueens]

            state.availableRows.splice(row,0, value)
            state.queens.delete(state.availableRows[row]);
            state.positiveDiagonal.delete((boardSize-1)-state.availableRows[row]-column);
            state.negativeDiagonal.delete(column-state.availableRows[row]);
        }

        if(row + 1 === state.availableRows.length && laps < 1){
            row = -1
            laps += 1;
        } 
    }


    return [false, state.queens]
}

/**
 * Solution
 * Starting Function, used for creating variables for the placing queens function
 * @param {int} boardSize 
 * @returns 
 */
function Solution({size}) {
    let availableRows = fillAvailableRows(size);
    let column = 0
    var negativeDiagonal = new Set(); // [ -|n-1|, n-1 ]
    var positiveDiagonal = new Set(); // [ -|n-1|, n-1 ]
    var queens = new Set(); // Max length = n

    const state = {
        availableRows,
        negativeDiagonal,
        positiveDiagonal,
        queens
    }

    let [status, returnedQueens] = PlacingQueens(state, column, size)
    let array = fillBoard(returnedQueens)

    return(
        <>
            <p>{returnedQueens}</p>
            {array.map((row, index) => {
                    if(index % 2 === 0) {
                        return <Row numbers={row} key={index} color="set1"/>
                    }
                    if(index % 2 !== 0){
                        return <Row numbers={row} key={index} color="set2"/>
                    }
                }
            )}
        </>
    )
}

export default Solution