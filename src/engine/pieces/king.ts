import Piece from './piece';
import Player from '../player';
import Board from '../board';
import GameSettings from '../gameSettings';
import Square from '../square';

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const relativeMovesRow:number[] = [-1, -1, -1, 0, 0, 1, 1, 1];
        const relativeMovesCol:number[] = [-1, -0, 1, -1, 1, -1, 0, 1];
        
        const availableMoves:Array<Square> = new Array(0);
        const currentSquare = board.findPiece(this);
        
        for (let i = 0; i < 8; i++) { 
            if (currentSquare.col + relativeMovesCol[i] < GameSettings.BOARD_SIZE &&
                currentSquare.col + relativeMovesCol[i] >= 0 &&
                currentSquare.row + relativeMovesRow[i] < GameSettings.BOARD_SIZE &&
                currentSquare.row + relativeMovesRow[i] >= 0) {
                availableMoves.push(Square.at(currentSquare.row + relativeMovesRow[i], currentSquare.col + relativeMovesCol[i]));
            }
        }

        return availableMoves;
    }
}
