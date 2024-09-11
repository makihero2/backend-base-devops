pipeline {
    agent any
    environment {
        USERNAME = 'JHD'
    } 
    stages {
        stage('Build and test') {
            agent {
                docker {
                    image 'node:20.11.1-alpine3.19'
                    reuseNode true
                }
            }
            steps {
                script {
                    stage ('Instalar dependencias') {
                        sh 'npm install'
                    }
                    stage ('Ejecución de test') {
                        sh 'npm run test'
                    }
                    stage ('Ejecución de build') {
                        sh 'npm run build'
                    }
                }
            }
        }
    }
}
