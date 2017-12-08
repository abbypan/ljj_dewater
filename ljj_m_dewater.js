function banner_path() {
    return 'h2';
}

function extract_floor_info(info) {

    var title = info.text().replace(/^[0-9]+./,'').replace(/\s+\.{3}$/,'');

    var content = info.parent().find('li:first');
    var c = content.html().replace(/<font color="#E.*?<\/font>/g,'');
	return {
		content: c,
		poster: title,
		time: '',
		id: null
	};
}

function floor_path() {
    return 'h2';
}

function page_charset() {
    return 'gb2312';
}

function get_topic_name() {
    var b = $('h2').html().replace(/^.*\>/,'').replace(/&gt;/,'');
    var w = $('#left li a:first').html();
    var topic=w + '-' + b;
    return topic;
}

function get_page_num() {
	var urls = $('a[style="text-decoration:none"]');
   	if (!urls) return 1;
 	return urls.length-2;
}

function format_thread_url_ith(url,i)  {
    var j = parseInt(i) ;
    j = j-1;
	var ux = $('a[style="text-decoration:none"]')[j];
    var u = ux.getAttribute('href');
    return u;
}

function format_thread_url_1st(url) {
    return format_thread_url_ith(url,1);
}

