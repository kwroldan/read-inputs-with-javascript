function logValues(){
  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const emailAddress = document.querySelector("#email");
  console.log(`${firstName.value}`)
  console.log(`${lastName.value}`)
  console.log(`${emailAddress.value}`)
}

const button = document.querySelector("button");