let selectedRating = 0;

const stars = document.querySelectorAll(".star");
const emoji = document.getElementById("emoji");

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        selectedRating = index + 1;
        updateStars(selectedRating);
        updateEmoji(selectedRating);
    });
});

function updateStars(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add("selected");
        } else {
            star.classList.remove("selected");
        }
    });
}

function updateEmoji(rating) {
    const emojis = ["😠", "😐", "🙂", "😃", "🤩"];
    emoji.textContent = emojis[rating - 1] || "🙂";
}

function countCharacters() {
    const text = document.getElementById("feedback").value;
    document.getElementById("charCount").textContent = `${text.length} characters`;
}

function submitFeedback() {
    const feedbackText = document.getElementById("feedback").value;
    if (selectedRating === 0 || feedbackText.trim() === "") {
        alert("Please select a rating and write some feedback.");
    } else {
        alert("Thank you for your feedback!");
    }
}
