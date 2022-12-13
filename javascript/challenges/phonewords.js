/*
DESCRIPTION:
Given a string of numbers, you must perform a method in which you will translate this string into text, following the next image.
	> for example if you get 22 you will b, if you get 222 you will return c. if you get 2222 return ca

	Here some samples:
	- 443355555566604466690277733099966688 -> hello how are you., 55282 -> kata.
	- 1 is used to separate letters with the same number.
	- always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle.
	- 777777 = "sq". 7717777 = "qs".
	- you cannot type digits
	- 0 are spaces in the string.
	- Given a empty string, return empty string.
	- Return a lowercase string.
*/

const keyValues = {
	1: [""],
	2: ["a", "b", "c"],
	3: ["d", "e", "f"],
	4: ["g", "h", "i"],
	5: ["j", "k", "l"],
	6: ["m", "n", "o"],
	7: ["p", "q", "r", "s"],
	8: ["t", "u", "v"],
	9: ["w", "x", "y", "z"],
};

function phoneWords(stringOfNums) {
	let splitedString = stringOfNums.trim().toLowerCase().split("");

	let count = 0;
	try {
		tranlatedString = splitedString.map((el, index) => {
			let character;

			if (el === "0") {
				count = 0;
				return " ";
			} else if (
				el === splitedString[index + 1] &&
				count < keyValues[el].length - 1
			) {
				count++;
				return "";
			}

			character = keyValues[el][count];
			count = 0;
			return character;
		});
	} catch {
		return "Error: There was an error translating the code. Try using only numbers as input";
	}

	return tranlatedString.join("");
}
