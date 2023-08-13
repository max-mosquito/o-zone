import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter, hotSaleFilter } from "./filters";

const price = () => {
   const min = document.getElementById('min');
   const max = document.getElementById('max');
   let minValue;
   let maxValue;
   const checkboxInput = document.getElementById('discount-checkbox');
   const checkMark = document.querySelector('.filter-check_checkmark')

   min.addEventListener('input', () => {
     minValue = min.value;

      getData().then((data) =>{
         renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minValue, maxValue));
      })
   })

   max.addEventListener('input', () => {
     maxValue = max.value;

       getData().then((data) =>{
         renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minValue, maxValue))
      })
   })
   
   checkboxInput.addEventListener('change', () => {
      if(checkboxInput.checked){
         checkMark.classList.add('checked');
      }else{
         checkMark.classList.remove('checked');
      }

      getData().then((data) =>{
         renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minValue, maxValue));
      })
   })

}

export default price