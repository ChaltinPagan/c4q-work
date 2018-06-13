const fs = require('fs');
const path = require('path');

function list(name, ext, cb) {
  fs.readdir(name, (err, files) => {
    if (err) {
      cb(err);
      return;
    }

    cb(null, files);
  })
  return;
}

module.exports.list = list;
 