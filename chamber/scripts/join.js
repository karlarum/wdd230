document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("msform");
    const nextButtons = form.querySelectorAll(".next");
    const prevButtons = form.querySelectorAll(".previous");
    const fieldsets = form.querySelectorAll("fieldset");
    const progressList = document.getElementById("progressbar").querySelectorAll("li");
    let currentStep = 0;

    // Show the current fieldset
    function showStep(step) {
        fieldsets.forEach(function (fieldset, index) {
            if (index === step) {
                fieldset.style.display = "block";
            } else {
                fieldset.style.display = "none";
            }
        });

        updateProgress(step);
    }

    // Update progress bar / step indicator
    function updateProgress(step) {
        progressList.forEach(function (progressItem, index) {
            if (index <= step) {
                progressItem.classList.add("active");
            } else {
                progressItem.classList.remove("active");
            }
        });
    }

    showStep(currentStep);

    // Next button
    nextButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            if (currentStep < fieldsets.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    // Previous button
    prevButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });
    // Form submission
    form.addEventListener("submit", function (event) {
        form.setAttribute("action", "thankyou.html");
    });
});