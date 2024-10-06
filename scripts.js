const gameInfo = {
    pong: {
        info: "Pong (1972)\nPlatform: Arcade, then many home consoles\nDescription: One of the earliest arcade video games. It simulates table tennis with two paddles and a ball. It features simple, two-color graphics that could be interpreted as 1-bit (black and white).",
        impact: "Pong's success helped establish the video game industry. It was the first commercially successful video game and paved the way for the golden age of arcade video games. Its simple yet addictive gameplay influenced countless future games."
    },
    tetris: {
        info: "Tetris (1984)\nPlatform: Early versions for Electronika 60 (Soviet computer), and Game Boy\nDescription: Though later versions were more colorful, early Tetris versions used simple blocks and minimalist black-and-white graphics, especially on handhelds like the Game Boy.",
        impact: "Tetris became one of the most popular and recognizable video games of all time. It demonstrated that puzzle games could be engaging and addictive, influencing the entire genre. Its success on the Game Boy also helped popularize handheld gaming."
    },
    spacewar: {
        info: "Spacewar! (1962)\nPlatform: PDP-1 (and other early mainframes)\nDescription: An early space combat game with black-and-white vector graphics. It featured two ships shooting at each other around a gravity well.",
        impact: "Spacewar! is considered one of the first video games. It inspired many early arcade games and helped establish space combat as a popular video game genre. Its creation at MIT also exemplified the potential for computers as entertainment devices."
    },
    snake: {
        info: "Snake (Late 1970s - 1980s)\nPlatform: Early mobile phones, arcade systems\nDescription: The classic 'Snake' game, which gained popularity later on mobile phones, originally featured very simple graphics, usually black-and-white. The goal was to grow the snake by eating dots without crashing into the walls or itself.",
        impact: "Snake became incredibly popular on early mobile phones, introducing many people to mobile gaming. Its simple gameplay and minimal graphics requirements made it ideal for limited hardware, influencing future mobile game design."
    },
    asteroids: {
        info: "Asteroids (1979)\nPlatform: Arcade\nDescription: A vector-based arcade game where players control a ship that destroys asteroids while avoiding collisions. Its graphics are monochromatic, reminiscent of 1-bit rendering.",
        impact: "Asteroids was one of the most popular and influential games of the golden age of arcade games. It popularized vector graphics in video games and its physics-based gameplay influenced many future space-themed games."
    },
    game_watch: {
        info: "Game & Watch Games (1980s)\nPlatform: Nintendo's Game & Watch handhelds\nDescription: These handheld electronic games used simple, monochrome LCD screens. Titles like Ball, Fire, and Parachute featured simplistic, one-color visuals on the LCD screen.",
        impact: "Game & Watch series was Nintendo's first handheld gaming success, paving the way for the Game Boy and future portable consoles. It popularized the concept of portable electronic gaming and influenced the design of many future handheld devices."
    },
    galaxian: {
        info: "Galaxian (1979)\nPlatform: Arcade\nDescription: Though slightly more advanced than earlier titles, Galaxian featured simple black backgrounds with white or single-color sprites representing enemy ships.",
        impact: "Galaxian improved upon the Space Invaders formula with more complex enemy movements and colorful graphics. It helped evolve the shoot 'em up genre and influenced many future space-themed games."
    },
    tennis: {
        info: "Tennis for Two (1958)\nPlatform: Oscilloscope\nDescription: An early electronic game simulating tennis on an oscilloscope screen, using two simple lines for paddles and a dot for the ball. This can be considered one of the first examples of a '1-bit' graphical interface.",
        impact: "Tennis for Two is one of the earliest known video games. Created at a national laboratory, it demonstrated the potential for interactive electronic entertainment. It predated the commercial video game industry by over a decade and influenced early game developers."
    }
};

function launchGame(game) {
    const gameFrame = document.getElementById('game-frame');
    const gameContainer = document.getElementById('game-container');
    const gameInfoPanel = document.getElementById('game-info');
    const gameImpactPanel = document.getElementById('game-impact');

    let gameUrl = '';

    switch (game) {
        case 'pong':
            gameUrl = 'pong.html';
            break;
        case 'tetris':
            gameUrl = 'tetris.html';
            break;
        case 'spacewar':
            gameUrl = 'spacewar.html';
            break;
        case 'snake':
            gameUrl = 'snake.html';
            break;
        case 'asteroids':
            gameUrl = 'asteroids.html';
            break;
        case 'game_watch':
            gameUrl = 'game_watch.html';
            break;
        case 'galaxian':
            gameUrl = 'galaxian.html';
            break;
        case 'tennis':
            gameUrl = 'tennis.html';
            break;
        default:
            gameUrl = '';
    }

    if (gameUrl) {
        gameFrame.src = gameUrl;
        gameContainer.style.display = 'flex';
        gameInfoPanel.textContent = gameInfo[game].info;
        gameImpactPanel.textContent = gameInfo[game].impact;
    }
}