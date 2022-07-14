"use strict";
const _ = require('lodash');

class Company{
  workers = [];

  constructor(worker){
      this.workers.push(worker); 
  }

  addWorker(worker){
    const array = this.workers.keys(this.worker);
    const properArray = ['id', 'name', 'age', 'position', 'salary'];


    /*const hasID = "id" in worker;
    const hasName = "name" in worker;
    const hasAge = "age" in worker;
    const hasPosition = "position" in worker;
    const hasSalary = "salary" in worker;*/

    if(_.isEqual(array,properArray)){
      this.workers.push(worker);
    }else{
      console.log("Not all fields.Required: \n-id;\n-name;\n-age;\n-position;\n-salary");
    }
  }

  removeWorker(id){
    const idIndex = this.workers.findIndex(Object => {
      return Object.id === id;
    });
    if (idIndex > -1) {
      this.workers.splice(idIndex, 1);
    }else{
      console.log("Incorrect ID. Worker doesn't remove!");
    }
  }

  updateSalary (id, salary) {
    const item = this.workers.find(x => x.id === id);

    if(Number.isInteger(id) && Number.isInteger(salary)){
      item.salary = salary;
    }else{
      console.log("Input ID or Salary is incorrect! Can't update salary!");
    }
  }

  getAll(){
    return this.workers;
  }

  getById(id){

    /*const propertyName = "id";
    for(let i=0; i<this.workers.length; i++){
     if(this.workers[i][propertyName] === id ){
      return this.workers[i];
     }
    }*/
    if(Number.isInteger(id)){
      return this.workers.filter(worker => worker.id === id)[0];
    }else{
      console.log("Input ID is incorrect! Can't find worker");
    }
  }
}



const worker = new Company({
  id: 234098,
  name: 'ivan',
  age: '22',
  position: "programmer",
  salary: 100
});

worker.addWorker({id: 345678, /*name:'bem',*/ age:'27', position:"doctor", salary: 200,});

//worker.removeWorker(2340);

//worker.updateSalary(34568);

//worker.getById("gjhjkhk");

console.log(worker.getAll());
