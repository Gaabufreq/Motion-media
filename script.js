gsap.from(".box",{
    scale:0,
    duration:2,
    delay:1,
    scrollTrigger:(".box")
})

gsap.from(".video-box",{
    scale:0,
    duration:2,
    delay:1,
    scrollTrigger:(".video-box")
})

gsap.from(".contact-form",{
    scale:0,
    duration:2,
    delay:1,
    // scrollTrigger:(".video-box")
})


gsap.from(".login-pg",{
    scale:0,
    duration:2,
    delay:1,
    // scrollTrigger:(".video-box")
})

gsap.from(".about-txt",{
    scale:0,
    duration:2,
    delay:2,
    // scrollTrigger:(".video-box")
})

gsap.from(".about-container",{
    scale:0,
    duration:1,
    delay:1,
    // scrollTrigger:(".video-box")
})
gsap.from(".help-content",{
    scale:0,
    duration:1,
    delay:1,
    // scrollTrigger:(".video-box")
})

gsap.from(".anchor",{
    scale:0,
    duration:1,
    delay:1,
    // scrollTrigger:(".video-box")
})



gsap.from(".sbm-container",{
    scale:0,
    duration:1,
    delay:1,
    // scrollTrigger:(".video-box")
})

// smooth scroll stop

document.querySelector(".footer-box a").addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: 0 });
});

// Login form validation\\

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function (event) {
        // Trim input values to remove accidental whitespace
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        let isValid = true;
        let errorMessage = "";

        // Validate username
        if (username === "") {
            isValid = false;
            errorMessage += "Username is required.\n";
        }

        // Validate password
        if (password === "") {
            isValid = false;
            errorMessage += "Password is required.\n";
        } else if (password.length < 6) {
            isValid = false;
            errorMessage += "Password must be at least 6 characters long.\n";
        }

        // If validation fails, prevent form submission and alert the user
        if (!isValid) {
            event.preventDefault(); // Stop the form from submitting
            alert(errorMessage);
        }
    });
});

// login form ko samajh lo , contact form ka bhi wahi hai sab.\\
// contact form validation\\

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");
    const nameInput = document.getElementById("name");
    const lastNameInput = document.getElementById("last-name");
    const numberInput = document.getElementById("number");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", function (event) {
        const name = nameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const number = numberInput.value.trim();
        const email = emailInput.value.trim();

        let isValid = true;
        let errorMessage = "";

        // Validate first name
        if (name === "") {
            isValid = false;
            errorMessage += "First name is required.\n";
        }

        // Validate last name
        if (lastName === "") {
            isValid = false;
            errorMessage += "Last name is required.\n";
        }

        // Validate phone number (must be at least 10 digits)
        if (number === "") {
            isValid = false;
            errorMessage += "Phone number is required.\n";
        } else if (!/^\d{10,}$/.test(number)) {
            isValid = false;
            errorMessage += "Phone number must be at least 10 digits.\n";
        }

        // Validate email
        if (email === "") {
            isValid = false;
            errorMessage += "Email is required.\n";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            isValid = false;
            errorMessage += "Email format is invalid.\n";
        }

        // If validation fails
        if (!isValid) {
            event.preventDefault();
            alert(errorMessage);
        }
    });
});
