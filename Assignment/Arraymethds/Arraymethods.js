var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var div = create('div', 'container', 'con');
var p1 = createPara('p', 'notes', 'p1', 'Performing TypeScript task ArrayMethods in Es6 ');
var p2 = createPara('p', 'notes', 'p2', 'Convert Es6 to Es5 code Attach to Html file ');
var p3 = createPara('p', 'notes', 'p3', 'Result is Printed in Console');
div.append(p1, p2, p3);
document.body.append(div);
var a = [10, 20, 30, 40, 50];
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];
var user = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];
var getchunk = function (a, b) {
    var chun = [];
    var flag = 0;
    var arr = [];
    for (var i = 0; i < a.length; i++) {
        if (flag < b) {
            arr.push(a[i]);
            flag++;
        }
        else {
            //console.log(arr);
            chun.push(__spreadArrays(arr));
            // console.log(chun)
            i--;
            flag = 0;
            for (var j = 0; j <= arr.length; j++) {
                arr.pop();
            }
            // console.log(arr);
        }
    }
    chun.push(__spreadArrays(arr));
    console.log(chun);
};
var getReduce = function (obj, a) {
    var sum = a;
    for (var i = 0; i < obj.length; i++) {
        sum += obj[i];
    }
    console.log(sum);
};
var getFilter = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var key in arr[i]) {
            if (key == 'active' && arr[i][key] == false) {
                console.log(arr[i]);
            }
        }
    }
};
var getFind = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var key in arr[i]) {
            if (key == 'age' && arr[i][key] >= 40) {
                return arr[i];
            }
        }
    }
};
var getSum = function (arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        arr[0] += arr[i + 1];
        //console.log(arr[0]);
    }
    console.log(arr[0]);
};
getchunk(a, 2);
getReduce(a, 0);
getFilter(users);
var obj = getFind(user);
console.log(obj);
getSum(a);
function create(ele, name, id) {
    var a = document.createElement(ele);
    a.setAttribute('class', name);
    a.setAttribute('id', id);
    return a;
}
function createPara(ele, name, id, data) {
    var a = document.createElement(ele);
    a.setAttribute('class', name);
    a.setAttribute('id', id);
    a.append(data);
    return a;
}
