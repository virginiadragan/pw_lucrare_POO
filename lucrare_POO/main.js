window.onload = function(){
	let worker1 = new Worker('Ion', 'Creanga', 10, 176);
	let worker2 = new Worker('Mihai', 'Eminescu', 17, 100);
	let worker3 = new Worker('Alecu', 'Russo', 15, 200);
	let workers = [worker1, worker2, worker3];
	for(let i = 0; i < workers.length; i++){
		console.log(workers[i].getName());
		console.log(workers[i].getSurname());
		console.log(workers[i].getRate());
		console.log(workers[i].getHours());
		workers[i].increaseSalary(2);
		console.log(workers[i].getSalary());
		workers[i].setTax(18);
		console.log(workers[i].getSalaryNetto(18));
	}

	let maxSalary = worker1.getSalary()>worker2.getSalary()?worker1.name:worker2.name;
	console.log("Lucratorul cu salariul mai mare este: ", maxSalary, ". Salariul este mai mare cu: " , Math.abs(worker2.getSalary() - worker1.getSalary()));
}

class Worker{

	constructor(name, surname, hourRate, hours){
		this.name = name;
		this.surname = surname;
		this.hourRate = hourRate;
		this.hours =hours;
	}
	getName(){
		return this.name;
	}
	getSurname(){
		return this.surname;
	}
	getRate(){
		return this.hourRate;
	}
	getHours(){
		return this.hours;
	}

	getSalary(){
		return this.hourRate*this.hours; //+ " = " + this.hourRate + " * " + this.hours;
	}
	increaseSalary(i){
		this.hourRate += i;
	}
	setTax(i){
		return (this.getSalary()*i)/100;
	}
	getSalaryNetto(i){
		return (this.getSalary() - this.setTax(i));
	}

}