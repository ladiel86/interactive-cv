document.querySelectorAll(".headerItem").forEach(item => {
    item.addEventListener("click", event => {
        let outroID = document.querySelector("[selected").id;
        let outroObjects = document.getElementsByClassName(outroID);
        let outroObjectsID = [];
        for (let element of outroObjects) outroObjectsID.push(element.id);
        
        let introID = event.target.id;
        let introObjects = document.getElementsByClassName(introID);
        let introObjectsID = [];
        for (let element of introObjects) introObjectsID.push(element.id);

        if (introObjectsID.length == outroObjectsID.length && introObjectsID.length == 2) {
            introObjectsID.pop();
            outroObjectsID.pop();
        }
        outroObjectsID.forEach((object) => transition(object, 0));
        introObjectsID.forEach((object) => transition(object, 1));

        document.getElementById(outroID).removeAttribute("selected");
        document.getElementById(introID).setAttribute("selected", "");
    })

})

function transition (objectID, fade) {
    let element = document.getElementById(objectID);
    let delay = 2;
    switch (objectID) {
        case "contact-content":
            element.style = "width: 50%; opacity: " + fade + "; transform: translateX("
            + (fade - 1) * 50 + "vw); transition: transform " + delay + "s, opacity " + delay + "s;";
            break;
        case "home-left-content":
            element.style = "width: 50%; opacity: " + fade + "; transform: translateX("
            + (fade - 1) * 50 + "vw); transition: transform " + delay + "s, opacity " + delay + "s;";
            break;
        case "home-right-content":
            element.style = "width: 50%; opacity: " + fade + "; transform: translateX("
            + (-(fade - 1) * 100 + 50) + "vw); transition: transform " + delay + "s, opacity " + delay + "s;";
            break;
        case "experience-content":
            element.style = "opacity: " + fade + "; transform: translateY("
            + -(fade - 1) * 100 + "vh); transition: transform " + delay + "s, opacity " + delay + "s;";
            break;
        case "portfolio-content":
            element.style = "opacity: " + fade + "; transform: translateY("
            + -(fade - 1) * 100 + "vh); transition: transform " + delay + "s, opacity " + delay + "s;";
            break;
    }
}