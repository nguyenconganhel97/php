module.exports = {
    outputDir: "public",
    indexPath: "../resources/views/welcome.blade.php",
    devServer: {
        port: process.env.DEV_SERVER_PORT,
        host: "localhost",
    },
};
