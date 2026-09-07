
// console.log("hello javascript");

// Question no 01---

function describeValue(value){
    const type = typeof value;
    const truth = value ? "truthy" : "falsy" ;

    return `${type} | ${truth}` ;
}

// Question no 02---

function getDayType (day){
    switch (day.toLowerCase()){
        case "friday":
        case "saturday":
            return "Weekend";
         
        case "saturday":    
        case "monday":
        case "twesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        
        default:
            return "Invalid Day";
    }
}

// Question no 03---
function validateUsername (username){
    if (username.length < 4) {
        return "Too Short";
    }

    if (username.length ("")){
       return "No Space Allowed"; 
    }

    if (username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }

    return "Available";

}

// Question no 03---