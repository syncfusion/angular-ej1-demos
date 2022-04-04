import 'reflect-metadata';
import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
if (navigator.appVersion.indexOf('MSIE 9.0') != -1) {
  require('classlist.js/classList');
}
// import 'syncfusion-javascript/Content/ej/web/bootstrap-theme/ej.web.all.min.css';
