document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks-list");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const taskDescription = document.getElementById("new-task-description").value;
        const priority = document.getElementById("priority").value;
        const dueDate = document.getElementById("due-date").value;

        // Create a new list item
        const taskItem = document.createElement("li");
        taskItem.textContent = `${taskDescription} (Due: ${dueDate})`;
        setTaskPriority(taskItem, priority);

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            taskItem.remove();
        });

        // Append button to the task item
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        // Clear the form
        form.reset();
    });

    // Function to set task color based on priority
    function setTaskPriority(taskItem, priority) {
        switch (priority) {
            case "high":
                taskItem.style.color = "red";
                break;
            case "medium":
                taskItem.style.color = "orange";
                break;
            case "low":
                taskItem.style.color = "green";
                break;
        }
    }
});
