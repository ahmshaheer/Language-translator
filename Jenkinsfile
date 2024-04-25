pipeline {
  agent {
    docker { image 'node:16-alpine' }
    }
  stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    } 
  stages {
        stage('Test') {
      steps {
        sh 'node --version'
            }
        }
    }
}
