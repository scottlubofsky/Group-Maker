function renderGroups() {

    let element = document.getElementById('groups');
    let numOfGroups = document.getElementById('number-of-groups');

    for (var i = 1; i <= Number(numOfGroups.value); i++) {
        element.innerHTML += `<div class='individual-group'>Group ${i}</div><br>`;
    }

}

function checkIfGroupsAreClear() {

    let element = document.getElementById('groups');

    if (element.innerHTML === "") {
        renderGroups();
    } else {
        element.innerHTML = "";
        renderGroups();
    }

}

function addBox() {

    let elements = document.getElementsByClassName('name-box');
    let data = [].map.call(elements, elem => elem.value);

    let element = document.getElementById('response');
    element.innerHTML += `<input type='text' class='name-box' value=''><br>`;

    for (var i = 0; i < data.length; i++) {
        elements[i].value = data[i];
    }

}

function generateRandomNumber(roster) {

    return Math.floor(Math.random() * roster.length);

}

function formRoster() {

    let names = document.getElementsByClassName('name-box');
    let roster = [];

    for (var i = 0; i < names.length; i++) {
        roster.push(names[i].value);
    }

    return roster;

}

function formGroups() {

    let numOfGroups = Number(document.getElementById('number-of-groups').value);
    let groups = [];
    let roster = formRoster();

    for (var i = 0; i < numOfGroups; i++) {
        groups.push([]);
    }

    function groupBuild() {
        groups.forEach(group => {
            let random = generateRandomNumber(roster);
            if (roster[random] === undefined) {
                return
            } else {
                group.push(roster[random]);
            }
            roster.splice(random, 1);
        });
    }

    if (numOfGroups === 0) {
        alert('Please enter number of groups.')
        return
    }

    while (roster.length > 0) {
        groupBuild();
    }

    return groups;

}

function clearGroupField() {

    let element = document.getElementById('groups');

    element.innerHTML = "";

    renderGroups();

}

function addNamesToGroup() {

    let groupArr = document.getElementsByClassName('individual-group');
    let groups = formGroups();

    for (var i = 0; i < groups.length; i++) {
        for (var j = 0; j < groups[i].length; j++) {
            groupArr[i].innerHTML += `<p class="group-member">${groups[i][j]}</p>`;
        }
    }
    
}

function generateNewGroups() {

    let groupMemebers = document.getElementsByClassName("group-member");

    if (groupMemebers.length === 0) {
        addNamesToGroup();
    } else {
        clearGroupField();
        addNamesToGroup();
    }
    
}
