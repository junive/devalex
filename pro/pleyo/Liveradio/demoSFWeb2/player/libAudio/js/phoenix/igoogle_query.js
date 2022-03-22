function query_phoenix(params, handler) {
  var query = phoenix_url + '?' + $H(params).toQueryString();
  _IG_FetchXmlContent(query, handler);
}
