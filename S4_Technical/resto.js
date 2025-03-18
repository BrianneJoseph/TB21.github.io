function showDetails(restaurantId, imgSrc, foodName, category) {
    document.getElementById("restaurant-details").style.display = "flex";
    document.getElementById("details-img").src = imgSrc;
    document.getElementById("details-label").textContent = foodName.toUpperCase();
    document.getElementById("details-name").textContent = foodName;

    // Fix incorrect category dynamically
    document.getElementById("details-category").innerHTML = `<strong>Category:</strong> ${category} | <strong>Open:</strong> 10AM - 10PM`;

}

function closeDetails() {
    document.getElementById("restaurant-details").style.display = "none";
}
