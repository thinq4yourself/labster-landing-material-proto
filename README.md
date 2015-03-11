Labster Jekyll theme
=========================

Jekyll theme based for testing labster dot com landing pages. If approved, they move into Swig templates for CMS (Keystone / Webhook)

## How to use
 - Place a image in `/img/gallery/`
 - Create posts to display projects with naming convention:
   - `2007-09-04-labster-6.markdown` OR `2007-09-04-labster-6.md`
 - Use the follow front matter as an example:
 
```txt

---
layout: default
modal-id: 1
date: 2015-01-08
img: tablet.png
alt: This is the alt text for the image
feature-date: July 2014
feature: Sample feature
url: http://labster.com
category: Education
description: The tagline or such

---
```


---

### Useful tips

`$ jekyll serve`
Helps with working with Jekyll locally.

`$ jekyll build`
Builds into ___site__

`$ git push github gh-pages`
Builds into remote Github Pages


### For more details, read some Jekyll [documentation](http://jekyllrb.com/)

---

### Plugins and architecture
- [Google Analytics API](https://github.com/developmentseed/jekyll-ga#readme)
- [Jekyll on Heroku](https://github.com/jamesward/jekyll-heroku)
- [Jekyll Hook](https://github.com/developmentseed/jekyll-hook/)
- [Jekyll on Heroku](http://www.jamesward.com/2014/09/24/jekyll-on-heroku)
- [Prose for Jekyll](https://github.com/prose/starter)

![Screenshot](screenshot.png)