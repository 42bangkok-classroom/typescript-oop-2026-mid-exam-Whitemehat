export interface Person {
  firstName?: string;
  lastName?: string;
  age: number;
}

function sortPersons(persons: Person[]): Person[] {
  let result : Person[] = [];
  for(const p of persons){
    if(!p.firstName || !p.lastName || !p.age || p.age < 0|| p.age > 100) continue;
    else {
      result.push({
        firstName: p.firstName,
        lastName: p.lastName,
        age: p.age
      });
    }
  }
  return result.sort((a,b) => a.age - b.age);
}


const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];
