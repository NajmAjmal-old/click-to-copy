# Click-to-Copy

This is a simple JavaScript script that allows you to enable click-to-copy functionality on any HTML element. It's a handy utility for providing users with an easy way to copy predefined text snippets.

## Usage

1. Include the necessary HTML and JavaScript files in your project.

2. Add HTML elements with the class `click-to-copy` (or any class name you prefer) to your HTML file. Include the `data-copy-text` attribute to specify the text to be copied.

Example:
```html
<div class="click-to-copy" data-copy-text="Text to be copied">Copy</div>
<p class="click-to-copy" data-copy-text="Another text to be copied">Copy</p>
```

3. Include the provided JavaScript code in your project.

4. Customize the alert message to provide user feedback after copying.

## Features

### 1. Click-to-Copy on Any HTML Element

With the `click-to-copy` class (or your chosen class name), you can enable the click-to-copy functionality on any HTML element, expanding its usage beyond buttons and links.

### 2. Tooltip Integration

Add tooltips for user clarity. Use the `data-tooltip` attribute to include a tooltip when hovering over the elements.

Example:
```html
<div class="click-to-copy" data-copy-text="Text to be copied" data-tooltip="Click to Copy">Copy</div>
```

### 3. Enhanced User Experience

Users can now click an element with the `click-to-copy` class, and the selected text will be copied to the clipboard. An alert will confirm the successful copy action.

### 4. Compatibility Enhancements

The script acknowledges that `document.execCommand('copy')` might not work in all modern browsers due to security restrictions. Explore alternatives, such as the Clipboard API, if needed.

## Get Started

Visit the [GitHub repository](https://github.com/NajmAjmal/click-to-copy) to access the latest release and start integrating click-to-copy functionality into your projects today!

## License

This project is licensed under the [MIT License](LICENSE).

---
