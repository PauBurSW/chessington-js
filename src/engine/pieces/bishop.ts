import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';
import King from './king';

type bishopDirections = "UpRight" | "UpLeft" | "DownRight" | "DownLeft";
type dimensions = {
    row:number;
    col:number;
}
const bishopMoves: Record<bishopDirections, dimensions> = {
    UpRight: {row:1, col:1},
    UpLeft: {row:1, col:-1},
    DownRight: {row:-1, col:1},
    DownLeft:{row:-1, col:-1}
}

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private addMoves(direction:bishopDirections, startSquare:Square, board:Board) {
        const availableMoves:Array<Square> = new Array();
        for (let i = 1; this.isInBounds(startSquare.row + i * bishopMoves[direction].row, startSquare.col + i * bishopMoves[direction].col); i++) {
                if (board.getPiece(Square.at(startSquare.row + i * bishopMoves[direction].row , startSquare.col + i * bishopMoves[direction].col))) {
                    if (board.getPiece(Square.at(startSquare.row + i * bishopMoves[direction].row , startSquare.col + i * bishopMoves[direction].col))?.player != this.player
                        && !(board.getPiece(Square.at(startSquare.row + i * bishopMoves[direction].row , startSquare.col + i * bishopMoves[direction].col)) instanceof King))
                        availableMoves.push(Square.at(startSquare.row + i * bishopMoves[direction].row, startSquare.col + i * bishopMoves[direction].col));
                    break;
                }
                availableMoves.push(Square.at(startSquare.row + i * bishopMoves[direction].row, startSquare.col + i * bishopMoves[direction].col));
            }
        return availableMoves;
    }

    public getAvailableMoves(board: Board) {
        const availableMoves:Array<Square> = new Array();
        const currentSquare = board.findPiece(this);
        const availableMoves1:Array<Square> = availableMoves.concat(this.addMoves('UpRight', currentSquare, board));
        const availableMoves2:Array<Square> = availableMoves1.concat(this.addMoves('UpLeft', currentSquare, board));
        const availableMoves3:Array<Square> = availableMoves2.concat(this.addMoves('DownRight', currentSquare, board));
        const availableMoves4:Array<Square> = availableMoves3.concat(this.addMoves('DownLeft', currentSquare, board));
        return availableMoves4;
    }
}
