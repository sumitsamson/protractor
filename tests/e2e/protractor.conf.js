exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['spec.js']
  suites: {
  smoke: 'smoke/*.js',
  performance: 'performance/*.js',
  regression: 'regression/*.js'
  }

  params: {
    login: {
       user: 'Jane',
       password: '1234'
    }
 }
}