// Create a new XMLHttpRequest object to interact with servers
const request = new XMLHttpRequest();

// Initialize a GET request to fetch advice from the API
request.open('GET', 'https://api.adviceslip.com/advice', true);

// Define the onload function to handle the response when the request completes successfully
request.onload = function () {
    // Check if the request status is within the successful range (200-399)
    if (request.status >= 200 && request.status < 400) {
        // Parse the JSON response
        const data = JSON.parse(this.response);

        // Get the element with ID 'cardMessage'
        const cardMessage = document.getElementById('cardMessage');
        // Get the element with ID 'cardTitle'
        const cardTitle = document.getElementById('cardTitle');

        // Get the element with ID 'adviceNumber', or create it if it doesn't exist
        let adviceNumber = document.getElementById('adviceNumber');
        if (!adviceNumber) {
            adviceNumber = document.createElement('h1'); // Create a new h1 element
            adviceNumber.id = 'adviceNumber'; // Set its ID to 'adviceNumber'
        }
        // Set the class of the advice number element
        adviceNumber.setAttribute('class', 'advice-number');
        // Set the text content of the advice number element
        adviceNumber.textContent = `ADVICE # ${data.slip.id}`;

        // Get the element with ID 'adviceText', or create it if it doesn't exist
        let adviceText = document.getElementById('adviceText');
        if (!adviceText) {
            adviceText = document.createElement('p'); // Create a new p element
            adviceText.id = 'adviceText'; // Set its ID to 'adviceText'
        }
        // Set the class of the advice text element
        adviceText.setAttribute('class', 'text-message');
        // Set the text content of the advice text element
        adviceText.textContent = `"${data.slip.advice}"`;

        // Append the advice number element to the card title element
        cardTitle.appendChild(adviceNumber);
        // Append the advice text element to the card message element
        cardMessage.appendChild(adviceText);
    } else {
        // Log an error message if the request was unsuccessful
        console.log('There is an error. Please check the code ' + request.status);
    }
}
// Send the request to the server
request.send();

// Function to build the HTML page
const createPage = function () {
    // Get the container element by its ID
    const container = document.getElementById('container');
    // Set the class of the container element
    container.setAttribute('class', 'container');

    // Create a new div element for the card container
    const card = document.createElement('div');
    // Set the class of the card container
    card.setAttribute('class', 'card-container');

    // Create a new div element for the card title
    const cardTitle = document.createElement('div');
    // Set the ID of the card title element
    cardTitle.id = 'cardTitle';
    // Set the class of the card title element
    cardTitle.setAttribute('class', 'card-title');

    // Create a new div element for the card message
    const cardMessage = document.createElement('div');
    // Set the ID of the card message element
    cardMessage.id = 'cardMessage';
    // Set the class of the card message element
    cardMessage.setAttribute('class', 'card-message');

    // Create a new div element for the card divider
    const cardDivider = document.createElement('div');
    // Set the class of the card divider element
    cardDivider.setAttribute('class', 'card-divider');

    // Create a new span element for the card icon
    const cardIcon = document.createElement('span');
    // Set the class of the card icon element
    cardIcon.setAttribute('class', 'card-icon');
    // Add an event listener to the card icon element to fetch new advice when clicked
    cardIcon.addEventListener("click", () => {
        request.open('GET', 'https://api.adviceslip.com/advice', true); // Reopen the request
        request.send(); // Resend the request
    });

    // Create a new img element for the image divider
    const imageDivider = document.createElement('img');
    // Set the class of the image divider element
    imageDivider.setAttribute('class', 'image-divider');
    // Set the alt attribute of the image divider element
    imageDivider.alt = "Illustration from Frontend Mentor";

    // Create a new img element for the dice icon
    const iconDice = document.createElement('img');
    // Set the class of the dice icon element
    iconDice.setAttribute('class', 'icon-dice');
    // Set the alt attribute of the dice icon element
    iconDice.alt = "Illustration from Frontend Mentor";

    // Append the card container to the main container
    container.appendChild(card);
    // Append the card title to the card container
    card.appendChild(cardTitle);
    // Append the card message to the card container
    card.appendChild(cardMessage);
    // Append the card divider to the card container
    card.appendChild(cardDivider);
    // Append the card icon to the card container
    card.appendChild(cardIcon);

    // Append the image divider to the card divider
    cardDivider.appendChild(imageDivider);
    // Append the dice icon to the card icon
    cardIcon.appendChild(iconDice);
}
// Call the createPage function to build the page
createPage();
