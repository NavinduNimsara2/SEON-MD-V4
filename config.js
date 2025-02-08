const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'SEON-MD=KIhQjY5Z#eDpHOVIXsyjHVbbdZsYWGyMJ54jd0mKyg4hB6yeOgng', //Put Session-id Here
GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'NavinduNimsara2', //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || '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', //Put Your Github Auth Token
REPO_NAME: process.env.REPO_NAME || 'SEON-MD-DATABASE' //Bot Database Repo Name
};
