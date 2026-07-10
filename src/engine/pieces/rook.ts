import Piece from './piece';
import Player from '../player';
import Board from '../board';
import GameSettings from '../gameSettings';
import Square from '../square';

type rookDirections = "Up" | "Down" | "Right" | "Left";
const rookMoves: Record<rookDirections, number[]> = {
    Up: [1, 0],
    Down: [-1, 0],
    Right: [0, 1],
    Left: [0, -1]
}

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private addMoves(direction:rookDirections, availableMoves:Array<Square>, startRow:number, startCol:number) {
        for (let i = 1; this.isInBounds(startRow + i * rookMoves[direction][0] , startCol + i * rookMoves[direction][1]); i++)
            availableMoves.push(Square.at(startRow + i * rookMoves[direction][0], startCol + i * rookMoves[direction][1]));
    }

    public getAvailableMoves(board: Board) {
        const availableMoves:Array<Square> = new Array();
        const currentSquare = board.findPiece(this);
        this.addMoves('Up', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('Down', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('Right', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('Left', availableMoves, currentSquare.row, currentSquare.col);
        return availableMoves;
    }
}
