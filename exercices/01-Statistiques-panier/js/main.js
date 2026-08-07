import { cartSummary } from "./cartSummary.js";

const results = cartSummary();

const list = document.getElementById("summary");
for (const line of results) {
  const li = document.createElement("li");
  li.textContent = line;
  list.appendChild(li);
}
