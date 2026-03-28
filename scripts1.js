/* JavaScript for Interactive Elements */
document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".input-group input, .input-group textarea");

    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.nextElementSibling.classList.add("active");
        });

        input.addEventListener("blur", () => {
            if (input.value === "") {
                input.nextElementSibling.classList.remove("active");
            }
        });
    });

    const form = document.querySelector(".contact-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
                showError(input, "This field is required");
            } else {
                removeError(input);
            }
        });

        if (isValid) {
            alert("Your message has been sent successfully!");
            form.reset();
            inputs.forEach(input => input.nextElementSibling.classList.remove("active"));
        }
    });

    function showError(input, message) {
        let errorText = document.createElement("small");
        errorText.classList.add("error-text");
        errorText.innerText = message;
        input.classList.add("error");
        
        if (!input.parentElement.querySelector(".error-text")) {
            input.parentElement.appendChild(errorText);
        }
    }

    function removeError(input) {
        input.classList.remove("error");
        let errorText = input.parentElement.querySelector(".error-text");
        if (errorText) {
            errorText.remove();
        }
    }

    const whatsappButton = document.querySelector(".whatsapp-button");

    if (whatsappButton) {
        whatsappButton.classList.add("pulse-animation");

        whatsappButton.addEventListener("mouseover", () => {
            whatsappButton.classList.remove("pulse-animation");
        });

        whatsappButton.addEventListener("mouseleave", () => {
            whatsappButton.classList.add("pulse-animation");
        });
    }
});
