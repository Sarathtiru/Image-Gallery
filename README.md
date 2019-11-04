# Redfin UXE Gallery Challenge
We would like you to build an application to display images in a gallery. This challenge is estimated to take around 2 hours.


## App Requirements / Mini-Spec
The application must:

- Show photos in a grid view on the initial load
- Support a fullscreen mode
    - When the user clicks on an image, it will show the entire image fullscreen
    - When the user clicks on a "close" button or the background, it will close and return to the grid view
- Works in Chrome; we will not be evaluating other browsers for compatibility
- Support different viewports such as phone/tablet and notebook/desktop viewports
- Query an API for a set of photos
    - Sample data is provided in the attached photos.json file, but you must access it via a HTTP request as if it was an API endpoint
- Use only vanilla JavaScript; we won't accept solutions that use frameworks like React, Vue, etc. or libraries like jQuery, Axios, etc.
    - ES6/ESNext and any required polyfills are perfectly acceptable, but not required

Example mockups are provided in the `examples` folder of the challenge download; _you do not need to match them precisely_, but be prepared to explain the reasoning behind your design decisions!

**You must also include a README file** that, in a few paragraphs, describes what additional changes and technical decisions you would make to your application if more time was available. Provide some detail about how they might be implemented if this project was to be released to Redfin's customers on our website. Think about design, maintainability, reusability, and your technical implementation — don't _just_ add pagination, although it'd be a great improvement!

**We will be evaluating your documentation along with your code!**

You are welcome to use any web server you like. For simplicity, we recommend using Python's SimpleHTTPServer, if you have Python available, or [Chrome Web Server][cws].

## Quickstart with Python SimpleHTTPServer

1. Download the [template code][code] provided and unzip anywhere, such as `~/code/myfolder`.
2. From the command line:

	      cd ~/code/myfolder
	      python -m SimpleHTTPServer 8887

3. Open `http://localhost:8887/index.html` and
`http://localhost:8887/data/photos.json` in your browser. You should see a “Hello, World!” page and JSON data.


## Quickstart with Chrome Web Server

1. Download the [template code][code] provided and unzip anywhere, such as `~/code/myfolder`.
2. Launch the Chrome Web Server
3. Click _choose folder_ and set to `~/code/myfolder`.
4. Open `http://localhost:8887/index.html` and `http://localhost:8887/data/photos.json` in your browser. You should see a “Hello World” page and JSON data.

## Missing Images
The data in `photos.json` comes from the [Unsplash API][unsplash]. Occasionally photos are removed from their website, so if one is broken feel free to remove it or replace that index with a repeated image from the data. There should be a fallback image letting you know it couldn't be found, so you don't have to replace it because an image will still be there.

[cws]: https://chrome.google.com/webstore/detail/web­server­for­chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en
[code]:https://drive.google.com/open?id=1S5mLGgLd9JGM1jmlaely0N2vEMGn6x-I
[unsplash]:https://unsplash.com/developers
