import axios from 'axios'

export function fetchRandomCat(thingToDoAfter) {
  const apiUrl = 'http://aws.random.cat/meow';

  axios.get(apiUrl)

  .then(response => {
    const catImageUrl = response.data.file
    thingToDoAfter(null, catImageUrl);
  })

  .catch(error => {
    thingToDoAfter(error, null);
  });
}