
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

