(function ($) {

    $.styles = $.extend($.styles || {}, {

        /**
         * Displays the start menu where user is to enter their names.
         */
        startMenu: function () {
            $('#desktop-content').hide();
            $('#player-move').hide();
            $('#score-data').hide();

            $('header').css('width', '100%');

            $('#desktop-panel').css('position', 'inherit');
            $('#desktop-panel').css('width', '100%');

            $('header').css('background-color', 'rgba(0,0,0,0)');
            $('#new-form').css('background-color', 'rgba(0,0,0,0)');
            $('#desktop-panel').css('background-color', 'rgba(0,0,0,0)');
            $('footer').css('background-color', 'rgba(0,0,0,0)');

            $('#container').css('background-color', 'rgba(0,0,0,0.5)');
            $('#container').css('justify-content', 'center');
            $('#container').css('height', '100%');

            $('body').css('height', '100%');

            $('footer').css('width', '100%');

            $('#menu-btn').css('display', 'none');
            $('#play-again').css('display', 'none');

            $('form').css('display', '');

            $('#hidden-content').hide();
        },

        /**
         * Removes the start menu and adds the board and initial scores.
         */
        drawBoard: function () {
            $('#desktop-content').show();
            $('#player-move').show();
            $('#score-data').show();

            $('header').css('width', '');

            $('#desktop-panel').css('position', '');
            $('#desktop-panel').css('width', '');

            $('header').css('background-color', '');
            $('#new-form').css('background-color', '');
            $('#desktop-panel').css('background-color', '');
            $('footer').css('background-color', '');

            $('#container').css('background-color', '');

            $('#container').css('justify-content', '');
            $('#container').css('height', '');

            $('body').css('height', '');

            $('footer').css('width', '');

            $('#menu-btn').css('display', '');

            $('#new-game-form').css('display', 'none');

            $('#p-move').css('display', '');

            $('.dice').css('background', '');
            $('.dice').css('background-size', '');
            $('.dice').css('height', '');
            $('.dice').css('width', '');
        },

        /**
         * Updates the screen with player names and scores
         */
        redrawScreen: function (game) {
            $('#p1-score').text(game.player1.playerScore);
            $('#p1-s-name').text(game.player1.playerName + "'s score:");

            $('#p2-score').text(game.player2.playerScore);
            $('#p2-s-name').text(game.player2.playerName + "'s score:");

            $('#p-move').text("it's " + game.currentPlayer.playerName + "'s turn!");
        },

        endScreen: function (game) {
            $('#p1-score').text(game.player1.playerScore);
            $('#p1-s-name').text(game.player1.playerName + "'s score:");

            $('#p2-score').text(game.player2.playerScore);
            $('#p2-s-name').text(game.player2.playerName + "'s score:");

            $('#p-move').css('display', 'none');

            if (game.getWinner() == undefined) {
                $('#win-message').text("The game has ended in a tie!");
            } else {
                $('#win-message').text(game.getWinner().playerName + " has won the game!");
            }

            $('#hidden-content').show();

            $('#desktop-content').hide();
            $('#play-again').css('display', '');

            $('#replay-btn').css('display', '');
            $('#replay-btn').css('order', '100');
        },

        /**
         * Enables the animation to roll all dice on the screen
         */
        roll: function () {
            $('.dice').css('background', 'url("assets/imgs/dice.gif") no-repeat');
            $('.dice').css('background-size', 'contain');
        },

        /**
         * Displays the approriate dice based on roll values
         * @param rollValues (array)
         */
        displayRoll: function (rollValues) {
            for (var i = 0; i < rollValues.length; i++) {
                var $child = $(".dice:nth-child(" + (i + 1) + ")");
                var image = "url(\"assets/imgs/flat"+ rollValues[i] +".png\") no-repeat"
                $child.css('background', image);
            }

            $('.dice').css('background-size', '');
            $('.dice').css('height', '');
            $('.dice').css('width', '');
        }
    });

})(jQuery);