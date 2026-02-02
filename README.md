Bulb On/Off Web Project

A simple interactive web project that lets you turn a bulb on and off using a button. Perfect for learning HTML, CSS, and JavaScript basics.

🔹 Features

Toggle the bulb on/off with a single button click.

Smooth image transition for a better user experience.

Clean and simple UI.

🛠️ Technologies Used

HTML – Page structure

CSS – Styling and layout

JavaScript – Button functionality

📁 File Structure
project-folder/
│
├── src/
│   ├── assets/
│   │   ├── bulb-turn-off.png
│   │   └── bulb-on-light.png
│   ├── script.js
│   └── style.css
│
└── index.html

⚙️ How It Works

Click the button.

JavaScript checks the bulb state:

If off, it changes the image to on and updates the button text to "Turn off".

If on, it changes the image back to off and updates the button text to "Turn on".

🎨 Styling Highlights

Centered image and button

Smooth transition on bulb image change

Hover effect on button

body { text-align: center; background-color: #000; }
img { width: 50%; height: 40%; margin-top: 20px; transition: 0.3s ease; }
button { padding: 10px 20px; font-size: 16px; }
button:hover { background-color: lightgray; cursor: pointer; }
.center { display: block; margin: auto; }

🚀 How to Run

Clone the repository or download the project.

Open index.html in your browser.

Click the button to toggle the bulb on and off.

👤 Author

Umar Riaz – BSCS 5th Semester | Aspiring Full Stack Developer
