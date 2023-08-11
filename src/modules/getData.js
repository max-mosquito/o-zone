const getData = () => {
   return fetch('https://o-zon-9b5c4-default-rtdb.firebaseio.com/goods.json')
   .then((response) => {
      return response.json()
   })
   
}

export default getData;