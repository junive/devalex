function get_ticker_info(listener) {
  query_phoenix({ WRequest: 'Infos' }, function(xml) {
    info_item = xml.getElementsByTagName('InfoItem')[0];
    scrolling_text = unescape(info_item.getAttribute('ScrollingText'));
    spy('ticker: ' + scrolling_text);
    listener(scrolling_text);
  });
}
