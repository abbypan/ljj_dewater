function banner_path() {
    return '#oneboolt';
}

function extract_floor_info(info) {
    var title = info.find('h2').text();

    info.children('div,hr').remove();
	var c = info.html().replace(/<font color="#E.*?<\/font>/g,'');
	return {
		content: c,
		poster: title,
		time: '', 
		id: null
	};
}

function floor_path() {
    return '.noveltext';
}

function page_charset() {
    return 'gb2312';
}

function get_topic_name() {
    var arr = new Array(2);
    arr[0] = $('span[itemprop="author"]').text();
    arr[1] = $('span[itemprop="articleSection"]').text();
	return arr.join("-");
}

function get_page_num() {
	var urls = $('tr[itemtype="http://schema.org/Chapter"]');
	if (!urls) return 1;
 	return urls.length;
}

function format_thread_url_ith(url,i)  {
    var j = parseInt(i) ;
    j = j-1;
  	var urls = $('tr[itemtype="http://schema.org/Chapter"]')[j];
    var c = urls.innerHTML;
    var x = $(c).find('a')[0];
    var u = x.getAttribute('href') || x.getAttribute('rel');
    return u;
}

function format_thread_url_1st(url) {
    return format_thread_url_ith(url,1);
}
