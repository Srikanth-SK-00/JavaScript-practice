const fetchData = () => {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(respons => respons.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
     
    });
  };
  
  fetchData()
    .then(data => console.log('Data fetched:', data))
    .catch(error => console.error('Error:', error));
  