class Person {
  constructor(name, lastName, age, weight, gender) {
    this._name = name
    this._lastName = lastName
    this._age = age
    this._weight = weight
    this._gender = gender
  }

  get fullName() {
    return `${this._name} ${this._lastName}`
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name
  }

  get lastName() {
    return this._lastName
  }

  set lastName(lastName) {
    this._lastName = lastName
  }

  get age() {
    return this._age
  }

  set age(age) {
    this._age = age
  }

  get weight() {
    return this._weight
  }

  set weight(weight) {
    this._weight = weight
  }

  get gender() {
    return this._gender
  }

  set gender(gender) {
    this._gender = gender
  }

  getDetails() {
    return {
      name: this._name,
      lastName: this._lastName,
      age: this._age,
      weight: `${this._weight}Kg`,
      gender: this._gender
    }
  }

  // static methods can only be called by the class on its own
  static details() {
    return 'This class represents a person. It has name, last name, age, weight and gender.\nYou can add and modify its properties as many times as you want.'
  }

}

console.log(Person.details())

export default Person