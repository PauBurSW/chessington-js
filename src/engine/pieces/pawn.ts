import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    private static SHORTSTEP:number = 1;
    private static LONGSTEP:number = 2;
    
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const availableMoves:Array<Square> = new Array();
        const currentSquare = board.findPiece(this);
        if (this.player == Player.WHITE) {
            availableMoves.push(Square.at(currentSquare.row + Pawn.SHORTSTEP, currentSquare.col));
            if (!board.movedPieces.includes(this)) {
                availableMoves.push(Square.at(currentSquare.row + Pawn.LONGSTEP, currentSquare.col));
            }
        }
        if (this.player == Player.BLACK) {
            availableMoves.push(Square.at(currentSquare.row - Pawn.SHORTSTEP, currentSquare.col));
            if (!board.movedPieces.includes(this)) {
                availableMoves.push(Square.at(currentSquare.row - Pawn.LONGSTEP, currentSquare.col));
            }
        }
        return availableMoves;
    }
}
