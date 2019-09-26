module.exports.prepareString = (str) => {           //str oder text
    const tempArr = str.split(' ');
    const wordArr = tempArr.filter(el => el !== '');
    const fineArr = capitalizeWords (wordArr);
    const res = fineArr.join(' ');  
    // console.log(res);                                            //s. u.
    return res; 
    // const lowerArr = wordArr.map(el => el.toLowerCase());
    // lowerArr[0] = lowerArr[0][0].toUpperCase() + lowerArr[0].slice(1);
    // console.log(lowerArr);
    // let word = string.map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join(' ').trimEnd().trimStart()
    // console.log(word)
    // let wordTrim = word.replace(/\s+/g, " ");
    // console.log(wordTrim)
    // string = string.split(' ').toUpperCase([0])
    // toUpperCase().trimEnd().trimStart()

    // console.log(string);

}

const capitalizeWords = arr => {
    return arr.map(el => el = el[0].toUpperCase() + el.slice(1).toLowerCase());
    
}

/*

console.log (res) nicht hier, sondern in index, deswegen hier return; weil es nicht nur in dieser Funktion gedruckt werden soll, sondern

*/
