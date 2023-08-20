// Get all elements with the "copy-button" class
const copyButtons = document.querySelectorAll('.copy-button');
const copyLinks = document.querySelectorAll('.copy-link');

// Function to copy text to the clipboard
function copyTextToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

// Iterate through each copy button
copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const textToCopy = button.getAttribute('data-copy-text');
    copyTextToClipboard(textToCopy);
    console.log('Text has been copied!');
  });
});

// Iterate through each copy link
copyLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const textToCopy = link.getAttribute('data-copy-text');
    copyTextToClipboard(textToCopy);
    console.log('Text has been copied!');
  });
});
