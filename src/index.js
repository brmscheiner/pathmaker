function checkOptions(options, functionName, mandatoryProperties) {
    mandatoryProperties.forEach(property => {
        if (typeof options.property === 'undefined') throw Error(`The function ${functionName} did not receive the required option ${property}.`)
    })
}

function getPoint(x, y, r, theta) {
    return [x + r * Math.sin(theta), y - r * Math.cos(theta)]
}

function makePath(points, roundness) {
    return ''
}

const defaultPolygonOptions = {
    startAngle: 0,
    roundness: 0,
    x: 0,
    y: 0,
}

function makePolygon(userOptions) {
    const options = { ...defaultWedgeOptions, ...options };
    checkOptions(options, 'makeArc', ['radius', 'n']);
    const { radius, roundness, startAngle, n, x, y } = options;
    const theta = 2 * Math.PI / n;

    
}

const defaultArcOptions = {
    startAngle: 0,
    endAngle: Math.PI * 2,
    roundness: 0,
    thickness: 1,
    x: 0,
    y: 0,
}

function makeArc(userOptions) {
    const options = { ...defaultWedgeOptions, ...options };
    checkOptions(options, 'makeArc', ['length']);
    const { length, roundness, thickness, startAngle, endAngle, x, y } = options;
}

const defaultWedgeOptions = {
    startAngle: 0,
    endAngle: Math.PI * 2,
    roundness: 0,
    x: 0,
    y: 0,
}

function makeWedge(userOptions) {
    const options = { ...defaultWedgeOptions, ...options };
    checkOptions(options, 'makeWedge', ['length']);
    const { length, roundness, startAngle, endAngle, x, y } = options;

    const p1 = [x, y]
    const p2 = [x + length * Math.sin(startAngle), y + length * Math.cos(startAngle)] //madeup
    const p3 = [x + length * Math.sin(endAngle), y + length * Math.cos(endAngle)] //madeup

    return makePath([p1, p2, p3], roundness)
}

// makeStar? would that be useful?