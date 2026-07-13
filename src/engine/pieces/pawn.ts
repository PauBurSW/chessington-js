import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

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
            const isNextOccupied = currentSquare.row + Pawn.SHORTSTEP < GameSettings.BOARD_SIZE? !!board.getPiece(Square.at(currentSquare.row + Pawn.SHORTSTEP, currentSquare.col)) : true;
            if (currentSquare.row + Pawn.SHORTSTEP < GameSettings.BOARD_SIZE && !isNextOccupied) {
                availableMoves.push(Square.at(currentSquare.row + Pawn.SHORTSTEP, currentSquare.col));
                const isNextTwoOccupied = currentSquare.row + Pawn.LONGSTEP < GameSettings.BOARD_SIZE? !!board.getPiece(Square.at(currentSquare.row + Pawn.LONGSTEP, currentSquare.col)) : true;
                if (!board.movedPieces.includes(this) && !isNextTwoOccupied) {
                    availableMoves.push(Square.at(currentSquare.row + Pawn.LONGSTEP, currentSquare.col));
                }
            }
        }
        if (this.player == Player.BLACK) {
            const isNextOccupied = currentSquare.row - Pawn.SHORTSTEP >= 0? !!board.getPiece(Square.at(currentSquare.row - Pawn.SHORTSTEP, currentSquare.col)) : true;
            if (!isNextOccupied) {
                availableMoves.push(Square.at(currentSquare.row - Pawn.SHORTSTEP, currentSquare.col));
                const isNextTwoOccupied = currentSquare.row - Pawn.LONGSTEP >= 0? !!board.getPiece(Square.at(currentSquare.row - Pawn.LONGSTEP, currentSquare.col)) : true;
                if (!board.movedPieces.includes(this) && !isNextTwoOccupied) {
                    availableMoves.push(Square.at(currentSquare.row - Pawn.LONGSTEP, currentSquare.col));
                }
            }
        }
        return availableMoves;
    }
}
