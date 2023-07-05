/**
 * Instance of the game that is being played; contains pertinent
 * data to the game, like a player.
 */
class Game {

    /**
     * Constructs a game with 2 players and a winner
     * @param player1
     * @param player2
     * @param currentPlayer
     * @param winner
     */
    constructor(player1, player2, currentPlayer, winner) {
        this.player1 = new Player($('#player1').val());
        this.player2 = new Player($('#player2').val());
        this.currentPlayer = currentPlayer;
        this.winner = null;
    }

    /**
     * Initializes a game by setting a status and current player
     */
    initializeGame() {
        this.currentPlayer = this.player1;
    }

    /**
     * Performs a roll for the current player, scores the result, and
     * changes the current player.
     */
    performTurn() {
        this.currentPlayer.handOfDice.roll();
        this.currentPlayer.turn += 1;
        this.currentPlayer.appendScore();
    }

    /**
     * Ends the turn by changing the current player
     */
    endTurn() {
        if (!(this.player1.turn == 1 && this.player2.turn == 1)) {
            this.currentPlayer === this.player1 ? this.currentPlayer = this.player2 : this.currentPlayer = this.player1;
        }
    }

    /**
     * Determines who the winner was
     */
    getWinner() {
        return this.winner;
    }

    /**
     * Sets the winner flag
     */
    setWinner() {
        if (this.player1.wins == 0 && this.player2.wins == 0) {
            if (this.player1.playerScore > this.player2.playerScore) {
                this.player1.wins++;
                this.winner = this.player1;
                return this.player1
            } else if (this.player2.playerScore > this.player1.playerScore) {
                this.player2.wins++;
                this.winner = this.player2;
                return this.player2
            } else {
                this.winner = undefined;
                return false;
            }
        }
    }

    /**
     * Ends the game, and prompts the user if they'd like to
     * return to the main menu
     * @param game
     */
    endGame(game) {
        var winner = this.setWinner();
        $.styles.endScreen(game);
    }

    /**
     * Checks if the game is over
     */
    isGameOver() {
        if (this.player1.turn == 1 && this.player2.turn == 1)
        {
            return true;
        }
        return false;
    }

}