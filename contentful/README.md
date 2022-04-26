# Terminology
In Contentful, project-related objects are grouped into *spaces*. Spaces contain *content models* - templates representing the structure of each *content*. Content that has similar structure and purpose with another content should be grouped into content models. *Media* represents pictures, videos and similar types of files that one wants to include in their content.

# Usage
1. To add any content, we have to start from adding content model. For this, one has to go to the *Content model* page and choose "Add content type". To create a content type, Contentful requires a *Name* field and *Api Identifier* which is generated fron *Name* by default but can be changed if needed. The last field, *Description*, is optional. 

![Content type creation](https://www.contentful.com/developers/_assets/apps/create-content-type.f3f0dc6bec.png)

2. Next step is to add fields into the content model that was just created. After choosing "Add field" on the page of the model, one can choose what type of field should be added. A user should consider what type of content they want to have on their page. For example, if one wants to have a collection on posts on their page, they may want to have *Text* field for the title of the post, *Rich text* for the content and *Date and time* for the creation date of the post. Thus, *Content model* would play a role of template for each post. 

![Adding fields](https://images.ctfassets.net/tz3n7fnw4ujc/2Oy5ezqjYElZaZrMMRDcvo/ed2fff4af66bda0794f994410208beab/add-new-field.png)

> Side note: Rich text allows a user to embed media and tags within the text.

Click on "Save" afterwards to save the content model before filling it in with content.

3. Proceed to *Content* page to fill in the content model and choose what we want to be displayed on our page. In our example, one content entry would represent one post. To add a content entry (*Content type*), one should find a button "Add *Content model name*" on the right side of the page. After that, the entry editor will be displayed and fields can be added. To add more posts, one would need to create more content entries. 

![Content entry creation](https://images.ctfassets.net/aeu1amk9b600/37mxJsTbqxME8aZWjlAvFR/06083bc478c9f84ddde04b6381ed865e/Screenshot_2020-07-03_at_14.00.29.png?fm=webp)

# Language feature
If one wants to display content in a different language, they have to enable locales. To do it, one should go to *Settings*->*Locales* and click on *Add locale*. Next, one should choose the desired language. 

![New locale](https://images.ctfassets.net/tz3n7fnw4ujc/UtvZezi9kyCWy6q60oOUk/4f94379308d79309a4f6396a277f0917/6B99358A-F73F-49B2-88C3-D334C0133197.png_dl_1)

After activating the language feature in the space, one has to enable locales for each desired field. Sadly, one cannot enable localization for the whole content model, but only for each separate field. One can add another language to a particular field in the setting of this field with "Enable localization of this field" button.

![Enable localization of a field](https://images.ctfassets.net/tz3n7fnw4ujc/1iQFl4rdoOWcu44miI0i8K/e175b4493881efba36bf6cd548c19e1c/74C319EE-B150-4055-A30B-57EE8F49D71D.png_dl_1)

After this, one can add translated content under *Content* menu.

![Content translation](https://images.contentful.com/fo9twyrwpveg/1LA3OCWisUIE4AYgKQMOAQ/fd3763421f00bb9582f1af6f6cd32ea0/localization-guide-08.png)

# Project-specific material

## Content models

We divided the content of our website into 4 templates - *content models*. 
    - About us
    - Blog Post
    - Form
    - Form Page Footer

**About us** 
"About us" page is divided into multiple posts. This content model provides the template for each post of the page. It has 4 entries: Title, Content, Pictures, Priority. Priority allows us to sort posts on the page and implement their order of appearance. 

**Blog post**
*Blog Post* content model allows us to implement posts on the news page. It has 6 entries: Title, Date (which is the date of creation of the post), Content, Page (this will be used when we have posts on multiple pages, the default value is 1), Updated (the date when the post was updated, may be needed for implementation of the order in which the posts appear on the page, default value is the date of creation), Video link.

**Form**
This is the template for each form on the website. It has 5 entries: Title, Content, Link to form (URL to the particular form to fill it in), Classname (allows us to navigate on page), Priority (allows us to sort posts on the page and implement their order of appearance).

**Form Page Footer**
This is the text that we have at the end of the pages for forms. It has 2 entries: Title and Content.

## Tags usage

To determine which forms would appear on which page, we use tags. To add a tag, we went to the *Content* tab and entered the editor of the form needed. After that, under the *Tags* tab we added a tag of the page we want this form to appear in. For example, for "Minor Name Change Petition (child under 18)" form we have a tag "Other" because it belongs to the group "Other" of our forms and we want it to appear on this particular page.