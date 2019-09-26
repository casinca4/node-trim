
const {prepareString} = require(`./formatting`);
const {printHelp} = require(`./messaging`)

const arg = process.argv.slice(2);                      //s. u.
// const text = arg[0];                                 //s. u.               
const [text] = arg.filter(el => el!=='--help');         //s. u.   

// console.log('arg is', arg);
// console.log('text is', text);


if(arg.includes('--help'))
    printHelp()
let res = prepareString(text);
console.log(res);


/*

[] destructuring; https://dev.to/sarah_chima/destructuring-assignment---arrays-16f; soll ein array sein, wo er sucht

const arg = process.argv.slice(2);         nicht argv.[2], dann kommt nur m raus ('mOna   Lizza')

const text = arg[0];                 //es bleibt ab 3. Stelle, also ist das Wort jetzt an index 0

*/