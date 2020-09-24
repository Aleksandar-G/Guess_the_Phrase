
/*window.onload = (event) => {
    
  };*/

  document.getElementById("startBtn").onclick = (event) => {

    /*let p1 = document.getElementById("p1");

    let phases = StartUp();
    
    phases.forEach(element => {
        let para = document.createElement("p");
        let node = document.createTextNode(element.string);
         para.appendChild(node);
         p1.appendChild(para);
    });*/
    document.getElementById("p1").innerHTML = "asdasdasdasd";
    let phases = StartUp();


  }

function PrintBestPhases(){
  document.getElementById("p1").innerHTML = bestPhases[0].string;

}