// let area = document.getElementById("area");
let rect = document.getElementById("rect");
let target = document.getElementById("target");
let target2 = document.getElementById("target2");
// area.addEventListener("touchstart", handleStart, {passive: true});

rect.addEventListener("touchstart", flickStart);
rect.addEventListener("touchmove", flickMove);
rect.addEventListener("touchend", flickEnd);
// let action = document.getElementById("action");



// let lastX, lastY, left_shift=0, top_shift=0, inside=0;
// function flickStart(event){
//   event.preventDefault();
//   // log('start');
//   // console.log(JSON.stringify());
//   let touches = event.changedTouches;
//   rect.style.border = '';
// 
//   // console.log(touches);
//   for (i of touches){
//     lastX = i.pageX;
//     lastY = i.pageY;
//   }
//   if (inside ==1 ){
//     target.style.visibility = 'visible';
//   } else {
//     target2.style.visibility = 'visible';
//   }
// }
// 
// function flickMove(event){
//   event.preventDefault();
//   let touches = event.changedTouches;
//   for (i of touches){
//     let diffX = i.pageX - lastX;
//     let diffY = i.pageY - lastY;
//     left_shift += diffX;
//     top_shift += diffY;
//     rect.style.marginLeft = left_shift+"px";
//     rect.style.marginTop = top_shift+"px";
//     // console.log(i.pageX +" "+i.pageY+", "+lastX+" "+lastY);
//     // console.log(left_shift+" "+top_shift);
// 
//     lastX = i.pageX;
//     lastY = i.pageY;
//   }
// 
// }
// 
// function flickEnd(event){
//   event.preventDefault();
// 
//   let distance = 50;
//   let rect_pos = rect.getBoundingClientRect();
//   let target_pos = target.getBoundingClientRect();
//   let target_pos2 = target2.getBoundingClientRect();
//   let diffX = target_pos.x - rect_pos.x;
//   let diffY = target_pos.y - rect_pos.y;
//   let diffX2 = target_pos2.x - rect_pos.x;
//   let diffY2 = target_pos2.y - rect_pos.y;
//   inside = 0;
//   // log(diffX +" "+diffY);
//   if ( Math.abs(diffX) < distance && Math.abs(diffY)< distance ){
//     left_shift += diffX; top_shift += diffY;
//     rect.style.marginLeft = left_shift+"px";
//     rect.style.marginTop = top_shift+"px";
//     inside = 1;
//   } else if (Math.abs(diffX2) < distance && Math.abs(diffY2)< distance) {
//     left_shift += diffX2; top_shift += diffY2;
//     rect.style.marginLeft = left_shift+"px";
//     rect.style.marginTop = top_shift+"px";
//     inside = 2;
//   }
// 
//   if (inside == 0){
//     left_shift=0; top_shift=0;
//     rect.style.marginLeft = 0;
//     rect.style.marginTop = 0;
//   } else {
//     rect.style.border = '2px solid black';
//     if (inside == 1){
//       target.style.visibility = 'hidden';
//     } else {
//       target2.style.visibility = 'hidden';
//     }
//   }
// }



// let count, startX, startY, lastX, lastY, direction_list;
// function panstart(event){
//   event.preventDefault();
//   let touches = event.changedTouches;
//   posX_list=[]; posY_list=[]; direction_list=[];
// 
//   log('start');
//   for (i of touches){
//     // log('start pos: '+ i.pageX);
//     startX = i.pageX; lastX = i.pageX;
//     startY = i.pageY; lastY = i.pageY;
//   }
// }
// 
// function panmove(event){
//   let touches = event.changedTouches;
// 
//   for(i of touches){
//     // decide which direction
//     let direction = -1;
//     diffX = i.pageX - lastX;
//     diffY = i.pageY - lastY;
//     lastX = i.pageX;  lastY = i.pageY;
//     if (Math.abs(diffX) > Math.abs(diffY)){
//       if (diffX > 0){ //right
//         direction = 1;
//       } else if(diffX < 0) { //left
//         direction = 3;
//       }
//     } else {
//       if (diffY > 0){ //down
//         direction = 2;
//       } else if(diffY < 0) { //up
//         direction = 0;
//       }
//     }
// 
//     // show pan or append direction
//     len = direction_list.length;
//     if (len == 0) {
//       direction_list.push(direction);
//     } else if (direction_list[len-1] != direction){
//       direction_list = [];
//       direction_list.push(direction);
//     } else {
//       if (len >= 10){
//         changeTxt(direction);
//         direction_list = [];
//         direction_list.push(direction);
//       } else {
//         direction_list.push(direction);
//       }
//     }
// 
//     log(direction_list);
//   }
// }
// 
// function panend(event){
//   log('end');
// }
// 
// function changeTxt(direc){
//   switch (direc) {
//     case 0:
//       action.innerHTML = "top";
//       break;
//     case 1:
//       action.innerHTML = "right";
//       break;
//     case 2:
//       action.innerHTML = "down";
//       break;
//     case 3:
//       action.innerHTML = "left";
//       break;
//     default:
//       action.innerHTML = "No Action";
//   }
// }

function log(msg){
  let p = document.getElementById('log');
  p.innerHTML = msg + "\n" + p.innerHTML;
}

// let count = 0;
// let lastTime;
// function countTap(event){
//   event.preventDefault();
//   let touches = event.changedTouches;
//   let day = new Date();
// 
//   if (lastTime === undefined){
//     action.innerHTML = "single tap";
//     count = 1;
//   } else {
//     if (day.getTime() - lastTime < 300){
//       if (count == 1){
//         action.innerHTML = "double tap";
//       } else if (count > 1) {
//         action.innerHTML = "multiple tap";
//       } 
//       count += 1;
//     } else {
//       action.innerHTML = "single tap";
//       count = 1;
//     }
//   }
//   lastTime = day.getTime();
// }



