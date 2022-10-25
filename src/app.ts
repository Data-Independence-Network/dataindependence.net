const express = require('express');
const site = express();

site.use(express.static('public'));

module.exports = site;
