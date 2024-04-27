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
     stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build' // Assuming you have a build script defined in your package.json
      }
    }
  }
}