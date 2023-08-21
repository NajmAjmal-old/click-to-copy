const copyElements = document.querySelectorAll('.click-to-copy');

console.log('Click to copy made by Najm Ajmal');

function copyTextToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

copyElements.forEach(element => {
  element.addEventListener('click', () => {
    const textToCopy = element.getAttribute('data-copy-text');
    copyTextToClipboard(textToCopy);
    console.log('Text has been copied!');
  });
});
