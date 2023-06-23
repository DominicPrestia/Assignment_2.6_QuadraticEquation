//set 3 numbers
let x = -3
let y = 6
let c = -3



let quadraticEquation = (a, b, c) => {
    let r1
    let r2

    //determine the discriminent 
    let d = b ** 2 - 4 * a * c

    console.log("Discriminant: " + d)

    //determine 1, 2, or imaginary roots
    if (d > 0) {
        r1 = (-(b) + Math.sqrt(d)) / (2 * a)
        r2 = (-(b) - Math.sqrt(d)) / (2 * a)
        console.log("First Result: " + r1 + " " + "Second Result: " + r2)
    }
    else if (d == 0) {
        r1 = -b / (2 * a)
        r2 = -b / (2 * a)
        console.log(r1)
    }
    else {
        console.log("Numbers are Imaginary")
    }

}

quadraticEquation(x, y, c);