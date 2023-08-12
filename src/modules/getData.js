const getData = (str) => {
   return fetch(`https://o-zon-9b5c4-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)
   .then((response) => {
      return response.json()
   })
   
}

export default getData;