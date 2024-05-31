const path=require('path')
console.log(path);
console.log(path.basename(__filename)); //gives ' PathModule.js '
console.log(path.basename(__dirname));  //gives  'NODE'
console.log(path.extname(__filename));  //gives  '.js'


console.log(path.parse(__filename));    /*      gives root: 'C:\\',
                                                dir: 'C:\\Users\\user\\Desktop\\NODE',
                                                base: 'PathModule.js',
                                                ext: '.js',
                                                name: 'PathModule'         */

 console.log(path.join(__dirname,'newfile',"Server.js")) //C:\Users\user\Desktop\NODE\newfile\Server.js