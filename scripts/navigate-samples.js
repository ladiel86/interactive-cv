var samples = document.querySelectorAll("[data-title]");
var menu = document.getElementById("sample-menu");

for (i = 0; i < samples.length; i++) {
    var sample = samples[i];
    var sampleLink = document.createElement("div");
    sampleLink.classList.add("sample-link");
    sampleLink.innerHTML = sample.getAttribute("data-title");
    menu.appendChild(sampleLink);
    console.log(sampleLink);
}

document.querySelectorAll(".sample-link").forEach(item => {
    item.addEventListener("click", event => {
        var clickedButton = event.target.innerHTML;

        for (sample of samples) {
            if (sample.getAttribute("data-title") == clickedButton) sample.removeAttribute("hidden")
            else sample.setAttribute("hidden", "");
        }
    })

})