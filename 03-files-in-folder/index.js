const fs = require('fs');
const path = require('path');

fs.readdir('./03-files-in-folder/secret-folder', { withFileTypes: true }, (err, data) => {
  data.forEach( file => {
    if (file.isFile()) {
      fs.stat(path.join('./03-files-in-folder/secret-folder', file.name), (err, item) => {         
        console.log(`${path.parse(file.name).name} - ${path.extname(file.name).slice(1)} - ${(item.size/1024)}kb`);
      });
    }
  });
});