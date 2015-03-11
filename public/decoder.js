module.exports = {
  decode: function(token) {
    var parts, header, claim, signature;
    token = token || '';
    parts = token.split('.');
    if (parts.length === 3) {
      header = parts[0];
      claim = parts[1];
      signature = parts[2];
      header = JSON.parse(decodeURIComponent(escape(atob(header))));
      claim = JSON.parse(decodeURIComponent(escape(atob(claim))));
    }

    return {
      header: header,
      claim: claim,
      signature: signature
    }
  }
}
