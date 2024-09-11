pipeline {
    agent any
    environment {
        USERNAME = 'JHD'
    }
    stages {
        stage('Build and Test') {
            agent {
                docker {
                    image 'node:20.11.1-alpine3.19'
                    reuseNode true
                }
            }
            steps {
                stage('Instalar dependencias') {
                    steps {
                        sh 'npm install'
                    }
                }
                stage('Ejecución de test') {
                    steps {
                        sh 'npm run test'
                    }
                }
                stage('Ejecución de build') {
                    steps {
                        sh 'npm run build'
                    }
                }
            }
        }
    }
}
