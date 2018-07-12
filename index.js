var exec = require('child_process').exec;
// timeout in ms for a single search
var timeout = 10000;
// specify the root directory, where the search will begin
var root = process.cwd();
let pattern = 'world';
let relPath = 'docs'
exec(`find ./${relPath} -iname '*md' | xargs grep '${pattern}' -isl`, { timeout: timeout, cwd: root }, function (err, stdout, stdin) {
        if(err) {
            console.log(err);
        } else {
            // split the results
            var results = stdout.split('\n');
            // remove last element (it’s an empty line)
            results.pop();
            for (var i = 0; i < results.length; i++) {
                console.log(results[i]);
              }
        }
});


