// An array of people
const people = [
  { name: 'John', age: 30, location: 'New York' },
  { name: 'Mike', age: 25, location: 'Chicago' },
  { name: 'Samantha', age: 35, location: 'Los Angeles' }
];

// An object of people
const citenzens = {
  john: { age: 30, location: 'New York' },
  mike: { age: 25, location: 'Chicago' },
  samantha: { age: 35, location: 'Los Angeles' }
};

let person = {name: "John", age: 30, job: "developer"};
let personValues = [Object.values(person)];
console.log(personValues); // Output: ["John", 30, "developer"]

/////////////////////
let ageGuerreroFamily = {
  nico: "17",
  samu: "12",
  claudia:"+40",
  raul: "+40",
  kira:"es una perra"
};
function solution(ageName)
{
  if (ageGuerreroFamily[ageName])
  {
    console.log(ageGuerreroFamily[ageName]);
    return ;

  }
  
    alert("you're wrong"); 
  

}
solution("nico");

