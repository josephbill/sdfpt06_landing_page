## HTML (Hypertext markup language) - creates the structure of a webpage 
- write elements/tag names to represent section in our webpage 
- Block - occupy the entire width of device screen  and Inline - occupy the width necessary to represent element  elements 
- Elements are written using tags which are represented in 2 ways 
   - opening and closing tags <elementname>Content</elementname>
   <button>Click Me</button>

   - self enclosing tags <elementname/>
   <img/>

- every single element tag can carry attributes 
Attributes give more information about the element 
Atrributes are written using key:value pairing 
<img style="" src=""  alt="Show image here"/>

<button onClick="" style=""> click me </button>

## Mandatory structure of HTML pages 
<!DOCTYPE>
<html>
    <head>
    <title>homepage </title>
       //page metadata 
       //connects links to external stylesheets - css 
    </head>
    <body>
        // elements that user interacts with are placed here 
    </body>

</html>


## Connecting html to CSS 
# Css - cascading stylesheets - used to create web layouts and style html elements 
1. Inline styling - using the style attribute to style the specific element 
2. Internal styling - writing css inside the .html file for the elements styling via 3 
keyways 
     a. id attribute : give an element an id and use that id to style the element 
     b. class attribute : give a group of elements the same classname to use that in styling 
     c. element name : this will style all elements with the same name by grouping those elements if they do not have styled classes or ids. 

3. External styling - using external stylesheet by linking to the stylesheet documents  


## API's (Application Programming Interface) :  is a set of rules that allows different software applications to communicate with each other.
Customer(application : what user uses)             Waiter(API)               Kitchen(server infrastructure) 
request (customer picking item from menu )        takes request to kitchen->    prep the request 
                                                  <-takes the response back     gives back to app                                response to waiter

Data is normally shared to and from in the JSON format 
JSON : javascript object notation
: lightweight data format that makes it easier to share data btw software applications