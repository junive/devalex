function query_phoenix(params, handler) {
  new Ajax.Request(phoenix_url, {
    method: 'get',
    asynchronous: true,
    parameters: params,
    onSuccess: function(transport) {
      handler(transport.responseXML);
    },

		onFailure: function() {
			spy('AJAX error');
		}
	});
}
