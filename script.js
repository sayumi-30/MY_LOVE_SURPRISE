function openSurprise() {
    document.getElementById("firstScreen").classList.add("hidden");
    document.getElementById("loveScreen").classList.remove("hidden");
}

function showName() {
    document.getElementById("loveScreen").classList.add("hidden");
    document.getElementById("nameScreen").classList.remove("hidden");
}

function showPhotos() {
    document.getElementById("nameScreen").classList.add("hidden");
    document.getElementById("photoScreen").classList.remove("hidden");
}

function showStory() {
    document.getElementById("photoScreen").classList.add("hidden");
    document.getElementById("storyScreen").classList.remove("hidden");
}

function showReasons() {
    document.getElementById("storyScreen").classList.add("hidden");
    document.getElementById("reasonsScreen").classList.remove("hidden");
}

function showFinal() {
    document.getElementById("reasonsScreen").classList.add("hidden");
    document.getElementById("finalScreen").classList.remove("hidden");
}