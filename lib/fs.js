import fs from 'fs'
const read = img => {
  fs.readFile(img, 'utf8', function (err, text) {
    console.log('text file!')
    console.log(text)
    console.log('error!?')
    console.log(err)
  })
}
export { read }