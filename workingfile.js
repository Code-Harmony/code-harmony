app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function runUserCode(testFile) {
  return new Promise((resolve, reject) => {
    exec(`mocha ${testFile}`, { timeout: 10000 }, (err, stdout, stderr) => {
      if (err !== null && stdout === '') {
        const output = stderr !== '' ? stderr : 'Your code timed out.';
        reject(output);
      }
      resolve(stdout);
    });
  });
}

function buildTestFile(code, specData) {
  const specs = Buffer.from(specData)
  code = `${code}\n`;
  return fileName;
}

app.get('/', (req, res) => {
    res.send(Home());
  });
  
  app.post('/', async (req, res, next) => {
    try {
      const testFile = await buildTestFile(req.body.code, req.body.specs.data);
      const result = await runUserCode(testFile);
      res.send(result);
    } catch (err) {
        res.json(err);
      }
    }


    const { spawn } = require('child_process');

    var userInput = 'untrusted source';
    var args = [ userInput ];
    var cmd = '/bin/echo';
    var subprocess = spawn(cmd, args);
    var stderr = '';
    var stdout = '';
    subprocess.stdout.on('data', function(data) {
        stdout += data;
    });
    subprocess.stderr.on('data', function(data) {
        stderr += data;
    });
    subprocess.on('close', function(exitCode) {
      console.log('echo: ' + stdout);
    });

////////////////////////////////////
    var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');

// Instantiate a Mocha instance.
var mocha = new Mocha();

var testDir = 'some/dir/test'

// Add each .js file to the mocha instance
fs.readdirSync(testDir).filter(function(file) {
    // Only keep the .js files
    return file.substr(-3) === '.js';

}).forEach(function(file) {
    mocha.addFile(
        path.join(testDir, file)
    );
});

// Run the tests.
mocha.run(function(failures) {
  process.exitCode = failures ? 1 : 0;  // exit with non-zero status if there were failures
});


// Change the reporter to "list" before running the tests
mocha.reporter('list').run();

// Change the UI to "tdd" before running the tests
mocha.ui('tdd').run();

// Or do both changes before running the tests
mocha.reporter('list').ui('tdd').run();