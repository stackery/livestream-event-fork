const aws = require('aws-sdk');
const sns = new aws.SNS();
exports.handler = async (event, context) => {
  // Log the event argument for debugging and for use in local development.
  console.log(process.env.TOPIC_NAME);
  console.log(JSON.stringify(event, undefined, 2));
  const response = await sns.publish({ Message: '1 wiggle was ordered', TopicArn: process.env.TOPIC_ARN }).promise();
  console.log(response);

  return {};
};
