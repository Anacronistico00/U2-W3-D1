class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  youngerOlder(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} ${this.lastName} è più vecchio di ${otherUser.firstName} ${otherUser.lastName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} ${this.lastName} è più giovane di ${otherUser.firstName} ${otherUser.lastName}`;
    } else {
      return ` ${this.firstName} ${this.lastName} e ${otherUser.firstName} ${otherUser.lastName} hanno la stessa età`;
    }
  }
}

const user1 = new User('Marco', 'Pallino', 22, 'Torino');
const user2 = new User('Giorgio', 'Alliago', 42, 'Milano');
const user3 = new User('Vittorio', 'Turiaci', 24, 'Cosenza');
const user4 = new User('Armando', 'Fratillo', 42, 'Roma');

console.log();

console.log(user1.youngerOlder(user2));
console.log(user2.youngerOlder(user1));
console.log(user3.youngerOlder(user1));
console.log(user4.youngerOlder(user2));
