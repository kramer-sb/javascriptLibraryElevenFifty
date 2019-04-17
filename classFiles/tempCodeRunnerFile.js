let bruceWayne ={
    name: 'Batman',
    age: 42,
    isVillain: false
}

function iAmBatman () {
    return console.log(Object.keys(bruceWayne), (Object.keys(bruceWayne).length),(Object.values(bruceWayne)));
}

iAmBatman();