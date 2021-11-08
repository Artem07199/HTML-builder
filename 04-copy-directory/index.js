const fs = require('fs');


fs.mkdir('./04-copy-directory/files-copy', { recursive: true }, () => {
  fs.readdir('./04-copy-directory/files', (err, data) => {
    data.forEach(file => {
      fs.copyFile('./04-copy-directory/files' + '/' + file, './04-copy-directory/files-copy' + '/' + file, function() {});
    });
    console.log('File Copied');
  });
      
  fs.readdir('./04-copy-directory/files-copy', (err, data) => {
    data.forEach(file => {
      fs.stat('./04-copy-directory/files' + '/' + file, function ( err) {
        if (err) {
          fs.unlink('./04-copy-directory/files-copy' + '/' + file, function () {});
        }
      });
    });
  });

});


