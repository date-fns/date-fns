var dateFns = {
  format: require('./format')
};

if (module && module.exports) {
  module.exports = dateFns;
} else {
  window.dateFns = dateFns;
}

