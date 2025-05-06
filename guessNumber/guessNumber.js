const ans = Math.round(Math.random() * 10);

let frequency = 0;

let input = document.querySelector(".input-number");

let result = document.querySelector(".result");

let submit = document.querySelector(".submit");

let reset = document.querySelector(".reset");



submit.addEventListener("click", function () {
  if (input.value == ans) {
    result.textContent = "猜對了🎉🎉";
    submit.disabled = true;
  } else {
    frequency++;
    if (frequency <= 2) {
      if (input.value < ans) {
        result.textContent = `猜大一點，還有${3 - frequency}次機會💪`;
      } else {
        result.textContent = `猜小一點，還有${3 - frequency}次機會💪`;
      }
    } else {
      result.textContent = `Game Over💩`;
      submit.disabled = true;
    }
  }
  input.value = "";
  input.focus();
});

reset.addEventListener("click", function () {
  location.reload();
});

console.log(ans);




