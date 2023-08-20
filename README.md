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

3. Include the provided JavaScript code in your project.

4. Customize the alert message to provide user feedback after copying.

### Using the CDN

For a quick integration, you can include the minified script using this CDN link:

```html
<script src="https://cdn.jsdelivr.net/gh/NajmAjmal/click-to-copy@main/ctc_min.js"></script>
```

## Get Started

Visit the [GitHub repository](https://github.com/NajmAjmal/click-to-copy) to access the latest release and start integrating click-to-copy functionality into your projects today!

## License

This project is licensed under the [MIT License](LICENSE).

---

**Note:** This script is provided as a simple example. Depending on your needs and the compatibility of the copying method, you might need to explore additional options for copying text to the clipboard.

For issues or questions, please open an issue in this repository.
```
