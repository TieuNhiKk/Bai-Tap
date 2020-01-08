class Apple {
    constructor(weight) {
        this.weight = weight;
    }
    decrease() {
        if (this.Weight > 0) {
            this.weight--;
        }
    }
    isEmpty() {
        return this.Weight > 0 ? false : true;
    }
    get Weight() {
        return this.weight;
    }
}
class Human {
    constructor(name, weight, gender) {
        this.name = name;
        this.weight = weight;
        this.gender = gender;
    }
    set Name(name) {
        this.name = name;
    }
    set Weight(weight) {
        this.weight = weight;
    }
    set Gender(gender) {
        this.gender = gender;
    }
    isMale() {
        this.gender === "Male" ? true : false;
    }
    get Name() {
        return this.name;
    }
    eat(Apple) {
        if (!Apple.isEmpty()) {
            Apple.decrease();
            this.weight++;
        }
        else {
            alert("Hết táo");
        }
    }
    get Weight() {
        return this.weight;
    }
    say(saying) {
        return saying;
    }
    checkApple(Apple) {
        return Apple.Weight;
    }
}

function eat(id) {
    let human = new Human();
    let getHuman = document.getElementById(id);
    let getApple = document.getElementById("appleWeight");
    let humanWeight = parseInt(getHuman.textContent);
    let appleWeight = parseInt(getApple.textContent);
    let apple = new Apple(appleWeight);
    human.Weight = humanWeight;
    human.eat(apple);
    getApple.innerHTML = human.checkApple(apple);
    getHuman.innerHTML = human.Weight;
}
let saynow = document.getElementById("saynow");
let add = saynow.textContent;
function say(id) {
    let human = new Human();
    console.log("Test: say -> add", add);
    human.Name = id;
    let voi = prompt(`Nhập vào lời của ${human.Name}`);
    if (!voi === null || voi.trim().length >= 1) {
        add += `${human.Name}: ${human.say(voi)} <br> `;
    }
    saynow.innerHTML = add;
}