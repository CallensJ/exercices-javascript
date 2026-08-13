import { findTaskById } from "./findTaskById.js";
import { tasks } from "./data.js";

console.log(findTaskById(tasks, 3));
console.log(findTaskById(tasks, 99));
