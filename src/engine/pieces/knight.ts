import Piece from './piece';
import Player from '../player';
import Board from '../board';
import GameSettings from '../gameSettings';
import Square from '../square';

type knightDirections = "ShortUpLeft" | "LongUpLeft" | "LongUpRight" | "ShortUpRight" | "ShortDownRight" | "LongDownRight" | "ShortDownLeft" | "LongDownLeft";
const kingMoves: Record<knightDirections, number[]> = {
    ShortUpLeft: [-1, -2],
    LongUpLeft: [-2, -1],
    ShortUpRight: [-1, 2],
    LongUpRight: [-2, 1],
    ShortDownRight: [1, 2],
    LongDownRight: [2, 1],
    LongDownLeft: [2, -1],
    ShortDownLeft: [1, -2]
}

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private addMoves(direction:knightDirections, availableMoves:Array<Square>, row:number, col:number) {
        if (this.isInBounds(row, col))
            availableMoves.push(Square.at(row + kingMoves[direction][0], col + kingMoves[direction][1]));
    }

    public getAvailableMoves(board: Board) {
        const availableMoves:Array<Square> = new Array();
        const currentSquare = board.findPiece(this);
        this.addMoves('ShortUpRight', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('LongUpRight', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('ShortUpLeft', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('LongUpLeft', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('ShortDownRight', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('LongDownRight', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('ShortDownLeft', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('LongDownLeft', availableMoves, currentSquare.row, currentSquare.col);
        return availableMoves;
    }
}
