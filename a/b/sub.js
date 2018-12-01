import fs from 'fs'
const func = img => {
  fs.readFile(img, 'utf8', (err, text) => {
    console.log('text file!')
    console.log(text)
    console.log('error!?')
    console.log(err)
  })
}
export { func }