document.getElementById('gameForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const genre = document.getElementById('genre').value;
    const difficulty = document.getElementById('difficulty').value;

    let recommendation = '';

    if (genre === 'action') {
        if (difficulty === 'easy') {
            recommendation = 'Fortnite - An easy action-packed game for beginners.';
        } else if (difficulty === 'medium') {
            recommendation = 'Overwatch - A balanced action game with moderate difficulty.';
        } else if (difficulty === 'hard') {
            recommendation = 'Dark Souls - A challenging action game for hardcore players.';
        }
    } else if (genre === 'adventure') {
        if (difficulty === 'easy') {
            recommendation = 'The Legend of Zelda: Wind Waker - A fun and easy adventure game.';
        } else if (difficulty === 'medium') {
            recommendation = 'Assassin’s Creed - A moderate challenge with an adventurous spirit.';
        } else if (difficulty === 'hard') {
            recommendation = 'Red Dead Redemption 2 - An immersive and complex adventure.';
        }
    } else if (genre === 'rpg') {
        if (difficulty === 'easy') {
            recommendation = 'Pokemon Sword/Shield - A great entry-level RPG.';
        } else if (difficulty === 'medium') {
            recommendation = 'Final Fantasy XV - A moderately challenging RPG experience.';
        } else if (difficulty === 'hard') {
            recommendation = 'The Witcher 3 - A deep and challenging RPG for veterans.';
        }
    } else if (genre === 'strategy') {
        if (difficulty === 'easy') {
            recommendation = 'Plants vs. Zombies - A simple and fun strategy game.';
        } else if (difficulty === 'medium') {
            recommendation = 'Civilization VI - A moderately challenging strategy game.';
        } else if (difficulty === 'hard') {
            recommendation = 'Starcraft II - A highly competitive strategy game for experts.';
        }
    } else if (genre === 'sports') {
        if (difficulty === 'easy') {
            recommendation = 'Rocket League - Easy to pick up, hard to master.';
        } else if (difficulty === 'medium') {
            recommendation = 'FIFA 22 - A balanced sports game for soccer lovers.';
        } else if (difficulty === 'hard') {
            recommendation = 'Madden NFL 22 - A sports simulation game with complex mechanics.';
        }
    }

    document.getElementById('gameOutput').textContent = recommendation;
    document.getElementById('recommendation').classList.remove('hidden');
});
