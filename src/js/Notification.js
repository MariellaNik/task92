import { formatCurrency } from "../utils";
import classNames from "classnames";

export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("notification");
    this.element.classList.add("is-hidden");
    this.element.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete")) {
        this.clear();
      }
    });

   render(type, price) {
    const notificationTemplate = `
      <div class="notification ${classNames({
        "is-danger": type === "hawaiian",
      })}">
        <button class="delete"></button>
        <div class="notification-content">
          <span class="type">${type}</span>
          <span class="price">${formatCurrency(price)}</span>
        </div>
      </div>
    `;

    this.container.innerHTML = notificationTemplate;

    const closeButton = this.container.querySelector(".delete");
    closeButton.addEventListener("click", () => {
      this.container.remove();
    });
  }
}
