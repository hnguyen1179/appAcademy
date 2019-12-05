function Cat(name, owner) { 
    this.name = name;
    this.owner = owner; 
}

Cat.prototype.cuteStatement = function() {
    return `${this.owner} loves ${this.name}`;
}

Cat.prototype.meow = function() {
    return `${this.name} meows`;
}

let cat1 = new Cat('Harry', 'Julie');
let cat2 = new Cat('Odie', 'Duke');

cat2.meow = function() {
    return `${this.name} barks`;
}

console.log(cat1.meow());
console.log(cat2.meow());

