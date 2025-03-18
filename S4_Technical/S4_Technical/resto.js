function showDetails(restaurantId, imgSrc, foodName, category) {
    document.getElementById("restaurant-details").style.display = "flex";
    document.getElementById("details-img").src = imgSrc;
    document.getElementById("details-label").textContent = foodName.toUpperCase();
    document.getElementById("details-name").textContent = foodName;

    // Fix incorrect category dynamically
    document.getElementById("details-category").innerHTML = `<strong>Category:</strong> ${category} | <strong>Open:</strong> 10AM - 10PM`;

}

document.addEventListener("DOMContentLoaded", function () {
    let detailsContainer = document.getElementById("restaurant-details");
    if (detailsContainer) {
        detailsContainer.style.display = "none"; // Ensure it's hidden at the start
    }
});

function closeDetails() {
    document.getElementById("restaurant-details").style.display = "none";
}
