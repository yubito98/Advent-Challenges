 function pangram(letter){

    const abecedario = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'ñ', 'o', 'p', 'q',
        'r', 's', 't', 'u', 'v', 'w',
        'x', 'y', 'z'
      ];

    const newLetter = letter.toLowerCase();
    const removeSpecialCharacteres = newLetter.replace(/[^\w\sáéíóúÁÉÍÓÚñÑ]/gi, "")
    const splitLetter = removeSpecialCharacteres.split("");
    const removeSpaces = splitLetter.filter(item => item != " ");
    const validate = abecedario.every(item =>{
        if (removeSpaces.includes(item)) {
            return true  
        }else{
            return false
        }
    })

    return validate
}

const message = 'De la a a la z, nos faltan letras';
console.log(pangram(message))

// DONE COMPLETLY





