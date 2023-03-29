function getFilesToBackup(lastBackup, changes){
    const filesModified = changes.filter(item =>{
    if(item[1] != lastBackup && item[1] > lastBackup){
        item.pop()
        return item
    }
    });
    const flatFiles = filesModified.flat();
    const filesId = flatFiles.filter((item, index) => flatFiles.indexOf(item) == index)
    return filesId.sort((a,b) => a - b)
}

const lastBackup = 1546300800
const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]

console.log(getFilesToBackup(lastBackup,changes))

// DONE COMPLETLY

