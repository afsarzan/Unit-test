module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      'lib/bower_components/jquery/dist/jquery.js',
      'lib/bower_components/jasmine-jquery/lib/jasmine-jquery.js',
      'test/*.js',

      // fixtures
      { pattern: ' ',
        watched: true,
        served:  true,
        included: false
      }
    ],

    browsers: ["Chrome"], //"Chrome",
       reporters: ['progress', 'html'],
 
    // the default configuration 
    htmlReporter: {
      outputDir: 'output/', // where to put the reports  
      templatePath: null, // set if you moved jasmine_template.html 
      focusOnFailures: false, // reports show failures on start 
      namedFiles: false, // name files instead of creating sub-directories 
      pageTitle: "test page title", // page title for reports; browser info by default 
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs 
      
      
      // experimental 
      preserveDescribeNesting: false, // folded suites stay folded  
      foldAll: false, // reports start folded (only with preserveDescribeNesting) 
    },
  });
};
