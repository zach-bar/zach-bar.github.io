const fs = require('fs');

try {
    const jsonString = fs.readFileSync("./blogs.json");
    const blogs = JSON.parse(jsonString);
  } catch (err) {
    console.log(err);
    return;
  }

for (let i = blogs.length-1; i >= 0; i--){
    var htmlContent = '<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://use.typekit.net/ufg7hqz.css"><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><link rel="stylesheet" href="./css/style.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"><script src="https://kit.fontawesome.com/98976593eb.js" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script><script src="./js/blogscript.js" defer></script></head><body></body></html>';
  
    fs.writeFile(blogs[i].reference, htmlContent, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
}

// function newPage(index){
//     var htmlContent = '<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://use.typekit.net/ufg7hqz.css"><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><link rel="stylesheet" href="./css/style.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"><script src="https://kit.fontawesome.com/98976593eb.js" crossorigin="anonymous"></script><script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script><script src="./js/blogscript.js" defer></script></head><body></body></html>';
  
//     fs.writeFile(blogs[index].reference, htmlContent, (err) => {
//       if (err) throw err;
//       console.log('The file has been saved!');
//     });
//   }