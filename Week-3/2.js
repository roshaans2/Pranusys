const getData = async() => {
    const name = "chennai"
    const apiKey = require("./config")
    const url = `https://api.api-ninjas.com/v1/city?name=${name}`;
    fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
}

getData()