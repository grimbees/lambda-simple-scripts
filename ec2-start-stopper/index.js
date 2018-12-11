exports.handler = (event, context, callback) => {
    var params = {
        InstanceIds: event.instances
    }
    var AWS = require('aws-sdk');
    var ec2 = new AWS.EC2();
    switch (event.action) {
        case 'stop':
            console.log(`Stopping instance '${event.instances}'...`);
            ec2.stopInstances(params, function(err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else console.log(data); // successful response
            });
            break;
        case 'start':
            console.log(`Starting instance '${event.instances}'...`);
            ec2.startInstances(params, function(err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else console.log(data); // successful response
            });
            break;
        default:
            throw `Invalid action ${event.action}`;
    }
    callback(null, 'Done!');
};