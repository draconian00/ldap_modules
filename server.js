var ldap = require('ldapjs');

var server = ldap.createServer();

server.search('o=example', function(req, res, next) {
  var obj = {
    dn: req.dn.toString(),
    attributes: {
      objectClass: ['organization', 'top'],
      o: 'example'
    }
  };

  console.log(req);

  if (req.filter.matches(obj.attributes))
    res.send(obj);

  res.end();
});

server.listen(1389, function() {
  console.log('LDAP server lisening at %s', server.url);
});
