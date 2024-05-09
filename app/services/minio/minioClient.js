const Minio = require('minio')

const minioClient = new Minio.Client({
    endPoint: process.env.MINIO_ENDPOINT,
    port: parseInt(process.env.MINIO_PORT),
    accessKey: process.env.MINIO_ACCESSKEY,
    secretKey: process.env.MINIO_SECRETKEY,
    useSSL: false // Set to true if using HTTPS
});

const uploadFiletoMinio = async (file, filename) => {
    try {
        const result = await minioClient.putObject(process.env.MINIO_BUCKETNAME, filename, file.buffer, {
            'Content-Type': file.mimetype
        });
        return result
    } catch (error) {
        console.log("uploadFiletoMinio ~ error:", error)
    }

}

module.exports = {
    uploadFiletoMinio
}