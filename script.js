function prioritizeTasks(tasks) {
    return tasks.sort((a, b) => {
        const priority = { high: 3, medium: 2, low: 1 };
        return priority[b.priority] - priority[a.priority];
    });
}

let tasks = [
    { task: "Study AI", priority: "high" },
    { task: "Watch YouTube", priority: "low" },
    { task: "Build project", priority: "medium" }
];

console.log(prioritizeTasks(tasks));