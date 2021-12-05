/** 
 * @param {number} num
 * @returns
 */
export default function getRepeatedInfo(num) {
    
    var str = num.toString();
    var final_obj = {}

    for (i = 0; i < str.length ; i++) {
        var result = [];
        for (a = 1 ; a <= Number(str[i]) ; a++) {
            result.push(str[i]);
        }
        final_obj[i + 1] = result
    }   
    return final_obj
}
