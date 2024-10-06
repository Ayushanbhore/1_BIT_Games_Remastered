function launchGame(game) {
    const gameFrame = document.getElementById('game-frame');
    const gameContainer = document.getElementById('game-container');

    let gameUrl = '';

    switch (game) {
        case 'pong':
            gameUrl = 'pong.html'; // Add the URL to the Pong game
            break;
        case 'tetris':
            gameUrl = 'tetris.html'; // Add the URL to the Tetris game
            break;
        case 'spacewar':
            gameUrl = 'path_to_spacewar_game.html'; // Add the URL to the Spacewar! game
            break;
        case 'snake':
            gameUrl = 'path_to_snake_game.html'; // Add the URL to the Snake game
            break;
        case 'asteroids':
            gameUrl = 'path_to_asteroids_game.html'; // Add the URL to the Asteroids game
            break;
        case 'game_watch':
            gameUrl = 'path_to_game_watch_game.html'; // Add the URL to Game & Watch
            break;
        case 'galaxian':
            gameUrl = 'path_to_galaxian_game.html'; // Add the URL to the Galaxian game
            break;
        case 'tennis':
            gameUrl = 'path_to_tennis_game.html'; // Add the URL to Tennis for Two
            break;
        default:
            gameUrl = '';
    }

    if (gameUrl) {
        gameFrame.src = gameUrl;
        gameContainer.style.display = 'block';
    }
}
