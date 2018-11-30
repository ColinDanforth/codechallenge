import fs from 'fs'

const fetchPopular = async() => {
  const key = fs.readFile('../../../key.js', 'utf8', function(err, contents) {
    console.log(contents);
  });

  return await fetch(`https://api.500px.com/v1/photos?feature=popular&consumer_key=${key}`, (result) => {
    return JSON.parse(result)
  })
}

export default {fetchPopular}
