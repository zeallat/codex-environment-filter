# ChatGPT Codex Task Filter

## Overview

The ChatGPT Codex Task Filter is a Tampermonkey userscript designed to enhance your workflow on the `https://chatgpt.com/codex` page. It adds a convenient floating dropdown menu that allows you to filter the list of tasks by project name.

**Key Features:**

*   **Project-Based Filtering:** Easily focus on tasks related to a specific project.
*   **Session Persistence:** Your selected filter remains active throughout your current browser session, thanks to session storage.
*   **Dynamic Project List:** The dropdown menu automatically populates and updates with the project names currently visible in your task list.

## What is Tampermonkey?

Tampermonkey is a popular browser extension that allows you to run userscripts on websites. Userscripts are small pieces of JavaScript code that can modify the layout or add new functionality to web pages.

**Benefits of using Tampermonkey:**

*   Customize website behavior to your liking.
*   Automate repetitive tasks.
*   Enhance user experience on your favorite sites.

You can learn more and download Tampermonkey from its official website: [Tampermonkey.net](https://www.tampermonkey.net/)

## Installation Guide

Follow these steps to install and use the ChatGPT Codex Task Filter script.

### 4.1. Installing Tampermonkey

Before you can install the script, you need to have Tampermonkey installed in your browser. Here's how to install it on Google Chrome:

1.  Open Google Chrome.
2.  Go to the Chrome Web Store: [Tampermonkey on Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
3.  Click the "Add to Chrome" button.
4.  A confirmation dialog will appear. Click "Add extension."
5.  Once installed, you should see the Tampermonkey icon (a black square with a white circle and two dots) in your browser's toolbar.

Tampermonkey is also available for other browsers like Firefox, Microsoft Edge, Safari, and Opera. You can find installation instructions on the [Tampermonkey website](https://www.tampermonkey.net/).

### 4.2. Installing the "ChatGPT Codex Task Filter" Script

Once Tampermonkey is installed, you can add the "ChatGPT Codex Task Filter" script.

**Method 1: Direct URL (Recommended if available)**

*If the script is hosted online (e.g., on GreasyFork or GitHub Pages), you can typically install it by navigating to the script's URL. Tampermonkey will automatically detect the userscript and prompt you to install it.*

1.  Navigate to the script's URL (e.g., `https://your-script-host.com/script.user.js`).
2.  Tampermonkey will open a new tab showing the script's source code and an "Install" button.
3.  Review the script details and click "Install."

**(Note: As this script is local, this method might not be directly applicable without hosting it. For local development, Method 2 is preferred.)**

**Method 2: Manual Copy-Paste**

1.  Click on the Tampermonkey icon in your browser's toolbar.
2.  Select "Create a new script..."
3.  A new tab will open with a default script template. Delete all the content in the editor.
4.  Open the [`script.js`](script.js) file (the "ChatGPT Codex Task Filter" script) in a text editor.
5.  Copy the entire content of [`script.js`](script.js).
6.  Paste the copied code into the Tampermonkey editor.
7.  Go to "File" -> "Save" in the Tampermonkey editor menu.

The script is now installed and should be active.

## How to Use the Script

Once installed, the script will automatically run when you visit `https://chatgpt.com/codex`.

1.  **Accessing the Filter:** Look for a floating dropdown menu, typically positioned near the top of the task list area.
2.  **Filtering Tasks:**
    *   Click on the dropdown menu. It will display a list of unique project names extracted from the currently visible tasks.
    *   Select a project name from the list.
    *   The task list will dynamically update to show only tasks associated with the selected project.
    *   To see all tasks again, select the "All Projects" (or equivalent) option in the dropdown.
3.  **Filter Persistence:** Your chosen filter will be remembered for the current browser session. If you close the tab and reopen `https://chatgpt.com/codex` in the same session, the filter will still be applied.
4.  **Dynamic Project List:** The project names in the dropdown are generated based on the tasks currently loaded on the page. If new tasks with new project names appear, the dropdown will update accordingly (you might need to re-select "All Projects" and then open the dropdown again to see the latest list if tasks load dynamically after the initial page load).

## Troubleshooting / FAQ

**Q: The dropdown menu is not appearing.**

*   **Is Tampermonkey enabled?** Click the Tampermonkey icon and ensure it's enabled (the icon should be colored, not greyed out).
*   **Is the script enabled?** Click the Tampermonkey icon, go to "Dashboard." Find "ChatGPT Codex Task Filter" in the list and make sure the toggle switch next to it is in the "on" position.
*   **Are you on the correct page?** The script is designed to run on `https://chatgpt.com/codex`.
*   **Browser Console Errors:** Open your browser's developer console (usually by pressing F12 and going to the "Console" tab) to check for any error messages related to the script.

**Q: The filter is not working correctly.**

*   **Script Version:** Ensure you have the latest version of the script.
*   **Task List Structure:** The script relies on the specific HTML structure of the task list on `https://chatgpt.com/codex`. If the website's structure changes significantly, the script might break. Check for script updates.
*   **Project Name Extraction:** The script tries to extract project names from task elements. If project names are formatted inconsistently or are not present where the script expects them, filtering might not work as intended.

**Q: The project list in the dropdown is incorrect or incomplete.**

*   The script populates the project list based on the tasks visible when it runs. If tasks are loaded dynamically (e.g., by scrolling), the initial project list might not include all projects. Try refreshing the page or interacting with the task list to ensure all relevant tasks are loaded.

**Q: How do I update the script?**

*   If you installed via a URL that supports updates (like GreasyFork), Tampermonkey usually checks for updates automatically. You can also manually check from the Tampermonkey Dashboard by clicking the "last updated" timestamp for the script.
*   If you installed manually, you'll need to repeat the copy-paste process with the new script version.

**Q: How do I disable or uninstall the script?**

1.  Click the Tampermonkey icon in your browser toolbar.
2.  Go to "Dashboard."
3.  **To disable:** Find "ChatGPT Codex Task Filter" and toggle the switch next to it to the "off" position.
4.  **To uninstall:** Find "ChatGPT Codex Task Filter," and click the trash can icon on the right side.

## (Optional) Contributing

We welcome contributions!

*   **Reporting Bugs:** If you find a bug, please provide detailed steps to reproduce it.
*   **Suggesting Features:** Have an idea to make the script better? Let us know!

*(Please specify where users should report bugs or suggest features, e.g., GitHub Issues page if applicable)*

## (Optional) License

*(Specify the license under which this script is distributed, e.g., MIT License, GPL, etc. If no license is specified, it's typically considered proprietary.)*

This script is provided as-is. Use at your own risk.