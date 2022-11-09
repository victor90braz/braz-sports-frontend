# El Once Ideal

[El Once Ideal]https://victor-braz-front-final-project-202204-bcn.netlify.app) where you can create your favourite football players' cards. You can also delete or edit your own cards.

The technologies used for this proyect were:

### 🔸 Front

React | Redux | Styled Components | Jest

### 🔸 Back

NodeJS | ExpressJS | MongoDB | Mongoose | JWT | Jest |

### 🔸 Tools

Trello | Postman | Figma | Git

## Metrics

🚀 Lighthouse

<img src="./lighthouse_performance.png" width="600">

📈 [Back SonarCloud metrics](https://sonarcloud.io/summary/overall?id=isdi-coders-2022_Victor-Braz_Back-Final-Project-202204-BCN)

📈 [Front SonarCloud metrics](https://sonarcloud.io/summary/overall?id=isdi-coders-2022_Victor-Braz_Front-Final-Project-202204-BCN)

## Links

🌐✨ [El Once Ideal](https://victor-braz-front-final-project-202204-bcn.netlify.app)

💻🗄 [Back deploy on Render](https://victor-braz-back-final-project-202204-bcn.onrender.com/)

## Back endpoints

`🔹 POST ➡️ .../users/register`  
Register a user. The payload should have a name, an username and a password.

`🔹 POST ➡️ .../users/login`  
Login with an existing user to get a valid token. The payload should have an existing username and password.

`🔹 GET ➡️ .../users/:username`  
Get all the data of an existing user, including the notes created by him.

`🔹 GET ➡️ .../players`  
Get all the players.

`🔹 GET ➡️ .../players/:idPlayer`  
Get the players created by one user.

`🔹 POST ➡️ .../`  
Create a card player. The payload should have a name, a infos and a skills about the player.

`🔹 DEL ➡️ .../players/:idPlayer`  
Delete a card player with it's ID. A card player can be deleted only by it's creator.

`🔹 PUT ➡️ .../players/:idPlayer`  
Edit a card player with it's ID. A card player can be edited only by it's creator.
