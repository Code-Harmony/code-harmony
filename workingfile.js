    ////////////////////////////////////////////////////////////////
    // var subprocess = spawn('mocha', [`${testFile}`]);
    // var stderr = '';
    // var stdout = '';
    // subprocess.stdout.on('data', function(data) {
    //     stdout += data;
    // });
    // subprocess.stderr.on('data', function(data) {
    //     stderr += data;
    // });
    // subprocess.on('close', function(exitCode) {
    //   console.log('echo: ' + stdout);
    // });
    // return subprocess;
    ////////////////////////////////////////////////////////////////




    const query = {
        // give the query a unique name
        name: 'fetch-user',
        text: 'SELECT * FROM user WHERE id = $1',
        values: [1],
      }
      // callback
      client.query(query, (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
          console.log(res.rows[0])
        }
      })
      // promise
      client
        .query(query)
        .then(res => console.log(res.rows[0]))
        .catch(e => console.error(e.stack))



var app = express();
app.get('/test', function(req, res) {
    res.sendFile('views/test.html', {root: __dirname })
});





import React, { Component } from 'react';
import Page from './test.html';
var htmlDoc = {__html: Page};

export default class Doc extends Component {
  constructor(props){
    super(props);
  }

  render(){
     return (<div dangerouslySetInnerHTML={htmlDoc} />)
}}


const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};


function createMarkup() {
    return {__html: 'First &middot; Second'};
  }
  
  function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }




  htmlDecode(content) {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  <section
    dangerouslySetInnerHTML={{ __html: htmlDecode(body) }}
    className="SearchResult-body"
  />


  htmlDecode(content) {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

  

<body>
  <div id="root"></div>
</body>



{
  test: /\.(html)$/,
  use: {
    loader: 'html-loader',
    options: {
      attrs: [':data-src']
    }
  }
}


attribute: "data-src",



module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              // All default supported tags and attributes
              "...",
              {
                tag: "img",
                attribute: "data-src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-srcset",
                type: "srcset",
              },
            ],
            urlFilter: (attribute, value, resourcePath) => {
              // The `attribute` argument contains a name of the HTML attribute.
              // The `value` argument contains a value of the HTML attribute.
              // The `resourcePath` argument contains a path to the loaded HTML file.

              if (/example\.pdf$/.test(value)) {
                return false;
              }

              return true;
            },
          },
        },
      },
    ],
  },
};




    // console.log('this is userOutput:')
    // console.log(userOutput)

    // setUserOutput(htmlDecode(data));
    // dispatch(gotResults(data))
    // var result = eval(userSolution);
    // console.log(result);



        {/* <div dangerouslySetInnerHTML={{__html: userOutput}} /> */}
        {/* <iframe src='http://localhost:8080/home' title="Iframe Example"></iframe> */}
        {/* <iframe srcDoc={testVar} title="Iframe Example"></iframe> */}


        {/* <iframe id="inlineFrameExample"
                title="Inline Frame Example"
                width="300"
                height="200"
                src="file:///Users/patita/Fullstack/capstone-project/code-harmony/mochawesome-report/mochawesome.html">
        </iframe> */}

        {/* <iframe id="serviceFrameSend" src="../../mochawesome-report/mochawesome.html" width="1000" height="1000"  frameborder="0"></iframe> */}