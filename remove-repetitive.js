/** 
 * @param {string} str
 * @returns
 */
export default function removeRepetitive(str) {
    var result = "";
    var freq = {};
    for (i = 0; i < str.length; i++) {
       let char = str[i];
       if (freq[char]) {
          freq[char]++;
       } else {
          freq[char] = 1
          result = result + char;
       }
    }
    return result;
 }
