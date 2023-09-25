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

        // let outroID = document.querySelector("[selected").id;
        // let outroObjects = document.getElementsByClassName(outroID);
        // let outroObjectsID = [];
        // for (let element of outroObjects) outroObjectsID.push(element.id);
        
        // let introID = event.target.id;
        // let introObjects = document.getElementsByClassName(introID);
        // let introObjectsID = [];
        // for (let element of introObjects) introObjectsID.push(element.id);

        // if (introObjectsID.length == outroObjectsID.length && introObjectsID.length == 2) {
        //     introObjectsID.pop();
        //     outroObjectsID.pop();
        // }
        // outroObjectsID.forEach((object) => transition(object, 0));
        // introObjectsID.forEach((object) => transition(object, 1));

        // document.getElementById(outroID).removeAttribute("selected");
        // document.getElementById(introID).setAttribute("selected", "");
    })

})