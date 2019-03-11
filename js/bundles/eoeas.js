var pageComponent=webpackJsonppageComponent([25],{238:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),a=o(l),u=n(1),c=o(u);n(4),n(5),n(3),n(7),n(2),n(8),n(6),n(9),n(10),n(11),n(12),n(13),n(14);var p=n(239),g=o(p),d=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(a.default);c.default.register(d,g.default),t.default=d},239:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.eoeas=void 0;var l,a=n(0),u=o(a),c=n(1),p=o(c);goog.loadModule(function(e){function t(e,t,o){var l=function(){r("div",null,null,"class","page-description");var t=e.page.description;"function"==typeof t?t():null!=t&&a(t),s("div"),r("h3",null,null,"id","usage"),a("Usage"),s("h3"),r("p"),a("Progress bars are used as a feedback mechanism for system tasks. As long as the process is running, the progress bar grows continuously from 0% to 100%. Use it for system processes."),s("p"),r("h3",null,null,"id","states"),a("States"),s("h3"),r("h4"),a("Loading"),s("h4"),r("p"),a("The progress bar grows in primary color, and the label changes to reflect the completion percentage."),s("p"),r("p"),r("img",null,null,"srcset","../../../images/ProgressBar30@2x.jpg 2x","src","../../../images/ProgressBar30.jpg","alt","indeterminate progress bar"),s("img"),s("p"),r("h4"),a("Warning"),s("h4"),r("p"),a("The warning state indicates that something happened and interrupted the process."),s("p"),r("p"),r("img",null,null,"srcset","../../../images/ProgressBar70@2x.jpg 2x","src","../../../images/ProgressBar70.jpg","alt","indeterminate progress bar"),s("img"),s("p"),r("h4"),a("Finished"),s("h4"),r("p"),a("The finished state indicates that the process is completed successfully when the label changes to the success icon."),s("p"),r("p"),r("img",null,null,"srcset","../../../images/ProgressBar100@2x.jpg 2x","src","../../../images/ProgressBar100.jpg","alt","indeterminate progress bar"),s("img"),s("p"),r("h3",null,null,"id","dos-and-donts"),a("Dos and Don'ts"),s("h3"),r("table"),r("thead"),r("tr"),r("th"),a("Dos"),s("th"),r("th"),a("Don'ts"),s("th"),s("tr"),s("thead"),r("tbody"),r("tr"),r("td"),r("div",null,null,"class","d-flex align-items-center"),r("svg",null,null,"class","lexicon-icon lexicon-icon-check do mr-3"),i("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#check"),s("svg"),r("span"),a("Use it for processes such as a file upload."),s("span"),s("div"),s("td"),r("td"),r("div",null,null,"class","d-flex align-items-center"),r("svg",null,null,"class","lexicon-icon lexicon-icon-times dont mr-3"),i("use",null,null,"xlink:href","/vendor/lexicon/icons.svg#times"),s("svg"),r("span"),a("Never use it to communicate the progress of a user in a certain set of actions. For that you need a "),r("a",null,null,"href","https://lexicondesign.io/docs/patterns/Forms/multiStepForm.html"),a("multi step form type"),s("a"),a("."),s("span"),s("div"),s("td"),s("tr"),s("tbody"),s("table"),r("input",null,null,"type","hidden","value",e.page.title),s("input"),r("input",null,null,"type","hidden","value",e.site.title),s("input")};u(n.$$assignDefaults({content:l},e),null,o)}goog.module("eoeas.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),r=o.elementOpen,s=o.elementClose,i=o.elementVoid,a=(o.elementOpenStart,o.elementOpenEnd,o.text),u=(o.attr,p.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="eoeas.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var g=function(e){function t(){return r(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.default);p.default.register(g,l),t.eoeas=g,t.templates=l,t.default=l}},[238]);