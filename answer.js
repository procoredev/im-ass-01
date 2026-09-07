
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

// Question no 04---

function getCngFare(distance, isNight = false , waitingMinutes = 0){
    let fare =50;
    
    if (distace > 2) {
        fare =false + (distance - 2) * 15;
    }
    fare = fare + waitingMinutes * 2;

    if (isNight){
        fare = fare * 1.2;
        }
    return fare;
}

// Question no 05---

const getChaseVerdict =(target, scored, ballsLeft) => {
    const runsNeeded = target - scored;
    
    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft ) * 6;
    
    let verdict;

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } 
    else if (requiredRate <= 12) {
        verdict = "Tough";

    }
    else  {
        verdict = "Almost Impossible";

    }
    return `Need $ {runsNeeded} runs in $ {ballsLeft} balls | $ {verdict}`;


};