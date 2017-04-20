// WARNING //
// DO NOT CHANGE THIS FILE
// ANY CHANGE COULD DESTROY WHOLE PROJECT DIRECTORY
var fs = require('fs');
var rimraf = require('rimraf');
var extract = require('extract-zip');

removeDir = function(dirPath, removeSelf) {
  if (removeSelf === undefined) {
    removeSelf = false;
  }

  try {
    var files = fs.readdirSync(dirPath);
  } catch(e) {
    return;
  }
  if (files.length > 0) {
    for (var i = 0; i < files.length; i++) {
      var filePath = dirPath + '/' + files[i];
      if ( fs.statSync(filePath).isFile() && files[i].split('.').pop() != 'zip') {
        fs.unlinkSync(filePath);
      } else if( files[i].split('.').pop() != 'zip' ) {
        rimraf(filePath, function () {});
    }
    if (removeSelf)
      fs.rmdirSync(dirPath);
    }
  }
}
removeDir(__dirname + '/dist');

// Will removed in future updates

extract(__dirname + '/dist/theme.zip', {dir: __dirname + '/dist'}, function (err) {
 // TODO extraction is complete. make sure to handle the err 
})
