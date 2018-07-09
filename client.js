var LDAP = require('ldap-client');

var ldap = new LDAP({
  uri: 'ldap://0.0.0.0:1389',
  validatecert: false,
  connecttimeout: -1,
  base: 'dc=com',
  attrs: '*',
  filter: '(objectClass=*)',
  scope: LDAP.SUBTREE,
  connect: function(res) {
    console.log('connected');
    console.log(res);
  },
  discconect: function(res) {
    console.log('disconnected');
    console.log(res);
  },
}, function(err) {
  console.log(err);
});