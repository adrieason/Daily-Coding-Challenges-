/*Some light bulbs are placed in a circle (clockwise direction). Each one is either on (1) or off (0).

Every turn, the light bulbs change their states. If a light bulb was on at the previous turn, the light bulb to the right of it changes its state, i.e. if lights[0] is on. then, if lights[1] was on, it turns off and vice versa.

Find the state of the light bulbs after n turns.*/

const ON = 1;
const OFF = 0;

function lightBulbs(lights, n) {
    let newLights = Array.from(lights);
    for (let i = 0; i < newLights.length; i++) {
        const rightNeighbor = i === lights.length - 1 ? 0 : i + 1
        if (lights[i] === ON) {
            newLights[rightNeighbor] = lights[rightNeighbor] == ON ? OFF : ON
        }
    }

    return n === 1 ? newLights : lightBulbs(newLights, n - 1)
}