const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    return salary * this.tax;
}
console.log(getMyTaxes.call(ukraine,2500));

function getMiddleTaxes(){
    return  this.tax * this.middleSalary;
}
console.log(getMiddleTaxes.call(ukraine));

function getTotalTaxes(){
    return +(this.tax*this.vacancies*this.middleSalary).toFixed(2);
}
console.log(getTotalTaxes.call(ukraine));

function getMySalary(){
    let result = {};
    result.salary=Math.floor(Math.random()*500+1500);
    result.taxes = this.tax*result.salary;
    result.profit = result.salary-result.taxes;
    return result;
}
setInterval(()=>console.log(getMySalary.call(ukraine)),1000*10);

