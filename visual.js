
document.getElementById("startBtn").onclick = (event) => {

  document.getElementById("p1").innerHTML = "asdasdasdasd";

  let phases = StartUp();
}

function PrintBestPhrases() {
  return new Promise(resolve => {
    setTimeout(() => {
      document.getElementById("p1").innerHTML ="Best Phrase: "+ bestPhrases[0].string;
      document.getElementById("p2").innerHTML ="Current Generation: "+ generationNum;
      resolve('resolved');
    }, 50);
  });
}