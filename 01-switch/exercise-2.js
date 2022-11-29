// let ceo = 2200;
// let manager = 1800;
// let cto = 1800;
// let developer = 1500;

function calculateSalary(role) {
  switch(role){
    case "ceo" : 
      return role=2200;
      break;
      case "manager" : 
      return role=1880;
      break;
      case "cto" : 
      return role=1800;
      break;
      case "developer" : 
      return role=1500;
      break;
      default:
        return role=1000; 
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);