/** 
 * @param {string} ops
 * @returns
 */
export default function operations(ops) {
	splited_string = ops.split(" ");
	var res = [];

	for (i = 0; i < splited_string.length; i++) {
		let char = splited_string[i];
		if (!isNaN(char)) res.push(Number(char));
		else if (char === "D") res.push(res[res.length - 1] * 2);
		else if (char === "R" && res.length > 0) res.pop();
		else if (char === "+" && res.length > 1)
			res.push(res[res.length - 1] + res[res.length - 2]);
		else return "Invalid String!!!!";
		console.log(res);
	}
	console.log(res.reduce((a, b) => a + b, 0));
	return res;
}
