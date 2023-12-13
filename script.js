function callback() {
  console.log("Successful Callback");
}

function errorCallback() {
  console.log("Error");
}

function submitForm() {
  document.recaptcha.submit();
}
