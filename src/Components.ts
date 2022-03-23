// ------------Generate a random string-----------
// const randomString = () => Math.random().toString(36).slice(2);
// console.log(randomString());
// --------Escape HTML special characters---------
// const escape = (str) => {
//   str.replace(
//     /[&<>"']/g,
//     (m) =>
//       ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
//         m
//       ])
//   );
// };
// escape('<div class="medium">Hi Medium.</div>');
// --------Uppercase the first character of each word in a string-----
// const uppercaseWords = (str) =>
//   str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
// uppercaseWords("hello world");
//---------Convert a string to camelCase -------------------------
// const toCamelCase = (str) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
// toCamelCase('background-color');
//-- Remove duplicate values in an array-----
//

