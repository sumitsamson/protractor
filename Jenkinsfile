pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'              
            }
        }
		 stage('Notify CDD') {
            steps {
               echo 'Notify....'  
               notifyCDD appName: 'CDD_7.1_APP', appVersion: '1.0', releaseTokens: '{"packageName":"BillingPackage_85"} '
            }
        }
    }
}
