function distanceFromHqInBlocks (location){
    let blocks = 0;
    if (location >= 42){
        blocks = location - 42;
    } else {
        blocks = 42 - location;
    }
    return blocks;
}
function distanceFromHqInFeet (location){
    const distanceInBlocks = distanceFromHqInBlocks (location);
    const feet = 264 * distanceInBlocks; 
    return feet;   
}
function distanceTravelledInFeet (start, destination){
    const distanceInBlocks = Math.abs (destination - start);
    const feet = 264 * distanceInBlocks;
    return feet; 
}
function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet (start, destination);
    let cost = 0;
    if (distance <= 400) {
        cost = 0;
    }
    else if (distance > 400 && distance <= 2000){
        cost = (distance - 400) * 0.02;
    }else if (distance > 2000 && distance <= 2500){
      cost = 25;
      
    } else {
        cost = 'cannot travel that far';
    }
    return cost;
}
