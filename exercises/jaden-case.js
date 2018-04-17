'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(string) {
    let splitStr = string.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }

//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase('hello brother'), 'Hello Brother')
assert.strictEqual(jadenCase('I am a wild coder !!'), 'I Am A Wild Coder !!')

// End of tests */
