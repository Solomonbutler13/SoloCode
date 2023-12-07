```js
class Animal {
    constructor (name, noise, eats, lives){ 
        this.name = name;
        this.noise = noise;
        this.eats = eats;
        this.lives = lives; 
    }
    makeNoise(){
        return this.noise
    }

    eatsWhat(){
        return this.eats
    }

    livesWhere(){
        return this.lives
    }

    log(){
        console.log(`${this.name} lives in ${this.lives}, they ${this.noise} and are ${this.eats}`)
    }
}

const dog = new Animal ('dogs', 'bark', 'carnivorous', 'peoples houses')
const cat = new Animal ('cats', 'meow', 'carnivorous', 'peoples houses')
const bird = new Animal ('birds', 'chirp', 'omnivores', 'trees')
dog.log()
cat.log()
bird.log()
```

```output
dogs lives in peoples houses, they bark and are carnivorous
cats lives in peoples houses, they meow and are carnivorous
birds lives in trees, they chirp and are omnivores
```

```js
class Shoes {
    constructor (size, color, type, age){ 
        this.size = size;
        this.color = color;
        this.type = type;
        this.age = age; 
    }
    sizeNum(){
        return this.size
    }

    shoeColor(){
        return this.color
    }

    shoeType(){
        return this.type
    }

    shoeAge(){
        return this.age
    }

    log(){
        console.log(`My ${this.type} are ${this.color}, size ${this.size} and are ${this.age} years old.`)
    }
}
const flipflops = new Shoes ('9', 'yellow', 'flipflops', '6')
const boots = new Shoes ('10', 'black', 'boots', '20')
const sneakers= new Shoes ('8', 'grey', 'sneakers', '2')
flipflops.log()
boots.log()
sneakers.log()
```

```output
My flipflops are yellow, size 9 and are 6 years old.
My boots are black, size 10 and are 20 years old.
My sneakers are grey, size 8 and are 2 years old.
```