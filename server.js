let http = require('http')
let fs = require('fs')
let path = require('path')

const PORT = 8010;

const smrDist = './att-front/dist'

http.createServer((request, response) => {
  console.log('request starting...\n', request.url)
  let filePath = '.' + request.url

  if (filePath == './') {
    filePath = `${smrDist}/index.html`
  } else {
    filePath = `${smrDist}${request.url}`
  }
  
  const extname = path.extname(filePath)
  
  let contentType = 'text/html'
  switch (extname) {
    case '.js':
      contentType = 'text/javascript'
      break
    case '.map':
      contentType = 'text/javascript'
      break
    case '.css':
      contentType = 'text/css'
      break;
    case '.json':
      contentType = 'application/json'
      break;
    case '.png':
      contentType = 'image/png'
      break;      
    case '.jpg':
      contentType = 'image/jpg'
      break
    case '.wav':
      contentType = 'audio/wav'
      break
  }
  console.log(`filePath: ${filePath}\n`)
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if(error.code == 'ENOENT'){
        fs.readFile('./404.html', (error, content) => {
          response.writeHead(200, { 'Content-Type': contentType })
          response.end(content, 'utf-8')
        });
      }
      else {
        response.writeHead(500)
        response.end(`Sorry, check with the site admin for error: ${error.code}..\n`)
        response.end()
      }
    } else {
      response.writeHead(200, { 'Content-Type': contentType })
      response.end(content, 'utf-8')
    }
  })

}).listen(PORT)

console.log(`Server running at http://127.0.0.1:${PORT}/`)
