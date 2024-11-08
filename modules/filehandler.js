var fs= require("fs");

module.exports.FileReader=()=>{
   console.log("call function");
   var data= fs.stat("./modules/file.txt",(err,stat)=>{
        if(err){
            console.error(err.message);
            return;
        }
        console.log({'isDirectory':stat.isDirectory(),'isfile':stat.isFile(),'issymbolic':stat.isSymbolicLink(),'size':stat.size})
      // return {'isDirectory':stat.isDirectory(),'isfile':stat.isFile(),'issymbolic':stat.isSymbolicLink(),'size':stat.size};
        
        });

    return data;
};

module.exports.ReadFile=()=>{
    fs.readFile("./modules/file.txt", 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      });
};
module.exports.EditFile=()=>{
    const content = 'Suresh Sharma';
    fs.writeFile('/Users/joe/test.txt', content, err => {
    if (err) {
        console.error(err);
    } else {
        // file written successfully
        console.log("file written successfully");
    }
    });
}

