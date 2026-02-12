# 🎯 Number Guessing Game

An interactive Number Guessing Game built with HTML, CSS, and JavaScript. Test your intuition and guess the secret number with helpful hints along the way!

## ✨ Features

- 🎲 **Random Number Generation** - Each game generates a new secret number
- 💡 **Smart Hints** - Get "Higher" or "Lower" feedback after each guess
- 🎮 **Interactive Gameplay** - Smooth and engaging user experience
- 🔄 **Play Again** - Restart the game anytime with a new number
- 📱 **Responsive Design** - Play on any device

## 🛠️ Built With

- **HTML5** - Game structure and layout
- **CSS3** - Styling and visual feedback
- **JavaScript** - Game logic and interactivity

## 📂 Project Structure

```
number-guessing-game/
│
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Game logic
└── README.md           # Project documentation
```

## 🎮 How to Play

1. The computer generates a random secret number (e.g., between 1-100)
2. Enter your guess in the input field
3. Click "Submit" or press Enter
4. Receive a hint:
   - 📈 "Too low! Try a higher number"
   - 📉 "Too high! Try a lower number"
   - 🎉 "Correct! You guessed it!"
5. Keep guessing until you find the secret number
6. Click "Play Again" to start a new game

## 💻 Game Logic

```javascript
// Core game logic
let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess = parseInt(userInput.value);

if (guess < secretNumber) {
    message.textContent = "Too low! Try a higher number 📈";
} else if (guess > secretNumber) {
    message.textContent = "Too high! Try a lower number 📉";
} else {
    message.textContent = "🎉 Correct! You guessed it!";
}
```

### Game Flow

```
Start Game
    ↓
Generate Random Number
    ↓
Player Makes Guess
    ↓
Check Guess ──→ Too Low? → Show "Higher" hint
    ↓              ↓
    ↓          Try Again
    ↓              ↑
Too High? ─────────┘
    ↓
Correct! 🎉
    ↓
Play Again?
```

## 🎯 Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, etc.)
- A code editor (VS Code, Sublime Text, etc.)

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/number-guessing-game.git
```

2. Navigate to the project directory
```bash
cd number-guessing-game
```

3. Open `index.html` in your browser
```bash
# On Windows
start index.html

# On Mac
open index.html

# On Linux
xdg-open index.html
```

Or simply drag and drop the `index.html` file into your browser!

## 🎨 Customization

Personalize your game:
- **Change the range** - Modify min/max values (e.g., 1-1000 for harder difficulty)
- **Add animations** - Celebrate wins with confetti or particle effects
- **Custom themes** - Dark mode, colorful backgrounds
- **Sound effects** - Add audio feedback for guesses
- **Visual feedback** - Change colors based on how close the guess is

## 📚 What I Learned

This project helped me understand:
- ✅ Conditional logic (if/else statements)
- ✅ User input validation
- ✅ Random number generation
- ✅ Game state management
- ✅ DOM manipulation and event handling
- ✅ Providing user feedback dynamically

## 🔮 Future Enhancements

Ideas to level up the game:
- 🎚️ **Difficulty Levels** - Easy (1-50), Medium (1-100), Hard (1-1000)
- 🔢 **Attempt Counter** - Track how many guesses it took
- ⏱️ **Timer** - Add a time challenge
- 🏆 **Leaderboard** - Save best scores (fewest guesses)
- 📊 **Statistics** - Track games played, win rate, average guesses
- 💾 **Local Storage** - Save game progress and stats
- 🎨 **Visual Proximity** - Change background color based on how close you are
- 🔥 **Streak Counter** - Track consecutive wins
- 🎪 **Multiplayer Mode** - Take turns guessing

## 🧠 Game Strategy Tips

For players:
- Start with the middle number (50 if range is 1-100)
- Use binary search strategy for optimal guessing
- Pay attention to the hints!
- The minimum guesses needed is log₂(range)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Partha Biswas**

- GitHub: [@Parttha06](https://github.com/Parttha06)
- LinkedIn: [Partha Biswas](www.linkedin.com/in/partha-biswass)


## 🙏 Acknowledgments

- Classic number guessing game concept
- Built as part of my JavaScript learning journey
- Great for understanding basic game logic and user interaction

## ⭐ Show Your Support

Give a ⭐️ if you enjoyed playing this game!

---

<div align="center">
Made with ❤️ and a dash of mystery by Partha Biswas
</div>
