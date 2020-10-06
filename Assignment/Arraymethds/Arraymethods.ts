
let div = create('div','container','con');
let p1 = createPara('p','notes','p1','Performing TypeScript task ArrayMethods in Es6 ');
let p2 = createPara('p','notes','p2','Convert Es6 to Es5 code Attach to Html file ');
let p3 = createPara('p','notes','p3','Result is Printed in Console');

div.append(p1,p2,p3);
document.body.append(div);

let a = [10,20,30,40,50];
let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
  let user = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];


let getchunk = (a,b)=>{
    let chun = [];
    let flag = 0;
    let arr = [];
     for(let i=0;i<a.length;i++){
         if(flag<b){
             arr.push(a[i]);
             flag++;
         }
         else{
             //console.log(arr);
             chun.push([...arr]);
            // console.log(chun)
             i--;
             flag=0;
             for(let j=0;j<=arr.length;j++){
                 arr.pop();
             }
            // console.log(arr);
         }
     }
     chun.push([...arr]);
     console.log(chun)
}
let getReduce = (obj,a:number)=>{
    let sum = a;
    for(let i=0;i<obj.length;i++){
        sum+=obj[i];
    }
    console.log(sum);
}

let getFilter = (arr)=>{
   for(let i=0;i<arr.length;i++){
        for(let key in arr[i]){
            if(key == 'active' && arr[i][key]==false){
                console.log(arr[i]);
            }
        }
   }
}

let getFind = (arr)=>{
    for(let i=0;i<arr.length;i++){
         for(let key in arr[i]){
             if(key == 'age' && arr[i][key]>=40){
                 return arr[i];
             }
         }
    }
 }

 let getSum = (arr)=>{
     for(let i=0;i<arr.length-1;i++){
         arr[0]+=arr[i+1];
         //console.log(arr[0]);
     }
     console.log(arr[0]);
 }



getchunk(a,2)
getReduce(a,0);
getFilter(users);
let obj = getFind(user);
console.log(obj);

getSum(a);

function create(ele,name,id){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    a.setAttribute('id',id);
    return a;
}

function createPara(ele,name,id,data){
    let a = document.createElement(ele);
    a.setAttribute('class',name);
    a.setAttribute('id',id);
    a.append(data);
    return a;
}