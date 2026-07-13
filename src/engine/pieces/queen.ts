import Piece from './piece';
import Player from '../player';
import Board from '../board';
import GameSettings from '../gameSettings';
import Square from '../square';

type queenDirections = "UpRight" | "Up" | "UpLeft" | "DownRight" | "Down" | "DownLeft" | "Right" | "Left";
const queenMoves: Record<queenDirections, number[]> = {
    UpRight: [1, 1],
    Up: [1, 0],
    UpLeft: [1, -1],
    DownRight: [-1, 1],
    Down: [-1, 0],
    DownLeft: [-1, -1],
    Right: [0, 1],
    Left: [0, -1]
}

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private addMoves(direction:queenDirections, availableMoves:Array<Square>, startRow:number, startCol:number, board:Board) {
        for (let i = 1; this.isInBounds(startRow + i * queenMoves[direction][0] , startCol + i * queenMoves[direction][1]) &&
            !board.getPiece(Square.at(startRow + i * queenMoves[direction][0] , startCol + i * queenMoves[direction][1])); i++)
            availableMoves.push(Square.at(startRow + i * queenMoves[direction][0], startCol + i * queenMoves[direction][1]));
    }
    public getAvailableMoves(board: Board) {
        const availableMoves:Array<Square> = new Array();
        const currentSquare = board.findPiece(this);
        this.addMoves('Up', availableMoves, currentSquare.row, currentSquare.col, board);
        this.addMoves('Down', availableMoves, currentSquare.row, currentSquare.col, board);
        this.addMoves('Right', availableMoves, currentSquare.row, currentSquare.col, board);
        this.addMoves('Left', availableMoves, currentSquare.row, currentSquare.col, board);
        this.addMoves('UpRight', availableMoves, currentSquare.row, currentSquare.col, board);
        this.addMoves('UpLeft', availableMoves, currentSquare.row, currentSquare.col, board);
        this.addMoves('DownRight', availableMoves, currentSquare.row, currentSquare.col, board);
        this.addMoves('DownLeft', availableMoves, currentSquare.row, currentSquare.col, board);
        return availableMoves;
    }
}
