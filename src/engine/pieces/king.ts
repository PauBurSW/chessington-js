import Piece from './piece';
import Player from '../player';
import Board from '../board';
import GameSettings from '../gameSettings';
import Square from '../square';

type kingDirections = "UpRight" | "Up" | "UpLeft" | "DownRight" | "Down" | "DownLeft" | "Right" | "Left";
const kingMoves: Record<kingDirections, number[]> = {
    UpRight: [1, 1],
    Up: [1, 0],
    UpLeft: [1, -1],
    DownRight: [-1, 1],
    Down: [-1, 0],
    DownLeft: [-1, -1],
    Right: [0, 1],
    Left: [0, -1]
}

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private addMoves(direction:kingDirections, availableMoves:Array<Square>, row:number, col:number) {
        if (this.isInBounds(row, col))
            availableMoves.push(Square.at(row + kingMoves[direction][0], col + kingMoves[direction][1]));
    }

    public getAvailableMoves(board: Board) {
        const availableMoves:Array<Square> = new Array();
        const currentSquare = board.findPiece(this);
        this.addMoves('UpRight', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('UpLeft', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('DownRight', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('DownLeft', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('Up', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('Left', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('Down', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('Right', availableMoves, currentSquare.row, currentSquare.col);
        return availableMoves;
    }
}
