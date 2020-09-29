module.exports = function(){
	let cb = function(){};
	let srcFonts = './src/static/sass/layout/fonts.scss';
	let appFonts = './build/static/fonts/';

	$.gulp.task('fontsStyle', function(done){
	let file_content = $.fs.readFileSync(srcFonts);

	$.fs.writeFile(srcFonts, '', cb);
	$.fs.readdir(appFonts, function (err, items) {
		if (items) {
			let c_fontname;
			for (var i = 0; i < items.length; i++) {
				let fontname = items[i].split('.');
				fontname = fontname[0];
				if (c_fontname != fontname) {
					$.fs.appendFile(srcFonts, '@include font-face("' + fontname + '", "' + fontname + '", 400);\r\n', cb);
				}
				c_fontname = fontname;
			}
		}
	})

	done();
	});
}