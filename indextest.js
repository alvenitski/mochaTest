// Importation du module assert et du module Rooster
const assert = require('assert');
const Rooster = require('./index.js')
//Testing Rooster objet
describe('Rooster', () => {
    //Testing .announceDawn method
    describe('.announceDawn', () => {
        it('return a rooster call', () => {
            //Setup : define expected output
            const expected = 'cock-a-doodle-doo';
            //Exercice : call the function/method under test and store result in variable
            const actualCall = Rooster.announceDawn();

            //Verify : that function/method output matches expected output
            assert.deepEqual(actualCall, expected);
            //Output : test failed : method did return 'moo!' instead of 'cock-a-doodle-doo' -> method needs correction
        });
    });
    //Testing .timeAtDawn method
    describe('.timeAtDawn', () => {
        it('returns its argument as a string', () => {
            //Setup : define expected output
            const numberToString = '1';
            //Exercice : call the method under test
            const actualOutput = Rooster.timeAtDawn(1);
            //Verify : that method's ouput matches expected output
            assert.strictEqual(actualOutput, numberToString);
            //Output : test passed successfully
            /* Test altenatif
            assert.ok(typeof(actualOutput) =='string') */
        });
        it('throws an error if passed a number less than 0', () => {
            assert.throws(
                () => {
                    Rooster.timeAtDawn(-1);
                },
                RangeError
            )
            //Output : test passed successfully
        });
        it('throws an error if passed a number greater than 23', () => {
            assert.throws(
                () => {
                    Rooster.timeAtDawn(32);
                },
                RangeError
            )
            //Output: test passed successfully
        });
    });
});