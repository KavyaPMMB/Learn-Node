const url = require('url');
const querystring = require('querystring');

const urlString = 'https://example.com/path?param1=value1&param2=value2';

const parsedUrl = new URL(urlString);
const parsedQuery = querystring.parse(parsedUrl.search.slice(1)); // Remove the '?' and parse the query string

console.log('Parsed URL:');
console.log('Protocol:', parsedUrl.protocol);
console.log('Hostname:', parsedUrl.hostname);
console.log('Path:', parsedUrl.pathname);
console.log('Parsed Query String:');
console.log(parsedQuery);
