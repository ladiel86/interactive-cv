var selectedTools = [];

document.getElementById("filtersButton").addEventListener("click", event => {
    let filter = document.getElementById("filter");
    let shift = filter.getAttribute("isHidden") == "true" ? 20 : 0;
    document.getElementById("filtersButton").style = "left: " + shift + "vw; transform: rotate(-90deg); transition: transform 1s, left 1s;";
    document.getElementById("experienceContent").style = "width: " + (100 - shift) + "vw; transform: translateX(" + shift +
    "vw); transition: transform 1s, width 1s;";
    document.getElementById("filter").style = "left: " + (shift - 20) + "vw; transition: left 1s;";
    console.log(shift === 20);
    (shift === 20) ? filter.setAttribute("isHidden", "false") : filter.setAttribute("isHidden", "true");
})

let includes = document.getElementsByTagName('include');
for(var i=0; i<includes.length; i++){
    let include = includes[i];
    load_file(includes[i].attributes.src.value, function(text){
        include.insertAdjacentHTML('afterend', text);
        include.remove();
    });
}

function load_file(filename, callback) {
    fetch(filename).then(response => response.text()).then(text => callback(text));
}

function highlightElements(toolName) {
    var selectedElement = document.getElementsByClassName('tool ' + toolName)[0];
    if(selectedElement.getAttribute('data-selected') == 'true') {
        isSelectedElement = true;
        selectedTools = selectedTools.filter(e => e !== toolName);
    }
    else {
        isSelectedElement = false;
        selectedTools.push(toolName);
    }
    selectedElement.setAttribute('data-selected', !isSelectedElement);
    if(selectedElement.children.length > 0) {
        selectedElement.children[0].setAttribute('data-selected', !isSelectedElement);
        if(selectedElement.children[0].children.length > 0) {
            selectedElement.children[0].children[0].setAttribute('data-selected', !isSelectedElement);
        }
    }
    
    var allTiles = document.getElementsByClassName('toHighlight');
    for(i = 0; i < allTiles.length; i ++) {
        if (selectedTools.length == 0 && allTiles[i].tagName == 'LI') {
            allTiles[i].setAttribute('data-selected', true);
        }
        else {
            allTiles[i].setAttribute('data-selected', false);
        }
        var childrenCount = allTiles[i].childElementCount;
        for (m = 0; m < childrenCount; m ++) {
            allTiles[i].children[m].setAttribute('data-selected', false);
        }
        for(j = 0; j < selectedTools.length; j ++) {
            if(allTiles[i].getAttribute('class').includes(selectedTools[j])) {
                allTiles[i].setAttribute('data-selected', true);
                for (m = 0; m < childrenCount; m ++) {
                    allTiles[i].children[m].setAttribute('data-selected', true);
                }
            }
        }
    }

    var allJobs = document.getElementsByClassName('jobSection');
    for (i = 0; i < allJobs.length; i++) {
        if (allJobs[i].getAttribute('data-selected') == 'false' && selectedTools.length !== 0) {
            allJobs[i].style.display = 'none';
        }
        else {
            allJobs[i].style.display = 'flex';
        }
    }

    var allBullets = document.getElementsByTagName('LI');
    console.log(allBullets);
    for (i = 0; i < allBullets.length; i++) {
        if(allBullets[i].getAttribute('data-selected') == 'false') {
            allBullets[i].setAttribute('hidden', 'hidden');
        }
        else {
            allBullets[i].removeAttribute('hidden');
        }
    }
}