1. Tech Stack Used

a) React.js – Frontend library for building UI components

b) CSS3 – For styling and responsiveness

c) JavaScript (ES6) – Logic and interactivity

d) React Icons – For adding icons easily

e) Node.js + npm – For package management and running the React app

2. Project Setup Steps

To run the project locally:

a)Clone the repository
git clone https://github.com/your-username/newproject.git

b) Navigate to project directory
cd newproject

c)  Install dependencies
npm install

d) Start the development server
npm start

3)Component Structure

src/
 components/
  MotivationSection.jsx     → main UI section 
  ChatPreviewSection.jsx
  RelationshipSection.jsx
 styles/
  MotivationSection.css     → handles layout, colors, and animations
  ChatPreviewSection.css
  RelationshipSection.css
assets/
   bot-icon.png              → chatbot icon shown above the red box
App.js                      → main app file that imports the component

4 Responsiveness & Animations

Responsiveness:

Implemented using CSS Flexbox and media queries.

On smaller screens (like iPhones), cards stack vertically and resize automatically.

The bot icon adjusts position and size so it doesn’t overlap with text.

Animations:

The main card uses a floating animation (@keyframes float) to give a smooth up-and-down motion.

The button includes subtle hover animations for better interactivity.

 Preview

 Author

Deepak Kandpal
Frontend Developer | React Enthusiast
kandpald103@gmail.com

 LinkedIn Profile-https://www.linkedin.com/in/deepak-kandpal-b54489317