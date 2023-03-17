function getGiftsToRefill(a1, a2, a3) {
    const giftsTorefill = [];

    const filterA1 = a1.filter((item,index) => a1.indexOf(item) === index);
    const filterA2 = a2.filter((item,index) => a2.indexOf(item) === index);
    const filterA3 = a3.filter((item,index) => a3.indexOf(item) === index);

    filterA1.forEach(item => {
        if(!filterA2.includes(item) && !filterA3.includes(item)){
            giftsTorefill.push(item);
        }
    });

    filterA2.forEach(item => {
        if(!filterA1.includes(item) && !filterA3.includes(item)){
             giftsTorefill.push(item);
        }
    });

    filterA3.forEach(item => {
        if(!filterA1.includes(item) && !filterA2.includes(item)){
            giftsTorefill.push(item);
        }
    })

    return giftsTorefill
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

console.log(getGiftsToRefill(a1, a2, a3));

// DONE COMPLETLY