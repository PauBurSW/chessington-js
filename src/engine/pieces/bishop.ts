import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const availableMoves:Array<Square> = new Array(0);
        const currentSquare = board.findPiece(this);
        
        let x:number, y:number;

        x = currentSquare.row + 1;
        y = currentSquare.col + 1;
        while (x < GameSettings.BOARD_SIZE && y < GameSettings.BOARD_SIZE) { 
            availableMoves.push(Square.at(x, y));
            x++;
            y++;
        }
        x = currentSquare.row - 1;
        y = currentSquare.col + 1;
        while (x >= 0 && y < GameSettings.BOARD_SIZE) { 
            availableMoves.push(Square.at(x, y));
            x--;
            y++;
        }
        x = currentSquare.row - 1;
        y = currentSquare.col - 1;
        while (x >= 0 && y >= 0) { 
            availableMoves.push(Square.at(x, y));
            x--;
            y--;
        }
        x = currentSquare.row + 1;
        y = currentSquare.col - 1;
        while (x < GameSettings.BOARD_SIZE && y >= 0) { 
            availableMoves.push(Square.at(x, y));
            x++;
            y--;
        }
        return availableMoves;
    }
}
