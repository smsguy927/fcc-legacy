import * as assert from "node:assert";
import{sumAll} from "../modules/Medium.js";

describe('sumAll', function() {
    it('0 Returns the sum of the range including the two numbers', function () {
        // Setup
        const input = [1, 4]
        const expected = 10

        // Exercise
        const result = sumAll(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it('1 Returns the sum of the range including the two numbers', function () {
        // Setup
        const input = [4,1]
        const expected = 10

        // Exercise
        const result = sumAll(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it('2 Returns the sum of the range including the two numbers', function () {
        // Setup
        const input = [5,10]
        const expected = 45

        // Exercise
        const result = sumAll(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it('3 Returns the sum of the range including the two numbers', function () {
        // Setup
        const input = [10,5]
        const expected = 45

        // Exercise
        const result = sumAll(input);

        // Verify
        assert.strictEqual(result, expected);
    })
    it('4 Returns the sum of the range including the two numbers', function () {
        // Setup
        const input = [1,1_000_000_000]
        const expected = 500_000_000_500_000_000

        // Exercise
        const result = sumAll(input);

        // Verify
        assert.strictEqual(result, expected);
    })
})