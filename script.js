function playFizzBuzz() {
    const randomNumber =
        Math.floor(Math.random() * 100) + 1 //1から100までのランダム数を生成

    let result = "Default"; //デフォルトの結果

    if (randomNumber % 3 === 0) {
        result = "Fizz";
    }

    if (randomNumber % 5 === 0) {
        if (result === "Buzz") {
            result += "Buzz";
        } else {
            result = "Buzz";
        }
    }
    document.getElementById("result").textContent = result;
}