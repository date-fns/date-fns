var childProcess = require('child_process');

for (var i = -12; i <= 12; i++) {
  var tz = 'UTC' + (i > 0 ? '+'+i :
                  i == 0 ? '' : i);

  console.log(tz);

  var line = 'env TZ="$tz" npm test'.replace('$tz', tz);
  var output = childProcess.execSync(line)
  console.log(output.toString());
}
