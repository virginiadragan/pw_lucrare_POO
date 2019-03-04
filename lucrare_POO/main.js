window.onload = function(){
	let worker1 = new Worker('Ion', 'Creanga', 10, 176);
	let worker2 = new Worker('Mihai', 'Eminescu', 17, 100);
	console.log("Lucratorul nr. 1:")
	console.log(worker1.name);
	console.log(worker1.surname);
	console.log(worker1.hourRate);
	console.log(worker1.hours);
	console.log(worker1.getSalary());
	console.log("Lucratorul nr. 2:")
	console.log(worker2.name);
	console.log(worker2.surname);
	console.log(worker2.hourRate);
	console.log(worker2.hours);
	console.log(worker2.getSalary());
	let maxSalary = worker1.getSalary()>worker2.getSalary()?worker1.name:worker2.name;
	let salary = 
	console.log("Lucratorul cu salariul mai mare este: ", maxSalary, ". Salariul este mai mare cu: " , Math.abs(worker2.getSalary() - worker1.getSalary()));
}

class Worker{

	constructor(name, surname, hourRate, hours){
		this.name = name;
		this.surname = surname;
		this.hourRate = hourRate;
		this.hours =hours;
	}
	getSalary(){
		return this.hourRate*this.hours; //+ " = " + this.hourRate + " + " + this.hours;

	}


}