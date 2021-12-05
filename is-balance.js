/** 
 * @param {string} str
 * @returns
 */
export default function  isBalance(str) {
    const result = []

    for (let char of str) {
        if(char === "("){
            result.push(char)
        } else {
            const lastResultItem = result.pop()

            if (lastResultItem !== "(" ) {
                return false
            }

        }
    }
    
    if (result.length !== 0) return false
    
    return true
}



  