function skillsMember() {
  var member = {
    name: 'John Doe',
    age: 30,
    skills: ['HTML', 'CSS', 'JS'],
    salary: 1000,
    // Method
    getSalary: function () {
      return this.salary;
    },
    setSalary: function (salary) {
      this.salary = salary;
    },
  };
  return member;
}
