const core = require("@actions/core")
const AWS = require("aws-sdk")

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
})

async function invokeLambda(functionName) {
    try {
        const lambda = new AWS.Lambda()
        const lambdaParams = {
            FunctionName: functionName,
            InvocationType: "RequestResponse",
        }
        await new Promise((resolve, reject) => {
            lambda.invoke(lambdaParams, (error) => {
                if (error) reject(error)
                resolve()
            })
        })
    } catch (error) {
        core.setFailed(`Action failed with error ${error}`)
    }
}

module.exports = { invokeLambda }
