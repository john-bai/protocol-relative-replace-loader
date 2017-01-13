'use strict';

module.exports = function(source) {
    return source.replace( /(url\([\'\"\s]*)\/\//gi, '$1https://' );
};
