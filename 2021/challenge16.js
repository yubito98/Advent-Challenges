function decodeNumber(symbols) {
    const individualSymbols = symbols.split("");
    const translateSymbols = individualSymbols.map(item => {

        if(item == "."){
            item = 1;
            return item
        }else if(item ==","){
            item = 5;
            return item;
        }else  if(item == ":"){
            item = 10;
            return item;
        }else if (item == ";"){
            item = 50;
            return item;
        }else if(item == "!"){
            item = 100;
            return item;
        }else{
            return NaN;
        }
    })

    const result = translateSymbols.reduce((acc,value,index)=>{
        if( value < translateSymbols[index + 1]  ) {
             return acc - value;
        }else{
            return acc + value;
        }
    },0)
    return result
}



console.log(decodeNumber(';.W'))


// DONE COMPLETLY