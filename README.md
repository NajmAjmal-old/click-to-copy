```
# Click-to-Copy

This is a simple JavaScript script that allows you to create buttons and links that copy text to the clipboard when clicked. It's a handy utility for providing users with an easy way to copy predefined text snippets.

## Usage

1. Include the necessary HTML and JavaScript files in your project.

2. Add a `<button>` element with the class `copy-button` or an `<a>` element with the class `copy-link` to your HTML file. Include two additional attributes:
   - `data-copy-text`: The text you want to copy when the element is clicked.
   - `data-tooltip`: (Optional) Tooltip text to show when hovering over the element.

Example:
```html
<button class="copy-button" data-copy-text="Text to be copied" data-tooltip="Click to Copy">Copy</button>
<a href="#" class="copy-link" data-copy-text="Text to be copied" data-tooltip="Click to Copy">Copy</a>
```

3. Include the JavaScript code in your project (usually in a separate `script.js` file).

4. Customize the alert message in the JavaScript code (optional) to provide feedback to the user after the text is copied.

## How It Works

1. When a `copy-button` or `copy-link` is clicked, the JavaScript code extracts the text to be copied from the `data-copy-text` attribute.

2. A temporary `<textarea>` element is created and populated with the text.

3. The content of the textarea is selected.

4. The `document.execCommand('copy')` method is used to copy the selected text to the clipboard.

5. The temporary `<textarea>` is removed.

## Compatibility

Please note that the `document.execCommand('copy')` method may not work in some modern browsers due to security restrictions. If this is the case, you might need to explore alternative methods, such as the Clipboard API.

## Example

Visit the [Website](https://najmajmal.github.io/click-to-copy/) for a working demonstration of the click-to-copy script.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to use, modify, and distribute this script in your projects.

---

**Note:** This script is provided as a simple example. Depending on your needs and the compatibility of the `document.execCommand('copy')` method, you might need to explore additional options for copying text to the clipboard.

For issues or questions, please open an issue in this repository.
```

Make sure to update the class names and attributes in the examples according to your actual implementation.
