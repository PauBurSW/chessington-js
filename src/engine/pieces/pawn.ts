import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const availableMoves:Array<Square> = new Array(0);
        const currentSquare = board.findPiece(this);
        if (this.player == Player.WHITE)
            availableMoves.push(Square.at(currentSquare.row + 1, currentSquare.col));
        if (this.player == Player.BLACK)
            availableMoves.push(Square.at(currentSquare.row - 1, currentSquare.col));
        return availableMoves;
    }
}
