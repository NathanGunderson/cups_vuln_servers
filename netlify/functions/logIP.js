// logIP.js - This serverless function captures the visitor's IP address

exports.handler = async function(event, context) {
  const visitorIP = event.headers['x-forwarded-for'] || event.headers['client-ip'] || event.headers['remote-addr'];
  
  console.log(`Visitor IP: ${visitorIP}`);

  return {
    statusCode: 200,
    body: `Your IP address is: ${visitorIP}`,
  };
};
