exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['smoke/*.js','performance/*.js','regression/*.js']
 }
