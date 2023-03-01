function listGifts(letter){
    const newLetter = letter.split(" ");
    const newLetterfiltered = newLetter.filter(item => !item.includes("_"));
    const countingGifts= newLetterfiltered.reduce((a, b) => (a[b] ? a[b] += 1 : a[b] = 1, a ), {} )
    return countingGifts;
}

const carta = 'bici coche balón _playstation bici coche peluche'
const regalos = listGifts(carta)
console.log(regalos)

