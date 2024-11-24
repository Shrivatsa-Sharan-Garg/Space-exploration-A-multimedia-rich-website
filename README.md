# Space Exploration - A Multimedia Rich Website

This repository hosts the source code for the **Space Exploration** website, a multimedia-rich platform that provides engaging content related to space, planets, the universe, and more. It includes a user-friendly navigation system and offers visitors the chance to explore detailed information about space exploration, planets, space facts, and a gallery, with a contact page for user inquiries.

## Features:
- **Home Page:** Introduction to the website and its contents.
- **The Universe:** Learn about the vastness of space and the celestial bodies within it.
- **Planets:** Explore detailed information on the planets in our solar system.
- **Facts:** Fascinating space facts that will spark curiosity.
- **Gallery:** A curated collection of stunning space exploration images.
- **Contact Us:** A form for visitors to contact the website administrators.

## Live Website

You can view the live version of the website here: [Space Exploration Website](https://shrivatsa-sharan-garg.github.io/Space-exploration-A-multimedia-rich-website/)

## APIs Used

The website integrates the following APIs to provide real-time data and multimedia content:

1. **Unsplash API**  
   Used to fetch high-quality images related to space exploration for the gallery section.  
   - Endpoint: `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${QUERY}&per_page=${NO}`
   - This API is called to search for space-related images by querying `QUERY` (such as "planets", "stars", etc.), with a limit set by `NO` (number of results per page). The `API_KEY` should be replaced with a valid Unsplash API key.

2. **NASA APOD (Astronomy Picture of the Day) API**  
   Provides the astronomy picture of the day and related metadata.  
   - Endpoint: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
   - This API fetches the Astronomy Picture of the Day (APOD) for a given `date` using a valid NASA API key (`apiKey`). The data includes the image and an optional explanation of the picture.

## Setup Instructions

To set up the website locally on your machine, follow the steps below.

### Prerequisites:
- A modern web browser (Google Chrome, Mozilla Firefox, etc.)
- A code editor (Visual Studio Code, Sublime Text, etc.)
- Basic understanding of HTML, CSS, and JavaScript for customization (optional)

### Steps to Run Locally:

1. **Clone the Repository:**

   Begin by cloning the repository to your local machine using Git. Open your terminal and run:

   ```bash
   git clone https://github.com/Shrivatsa-Sharan-Garg/Space-exploration-A-multimedia-rich-website.git
   ```

2. **Navigate to the Project Directory:**
   Once the repository is cloned, navigate into the project folder:
   ```bash
   cd Space-exploration-A-multimedia-rich-website
   ```

3. **Open the Files:**
   
   You can open the website files directly in your web browser, or use a code editor to make any changes. To open the website in your browser:
   
   Open `index.html` or any other HTML file in your browser by double-clicking on it or by using the "Open with" option in your browser.

4. **Optional - Customize Content:**
   
   If you want to make changes to the website content or styling, you can modify the following files:

- `HTML Files`: Located in the root directory (e.g., `index.html`, contact.html, planets.html, etc.)
- `CSS Files`: Located in the assets folder (e.g., `style.css`, contact.css)
- `JavaScript Files`: Located in the assets folder (e.g., `contact.js`, `script.js`)

5. **Open the Website in Your Browser:**
   
   After following the steps above, open the file index.html in any modern web browser (Google Chrome, Mozilla Firefox, etc.) to view the website locally.
   
   Alternatively, you can host the website using a local server, but it is not required for viewing basic content.

## Technologies Used
[![My Skills](https://skillicons.dev/icons?i=html,css,js)](https://skillicons.dev)
- **HTML** for structuring the content.
- **CSS** for styling the pages and ensuring responsiveness.
- **JavaScript** for form validation and page interactivity.
- **Media-rich content** for images and other multimedia to engage visitors.
- **API Integration** for fetching real-time data and multimedia content.

## Contributors
<table>
    <tr>
        <td align="center">
        <a href="http://github.com/Sudhanshu-Ambastha">
            <img src="https://avatars.githubusercontent.com/u/135802131?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Sudhanshu Ambastha</b></sub>
        </a>
        <br />
    </td>
    <td align="center">
        <a href="https://github.com/Vishwas567917">
            <img src="https://avatars.githubusercontent.com/u/139749696?s=100&v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Parth Shrivastava</b></sub>
        </a>
        <br />
    </td>
    <td align="center">
        <a href="https://github.com/Shrivatsa-Sharan-Garg">
            <img src="https://avatars.githubusercontent.com/u/179140208?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Shrivatsa Sharan Garg</b></sub>
        </a>
        <br />
    </td>
    </tr>
</table>
