class Dice {

    /**
     * Constructs a single die with a roll value
     * @param min
     * @param max
     * @param rollValue
     */
    constructor(min, max, rollValue) {
        this.min = 1;
        this.max = 6;
        this.rollValue = rollValue;
    }

    /**
     * Gives a single die a value, as if it were rolled.
     */
    rollDice() {
        this.rollValue = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        return this.rollValue;
    }

}

class Hand {

    /**
     * Constructs a hand of 5 die with the result of a roll
     * @param hand
     * @param d1
     * @param d2
     * @param d3
     * @param d4
     * @param d5
     * @param scoreResult
     */
    constructor(hand, d1, d2, d3, d4, d5, scoreResult) {
        this.d1 = new Dice();
        this.d2 = new Dice();
        this.d3 = new Dice();
        this.d4 = new Dice();
        this.d5 = new Dice();
        this.hand = [];
        this.scoreResult = [];
    }

    /**
     * Rolls a players hand, which consists of 5 die and stores the
     * values back to the object.
     */
    roll() {
        this.hand = [
            this.d1.rollDice(),
            this.d2.rollDice(),
            this.d3.rollDice(),
            this.d4.rollDice(),
            this.d5.rollDice()
        ];
        //$.styles.roll();

        return this.hand;
    }

    /**
     * Based on the values in the players hand, a scoring result
     * will take place and return all the possible kinds of scoring
     * results.
     */
    scoringResults() {
        var array_elements = this.hand.slice().sort();
        var current = null;
        var count = 0;
        for (var i = 0; i < array_elements.length; i++) {
            if (array_elements[i] != current) {
                if (count > 1) {
                    this.scoreResult.push(count);
                }
                current = array_elements[i];
                count = 1;
            }
            else {
                count++;
            }
        }
        if (count > 1) {
            this.scoreResult.push(count);
        }
        this.scoreResult.sort(function (a, b) { return b - a });
    }

    /**
     * Takes the scoring result possibilites, which are sorted from
     * largest to smallest, and returns an integer to be appended
     * as the score.
     */
    calculateScore() {
        this.scoringResults();
        var result = this.scoreResult[0];
        switch (result) {
            case 5:
                return 50;
            case 4:
                return 40;
            case 3:
                return 30;
            case 2:
                return 20;
            default:
                return 0;
        }
    }
}