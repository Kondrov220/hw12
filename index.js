//1
const user = {
    hobby: "football",
    premium: true,
}

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

function findBestEmployee(employees) {
    let max = 0;
    let bestEmployee ;
    
}

findBestEmployee(pupil);