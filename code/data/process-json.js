var fs = require('fs');
var jsonStr = fs.readFileSync('./articles_pre.json', 'utf8');

var articles = JSON.parse(jsonStr);

var res = [];

for (var idx in articles) {
	var complex = articles[idx];
	var article = complex.article;
	var comments = complex.comments;

	res.push(article);

	for (var comIdx in comments) {
		var comment = comments[comIdx];
		comment.article_id = article._id;
		res.push(comment);
	}
}

var resJson = JSON.stringify({ "docs": res });

fs.writeFileSync('articles.json', resJson);
