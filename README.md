# PasswordAnaylzer
> A lightweight, Manifest V3 Chrome Extension that provides real-time cryptographic password entropy analysis directly in the browser.

### 🎯 Overview
SecurePass Analyzer is a Vanilla JavaScript browser extension designed to promote better security hygiene. It dynamically scans the Document Object Model (DOM) to identify password input fields and injects an asynchronous, real-time visual strength meter that evaluates user passwords without transmitting any keystrokes off the client machine.

### ✨ Technical Features
* **Real-Time Regex Evaluation:** Utilizes Regular Expressions to calculate password entropy based on length, character variation, and symbol inclusion.
* **Dynamic DOM Manipulation:** Seamlessly injects UI elements into third-party web environments without disrupting the native page layout or CSS.
* **Zero-Data Transmission:** 100% client-side execution. Passwords are mathematically evaluated in memory and instantly discarded, ensuring absolute privacy.

### 💻 Tech Stack
* **JavaScript (ES6+)**
* **HTML5 / CSS3**
* **Chrome Extensions API (Manifest V3)**



### 🚀 How to Install Locally
1. Clone this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the cloned repository folder.
5. Navigate to any login page to see the analyzer in action!
