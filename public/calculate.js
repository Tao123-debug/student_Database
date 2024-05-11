var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
  49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01]
function Ngrade(){
  var NG = document.getElementById("NewGrade").valueAsNumber;
  grades.push(NG);
  document.getElementById("NewGrade").value = "";
}
document.getElementById("Tsubmit").onclick = Ngrade;
console.log('grades', grades)

/*
document.getElementById("max").defaultValue = 100 + ".00";
document.getElementById("A+").defaultValue = 95 + ".00";
document.getElementById("A").defaultValue = 90 + ".00";
document.getElementById("A-").defaultValue = 85 + ".00";
document.getElementById("B+").defaultValue = 80 + ".00";
document.getElementById("B").defaultValue = 75 + ".00";
document.getElementById("B-").defaultValue = 70 + ".00";
document.getElementById("C+").defaultValue = 65 + ".00";
document.getElementById("C").defaultValue = 60 + ".00";
document.getElementById("C-").defaultValue = 55 + ".00";
document.getElementById("D").defaultValue = 50 + ".00";
document.getElementById("F").defaultValue = 0 + ".00";
/*
document.getElementById("C-").addEventListener('change', function() {
const inputCm = this.valueAsNumber;
console.log(typeof inputCm);
});
*/


var part1;
var part2;
var part3;
var part4;
var part5;
var part6;
var part7;
var part8;
var part9;
var part10;
var part11;

var wordInput = document.getElementById("marks");

function Filter(isFromRender){

if(wordInput.value !== '' || isFromRender) {
  for(let i=1; i<= 11; ++i){
    document.getElementById(`o${i}`).innerHTML = '' 
  }
  console.log('wordInput', wordInput.value)

  grades.push(parseFloat(wordInput.value))

  part1 = grades.filter(grades => grades < document.getElementById("max").value && grades >= document.getElementById("A+").value);
  part2 = grades.filter(grades => grades < document.getElementById("A+").value && grades >= document.getElementById("A").value);
  part3 = grades.filter(grades => grades < document.getElementById("A").value  && grades >= document.getElementById("A-").value,);
  part4 = grades.filter(grades => grades < document.getElementById("A-").value && grades >= document.getElementById("B+").value,);
  part5 = grades.filter(grades => grades < document.getElementById("B+").value && grades >= document.getElementById("B").value, );
  part6 = grades.filter(grades => grades < document.getElementById("B").value && grades >= document.getElementById("B-").value,);
  part7 = grades.filter(grades => grades < document.getElementById("B-").value && grades >= document.getElementById("C+").value,);
  part8 = grades.filter(grades => grades < document.getElementById("C+").value && grades >= document.getElementById("C").value, );
  part9 = grades.filter(grades => grades < document.getElementById("C").value && grades >= document.getElementById("C-").value,);
  part10 = grades.filter(grades => grades < document.getElementById("C-").value && grades >= document.getElementById("D").value,);
  part11 = grades.filter(grades => grades < document.getElementById("D").value && grades >= document.getElementById("F").value, );
  let count = "O"
  for (i = 0; i < part1.length; i++){
    document.getElementById("o1").innerHTML += count
  }

  for (i = 0; i < part2.length; i++){
    document.getElementById("o2").innerHTML += count
  }
  for (i = 0; i < part3.length; i++){
    document.getElementById("o3").innerHTML += count
  }
  for (i = 0; i < part4.length; i++){
    document.getElementById("o4").innerHTML += count
  }
  for (i = 0; i < part5.length; i++){
    document.getElementById("o5").innerHTML += count
  }
  for (i = 0; i < part6.length; i++){
    document.getElementById("o6").innerHTML += count
  }
  for (i = 0; i < part7.length; i++){
    document.getElementById("o7").innerHTML += count
  }
  for (i = 0; i < part8.length; i++){
    document.getElementById("o8").innerHTML += count
  }
  for (i = 0; i < part9.length; i++){
    document.getElementById("o9").innerHTML += count
  }
  for (i = 0; i < part10.length; i++){
    document.getElementById("o10").innerHTML += count
  }
  for (i = 0; i < part11.length; i++){
    document.getElementById("o11").innerHTML += count
  }
  wordInput.value = ''
}

}
Filter(true);

const onSubmitGrade = (e) => {
e.preventDefault();
Filter(false)
}
const onSubmitGrade1 = (e) => {
  e.preventDefault();
  Filter(true)
  }
document.getElementById("myForm").addEventListener("submit", onSubmitGrade);
document.getElementById("RangeInput").addEventListener("keyup", onSubmitGrade1);

function range(){
  if ((document.getElementById("max").valueAsNumber < document.getElementById("A+").valueAsNumber) || (document.getElementById("A+").valueAsNumber < document.getElementById("A").valueAsNumber) ||
  (document.getElementById("A").valueAsNumber < document.getElementById("A-").valueAsNumber) || (document.getElementById("A-").valueAsNumber < document.getElementById("B+").valueAsNumber) || 
  (document.getElementById("B+").valueAsNumber < document.getElementById("B").valueAsNumber) || (document.getElementById("B").valueAsNumber < document.getElementById("B-").valueAsNumber) ||
  (document.getElementById("B-").valueAsNumber < getElementById("C+").valueAsNumber) || (getElementById("C+").value <= getElementById("C").valueAsNumber) || (getElementById("C").valueAsNumber < 
  getElementById("C-").valueAsNumber) || (getElementById("C-").valueAsNumber < getElementById("D").valueAsNumber) || (getElementById("D").valueAsNumber < getElementById("F").valueAsNumber)) {
    alert("Over the range, please re-enter!!!");
  }
}
console.log('part1', part1)
console.log('part2', part2)


/*
const all_grades = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F']
for (let grade of grades){
let _n = all_grades.split('-').map((item) => item, 10))
if(_n[1] <= grade &&  gra< _n[0]) {
  acc[all_grades].count += '0'
}
}
var max = document.getElementById("max").value;
var ap = document.getElementById("A+").value;
var a = document.getElementById("A").value;
var o1 = document.getElementById("o1").value;

for (let i = 0, n = grades.length; i < n; ++i){

}
for(let i=0; i< grade_ranges.length; ++i){
  if(i = grade_ranges[1]){
   result = grade_ranges.reduce((acum, cur) => ({ ...acum, [cur]: (acum[cur] || '') + '*' }), {});

    
    }
}
//
let all_grade_ranges = []

for(let i = 100; i >= 50; i -= 5){
all_grade_ranges.push(i)
}
all_grade_ranges.push(0)

console.log('all_grade_ranges', all_grade_ranges)
console.log('grades', grades)
const all_grades = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F']
// console.log('all_grades.length', all_grades.length)
// console.log('all_grade_ranges.length', all_grade_ranges.length)
let range_obj = {}
// let i = 0
for(let i=0; i< all_grade_ranges.length; ++i){
if(all_grade_ranges.length != i+1){
  range_obj[`${all_grade_ranges[i]}-${all_grade_ranges[i+1]}`] = {
    grade: all_grades[i],
    count: ''
  }
}
}
console.log('range_obj', range_obj)
for(let grade of grades){
range_obj = Object.keys(range_obj).reduce((acc, cv, i, a)=> {
  acc[cv] = range_obj[cv]
  let _n = cv.split('-').map((item) => item, 10))
  if(_n[1] <= grade &&  ge < _n[0]) {
    acc[cv].count += '0'
  }
  return acc
}, {})
}
console.log('range_obj', range_obj)
//
*/
