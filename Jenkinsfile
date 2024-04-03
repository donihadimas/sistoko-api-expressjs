pipeline {
    agent any
    tools {nodejs "NODEJS"}
    stages {
        stage('Install Stage') { 
            steps {
                sh 'npm install --legacy-peer-deps' 
            }
        }
    }
    post { 
        success {
            script {
                def changeLog = currentBuild.changeSets.collect { entry ->
                    entry.collect { item ->
                        "- ${item.author.fullName} commit: \n ${item.msg} \n commit id: ${item.commitId}"
                    }
                }.flatten().join('\n')

                def successMessage = "Yaaayyy... Jenkins Pipeline Sistoko API Expressjs berhasil\n\n"
                successMessage += "Changes:\n${changeLog}"

                discordSend description: successMessage, link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/1224926488948637796/YtiDePSG5hUJmsvXfF0vVIHMLW0WpEcr2SZ0uCNLZ8TN3mzVYd7Y38IGujzs4VuJgQyB"
            }
        }
        failure {
            script {
                def changeLog = currentBuild.changeSets.collect { entry ->
                    entry.collect { item ->
                        "- ${item.author.fullName} commit: \n ${item.msg} \n commit id: ${item.commitId}"
                    }
                }.flatten().join('\n')

                def failureMessage = "Ooopss...  Pipeline Sistoko API Expressjs gagal\n\n"
                failureMessage += "Changes:\n${changeLog}"

                discordSend description: failureMessage, link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/1224926488948637796/YtiDePSG5hUJmsvXfF0vVIHMLW0WpEcr2SZ0uCNLZ8TN3mzVYd7Y38IGujzs4VuJgQyB"
            }
        }
    }
}
