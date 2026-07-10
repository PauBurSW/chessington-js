import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

type bishopDirections = "UpRight" | "UpLeft" | "DownRight" | "DownLeft";
const bishopMoves: Record<bishopDirections, number[]> = {
    UpRight: [1, 1],
    UpLeft: [1, -1],
    DownRight: [-1, 1],
    DownLeft: [-1, -1]
}

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private addMoves(direction:bishopDirections, availableMoves:Array<Square>, startRow:number, startCol:number) {
        for (let i = 1; this.isInBounds(startRow + i * bishopMoves[direction][0] , startCol + i * bishopMoves[direction][1]); i++)
            availableMoves.push(Square.at(startRow + i * bishopMoves[direction][0], startCol + i * bishopMoves[direction][1]));
    }

    public getAvailableMoves(board: Board) {
        const availableMoves:Array<Square> = new Array();
        const currentSquare = board.findPiece(this);
        this.addMoves('UpRight', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('UpLeft', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('DownRight', availableMoves, currentSquare.row, currentSquare.col);
        this.addMoves('DownLeft', availableMoves, currentSquare.row, currentSquare.col);
        return availableMoves;
    }
}
