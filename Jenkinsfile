pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from your repository
                git 'https://github.com/your-username/react-weather-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the React app
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run tests (if any)
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Dockerize') {
            steps {
                // Build the Docker image for the app
                sh 'docker build -t react-weather-app .'
            }
        }

        stage('Deploy') {
            steps {
                // Run the Docker container (adapt this step according to your deployment environment)
                sh 'docker run -d -p 80:80 react-weather-app'
            }
        }
    }

    post {
        success {
            echo 'Build and deployment were successful!'
        }
        failure {
            echo 'There was an error with the build or deployment.'
        }
    }
}

