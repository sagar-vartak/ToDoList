const ul = document.createElement("ul");
ul.id = "thelist";
ul.style.color = "red";
var i = 0;

const formSubmission = (event) => {
  event.preventDefault();
  console.log("task name=", document.forms.tasklist.task.value);
  const li = document.createElement("li");
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
};
