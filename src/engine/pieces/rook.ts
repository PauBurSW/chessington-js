import Piece from './piece';
import Player from '../player';
import Board from '../board';
import GameSettings from '../gameSettings';
import Square from '../square';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const availableMoves:Array<Square> = new Array(0);
        const currentSquare = board.findPiece(this);
        
        for (let i = 0; i < GameSettings.BOARD_SIZE; i++) { 
            if (i != currentSquare.col) {
                availableMoves.push(Square.at(currentSquare.row, i));
            }
            if (i != currentSquare.row) {
                availableMoves.push(Square.at(i, currentSquare.col));
            }
        }

        return availableMoves;
    }
}
