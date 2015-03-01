Labster Jekyll theme
=========================

Jekyll theme based for labster dot com landing page

## How to use
 - Place a image in `/img/gallery/`
 - Create posts to display projects with naming convention:
   - `2007-09-04-t4y-6.markdown` OR `2007-09-04-t4y-6.md`
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

![Screenshot](screenshot.png)