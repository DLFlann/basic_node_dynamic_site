var fs = require('fs');

function mergeValues(values, content) {
    // Iterate over the keys
    for(var key in values) {
        // Replace with value from object
        content = content.replace('{{ ' + key + ' }}', values[key]);
    }
    // Return merged content
    return content;
}

function view(teamplateName, values, response) {
    // Read from the template files
    var fileContents = fs.readFileSync('./views/' + teamplateName + '.html', {encoding: 'utf8'});
    // Insert values into the Content-Type
    fileContents = mergeValues(values, fileContents);

    // Write out to the resonse
    response.write(fileContents);
}

module.exports.view = view;
