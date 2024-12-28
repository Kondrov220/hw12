//1
const user = {
    hobby: "football",
    premium: true,
}

const {hobby, premium} = user;

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
console.log(user);

for(const key of Object.keys(user)){
    console.log(`${key} : ${user[key]}`);
}
//2
function countProps(obj){
let total = 0;
for(const key in obj){
    total ++;
}
console.log(total);
}

countProps(user);
//3
const pupil = {
    stas: 12,
    andriy: 11,
    ostap:13,
    kiril:11
}

const {stas, andriy, ostap, kiril} = pupil;

function findBestEmployee(employees) {
    let max = 0;
    let bestEmployee ;
    for(const key in employees){
        if(employees[key] > max){
            max = employees[key];
            bestEmployee = key;
        }
        // console.log(employees[key]);
        // console.log(employees[key]);
        // console.log(employees[key] > max);
    }
    return(bestEmployee);
}

console.log(findBestEmployee(pupil));
//4
const salary = {
    genya:  39657,
    igor:39567,
    sasha: 36787,
    pasha: 39458
}

const {genya, igor, sasha, pasha} = salary;


function countTotalSalary(employees) {
    let max = 0;
    for(const key in employees){
        max += employees[key];
    }
    return(max);
}

console.log(countTotalSalary(salary));
//5
const users = [
    { name: 'Mango', age: 20 },
    { name: 'Poli', age: 25 },
    { name: 'Ajax', age: 30 }
  ];
  
function getAllPropValues(arr, prop) {
    let names = [];
    for(const key of arr){
        names.push(key[prop]);
    }
    return(names);
}

console.log(getAllPropValues(users, "name"));
//6
const frut = [
    { name: 'Mango', cost: 200, number: 5},
    { name: 'Apple', cost: 250, number: 15},
    { name: 'Banana', cost: 300, number: 9 }
  ];

function calculateTotalPrice(allProdcuts, productName) {
for(const key of allProdcuts){
    if(key["name"] == productName){
        console.log(`${productName} коштують ${key["cost"] * key["number"]}`);

    }
}
}
calculateTotalPrice(frut, "Mango");
calculateTotalPrice(frut, "Apple");
calculateTotalPrice(frut, "Banana");