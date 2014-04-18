var
  fs = require('fs'),
  _ = require('underscore'),
  Q = require('q')
  ;

if (process.argv.length < 3) {
  console.log('[USAGE]node merge.js FILENAME');
  return;
}

var listfile = './list.txt';
var file = process.argv[2];

Q.all([
    Q.nfcall(fs.readFile, file, 'utf8'),
    Q.nfcall(fs.readFile, listfile, 'utf8')
  ]).then(function (ret) {

    function toArray(text) {
      return text.split('\n').map(function (txt) {
        return txt.trim()
      });
    }

    var new_words = toArray(ret[0]);
    var list_words = toArray(ret[1]);

    var result_words = new_words.concat(list_words);
    result_words.sort()
    result_words = _.uniq(_.without(result_words, ''), true);

    result_words.forEach(function(word){
       console.log(word);
    });

  });

