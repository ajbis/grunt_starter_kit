module.exports = function(grunt){

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %>, <%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			my_target: {
				files: {
					'assets/js/<%= pkg.name %>.min.js': ['build/js/<%= pkg.name %>.js']
				}
			}
		}
	});

	// Load the plugin that provides the 'uglify' task.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['uglify']);

}