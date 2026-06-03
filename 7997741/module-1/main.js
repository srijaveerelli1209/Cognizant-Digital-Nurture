// Phone validation
function validatePhone() {
    let phone = document.getElementById("phone").value;

    if (phone.length < 10) {
        alert("Enter valid phone number");
    }
}

// Event fee display
function showFee() {

    let eventType = document.getElementById("eventType").value;
    let fee = "";

    if (eventType === "Music")
        fee = "₹500";

    else if (eventType === "Sports")
        fee = "₹300";

    else if (eventType === "Workshop")
        fee = "₹700";

    document.getElementById("feeDisplay").innerHTML =
        "Event Fee: " + fee;

    // Save preference
    localStorage.setItem("preferredEvent", eventType);
}

// Form confirmation
function confirmSubmission() {

    document.getElementById("confirmation").value =
        "Registration submitted successfully!";
}

// Double click image enlarge
function enlargeImage(img) {

    img.style.width = "300px";
    img.style.height = "200px";
}

// Character counter
function countCharacters() {

    let text = document.getElementById("feedback").value;

    document.getElementById("charCount").innerHTML =
        "Characters: " + text.length;
}

// Video ready message
function videoReady() {

    document.getElementById("videoMessage").innerHTML =
        "Video ready to play";
}

// Geolocation
function findLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            showPosition,
            showError,
            {
                enableHighAccuracy: true,
                timeout: 5000
            }
        );

    } else {

        alert("Geolocation not supported");
    }
}

function showPosition(position) {

    document.getElementById("location").innerHTML =

        "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {

    switch(error.code) {

        case error.PERMISSION_DENIED:
            alert("Permission denied");
            break;

        case error.TIMEOUT:
            alert("Request timeout");
            break;

        default:
            alert("Location unavailable");
    }
}

// Clear storage
function clearPreferences() {

    localStorage.clear();
    sessionStorage.clear();

    alert("Preferences Cleared");
}

// Load saved preference
window.onload = function() {

    let savedEvent = localStorage.getItem("preferredEvent");

    if (savedEvent) {

        document.getElementById("eventType").value =
            savedEvent;
    }
}

// Warn before leaving
window.onbeforeunload = function() {

    return "You have unsaved changes!";
}