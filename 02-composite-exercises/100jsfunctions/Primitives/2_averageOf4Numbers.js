
function averageOf4Numbers(nr1, nr2, nr3, nr4) {
    return [...arguments].reduce((acc, x)=> acc+x)/arguments.length;
}

export { averageOf4Numbers };
