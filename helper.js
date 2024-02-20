var numUnsafeActions = 0;
function createUnsafePopup(stringWrongAction) {
  // Create a popup div
  var popup = document.createElement("div");
  popup.id = "popup";
  popup.style.position = "fixed";
  popup.style.left = "50%";
  popup.style.top = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.backgroundColor = "#fff";
  popup.style.padding = "20px";
  popup.style.border = "1px solid #000";

  // Create check if stringWrongAction is undefined
  if (stringWrongAction === undefined) {
    stringWrongAction = "Make sure to be safe next time!";
  }

  // Create a text node
  numUnsafeActions++;
  var text = document.createTextNode(
    "You have done an unsafe action: " + stringWrongAction
  );
  popup.appendChild(text);

  // Create a close button
  var closeButton = document.createElement("button");
  closeButton.innerHTML = "Close";
  closeButton.addEventListener("click", function () {
    document.body.removeChild(popup);
  });
  popup.appendChild(closeButton);

  // Append the popup to the body
  document.body.appendChild(popup);
}
