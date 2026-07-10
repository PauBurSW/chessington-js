import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Piece {
    public player: Player;

    public constructor(player: Player) {
        this.player = player;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    protected isInBounds(row:number, col:number) {
        if (row >= GameSettings.BOARD_SIZE)
            return false;
        if (row < 0)
            return false;
        if (col >= GameSettings.BOARD_SIZE)
            return false;
        if (col < 0)
            return false;
        return true;
    }
}
