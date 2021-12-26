const userInfoA = localStorage.getItem("userInfo");
if (userInfoA){
    goTo("home.html");
}

const registration = document.getElementById("registration-form");

console.log(registration);

function getSelected(select){
    let selectedValues= []
    for (optionIndex in select){
        if (select.option[optionIndex].selected){
            selectedValues.push(select.options[optionIndex].value);
        }
    }
    return selectedValues;
}
registration.onsubmit = function(event){
    event.preventDefault();
    console.log("I am triggered when submit is pressed");
    let name  = document.getElementById("name").value;
    let interest  = getSelected(document.getElementById("interests"));
    let dob = document.getElementById("dob").value;
    let darkMode = document.getElementById("dark-mode").checked;
    const data = {
        name  : name,
        interest : interest,
        dob : dob,
        darkMode : darkMode,
        
    };
    console.log(data);
    localStorage.setItem("userInfo",JSON.stringify(data));
    goTo("home.html");
};

