window.onload = function() {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
        this.type = "Dog";
        this.image = "dog.jpg";
    }

    function Dolphin(name, age) {
        this.name = name;
        this.age = age;
        this.type = "Dolphin";
        this.image = "dolphin.jpg";
    }

    function Lion(name, age) {
        this.name = name;
        this.age = age;
        this.type = "Lion";
        this.image = "lion.jpg";
    }

    var animal = [new Dog("test1", "1"), new Dolphin("test2", "2"), new Lion("test3", "22")];
    var names = ["Arbab", "dolly", "Uday"];

    var generateRandomIndex = function(maxIndex) {
        var randomInt = Math.floor(Math.random() * maxIndex);
        return randomInt;
    };

    var generateRandomName = function() {
        var randomIndex = generateRandomIndex(3);
        return names[randomIndex];
    };

    var generateRandomAge = function() {
        return generateRandomIndex(25);
    };

    var generateRandomAnimal = function() {
        var randomName = generateRandomName();
        var randomAge = generateRandomAge();


        var randomIdx = generateRandomIndex(3);
        var temp = animal[randomIdx];

        if (temp instanceof Dog) {
            return new Dog(randomName, randomAge);
        }
        if (temp instanceof Dolphin) {
            return new Dolphin(randomName, randomAge);
        }
        if (temp instanceof Lion) {
            return new Lion(randomName, randomAge);
        }
    };

    console.log(generateRandomIndex(3));
    console.log(generateRandomName());
    console.log(generateRandomAge()); 
    
    var saveAnimal = document.getElementById('btnSave');
    var clearAnimal = document.getElementById('btnClear');
    var animalToSave = generateRandomAnimal();
    
    saveAnimal.onclick = function() {
        localStorage.setItem("Sabby", JSON.stringify(animalToSave));
    }
    
    clearAnimal.onclick = function() {
        localStorage.removeItem("Sabby");
    }
    
    if (localStorage.getItem("Sabby") === null) {
        console.log(animalToSave);
    }
    else {
        console.log(JSON.parse(localStorage.getItem("Sabby")));
    }
    
}
    
    