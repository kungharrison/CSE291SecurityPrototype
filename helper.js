var numUnsafeActions = 0;
function createUnsafePopup() {
    // Create a popup div
    var popup = document.createElement('div');
    popup.id = 'popup';
    popup.style.position = 'absolute';
    popup.style.left = '50%';
    popup.style.top = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = '#fff';
    popup.style.padding = '20px';
    popup.style.border = '1px solid #000';

    // Create a text node
    numUnsafeActions++;
    var text = document.createTextNode('You have done an unsafe action ' + numUnsafeActions + ' times. Please be careful!');
    popup.appendChild(text);

    // Create a close button
    var closeButton = document.createElement('button');
    closeButton.innerHTML = 'Close';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(popup);
    });
    popup.appendChild(closeButton);

    // Append the popup to the body
    document.body.appendChild(popup);
}