var pageComponent=webpackJsonppageComponent([88],{236:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=o(0),l=n(s),u=o(1),p=n(u);o(4),o(5),o(3),o(2),o(7),o(6),o(8),o(9),o(10),o(11),o(12),o(13);var c=o(237),m=n(c),g=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(l.default);p.default.register(g,m.default),t.default=g},237:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.SlJTr=void 0;var s,l=o(0),u=n(l),p=o(1),c=n(p);goog.loadModule(function(e){function t(e,t,n){var s=function(){i("h3",null,null,"id","description"),r("Description"),a("h3"),i("p");var t=e.page.description;"function"==typeof t?t():null!=t&&r(t),r(" The space is organized in 3 columns for the sidebar and 9 or 8 columns for the content depending on its type. This way we would have two different configurations:"),a("p"),i("h3",null,null,"id","columns"),r("3+9 columns"),a("h3"),i("p"),r("This is the default configuration used when the content is a table, a list or any other content structure except a form."),a("p"),i("p"),i("img",null,null,"srcset","../../../images/layoutSidebar@2x.jpg 2x","src","../../../images/layoutSidebar.jpg","alt","layout sidebar and box, 1440px width screen"),a("img"),a("p"),i("h4"),r("Responsive behavior"),a("h4"),i("p"),r("On viewport sizes equal or less than 768px we introduce to changes of the layout in order to optimize space for content:"),a("p"),i("ul"),i("li"),r("The change of the vertical navigation to a toggle top navigation as is described on the "),i("a",null,null,"href","../../patterns/Navigation/verticalNav.html"),r("Nested navigation"),a("a"),r("."),a("li"),i("li"),r("The change of the box from 9 to 12 columns."),a("li"),a("ul"),i("p"),i("img",null,null,"srcset","../../../images/layoutsidebarsummary@2x.jpg 2x","src","../../../images/layoutsidebarsummary.jpg","alt","layout sidebar + box responsive summary"),a("img"),a("p"),i("h4"),r("Attributes"),a("h4"),i("p"),i("img",null,null,"srcset","../../../images/layoutsidebarmetrics@2x.jpg 2x","src","../../../images/layoutsidebarmetrics.jpg","alt","layout sidebar + box metrics"),a("img"),a("p"),i("h4"),r("Example"),a("h4"),i("p"),i("img",null,null,"srcset","../../../images/layoutsidebarexample@2x.jpg 2x","src","../../../images/layoutsidebarexample.jpg","alt","layout sidebar + box example"),a("img"),a("p"),i("h3",null,null,"id","columns-forms"),r("3+8 columns (Forms)"),a("h3"),i("p"),r("When the box shown in this type of layout is a box that contains a form, it has to be adapted to the measures established for form containers. Therefore the space to occupy would be 8 instead of 9 columns."),a("p"),i("p"),i("img",null,null,"srcset","../../../images/layoutSidebarBox8@2x.jpg 2x","src","../../../images/layoutSidebarBox8.jpg","alt","layout sidebar and box 8 columns, 1440px width screen"),a("img"),a("p"),i("h4"),r("Responsive behavior"),a("h4"),i("p"),r("The main point to take into account is the change from 8 to 9 columns on viewport sizes equal or less than 992px in order to optimize space for content."),a("p"),i("p"),i("img",null,null,"srcset","../../../images/layoutsidebarbox8summary@2x.jpg 2x","src","../../../images/layoutsidebarbox8summary.jpg","alt","layout sidebar + box 8 columns responsive summary"),a("img"),a("p"),i("h4"),r("Attributes"),a("h4"),i("p"),i("img",null,null,"srcset","../../../images/layoutsidebarbox8metrics@2x.jpg 2x","src","../../../images/layoutsidebarbox8metrics.jpg","alt","layout sidebar + box 8 columns metrics"),a("img"),a("p"),i("h4"),r("Example"),a("h4"),i("p"),i("img",null,null,"srcset","../../../images/layoutsidebarbox8example@2x.jpg 2x","src","../../../images/layoutsidebarbox8example.jpg","alt","layout sidebar + box 8 columns example"),a("img"),a("p"),i("h3",null,null,"id","exceptions"),r("Exceptions"),a("h3"),i("p"),r("3+9 columns and 3+8 columns are the most common situations to have in Lexicon interfaces, but 2 other exceptional scenarios are possible."),a("p"),i("ul"),i("li"),r("Scenario 1: 3+9 columns configuration turns into 2+10 columns configuration."),a("li"),i("li"),r("Scenario 2: 3+8 columns configuration turns into 2+9 columns configuration."),a("li"),a("ul"),i("p"),r("These two scenarios are only desirable when you are sure that the sidebar width is enough with 2 columns. Reasons to move into these configurations can be:"),a("p"),i("ul"),i("li"),r("Really short vertical navigation titles. Please make sure this happens in all the languages that your site manages."),a("li"),i("li"),r("More space in the main box to fit a table with many columns."),a("li"),a("ul"),i("p"),r("Please if you move into these configuration make sure you apply 2 columns for the sidebar in all application sections instead of 2 in some and 3 in others for the sake of consistency in your application."),a("p"),i("input",null,null,"type","hidden","value",e.page.title),a("input"),i("input",null,null,"type","hidden","value",e.site.title),a("input")};l(o.$$assignDefaults({content:s},e),null,n)}goog.module("SlJTr.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),i=n.elementOpen,a=n.elementClose,r=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),l=(n.attr,c.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="SlJTr.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=s=e,e});var m=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),t}(u.default);c.default.register(m,s),t.SlJTr=m,t.templates=s,t.default=s}},[236]);