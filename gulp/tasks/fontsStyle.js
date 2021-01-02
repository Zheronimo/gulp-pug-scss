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
				
				let fontweight;
				let weight = fontname.toLowerCase();
				switch(true) {
					case weight.includes('thin'):
						fontweight = 100;
						break;
					case weight.includes('light'):
						fontweight = 300;
						break;
					case weight.includes('regular'):
						fontweight = 400;
						break;
					case weight.includes('medium'):
						fontweight = 500;
						break;
					case weight.includes('bold'):
						fontweight = 700;
						break;
					case weight.includes('black'):
						fontweight = 900;
						break;
					default:
						fontweight = 400;
				};
				
				let fontstyle;
				switch(true) {
					case str.includes('italic'):
						fontstyle = 'italic';
						break;
					default:
						fontstyle = 'normal';
				};
				
				if (c_fontname != fontname) {
					$.fs.appendFile(srcFonts, '@include font-face("' + fontname + '", "' + fontname + '", '+ fontweight +', "' +  fontstyle + '");\r\n', cb);
				}
				c_fontname = fontname;
			}
		}
	})

	done();
	});
}
