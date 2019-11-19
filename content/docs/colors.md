---
title: "Colors"
date: 2019-01-08T13:17:14+02:00
draft: false
type: doc
slug: colors

menu: docs
name: "Colors"
weight: 4

---
<div class="color_grid">
    <div class="card no-pad sh">
        <div class="color main"></div>
        <div class="color_label">#033E8C</div>
    </div>
    <div class="card no-pad sh">
        <div class="color second"></div>
        <div class="color_label">#7898C9</div>
    </div>
    <div class="card no-pad sh">
        <div class="color dark"></div>
        <div class="color_label">#353535</div>
    </div>
    <div class="card no-pad sh">
        <div class="color gray"></div>
        <div class="color_label">#b2b2b2</div>
    </div>
    <div class="card no-pad sh">
        <div class="color light"></div>
        <div class="color_label">#fafafa</div>
    </div>
</div>

---

## SCSS

```
/* Directory */

.../scss/
    |...
    |
    |_colors.scss
    |
    |...  

```


```

/* Scss variables */


$main: #033E8C;

$main_light: #E1E7EF;

$second: #7898C9;

$dark: #353535;

$gray: #B2B2B2;

$light: #FAFAFA;

$white: #FFFFFF;



/* Usage example  */


div {
    background-color: $main;
}

```
