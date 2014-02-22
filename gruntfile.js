module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		eslint: {
			target: ['src/calculator.js'],
			options: {
					config: 'eslint.json'
			},
		},
		uglify: {
			options: {
				banner: '/*! calculator.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/calculator.js',
				dest: 'dist/calculator.min.js'
			}
		},
		mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-mocha-test');
	//grunt.loadNpmTasks('grunt-travis');

	grunt.registerTask('default', ['eslint', 'uglify', 'mochaTest']);
};