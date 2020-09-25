
document.getElementById("startBtn").onclick = (event) => {

  document.getElementById("p1").innerHTML = "asdasdasdasd";

  let phases = StartUp();


}

function PrintBestPhrases() {
  return new Promise(resolve => {
    setTimeout(() => {
      document.getElementById("p1").innerHTML = bestPhrases[0].string;
      resolve('resolved');
    }, 50);
  });

}