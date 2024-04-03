pipeline {
    agent any
    tools {nodejs "NODEJS"}
    stages {
        stage('Install Stage') { 
            steps {
                sh 'npm install --force' 
            }
        }
    }
   post { 
        success {
            discordSend description: "Yaaayyy... Jenkins Pipeline Sistoko API Expressjs berhasil", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/1224926488948637796/YtiDePSG5hUJmsvXfF0vVIHMLW0WpEcr2SZ0uCNLZ8TN3mzVYd7Y38IGujzs4VuJgQyB"
        }
        failure {
            discordSend description: "Ooopss...  Pipeline Sistoko API Expressjs gagal", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/1224926488948637796/YtiDePSG5hUJmsvXfF0vVIHMLW0WpEcr2SZ0uCNLZ8TN3mzVYd7Y38IGujzs4VuJgQyB"
        }
    }
}
