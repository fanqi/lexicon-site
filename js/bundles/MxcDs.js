var pageComponent=webpackJsonppageComponent([92],{170:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),d=o(i),l=n(1),p=o(l);n(4),n(5),n(3),n(7),n(2),n(8),n(6),n(9),n(10),n(11),n(12),n(13),n(14);var c=n(171),h=o(c),u=function(t){function e(){return a(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),e}(d.default);p.default.register(u,h.default),e.default=u},171:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.templates=e.MxcDs=void 0;var i,d=n(0),l=o(d),p=n(1),c=o(p);goog.loadModule(function(t){function e(t,e,o){var i=function(){a("div",null,null,"class","page-description");var e=t.page.description;"function"==typeof e?e():null!=e&&s(e),r("div"),a("h3",null,null,"id","font-stacks"),s("Font Stacks"),r("h3"),a("p"),s("Lexicon uses two text styles exclusively. A sans serif one which is the main style of the typographic system, and a monospaced one used to render code."),r("p"),a("p"),s("Due to the customizable, multi-language and multi-platform nature of Liferay products like Portal, Lexicon and its implementation have opted for an agnostic use of typography."),r("p"),a("p"),s("According to this, it has been decided not to include any type family as part of the framework and to resort in any case to the family provided by the operating system on which Liferay is being accessed. This way we avoid web-font delivery services or font files stored on the server."),r("p"),a("p"),s('With this in mind, Lexicon and Clay embrace the standard known as "Native Font Stack" as the basis for its typographic source.'),r("p"),a("p"),s("In this tables we list the different typographic families associated with the main operating systems included in each font stack."),r("p"),a("h4"),s("Sans Serif"),r("h4"),a("p"),s("For sans serif style, we take the Bootstrap native font stack as a reference in which we have also included families for Ubuntu, Oxigen and Gnome operating systems"),r("p"),a("table"),a("thead"),a("tr"),a("th"),s("OS"),r("th"),a("th"),s("Font Family"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),s("Windows"),r("td"),a("td"),s("Segoe UI"),r("td"),r("tr"),a("tr"),a("td"),s("MacOS & iOS"),r("td"),a("td"),s("San Francisco"),r("td"),r("tr"),a("tr"),a("td"),s("Chrome OS & Android"),r("td"),a("td"),s("Roboto"),r("td"),r("tr"),a("tr"),a("td"),s("Ubuntu"),r("td"),a("td"),s("Ubuntu"),r("td"),r("tr"),a("tr"),a("td"),s("OxygenOS"),r("td"),a("td"),s("Oxygen"),r("td"),r("tr"),a("tr"),a("td"),s("Cantarell"),r("td"),a("td"),s("Gnome"),r("td"),r("tr"),a("tr"),a("td"),s("Basic web fallbacks"),r("td"),a("td"),s("Arial, Helvetica Neue, sans-serif"),r("td"),r("tr"),a("tr"),a("td"),s("Emoji Fonts"),r("td"),a("td"),s("Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),r("td"),r("tr"),r("tbody"),r("table"),a("p",null,null,"class","code-text"),s('system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";'),r("p"),a("h4"),s("Monospaced"),r("h4"),a("p"),s("For monospaced style, we take as a reference also the font stack provided by Bootstrap."),r("p"),a("table"),a("thead"),a("tr"),a("th"),s("OS"),r("th"),a("th"),s("Font Family"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),s("Windows"),r("td"),a("td"),s("Segoe UI"),r("td"),r("tr"),a("tr"),a("td"),s("MacOS & iOS"),r("td"),a("td"),s("San Francisco"),r("td"),r("tr"),a("tr"),a("td"),s("Chrome OS & Android"),r("td"),a("td"),s("Roboto"),r("td"),r("tr"),a("tr"),a("td"),s("Basic web fallback"),r("td"),a("td"),s("Courier New, monospaced"),r("td"),r("tr"),r("tbody"),r("table"),a("p",null,null,"class","code-text"),s('SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;'),r("p"),a("p"),s("Being Mac OS the most widely used operating system for design tasks within Liferay and one of the most used in general, it has been decided to use the San Francisco font family for the visual examples of the system both in the technical documentation and in Lexicon Site."),r("p"),a("h3",null,null,"id","type-scale"),s("Type Scale"),r("h3"),a("p"),s("In the same line of looking for the simplification and standardization of the elements that make up the foundations of the system, the lexicon scale is based on the values initially provided by Bootstrap and follows one of the most used type scales in web products nowadays."),r("p"),a("p"),s("A scale based on an initial increase of 2px that grows to 4px in larger font sizes to favor contrast and hierarchical identification. A non-linear arithmetic progression that does not exactly fit any of the classic ratios, but provides an understandable and easy to remember set which is quite helpful dealing with complex products."),r("p"),a("table"),a("thead"),a("tr"),a("th"),s("px"),r("th"),a("th"),s("rem"),r("th"),a("th"),s("example"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),s("10px"),r("td"),a("td"),s("0.625rem"),r("td"),a("td",null,null,"class","type-scale type-scale-10"),s("Design matters"),r("td"),r("tr");a("tr"),a("td"),s("12px"),r("td"),a("td"),s("0.75rem"),r("td"),a("td",null,null,"class","type-scale type-scale-12"),s("Design matters"),r("td"),r("tr"),a("tr"),a("td"),s("14px"),r("td"),a("td"),s("0.875rem"),r("td"),a("td",null,null,"class","type-scale type-scale-14"),s("Design matters"),r("td"),r("tr"),a("tr"),a("td"),s("16px"),r("td"),a("td"),s("1rem"),r("td"),a("td",null,null,"class","type-scale type-scale-16"),s("Design matters"),r("td"),r("tr"),a("tr"),a("td"),s("18px"),r("td"),a("td"),s("1.125rem"),r("td"),a("td",null,null,"class","type-scale type-scale-18"),s("Design matters"),r("td"),r("tr"),a("tr"),a("td"),s("20px"),r("td"),a("td"),s("1.25rem"),r("td"),a("td",null,null,"class","type-scale type-scale-20"),s("Design matters"),r("td"),r("tr"),a("tr"),a("td"),s("24px"),r("td"),a("td"),s("1.5rem"),r("td"),a("td",null,null,"class","type-scale type-scale-24"),s("Design matters"),r("td"),r("tr"),a("tr"),a("td"),s("28px"),r("td"),a("td"),s("1.75rem"),r("td"),a("td",null,null,"class","type-scale type-scale-28"),s("Design matters"),r("td"),r("tr"),a("tr"),a("td"),s("32px"),r("td"),a("td"),s("2rem"),r("td"),a("td",null,null,"class","type-scale type-scale-32"),s("Design matters"),r("td"),r("tr"),a("tr"),a("td"),s("36px"),r("td"),a("td"),s("2.25rem"),r("td"),a("td",null,null,"class","type-scale type-scale-36"),s("Design matters"),r("td"),r("tr"),a("tr"),a("td"),s("40px"),r("td"),a("td"),s("2.rem"),r("td"),a("td",null,null,"class","type-scale type-scale-40"),s("Design matters"),r("td"),r("tr"),r("tbody"),r("table"),a("h3",null,null,"id","basic-formatting"),s("Basic Formatting"),r("h3"),a("h4"),s("Line Height"),r("h4"),a("p"),s("Lexicon typographic system uses two reference line heights. A standard line height with a 1:1.5 ratio, and another one with a 1:1.25 ratio used for headings."),r("p"),a("p"),s("1:1.5 is also one of the most common line height ratios used in web development right now. A formula that applied to the body font of 16px (1rem) returns a value of 24px (1.5rem) which is the main reference measure for the vertical organization of content in Lexicon."),r("p"),a("p"),s("Also, regarding accessibility concerns, using a minimum value of 1.5 for line-height for main paragraph content, can help people with low vision conditions, as well as people with cognitive concerns such as Dyslexia."),r("p"),a("p"),s("In large font sizes, the optical perception we have of the spaces between lines is different. The white space between lines acquire more light and more prominence. Therefore, it is considered good legibility practice to reduce the line height in font sizes starting from 20px and above."),r("p"),a("p"),s("The same applies to uppercase texts. The white spaces between text lines in uppercase are shown as more defined white blocks than those created by lowercase letters which have ascending and descending strokes. That's why uppercase headings in Lexicon, despite being 12px and 14px are also applied a ratio of 1: 1.25"),r("p"),a("table"),a("thead"),a("tr"),a("th"),s("Line Height"),r("th"),a("th"),s("ratio"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),s("Standard"),r("td"),a("td"),s("1:1.5"),r("td"),r("tr"),a("tr"),a("td"),s("Secondary"),r("td"),a("td"),s("1:1.25"),r("td"),r("tr"),r("tbody"),r("table"),a("p"),s("Lexicon only provides the value of line height for texts susceptible to going to more than one line such as paragraphs, headlines and list group items for example. For the rest of ui elements that incorporate text within their structure as buttons, input fields of single line, stickers, badges or labels for example, this value will be defined by the implementation."),r("p"),a("h4"),s("Font Weight"),r("h4"),a("p"),s("Lexicon incorporates three font weights in order to provide enough options to solve the different needs of content hierarchy without adding complexity to the system."),r("p"),a("table"),a("thead"),a("tr"),a("th"),s("Font Height"),r("th"),a("th"),s("Reference"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),s("Regular"),r("td"),a("td",null,null,"class","type-scale type-scale-16 type-regular"),s("400"),r("td"),r("tr"),a("tr"),a("td"),s("Semibold"),r("td"),a("td",null,null,"class","type-scale type-scale-16 type-semibold"),s("600"),r("td"),r("tr");a("tr"),a("td"),s("Bold"),r("td"),a("td",null,null,"class","type-scale type-scale-16 type-bold"),s("700"),r("td"),r("tr"),r("tbody"),r("table"),a("p"),s('The specific use cases of the different weights are defined in the "Type Styles" section.'),r("p"),a("h4"),s("Letter Case"),r("h4"),a("p"),s("The system uses lowercase as a basis regardless of the specific capitalization rules. It only uses the uppercase as a hierarchy resource in the section divider pattern that we can find in dataset display views and forms for example."),r("p"),a("p"),s('The specific cases of use of the different weights are defined in the "Type Styles" section.'),r("p"),a("h4"),s("Line Length"),r("h4"),a("p"),s("In order to provide a comfortable continuous reading we recommend to adjust the texts of medium and long length to a line width within a range between 60 and 100 characters including spacing. In this way we favor an adequate reading rhythm avoiding too long lines that can force the look excessively and lose the horizontal reference, or too short lines that interrupt the reading very often and force a constant eye movement."),r("p"),a("p"),a("img",null,null,"srcset","../../../images/LineLength@2x.png 2x","src","../../../images/LineLength.png","alt","line length expalanatory image"),r("img"),r("p"),a("h3",null,null,"id","type-styles"),s("Type styles"),r("h3"),a("p"),s("These tables show the different format combinations that can be found in Lexicon with some reference examples."),r("p"),a("h4"),s("Headings"),r("h4"),a("table"),a("thead"),a("tr"),a("th"),s("Font Size"),r("th"),a("th"),s("Line Height"),r("th"),a("th"),s("Font Weight"),r("th"),a("th"),s("Letter Case"),r("th"),a("th"),s("Use Example"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),s("12px / 0.75rem"),r("td"),a("td"),s("1.25"),r("td"),a("td"),s("600 (semibold)"),r("td"),a("td"),s("Uppercase"),r("td"),a("td"),s("Dataset section divider"),r("td"),r("tr"),a("tr"),a("td"),s("14px / 0.875rem"),r("td"),a("td"),s("1.25"),r("td"),a("td"),s("600 (semibold)"),r("td"),a("td"),s("Uppercase"),r("td"),a("td"),s("Form section divider"),r("td"),r("tr"),a("tr"),a("td"),s("16px / 1rem"),r("td"),a("td"),s("1.25"),r("td"),a("td"),s("700 (bold)"),r("td"),a("td"),s("Lowercase"),r("td"),a("td"),s("Application and Page titles"),r("td"),r("tr"),a("tr"),a("td"),s("20px / 1.25rem"),r("td"),a("td"),s("1.25"),r("td"),a("td"),s("700 (bold)"),r("td"),a("td"),s("Lowercase"),r("td"),a("td"),s("Form title"),r("td"),r("tr"),a("tr"),a("td"),s("24px / 1.5rem"),r("td"),a("td"),s("1.25"),r("td"),a("td"),s("700 (bold)"),r("td"),a("td"),s("Lowercase"),r("td"),a("td"),s("Asset title in asset display widgets"),r("td"),r("tr"),a("tr"),a("td"),s("28px / 1.75rem"),r("td"),a("td"),s("1.25"),r("td"),a("td"),s("700 (bold)"),r("td"),a("td"),s("Lowercase"),r("td"),a("td"),s("Blog Entry title in blogs widget"),r("td"),r("tr"),a("tr"),a("td"),s("36px / 2.25rem"),r("td"),a("td"),s("1.25"),r("td"),a("td"),s("700 (bold)"),r("td"),a("td"),s("Lowercase"),r("td"),a("td"),s("Blog Entry Detail title"),r("td"),r("tr"),r("tbody"),r("table"),a("h4"),s("Paragraph"),r("h4"),a("table"),a("thead"),a("tr"),a("th"),s("Font Size"),r("th"),a("th"),s("Line Height"),r("th"),a("th"),s("Font Weight"),r("th"),a("th"),s("Letter Case");r("th"),a("th"),s("Use Example"),r("th"),r("tr"),r("thead"),a("tbody"),a("tr"),a("td"),s("16px / 1rem"),r("td"),a("td"),s("1.5"),r("td"),a("td"),s("400 (regular)"),r("td"),a("td"),s("Lowercase"),r("td"),a("td"),s("Mid-long read text"),r("td"),r("tr"),r("tbody"),r("table"),a("p"),s("The paragraph element incorporates a margin bottom of 0.75rem (12px) to define the separation between the different text blocks."),r("p"),a("h4"),s("General UI Elements"),r("h4"),a("p"),s("All the Lexicon UI elements are styled based on a combination of these format values previously described. You can check the font attributes of each element in its specific page."),r("p"),a("input",null,null,"type","hidden","value",t.page.title),r("input"),a("input",null,null,"type","hidden","value",t.site.title),r("input")};d(n.$$assignDefaults({content:i},t),null,o)}goog.module("MxcDs.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),a=o.elementOpen,r=o.elementClose,s=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),d=(o.attr,c.default.getTemplate("guide.incrementaldom","render"));return t.render=e,goog.DEBUG&&(e.soyTemplateName="MxcDs.render"),t.render.params=["page","site"],t.render.types={page:"?",site:"?"},t.templates=i=t,t});var h=function(t){function e(){return a(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),e}(l.default);c.default.register(h,i),e.MxcDs=h,e.templates=i,e.default=i}},[170]);