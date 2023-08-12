import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter } from "./filters";

const price = () => {
   const min = document.getElementById('min');
   const max = document.getElementById('max');
   let minValue;
   let maxValue;

   min.addEventListener('input', () => {
     minValue = min.value;

      getData().then((data) =>{
         renderGoods(priceFilter(data, minValue, maxValue));
      })
   })

   max.addEventListener('input', () => {
     maxValue = max.value;

       getData().then((data) =>{
         renderGoods(priceFilter(data, minValue, maxValue))
      })
   })
   
   

}

export default price