# SOFT166
Repository for web development part of SOFT166 module

01. Getting Started with HTML and collaborative tools of GIT and Trello
02. Adding functionality with JavaScript, mapping and web forms
03. Tables, forms and Web Accessiblity 
04. API's and JQuery.
05. Securing inputs

# Useful Links
- https://github.com/EbookFoundation/free-programming-books
- A summary of the workflow for working with Git https://guides.github.com/introduction/flow/
- Getting started with Bootstrap - https://www.w3schools.com/bootstrap/bootstrap_get_started.asp 
- W3 CSS styles tutorial - https://www.w3schools.com/w3css/ an alternative to Bootstrap.
- Lynda.com video on Web Accessibility.  See Section 2, Accessiblity.  https://www.lynda.com/Web-Development-tutorials/Accessibility/667390/710455-4.html?org=plymouth.ac.uk
- Lynda.com video on working in Web Accessiblity, https://www.lynda.com/Web-Design-tutorials/Accessibility/432037/573807-4.html?org=plymouth.ac.uk 
- EU Directive for accessibility of websites and mobile applications for public sector bodies, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016L2102 
- HTML Code Checker, http://squizlabs.github.io/HTML_CodeSniffer/
- http://pa11y.org/ Range of tools for web accessibility.
- Web page validation for online hosted content, https://www.totalvalidator.com/products/index.html

### 1.  Getting started with HTML and collaborative tools of GIT and Trello
**HTML** is the mark up language that we see for creating web pages.  A very good source of
learning materials for this is https://www.w3schools.com/.

**Git** is a version control system that tracks changes to code.  It is predominantly used as a collaborative tool 
so that developers working in teams can see what has changed and control how those changes
are communicated through the team.  You can read more here https://git-scm.com/about.

**Git and GitHub**
Git is the software that makes the version control system work.  GitHub is a place to store 
code.  It is very common amongst the developer community and is a good way of showcasing
your work.

Committing your code on a regular basis to your repository is important.  Ensure you put 
sensible comments into the commit.  This builds up a picture of your engagement with the code. 

Trello is an online tool for tracking work to be done and using the Kanban principle for 
keeping an eye on how much there is to do.  The public board for this module can be found
here https://trello.com/b/m8q8e5ZS/soft166

###02 JavaScript, mapping and Web Forms
**JavaScript** provides the interactivity within a web page.  It is the code that makes things
work.  A good place to start learning is https://www.w3schools.com/js/

 Until recently, the default API to use to embed a map on your webpage was Google Maps.  Their developer documentation was straight forward and easy to follow.  You created the appropriate div component on your webpage, applied for a free developer API and you had a deployable map page.  
 
 The URL for the start is https://developers.google.com/maps/documentation/javascript/adding-a-google-map.  However, google have now changed their charging structure.  To obtain a developer API you now need to provide credit card details and enable billing on your account.   There is a free option, allowing 28k map views per month and anything above that is charged.  
 
 Given that we are exploring how to embed maps upon a webpage, the time has come to explore alternatives.  In this case we shall explore Leaflet.JS – an open source library for creating maps. https://leafletjs.com/examples/quick-start/.  In this example, leaflet does use MapBox as a mapping provider and you will need to sign up for an account with them to obtain an access token.  Currently their free plan will provide what you need for the purposes of these exercises.   More information can be obtained from https://www.mapbox.com/pricing/#faq 
 
 It is useful to know that Plymouth University coordinates are 50.375406, -4.138342
 
 **Add a marker to a Map**
 Continue with the tutorials at the leaflet.js site.  You can see further down that markers are added in the script tag, using the lat and lng for the location and binding a popup to provide the label.  https://leafletjs.com/examples/quick-start/, view the source for the example with the map marker.

**Web Forms** are where you use set components to take information from the user and manipulate that data
using some form of coding language.  In our case we are using JavaScript or later JQuery

### 03 Tables and forms and Web Accessibility
Tables in HTML are created using the table tag.  They have rows and cells within the rows.
Learn more about the syntax here https://www.w3schools.com/html/html_tables.asp

Web forms are needed to collect data from the end user.  For the purposes of this module
we will only be processing the data using Javascript and the JQuery library. 