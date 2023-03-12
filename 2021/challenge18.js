function fixFiles(files) {
    const countFiles = {};
    const fixedFiles = [];

    for(let i= 0; i < files.length; i++){
        if(countFiles[files[i]] === undefined){
            countFiles[files[i]] = 1;
            fixedFiles.push(files[i]);
        }else{
            const num = countFiles[files[i]]++;
            const fixedName = `${files[i]}(${num})`;
            countFiles[fixedName] = 1;
            fixedFiles.push(fixedName)
        }
    }

    return fixedFiles
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video'];

console.log(fixFiles(files))

// DONE COMPLETLY
