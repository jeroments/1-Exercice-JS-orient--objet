const event = new Date(Date.UTC(2022, 11, 20, 3, 0, 0));
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(event.toLocaleDateString('fr-FR', options));