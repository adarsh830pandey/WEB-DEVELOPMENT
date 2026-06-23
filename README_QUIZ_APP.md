# Quiz Application

A modern, interactive quiz application built with React and JavaScript.

## Features

- **Interactive Quiz Interface** - Clean and responsive design
- **Progress Tracking** - Visual progress bar showing quiz completion
- **Instant Feedback** - See correct/incorrect answers immediately
- **Score Calculation** - Track your performance with detailed statistics
- **Restart Functionality** - Take the quiz again with a single click
- **Mobile Responsive** - Works seamlessly on all devices

## Project Structure

```
src/
├── components/
│   ├── Quiz.jsx           # Main quiz component
│   ├── QuizQuestion.jsx   # Question display component
│   └── QuizResults.jsx    # Results screen component
├── data/
│   └── quizData.js        # Quiz questions and answers
├── App.jsx                # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Installation

1. Clone the repository or navigate to the project folder
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

Create an optimized production build:
```bash
npm run build
```

## Customizing Quiz Questions

Edit `src/data/quizData.js` to add your own quiz questions. Each question should have the following structure:

```javascript
{
  question: "Your question here?",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  correctAnswer: 0  // Index of the correct answer (0-3)
}
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations
- **JavaScript ES6+** - Modern JavaScript features

## Features Overview

- ✅ 10 Sample quiz questions
- ✅ Real-time score tracking
- ✅ Progress visualization
- ✅ Answer explanations (visual feedback)
- ✅ Results summary with statistics
- ✅ Fully responsive design
- ✅ Smooth animations and transitions

## License

Open source project
