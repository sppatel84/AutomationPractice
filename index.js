var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: './cucumber_report.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome",
            "Platform": "Any",
            "Parallel": "Scenarios",
            "Executed": "Local"
        }
    };
 
    reporter.generate(options);