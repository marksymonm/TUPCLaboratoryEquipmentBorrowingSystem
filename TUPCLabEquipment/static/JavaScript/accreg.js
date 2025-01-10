function restrictSpecialCharacters(input) {
    // Replace any character that is not a letter, space, or hyphen with an empty string
    input.value = input.value.replace(/[^a-zA-Z\s-]/g, '');
}

function capitalizeWords(input) {
    input.value = input.value.replace(/\b\w/g, char => char.toUpperCase());
}

function restrictNumbers(input) {
    input.value = input.value.replace(/[0-9]/g, ''); // Remove any numbers
}



// JavaScript to toggle password visibility
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const confirmPasswordInput = document.getElementById("confirm-password");

togglePassword.addEventListener("click", () => {
    // Toggle the type attribute
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Toggle the eye icon
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
});

toggleConfirmPassword.addEventListener("click", () => {
    // Toggle the type attribute
    const type = confirmPasswordInput.getAttribute("type") === "password" ? "text" : "password";
    confirmPasswordInput.setAttribute("type", type);

    // Toggle the eye icon
    toggleConfirmPassword.classList.toggle("fa-eye");
    toggleConfirmPassword.classList.toggle("fa-eye-slash");
});

function validateInput(input) {
    // Check if the input contains at least one letter
    if (!/[a-zA-Z]/.test(input.value.trim())) {
        alert("Input must contain at least one letter and cannot be empty or spaces only.");
        input.value = ""; // Clear the invalid input
        return false;
    }
    return true;
}

// Validate all inputs before form submission
const form = document.querySelector("form"); // Replace with the form's specific selector if needed
form.addEventListener("submit", (e) => {
    let isValid = true;

    document.querySelectorAll("input").forEach(input => {
        if (!validateInput(input)) {
            isValid = false;
        }
    });

    if (!isValid) {
        e.preventDefault(); // Prevent form submission
        alert("Please correct the errors in the form before submitting.");
    }
});
