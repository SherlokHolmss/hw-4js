function checkTextFields() {
    const text1 = document.getElementById('text1').value;
    const text2 = document.getElementById('text2').value;
    const result = text1 && text2 ? "Обидва поля заповнені" : "Не всі поля заповнені";
    document.getElementById('textFieldsResult').innerText = result;
}



function checkNumberFields() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const sum = number1 + number2;
    const result = sum > 10 ? "Сума більша за 10" : "Сума менша або дорівнює 10";
    document.getElementById('numberFieldsResult').innerText = result;
}



function checkForJavaScript() {
    const text = document.getElementById('jsText').value;
    const result = text.includes("JavaScript") ? "Текст містить слово JavaScript" : "Текст не містить слово JavaScript";
    document.getElementById('jsTextResult').innerText = result;
}



function checkNumberRange() {
    const number = parseFloat(document.getElementById('rangeNumber').value);
    const result = number > 10 && number < 20 ? "Число входить в діапазон від 10 до 20" : "Число не входить в діапазон від 10 до 20";
    document.getElementById('rangeResult').innerText = result;
}



function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const nameValid = name.length >= 3;
    const emailValid = email.includes('@') && email.indexOf('.') > email.indexOf('@');
    const passwordValid = password.length >= 6;

    if (nameValid && emailValid && passwordValid) {
        window.location.href = "success.html";
    } else {
        let errorMessage = "Помилка: ";
        if (!nameValid) errorMessage += "Ім'я повинно містити не менше 3 символів. ";
        if (!emailValid) errorMessage += "Email повинен містити символ @ та крапку після неї. ";
        if (!passwordValid) errorMessage += "Пароль повинен містити не менше 6 символів.";
        document.getElementById('formValidationResult').innerText = errorMessage;
    }
}