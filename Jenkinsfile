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
          // Execute shell command to install npm
          sh 'curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -'
          sh 'sudo apt-get install -y nodejs'

          // Verify npm installation
          sh 'npm --version'
        }
      }
    }
  }
}
