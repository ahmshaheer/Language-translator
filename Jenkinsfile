pipeline {
  agent {
    docker { image 'node:16-alpine' }
  }
  stages {
    stage('Test') {
      steps {
        sh 'node --version'
      }
    }
    stage('Install npm') {
      steps {
        script {
          // Update package index and install Node.js and npm using apk
          sh 'apk update'
          sh 'apk add nodejs npm'

          // Verify npm installation
          sh 'npm --version'
        }
      }
    }
  }
}
