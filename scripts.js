function sum () {
let x = 2 + 2;
console.log (x);
}

const anotherSum = function () {
    let x = 3 * 3;
    console.log(x);
    };

    function bestSum (a, b, c ) {
        let x = a + b;
        let sumDivided = sum / c;
        return sumDivided;
    }

    // bestSum(3, 4);
    // bestSum(10, 20);
    // bestSum(4, 5);
    console.log(bestSum(2, 2));