//QUERYSELECTOR//
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var item=document.querySelector('.list-group-item');
// item.style.color='green'

// var seondItem=document.querySelector('.list-group-item:nth-child(2)');
// seondItem.style.color='green'

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display='none'

//QUERYSELECTORALL//

// var item=document.querySelectorAll('.list-group-item');
// // item[1].style.color='green'
// for(var i=0;i<item.length;i++){
//     if(i%2==0){
//         item[i].style.backgroundColor='green';
//     }
// }

var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++){
            odd[i].style.backgroundColor='green';
}