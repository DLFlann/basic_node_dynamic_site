var fs = require('fs');

function view(teamplateName, values, response) {
    // Read from the template files
    var fileContents = fs.readFileSync('./views/' + teamplateName + '.html');
    // Insert values into the Content-Type

    // Write out to the resonse
    response.write(fileContents);
}

module.exports.view = view;
