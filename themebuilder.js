// Will removed in future updates
// TODO: TAKE AWAY FROM ROOT FOLDER //
var extract = require('extract-zip');

extract(__dirname + '/dist/theme.zip', {dir: __dirname + '/dist'}, function (err) {
 // TODO extraction is complete. make sure to handle the err 
})

console.log('Finished');