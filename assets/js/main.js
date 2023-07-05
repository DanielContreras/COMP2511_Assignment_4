
/**
 * After the DOM is loaded, a start menu is displayed; preventing default 
 */
$(document).ready(function () {
    $.styles.startMenu();
});

(function ($) {

    var game; 

    /**
     * Handles the event from the menu screen; initializes the game
     * and players with respective scores.
     * @param event
     */
    function eventHandler(event) {
        event.preventDefault();
        if (game === undefined) {
            $.styles.drawBoard();
            game = new Game();
            game.initializeGame();
            $.styles.redrawScreen(game);
        }
        //console.log(game);
    }

    /**
     * Returns the user to the start menu, assuming they click yes.
     */
    function menuHandle() {
        if (confirm("Are you sure you wish to start a new game?\nAll data will be lost.")) {
            $.styles.startMenu();
            game = undefined;
        }
        else {
            return;
        }
    }

    /**
     * Performs a roll for the user and updates the proper
     * styles
     * @param event
     */
    function roll(event) {
        event.preventDefault();

        if (!game.currentPlayer.turn >= 1)
        {
            game.performTurn();
            $.styles.displayRoll(game.currentPlayer.handOfDice.hand);
            game.endTurn();
            $.styles.redrawScreen(game);
            setTimeout(function () {
                $.styles.drawBoard();
            }, 4000);
        }

        if (game.isGameOver()) {
            setTimeout(function () {
                game.endGame(game);
            }, 4000);
        }
        
        return;
    }

    /**
     * Returns the user to start menu and erases all current game
     * content
     * @param event
     */
    function replay(event) {
        event.preventDefault();
        $.styles.startMenu();
        game = undefined;
    }

    $(document).on('submit', '#new-game-form', eventHandler);
    $(document).on('click', '#menu-btn', menuHandle);
    $(document).on('submit', '#roll-btn', roll);
    $(document).on('click', '#btn-replay', replay);

})(jQuery);