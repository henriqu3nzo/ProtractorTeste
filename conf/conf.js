// An example configuration file.
exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../tests/login.js'],
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },

    onPrepare: function () {

        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
          consolidateAll: true,
          savePath: './',
          filePrefix: 'xmlresults'
        }));
    
        var fs = require('fs-extra');
     
    fs.emptyDir('screenshots/', function (err) {
            console.log(err);
        });
     
        jasmine.getEnv().addReporter({
            specDone: function(result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');
     
                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName+ '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });
    },

    //HTMLReport called once tests are finished
    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
        browserName = caps.get('browserName');
        browserVersion = caps.get('version');
        platform = caps.get('platform');

        var HTMLReport = require('protractor-html-reporter-2');

        testConfig = {
            reportTitle: 'Relatório de Teste com Protractor + Jasmine',
            outputPath: './',
            outputFilename: 'RelatorioTeste',
            screenshotPath: './screenshots',
            testBrowser: browserName,
            browserVersion: browserVersion,
            modifiedSuiteName: false,
            screenshotsOnlyOnFailure: true,
            testPlatform: platform
        };
        new HTMLReport().from('xmlresults.xml', testConfig);
        });
    }
    
  };
  