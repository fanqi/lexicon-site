var pageComponent=webpackJsonppageComponent([69],{278:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),a=r(l),c=n(1),p=r(c);n(4),n(5),n(3),n(2),n(7),n(6),n(8),n(9),n(10),n(11),n(12),n(13);var u=n(279),g=r(u),m=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),t}(a.default);p.default.register(m,g.default),t.default=m},279:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.ODJGo=void 0;var l,a=n(0),c=r(a),p=n(1),u=r(p);goog.loadModule(function(e){function t(e,t,r){var l=function(){i("h3",null,null,"id","description"),s("Description"),o("h3"),i("p");var t=e.page.description;"function"==typeof t?t():null!=t&&s(t),o("p"),i("p"),s("This page contemplates the visual definition of the hierarchy, the measurements and the definition of the components that establish that hierarchy"),o("p"),i("h3",null,null,"id","layout"),s("Layout"),o("h3"),i("p"),s("There are defined three main elements to define the form hierarchy:"),o("p"),i("ol"),i("li"),s("Form title"),o("li"),i("li"),s("First level section header. This one can be either:"),i("ol"),i("li"),s("The header of a fixed section"),o("li"),i("li"),s("The header of a collapsible section"),o("li"),o("ol"),o("li"),i("li"),s("Second level section header"),o("li"),o("ol"),i("p"),s("You can see all these elements coexisting in the same form structure in the following examples:"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/FormHierarchy1@2x.png 2x","src","../../../images/FormHierarchy1.png","alt","Form hierarchy example 1"),o("img"),o("p"),i("p"),s("Including examplanatory texts:"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/FormHierarchy2@2x.png 2x","src","../../../images/FormHierarchy2.png","alt","Form hierarchy example 2"),o("img"),o("p"),i("h3",null,null,"id","attributes"),s("Attributes"),o("h3"),i("p"),s("Metrics definition is important to understand how forms are build and the vertical spacing logic work in our forms."),o("p"),i("h4"),s("Desktop"),o("h4"),i("p"),s("As it’s explained in the "),i("a",null,null,"href","../../designPrinciples/grid.html"),s("grid section"),o("a"),s(", the main vertical spacing reference is 24px."),o("p"),i("p"),i("strong"),s("Section blocks metrics"),o("strong"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/FormHierarchy3@2x.png 2x","src","../../../images/FormHierarchy3.png","alt","Section blocks metrics"),o("img"),o("p"),i("p"),i("strong"),s("Inside sections metrics"),o("strong"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/FormHierarchy4@2x.png 2x","src","../../../images/FormHierarchy4.png","alt","Inside sections metrics 1"),o("img"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/FormHierarchy5@2x.png 2x","src","../../../images/FormHierarchy5.png","alt","Inside sections metrics 2"),o("img"),o("p"),i("p"),i("strong"),s("Metrics using explanatory texts associated to different section levels"),o("strong"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/FormHierarchy6@2x.png 2x","src","../../../images/FormHierarchy6.png","alt","Metrics using explanatory texts associated to different section levels"),o("img"),o("p"),i("h4"),s("Mobile"),o("h4"),i("p"),s("In small viewports, as it’s explained in the "),i("a",null,null,"href","../../designPrinciples/grid.html"),s("grid section"),o("a"),s(" the main vertical spacing reference changes from 24px to 16px."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/FormHierarchy7@2x.png 2x","src","../../../images/FormHierarchy7.png","alt","Inside sections metrics 2"),o("img"),o("p"),i("p"),i("img",null,null,"srcset","../../../images/FormHierarchy8@2x.png 2x","src","../../../images/FormHierarchy8.png","alt","Inside sections metrics 2"),o("img"),o("p"),i("h3",null,null,"id","components-description"),s("Components Description"),o("h3"),i("p"),s("Here you can see all specific components we can find in this documentation."),o("p"),i("p"),i("img",null,null,"srcset","../../../images/FormHierarchy9@2x.png 2x","src","../../../images/FormHierarchy9.png","alt","Components description"),o("img"),o("p"),i("input",null,null,"type","hidden","value",e.page.title),o("input"),i("input",null,null,"type","hidden","value",e.site.title),o("input")};a(n.$$assignDefaults({content:l},e),null,r)}goog.module("ODJGo.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var r=goog.require("incrementaldom"),i=r.elementOpen,o=r.elementClose,s=(r.elementVoid,r.elementOpenStart,r.elementOpenEnd,r.text),a=(r.attr,u.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="ODJGo.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var g=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),t}(c.default);u.default.register(g,l),t.ODJGo=g,t.templates=l,t.default=l}},[278]);