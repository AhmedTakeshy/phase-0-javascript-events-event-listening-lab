function addingEventListener() {
  const input = document.getElementById("button");
  input.addEventListener("click", function (event) {
    alert("I was clicked!");
  });
}

// binds an event listener in addingEventListener()

addingEventListener();
