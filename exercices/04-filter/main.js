import { tasks } from "./data.js";
import { getPendingTasks } from "./getPendingTasks.js";

const pendingTasks = getPendingTasks(tasks)

console.table(pendingTasks)
console.table(tasks)
