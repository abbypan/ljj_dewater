function banner_path() {
    return 'div[class="b module"]';
}

function extract_floor_info(info) {
    var content = info.parent().parent().find('div[class="b module"]');
    var title = content.find('h2').text();

    content.children('div,hr').remove();
	var c = content.html().replace(/<font color="#E.*?<\/font>/g,'');
	var w = c.replace(/<.*?>/g, '');
	return {
		content: c,
		//word_num: w.length,
		poster: title,
		time: '', 
		id: null
	};
}

function floor_path() {
    return '.module';
}

function page_charset() {
    return 'gb2312';
}

function get_topic_name() {
    var t = $('title').text();
    var m = t.match(/<title>《(.*?)》(.*?)_/);
    return m[1] + '-' + m[2];
}

function get_page_num() {
	var urls = $('a[style="text-decoration:none"]');
	if (!urls) return 1;
 	return urls.length;
}

function format_thread_url_ith(url,i)  {
    var j = parseInt(i) ;
    j = j-1;
	var urls = $('a[style="text-decoration:none"]')[j];
    var c = urls.innerHTML;
    var x = $(c).find('a')[0];
    var u = x.getAttribute('href');
    return u;
}

function format_thread_url_1st(url) {
    return format_thread_url_ith(url,1);
}
