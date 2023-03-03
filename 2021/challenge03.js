function isValid(letter) {
    const splitLetter = letter.split(" ");
    const map = splitLetter.map(item =>{
        if(item.includes("(")){
            return item = item.split("")
        }else{
           return item = item;
        }
    })
    return map
    /*if(splitLetter.includes("{") || splitLetter.includes("[") || splitLetter.includes("}") || splitLetter.includes("]")){
        return false;
    }else{
        return true
    }*/
}

const letter = "peluche (bici [coche) bici coche balón"

console.log(isValid(letter))


// TESTS

const array = ["hola", "Yubor"];

const newArray = array.map(item => {
    if(item.includes("h")){
        return item = item.split("")
    }else{
        return item = item
    }
})


console.log(newArray)


// DONE PARTIALY