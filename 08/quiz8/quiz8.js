let $btn = document.getElementById('btn');
let $box = document.getElementById('box');

const term = 30;

function pressBtn() {
  let max = document.getElementById('max').value;
  let min = document.getElementById('min').value;

  let transMax = Number.parseInt(max);
  let transMin = Number.parseInt(min);
  let range = transMax - transMin;

  let endNum = Math.floor(Math.random() * range) + transMin;
  let sub = Math.floor(Math.random() * 30);
  let startNum = endNum - sub;

  let increase = setInterval(() => {
    if (endNum > startNum) {
      startNum++;
      $box.innerHTML = startNum;
      $btn.disabled = true;
    } else {
      $btn.disabled = false;
      clearInterval(increase);
    }
  }, term);
}

$btn.addEventListener('click', pressBtn);
