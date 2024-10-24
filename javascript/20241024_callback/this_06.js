function greet() {
  console.log();
}

const person = {
  name: 'Jhon',
  friends: ['Jane', '수철'],

  printFriends_wrong() {
    this.friends.forEach(function (friend) {
      console.log(this.name + 'knows' + friend);
    });
  },
  printFriends_right() {
    this.friends.forEach((friend) => {
      console.log(this.name + 'knows' + friend);
    });
  },
};

person.printFriends_wrong();
person.printFriends_right();
