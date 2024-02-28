export {};

// Property has no initializer and is not definitely assigned in the constructor

// EXAMPLE 1 - Provide initial values for the class properties

class Employee {
  name = 'Bobby Hadz';
  salary = 0;
  tasks: string[] = [];
  address: { country: string; city: string } = {
    country: '',
    city: '',
  };
}

// ---------------------------------------------------

// // EXAMPLE 2 - Using the non-null assertion operator instead

// class Employee {
//   name!: string;
//   salary!: number;
//   tasks!: string[];
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Provide initial values inside of the classes' constructor

// class Employee {
//   name: string;
//   salary: number;
//   tasks: string[];

//   constructor() {
//     this.name = '';
//     this.salary = 0;
//     this.tasks = [];
//   }
// }

// ---------------------------------------------------

// // EXAMPLE 4 - Mark the class properties as optional

// class Employee {
//   name?: string;
//   salary?: number;
//   tasks?: string[];
// }
