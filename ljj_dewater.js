function banner_path() {
    return '#oneboolt';
}

function extract_floor_info(info) {
    var content = info.parent().find('div[class="noveltext"]');
    var title = content.find('h2').text();

    content.children('div,hr').remove();
	var c = content.html().replace(/<font color="#E.*?<\/font>/g,'');
	var w = c.replace(/<.*?>/g, '');
	return {
		content: c,
		word_num: w.length,
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
	var urls = $('a[itemprop="url"]');
	if (!urls) return 1;
	return urls.length-1;
}

function format_thread_url_1st(url) {
	var urls = $('a[itemprop="url"]');
    return urls[1];
}

function format_thread_url_ith(url,i)  {
    var j = parseInt(i) ;
	var urls = $('a[itemprop="url"]');
    return urls[j];
}
