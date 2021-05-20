

describe("Object destructuring 1", () => {
    it("Destructures an object into an array", () => {
        expect(objectDestructuring_1()).toEqual([8, 1846]);
    })
});

describe("Object destructuring 2", () => {
    it("Destructures some but not all objects into another object", () => {
        expect(objectDestructuring_2()).toEqual({yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659});
    });
});


describe("Object destructuring 3", () => {
    it("", () => {
        expect(objectDestructuring_3()).toEqual(
            [
                'Your name is Alejandro and you like purple',
                'Your name is Melissa and you like green',
                'Your name is undefined and you like green'
            ]
        );
    });
});

describe("Array destructuring 1", () => {
    it("", () => {
        expect(arrayDestructuring_1()).toEqual(
            [
                'Maya',
                'Marisa',
                'Chi'
            ]
        );
    });
});

describe("Array destructuring 2", () => {
    it("", () => {
        expect(arrayDestructuring_2()).toEqual(
            ['Raindrops on roses',
            'whiskers on kittens',
            ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']]
        );
    });
});

describe("Array destructuring 3", () => {
    it("", () => {
        expect(arrayDestructuring_3()).toEqual([10, 30, 20]);
    });
});

describe("assignVarToObj", () => {
    it("Two objects and creates two global variables", () => {
        let result = assignVarToObj('x', 'y');
        expect(result).toEqual(['x', 'y']);
    });
});

describe("arraySwap", () => {
    it("Swaps two elements in an array", () => {
        expect(arraySwap()).toEqual([2, 1]);
    });
});

describe("raceResults", () => {
    it("Accepts an array and returns an object with the first three elements of the array becoming properties and the remaining elements in an array", () => {
        expect(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])).toEqual(
            {first: "Tom", second: "Margaret", third: "Allison", others: ["David", "Pierre"]}
        );
    });
});

