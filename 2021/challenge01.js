function contarOvejas(ovejas) {
    const filtersheep = ovejas.filter(item =>{
        item.name = item.name.toLowerCase();
        if(item.name.includes("na") && item.color == "rojo"){
            return item
        }
    }) 
    return filtersheep
  }

  const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

  console.log(contarOvejas(ovejas))