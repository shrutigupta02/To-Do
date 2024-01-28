    const inputBox = document.getElementById("inputbox");
    const addButton = document.querySelector("button");
    const tasksList = document.getElementById("tasks");

    addButton.addEventListener("click", function () {
        addTask();
    });

    function addTask() {
        const taskText = inputBox.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;

            const checkmark = document.createElement("span");
            checkmark.innerHTML = "&#10004;";
            checkmark.classList.add("checkmark");
            checkmark.addEventListener("click", function () {
                li.remove();
            });

            li.appendChild(checkmark);
            tasksList.appendChild(li);
            inputBox.value = "";
        }
    }
