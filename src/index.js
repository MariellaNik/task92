import "./scss/app.scss";
import Application from "./js/Application";
import Card from "./card";
import Notification from "./notification";

const notification = new Notification();
document.body.appendChild(notification.container);

const pizzaMenu = document.getElementById("pizza-menu");

const pepperoniCard = new Card({
  type: Card.types.PEPPERONI,
  price: 9.99,
});
pepperoniCard.render();
pizzaMenu.appendChild(pepperoniCard.container);

const margheritaCard = new Card({
  type: Card.types.MARGHERITA,
  price: 8.99,
});
margheritaCard.render();
pizzaMenu.appendChild(margheritaCard.container);

const hawaiianCard = new Card({
  type: Card.types.HAWAIIAN,
  price: 10.99,
});
hawaiianCard.render();
pizzaMenu.appendChild(hawaiianCard.container);

pepperoniCard.on(Card.events.ADD_TO_CART, (data) => {
  notification.render(data.type, data.price);
});

margheritaCard.on(Card.events.ADD_TO_CART, (data) => {
  notification.render(data.type, data.price);
});

hawaiianCard.on(Card.events.ADD_TO_CART, (data) => {
  notification.render(data.type, data.price);
});


window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  // Used to access the app instance by the automated tests
  window.__JS_APP = app;
});
