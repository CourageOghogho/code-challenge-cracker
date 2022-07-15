let totalCount=0;
const counter=document.getElementById('count');
const increment=document.getElementById('increment');
const decrement=document.getElementById('decrement');
const reset=document.getElementById('reset');
counter.innerHTML=totalCount;


increment.addEventListener('click',() => {
    totalCount++;
    counter.innerHTML=totalCount;
});
reset.addEventListener('click',() => {
    totalCount=0;
    counter.innerHTML=totalCount;
});

decrement.addEventListener('click',() => {
    totalCount--;
    counter.innerHTML=totalCount;
});
