const fs = require('fs');
const path = require('path');

fs.mkdir('./06-build-page/project-dist', { recursive: true }, () => {});
fs.mkdir('./06-build-page/project-dist/assets', { recursive: true }, () => {});
fs.mkdir('./06-build-page/project-dist/assets/fonts', { recursive: true }, () => {});
fs.mkdir('./06-build-page/project-dist/assets/img', { recursive: true }, () => {});
fs.mkdir('./06-build-page/project-dist/assets/svg', { recursive: true }, () => {});

const readStream = fs.createReadStream('./06-build-page/template.html');
readStream.on('data', data => {
  var html = data.toString();
  fs.readdir('./06-build-page/components', function (err, files) {
    files.forEach(file => {
      const writeStream = fs.createReadStream(path.join('./06-build-page/components', file));
      writeStream.on('data', data => {
        html = html.replace(`{{${file.slice(0, file.indexOf('.'))}}}`, data);
        fs.writeFile('./06-build-page/project-dist/index.html', html, err => {
          if (err) {
            throw err;
          }
        });
      });
    });
  });
});

fs.readdir('./06-build-page/styles', {withFileTypes: true}, ((err, data) => {
  data.forEach(file => {
    if (path.extname(file.name) === '.css') {
      fs.readFile('./06-build-page/styles' + '/' + file.name , ((err, data) => {
        if (err) throw err;
        else {
          fs.appendFile('./06-build-page/project-dist/style.css', data, err => {
            if (err) throw err;
          });
        }
      }));
    }
  });
}));


fs.readdir('./06-build-page/assets/fonts', (err, files) => {
  files.forEach(file => {
    fs.copyFile('./06-build-page/assets/fonts' + '/' + file, './06-build-page/project-dist/assets/fonts' + '/' + file, function() {});
  });
  console.log('Project-dist created');
});
        
fs.readdir('./06-build-page/project-dist/assets/fonts', (err, files) => {
  files.forEach(file => {
    fs.stat('./06-build-page/assets/fonts' + '/' + file, function ( err) {
      if (err) {
        fs.unlink('./06-build-page/project-dist/assets/fonts' + '/' + file, function () {});
      }
    });
  });
});
fs.readdir('./06-build-page/assets/img', (err, files) => {
  files.forEach(file => {
    fs.copyFile('./06-build-page/assets/img' + '/' + file, './06-build-page/project-dist/assets/img' + '/' + file, function() {});
  });

});
        
fs.readdir('./06-build-page/project-dist/assets/img', (err, files) => {
  files.forEach(file => {
    fs.stat('./06-build-page/assets/img' + '/' + file, function ( err) {
      if (err) {
        fs.unlink('./06-build-page/project-dist/assets/img' + '/' + file, function () {});
      }
    });
  });
});
fs.readdir('./06-build-page/assets/svg', (err, files) => {
  files.forEach(file => {
    fs.copyFile('./06-build-page/assets/svg' + '/' + file, './06-build-page/project-dist/assets/svg' + '/' + file, function() {});
  });

});
        
fs.readdir('./06-build-page/project-dist/assets/svg', (err, files) => {
  files.forEach(file => {
    fs.stat('./06-build-page/assets/svg' + '/' + file, function ( err) {
      if (err) {
        fs.unlink('./06-build-page/project-dist/assets/svg' + '/' + file, function () {});
      }
    });
  });
});







