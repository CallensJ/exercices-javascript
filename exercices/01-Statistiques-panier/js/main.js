import { cartSummary } from "./cartSummary.js";
import products from "./data/data.js";

const result = cartSummary(products);

const list = document.getElementById("summary");
for (const [key, value] of Object.entries(result)) {
  const li = document.createElement("li");
  li.textContent = `${key}: ${value}`;
  list.appendChild(li);
}
