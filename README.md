# War Card Game

This project implements the classic card game "War" using pure JavaScript with no external dependencies. It was created in response to the requirement: "Create a pure JavaScript application that is essentially the card game War."

## Game Overview

War is a simple card game typically played by two players using a standard deck of 52 playing cards. The objective is to win all the cards.

## Features

1. **Complete War Card Game Implementation**
   - Standard 52-card deck with proper suits and values
   - Player vs. Computer gameplay
   - Card comparison and scoring
   - War scenario handling with random key challenge
   - Game state tracking and end-game detection

2. **Interactive Gameplay**
   - Space bar to flip cards
   - Random key challenge during "war" scenarios
   - Visual card display with suits and values
   - Game status messages and instructions
   - Score tracking for both players

3. **Special War Scenario**
   - When two cards have the same value, a "war" occurs
   - Player must press a randomly assigned key (not space bar) within 1 second
   - Timer countdown for added pressure
   - Winner of the war takes all cards in play

## Implementation Details

This implementation uses:
- Plain HTML for structure
- CSS for styling (embedded in the HTML file)
- Vanilla JavaScript for functionality
- No external libraries, frameworks, or dependencies
- Modern ES6 features for clean, readable code

The game includes:
- Card deck generation and shuffling
- Card dealing and comparison logic
- Event handling for keyboard input
- Timer implementation for war scenarios
- Game state management

## How to Play

1. Simply open the `index.html` file in any modern web browser.
2. No server or build process is required.
3. The game will load and be ready to play immediately.

### Game Rules
1. The deck is divided evenly between the player and computer (26 cards each).
2. Press the SPACE BAR to flip the top card from each deck.
3. The player with the higher card wins the round and takes both cards.
4. If the cards have the same value, a "WAR" scenario occurs:
   - A random key will be displayed on screen
   - You have 1 second to press that key
   - If successful, you win the war and take all cards
   - If you fail (wrong key or too slow), the computer wins the war
5. The game ends when one player has all the cards.

### Controls
- **SPACE BAR**: Flip cards
- **Random Key** (during war): Press the displayed key within 1 second
- **New Game Button**: Start a new game at any time

## Browser Compatibility

This application should work in all modern browsers that support:
- ES6 JavaScript features
- Modern CSS (flexbox, gradients, etc.)
- Keyboard event handling

## License

This project is available for use under the MIT License.