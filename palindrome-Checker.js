 function isPalindrome(str) {
            const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

            for (let i = 0; i < cleanedStr.length / 2; i++) {
                if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
                    return false;
                }
            }

            return true;
        }

        function checkPalindrome() {
            const inputText = document.getElementById("inputText").value;
            const resultElement = document.getElementById("result");

            if (isPalindrome(inputText)) {
                resultElement.innerHTML = `"${inputText}" is a palindrome.`;
            } else {
                resultElement.innerHTML = `"${inputText}" is not a palindrome.`;
            }
        }