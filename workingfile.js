function runUserCode(testFile) {
    return new Promise((resolve, reject) => {
      exec(`mocha ${testFile} --reporter mochawesome`, { timeout: 10000 }, (err, stdout, stderr) => {
        if (err !== null && stdout === '') {
          const output = stderr !== '' ? stderr : 'Your code timed out.';
          reject(output);
        }
        resolve(stdout);
      });
    });
  }