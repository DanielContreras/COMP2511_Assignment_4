/**
 * Player class that contains pertinent data
 */
class Player {

    constructor(playerName, playerScore = 0, wins = 0, handOfDice, turn = 0) {
        this.playerName = playerName;
        this.playerScore = playerScore;
        this.wins = wins;
        this.handOfDice = new Hand();
        this.turn = turn;
    }

    /**
     * Appends user score
     */
    appendScore() {
        this.playerScore += this.handOfDice.calculateScore();
    }


}