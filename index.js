// Remove the main#main node
const main = document.querySelector('#main');
main.remove();

// Create a new header with the correct text and id
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';
document.body.appendChild(newHeader);