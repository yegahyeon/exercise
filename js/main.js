const num = Math.floor(Math.random() * 100);
const input = document.getElementById("answer");
const btn = document.getElementById("btn");
const hint = document.getElementById("hint");

btn.addEventListener("click", () => {
    let inputValue = parseFloat(input.value);
    console.log(inputValue);
    if (num == inputValue) {
        window.alert("정답!");
    } else if (inputValue > 101) {
        window.alert("101보다 작은 수에요ㅜㅠ");
    } else {
        window.alert("틀렸읍니다...");
    }

    document.querySelector("fieldset").innerHTML += `<p>` + inputValue + `</p>`;
});

hint.addEventListener("click", () => {
    if (num < 10) {
        window.alert("10보다 작은 숫자에요");
    } else if (num === 1) {
        window.alert("당신이 아는 제일 작은 양의 정수! ");
    } else if (num === 100) {
        window.alert("제가 처리할 수 있는 가장 큰 숫자! ");
    } else if (num < 100 && num > 89) {
        window.alert("100이랑 가까워요! ");
    } else if (num < 60 && num > 40) {
        window.alert("중간 쯤... 어디 일걸요..?");
    } else if (num === 38) {
        window.alert("가현이 생일이에요");
    } else if (num < 40 && num > 31) {
        window.alert("가현이 생일이랑 가까워요");
    } else if (num < 20) {
        window.alert("20보다 작아요!");
    } else if (num < 30) {
        window.alert("30보다 작아요!");
    } else if (num < 69 && num > 80) {
        window.alert("행운의 70번대 ㅎ");
    } else if (num < 79 && num > 90) {
        window.alert("무한대의 영역일 거 같은 80번대");
    } else if (num === 77) {
        window.alert("진짜 대박럭키");
    } else {
        window.alert("알아서 맞춰보세요...");
    }
});
