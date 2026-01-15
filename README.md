# Seesaw Challenge – Physics-Based Simulation

This project is an interactive web application that simulates the balance of a seesaw based on the weights of objects. The goal is to provide visual and auditory feedback to the user using a simple yet intuitive physics model.

---

## 🧠 Thought Process & Design Decisions

While developing this project, my main priorities were to create a structure that is:
- **Readable**
- **Extensible**
- **Easy to maintain**

Based on these goals, I made the following key decisions:

- **Centralized state management**  
  The current state of the application (boxes, weights, angles, etc.) is managed from a single source of truth.

- **Separation of concerns**  
  - Physics and balance calculations  
  - State management  
  - DOM / UI updates  
  are split into independent modules.

- **Simple but realistic physics**  
  Instead of using complex physics engines, basic moment calculations based on weight and distance were implemented.

- **Responsive design**  
  The application was developed to work smoothly across different screen sizes.

- **Visual and auditory feedback**  
  Sound effects were added whenever a box drops to enhance user interaction.

---

## ⚖️ Trade-offs & Limitations

Some conscious trade-offs were made during development:

- **No external physics engine (e.g., Matter.js, Box2D)** was used.  
  A simpler and more controllable calculation model was preferred.

- **The physics calculations do not fully reflect real-world physics.**  
  The focus was on creating an intuitive and educational simulation rather than physical accuracy.

- **Framework-agnostic state management**  
  While this provides flexibility, it may require additional abstractions in larger-scale projects.

- **Limited performance optimizations**  
  Since this project was built as a demo and challenge submission, advanced optimizations were not a priority.

---

## 🤖 AI Assistance

During the development process, AI-assisted tools were used for:
- File and folder organization suggestions
- README and documentation writing

However:
- The overall application architecture  
- Physics logic  
- State management  
- UI and interaction design  

were entirely designed and implemented by me.

---

## 🚀 Live Demo & Source Code

- **Live Demo:** https://alpayozer.github.io/seesaw-simulation/
- **GitHub:** https://github.com/alpayozer/seesaw-simulation

---

## 🛠 Technologies Used

- JavaScript
- HTML
- CSS

---

## 📬 Feedback

I’m open to any feedback or suggestions.  
Thank you 🙌
