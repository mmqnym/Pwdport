# Pwdport - A secured password solution

<a href="./README.md"><img src="https://img.shields.io/badge/Language-English-9cf?style=for-the-badge" /></a> &nbsp;<a href="./README_CN.md"><img src="https://img.shields.io/badge/Language-%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87-9cf?style=for-the-badge" /></a>

<br />

> Overview

By using this password generation tool, it can help people who are used to using the same password to have higher security, and it can also provide a better password generation tool for people who are more aware of information security.

### ※This is a purely front-end service, with no remembering function and not storing any information you input.

<br />

## How to use

Enter information as defined in the following fields to obtain a fixed set of secure passwords.

- Base: A string of characters that you want to use as the basis for your password, usually the same set of passwords you are used to.
- Keyword: The keyword you use in different APPs or websites, usually you can choose to use the URL, platform name, APP name, website or APP service type, etc.
- Offset: The position where the keyword is inserted into the Base.
- Length: The length you want the password to be.

#### Example:

![demo](./img/demo.png)

<br />

## Architecture & Technology

### React + Tailwindcss + Keccak256

The information entered by the user is first hashed by Keccak256 and then mixed with custom encryption rules to generate a fixed password.

<br />

## Reference

- [**React**](https://reactjs.org/)
- [**Tailwindcss**](https://tailwindcss.com/docs/installation)
- [**SHA3 online tools**](https://github.com/emn178/js-sha3)
- [**ethers.js**](https://docs.ethers.org/v5/api/utils/hashing/)

<br />

## License

[**MIT**](./LICENSE.md)
