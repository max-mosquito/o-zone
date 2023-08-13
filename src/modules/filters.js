export const searchFilter = (goods, value) => {
   return goods.filter((goodsItem) => {
      return goodsItem.title.toLowerCase().includes(value.toLowerCase());
   })
}

export const categoryFilter = (goods, text) => {
   return goods.filter((goodsItem) => {
      return goodsItem.category === text
   })
}

export const priceFilter = (goods, min = 0, max = 150000) => {
   return goods.filter((goodsItem) => {
      return goodsItem.price > min && goodsItem.price < max
   })
}

export const hotSaleFilter = (goods, value) => {
   return goods.filter((goodsItem) => {
      if(value){
         return goodsItem.sale === true
      }else{
         return goodsItem
      }
   })
}
