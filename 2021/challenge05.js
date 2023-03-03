function daysToXmas(date) {
    const xmas = new Date('Dec 25, 2021');
    const xmasDay = new Date (xmas.getTime());

    const milisecondsDay = 86400000;

    return Math.ceil((xmasDay - date) / milisecondsDay)

}

const date1 = new Date('Jan 1, 2022 00:00:01')

console.log(daysToXmas(date1))

// DONE COMPLETLY