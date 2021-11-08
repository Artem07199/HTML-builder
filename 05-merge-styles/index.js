const fs = require('fs');
const path = require('path');

fs.readdir('./05-merge-styles/styles', {withFileTypes: true}, ((err, data) => {
  data.forEach(file => {
    if (path.extname(file.name) === '.css') {
      fs.readFile('./05-merge-styles/styles' + '/' + file.name , ((err, data) => {
        if (err) throw err;
        else {
          fs.appendFile('./05-merge-styles/project-dist/bundle.css', data, err => {
            if (err) throw err;
          });
        }
      }));
    }
  });
}));
