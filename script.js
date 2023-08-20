// Get all elements with the "copy-button" class
const copyButtons = document.querySelectorAll('.copy-button');

// Iterate through each copy button
copyButtons.forEach(button => {
  // Add a click event listener to each button
  button.addEventListener('click', () => {
    // Get the text to be copied from the "data-copy-text" attribute
    const textToCopy = button.getAttribute('data-copy-text');

    // Create a textarea element to hold the text temporarily
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;

    // Append the textarea to the body and select its content
    document.body.appendChild(textarea);
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the textarea from the body
    document.body.removeChild(textarea);

    // Alert the user that the text has been copied (you can customize this part)
    console.log('Text has been copied!');
  });
});
