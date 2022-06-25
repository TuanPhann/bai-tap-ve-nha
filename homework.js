// exercise 1
var isNumber = [1, 2, 5, 4, 3];

isNumber.sort(function () {
    return -1
});
console.log(isNumber); //output isNumber = [5, 4, 3, 2, 1]


// exercise 2 :  way 1
var isNumber = [["a", "b"], ["c", "d"], ["e", "f"]];
var output = isNumber.reduce(function (arraynew, iteam) {
    return arraynew.concat(iteam)
}, [])
console.log(output); // output = 'a', 'b', 'c', 'd', 'e', 'f']

// exercise 2 :  way 2
var isNumber = [["a", "b"], ["c", "d"], ["e", "f"]];
var output = isNumber.flat(Infinity);
console.log(output); // output = 'a', 'b', 'c', 'd', 'e', 'f']

//exercise 3
var isNumber = [1, 4, 90, 5, 6, 33, 2, 3, 51];
var total = [];
for (var a of isNumber) {
    if (a > 5) {
        total.push(a)
    }
}
var [_, ...isNumberTwo] = total; // từ mảng total  lấy ra mảng mới là isNumberTwo
isNumberTwo.reverse(); // đảo ngược mảng mới lại
var firtNumber = total.shift(); //lấy ra phần tử đầu của mảng total
isNumberTwo.unshift(firtNumber);
console.log(isNumberTwo); // output isNumberTwo =  [90, 51, 33, 6];


//exercise 4    
var isNumber = [1, 4, 90, 5, 6, 33, 2, 3, 51];

var resualt = isNumber.reduce(function (array, total) {
    return array += total
}, 0)

console.log(resualt); //resualt = 195;


//exercise 5
var isNumber = [5, 8, 3, 12, 66, 2];
var output = [];
for (var a of isNumber) {
    a += 5;
    output.push(a)
}
console.log(output); //output = [10, 13, 8, 17, 71, 7]

//way 2 
var isNumber = [5, 8, 3, 12, 66, 2];
var output = isNumber.map(function (iteam, index) {
    return iteam += 5
})
console.log(output); //output = [10, 13, 8, 17, 71, 7]


//exercise 6
var isNumber = [5, 8, 3, 12, 66, 2];
var total = []
for (var a of isNumber) {
    if (a % 2 === 0) {
        total.push(a)
    }
}

var output = total.reduce(function (firtValue, elNumber) {
    return firtValue += elNumber
}, 0)

console.log(output); // output = 88;


//exercise 7 
var isIdol = ["avengers", "captain america", "ironman", "black panther"];
var output = [];
for (var a of isIdol) {
    var b = a.toLocaleUpperCase()
    output.push(b)
}
console.log(output);  // output = ['AVENGERS', 'CAPTAIN AMERICA', 'IRONMAN', 'BLACK PANTHER']

// way 2
var isIdol = ["avengers", "captain america", "ironman", "black panther"];
var output = isIdol.map(function (iteam, index) {
    return iteam.toLocaleUpperCase()
})
console.log(output); // output = ['AVENGERS', 'CAPTAIN AMERICA', 'IRONMAN', 'BLACK PANTHER']


//exercise 8 
var input = ["Hùng", "Duy", "Tuấn", "An", "Hoàng", "Đức"];

//nếu phần tử nào ở mảng ban đầu có chiều dài ít hơn 3 ký tự thì thay thế bằng số -1 trong mảng mới;

//nếu phần tử nào có chiều dài bằng 3 ký tự thì thay thế bằng số 0 trong mảng mới;

//còn nếu phần từ nào có chiều dài lớn hơn 3 ký tự thì thay thế bằng số 1;

var output = []
for (var iteam of input) {
    if (iteam.length > 3) {
        iteam = 1
        output.push(iteam)
    } else if (iteam.length === 3) {
        iteam = 0
        output.push(iteam)
    } else if (iteam.length < 3) {
        iteam = -1
        output.push(iteam)
    }
}
console.log(output); // output = [1, 0, 1, -1, 1, 0]


// way 2
var input = ["Hùng", "Duy", "Tuấn", "An", "Hoàng", "Đức"];

var output = input.map(function (iteam, index) {
    if (iteam.length > 3) {
        iteam = 1
    } else if (iteam.length === 3) {
        iteam = 0
    } else if (iteam.length < 3) {
        iteam = -1
    }
    return iteam
})
console.log(output); // output = [1, 0, 1, -1, 1, 0]

// way 3
var input = ["Hùng", "Duy", "Tuấn", "An", "Hoàng", "Đức"];
var a = input
    .filter(function (iteama, indexa) {
        return iteama.length > 3
    })
    .map(function (iteamaaa, indexaaa) {
        return iteamaaa = 1
    })
var b = input
    .filter(function (iteama, indexa) {
        return iteama.length === 3
    })
    .map(function (iteamaaa, indexaaa) {
        return iteamaaa = 0
    })
var c = input
    .filter(function (iteama, indexa) {
        return iteama.length < 3
    })
    .map(function (iteamaaa, indexaaa) {
        return iteamaaa = -1
    })

var output = a.concat(c).concat(b);
var lastNumber = output.pop();
var firtNumber = output.shift();
output.splice(1, 0, lastNumber)
output.splice(4, 0, firtNumber)
console.log(output); // [1, 0, 1, -1, 1, 0]




