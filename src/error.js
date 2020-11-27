const ul = document.createElement("ul");
ul.id = "thelist";
ul.style.color = "red";
var i = 0;
var x = 0;
var y = 0;
var z = 0;
const er = new Error();
er.message = "Error Occured";

function formSubmission(event) {
  event.preventDefault();
  const li = document.createElement("li");
  //#1 error check
  try {
    if (document.forms.tasklist.task.value == "") {
      console.log("check Entered value");
      window.alert("error occured");
      throw er;
      x = 0;
    }
  } catch (err) {
    console.log("error");
    x = x + 1;
    console.log(x);
  }
  //#2 unwanted things like "<""
  try {
    if (document.forms.tasklist.task.value == "<") {
      console.log("check Entered value");
      window.alert("error occured");
      throw er;
      y = 0;
    }
  } catch (err) {
    console.log("error");
    y = y + 1;
    console.log(y);
  }

  if (x == 0 && y == 0) {
    li.innerHTML = document.forms.tasklist.task.value;
    li.id = "taskID" + i;
    console.log(li);

    //completed
    let btn = document.createElement("button");
    btn.innerHTML = "COMPLETED";
    btn.id = li.id;
    btn.onclick = function () {
      var div = this.parentElement;
      div.style.color = "green";
    };
    li.appendChild(btn);

    //delete element
    let btn3 = document.createElement("button");
    btn3.innerHTML = "DELETE";
    btn3.id = li.id;
    btn3.onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
    li.appendChild(btn3);

    ul.appendChild(li);
    console.log(ul);

    let div = document.getElementById("mnlist");
    console.log(div);
    div.appendChild(ul);
    console.log(div);
    document.forms.tasklist.task.value = "";
    i++;
    x = 0;
  }
  //rechange or reset counters
  x = 0;
  y = 0;
  z = 0;
}
