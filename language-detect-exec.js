var exec   = require('language-exec');
var detect = require('language-detect');

/**
 * Execute any file in a known programming language.
 *
 * @param {String}   file
 * @param {String}   args
 * @param {Object}   opts
 * @param {Function} done
 */
module.exports = function (file) {
  var done = arguments[arguments.length - 1];
  var args = Array.prototype.slice.call(arguments);

  // Attempt to detect the programming language. This will pass through an
  // error when the file doesn't exist and a possible language.
  return detect(file, function (err, language) {
    if (err) {
      return done(err);
    }

    if (!language) {
      return done(new Error('Unable to detect programming language'));
    }

    return exec.apply(null, [language.name].concat(args));
  });
};
