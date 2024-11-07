document.getElementById('header').addEventListener('click', function () {
    location.replace("https://wileyworp.github.io/Petry-Pass/")
    localStorage.setItem("backToHome", "true")
})

document.getElementById('acceptButton').addEventListener('click', function () {
    document.getElementById('h1').textContent = "Pass granted to WILEY"
    setTimeout(function () {
        document.getElementById('h1').textContent = "Awaiting request..."
    }, 2000)
    localStorage.setItem("accepted", "true");
})

document.getElementById('denyButton').addEventListener('click', function () {
    document.getElementById('h1').textContent = "Pass denied to WILEY"
    setTimeout(function () {
        document.getElementById('h1').textContent = "Awaiting request..."
    }, 2000)
    localStorage.removeItem("accepted")
});