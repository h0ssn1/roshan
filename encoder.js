/** 
 * @param {string} inputString
 * @param {number} repeqatCount
 * @returns
 */
export function encoder({ inputString, repeatCount }) {
	for (let count = 0; count < repeatCount ; count++) {
		res = "";
		lastChar = inputString.slice(
			inputString.length - 1,
			inputString.length
		);
		str = lastChar + inputString.slice(0, inputString.length - 1);

		for (let i = 0; i < str.length; i++) {
			if (str[i] == "z") {
				res += "a";
			} else {
				let nextLetter = String.fromCharCode(
					str[i].charCodeAt(str[i].length - 1) + 1
				);
				res += nextLetter;
			}
		}
		inputString = res;
	}
	return res;
}
