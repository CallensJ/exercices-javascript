import { cartSummary } from "./cartSummary.js";
import products from "./data/data.js";

const result = cartSummary(products);
const lines = Array.isArray(result) ? result : result.split(", ");

const list = document.getElementById("summary");
for (const line of lines) {
  const li = document.createElement("li");
  li.textContent = line;
  list.appendChild(li);
}
