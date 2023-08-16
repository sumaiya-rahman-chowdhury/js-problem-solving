function checkAnagram(str1, str2) {
    // objct nbo
    let objStr1 = {};
    if (str1.length !== str2.length) {
        return false;
    }
    for (ch of str1) {
        // console.log(ch)
        objStr1[ch] = (objStr1[ch] || 0) + 1;
    }
    // console.log(objStr1)
    for (ch of str2) {

        if (!objStr1[ch]) {
            return false;
        }
        objStr1[ch]--;
    }

    return true;


}


const result = checkAnagram("cat", "act");
console.log(result);