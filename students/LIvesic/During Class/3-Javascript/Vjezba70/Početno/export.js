let steps = 0;

function walk(){
    steps++;
}

function getTotalSteps(){
    return steps;
}

module.exports = {
    walk: walk,
    getTotalSteps: getTotalSteps,
}