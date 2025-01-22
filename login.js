const container = document.getElementById('container');
const registerBtn = document.getElementById('Register');
const loginBtn = document.getElementById('login');

// Toggle between sign-in and sign-up
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Form validation
document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual submission
        const inputs = form.querySelectorAll('input');
        let valid = true;

        inputs.forEach((input) => {
            if (!input.value) {
                valid = false;
                alert(`Please fill out the ${input.placeholder.toLowerCase()}`);
            }
        });

        if (valid) {
            alert('Form submitted successfully!');
        }
    });
});
