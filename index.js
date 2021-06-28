function distanceFromHqInBlocks(location){
    if (location < 42) {
        return (location - 42)*-1;
    } else {
        return (location -42);
    }
}

function distanceFromHqInFeet(location) {
    let blocks = distanceFromHqInBlocks(location);
    return blocks * 264;

}

function distanceTravelledInFeet(loc1, loc2) {
    if (loc1 < loc2) return (loc2 - loc1)*264
    else return (loc1 - loc2)*264
}

function calculatesFarePrice (loc1, loc2) {
    let distance = distanceTravelledInFeet(loc1, loc2);
    if (distance < 400) {
        return 0
    }else if (distance > 400 && distance < 2000) {
        return (0.02 * distance) - 8
    }else if (distance > 2000 && distance < 2500) {
        return 25
    }else if (distance > 2500) {
        return 'cannot travel that far'
    }
}