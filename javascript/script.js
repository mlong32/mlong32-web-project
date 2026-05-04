// Grab elements
const form = document.getElementById("userForm");
const input = document.getElementById("username");
const message = document.getElementById("message");

// Event Listener
form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop page refresh

    const name= input.value;

    if (name === "") {
        message.textContent = "You must enter a name, astronaut.";
    } else {
        message.textContent = "Welcome to the mission, " + name + ". Prepare for launch.";
    }
});