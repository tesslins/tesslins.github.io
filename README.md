# Github page for personal website

This is the code for my personal Github page.

STEPS TO BUILDING THIS
1. Mess around a bit and try to decide what tech I want to use and how manual I want the set-up to be. Admire the theory of using React, yet eventually decide I do not want a giant framework for a tiny site.
2. Make a favicon & find a fun profile-y image (not important, fun though!)
3. Decide to use github pages (mostly out of ease & interest since I have never set a Github page up before). Set up repository with correct name following the [Github documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).
4. Rename the `master` branch to `main`. (I thought that was happening automatically for all repos now, perhaps not for Github page repos?) This required updates via the Github UI to the [Default branch](https://github.com/tesslins/tesslins.github.io/settings/branches) and the [Github Pages "source"](https://github.com/tesslins/tesslins.github.io/settings/pages).
5. Create an `index.html` file in the root of the directory.
6. Create a `/src/` directory to hold site content. 
7. Within the `/src/` directory, create a `css/` directory. Within that directory, create `index.css` file.
8. Within the `/src/` directory, create an `img/` directory. Within that directory, add the favicon.ico (an emoji favicon, for the time being) and a "profile" image of myself that I choose earlier.
9. Start building the page by adding content to `index.html` and styling to `src/css/index.css`.
10. Add a `_config.yml` and a `.nojekyll` file to root directory, both specific to Github pages (the `.nojekyll` file indicates that the page is not using a Jekyll template, which is the default for Github pages.)
11. Spend an inordinate amount of time designing a toggle to display the (future) minimalist & maximalist versions of the page (aka I can never look at too many Google fonts 😍).
12. Add Vue as a `script` to the HTML; I wanted some way to conditionally render the "minimalist" and "maximalist" page designs rather than use vanilla javascript or jquery to hide/show elements.
13. Create a functional & silly toggle component.
14. Add content (about my engineering life & other life).
15. Style it (set a cool background color, font, and font color to the "maximalist" page; adjust a bunch of font sizes; design a mobile-first toggle with emojis on mobile since it turned out that there are not a lot of good synonyms for "minimalist" and "maximalist").

TECH & DESIGN
- Vue (added to the HTML for the most basic implementation possible)
- fonts from https://fonts.google.com/
- love using the [ColorPick Chrome extension](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en) to decide on colors

SOME INSPO & HOW-TOs & USEFUL RESOURCES
- for Vue without build tools https://vuejs.org/guide/quick-start.html#without-build-tools
- for initial ideas of site structure https://github.com/SethClydesdale/sethclydesdale.github.io
- for toggle switch https://www.w3schools.com/howto/howto_css_switch.asp
- for emojis https://emojipedia.org/