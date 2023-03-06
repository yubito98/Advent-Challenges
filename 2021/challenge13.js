function wrapGifts(gifts) {
    const wrapingGifts = gifts.map(item => {
        item = item.split("");
        item.unshift("*")
        item.push("*");
        return item.join("");
    })
    wrapingGifts.unshift("****");
    wrapingGifts.push("****")
    return wrapingGifts
}

console.log(wrapGifts(["Sarita", "Yubito","Karol"]))

// DONE COMPLETLY