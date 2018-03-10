var tops=0
var lefts=0;

function startup(){
  let el = document.getElementsByTagName("canvas")[0];
  let offsets = el.getBoundingClientRect();
  tops = offsets.top;
  lefts = offsets.left;
  // console.log(`tops,lefts: ${tops} ${lefts}`);
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);
  // log("initialize");
}

// document.getElementById("init").addEventListener("click", startup, false);

let ongoingTouches = [];

function handleStart(evt){
  evt.preventDefault();
  let touches = evt.changedTouches;
  let el = document.getElementsByTagName("canvas")[0];
  let ctx = el.getContext("2d");
  // log("touch start");
  
  for(let i=0; i<touches.length; i++){
    // log("touchstart" + i + "...");
    ongoingTouches.push(copyTouch(touches[i]));
    let color = colorForTouch(touches[i]);
    ctx.beginPath();
    ctx.arc(touches[i].pageX-lefts, touches[i].pageY-tops, 4,0, 2*Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
    // log("touchstart: "+ i+"...");
  }
}

function handleMove(evt){
  evt.preventDefault();
  let touches = evt.changedTouches;
  // console.log(touches);
  let el = document.getElementsByTagName("canvas")[0];
  let ctx = el.getContext("2d");
  
  for(let i=0; i<touches.length; i++){
    let color = colorForTouch(touches[i]);
    let idx = ongoingTouchIndexById(touches[i].identifier);
    
    if (idx >= 0) {
      // log("continuing touch " + idx);
      ctx.beginPath();
      // log(`ctx.moveTo ( ${ongoingTouches[idx].pageX} , ${ongoingTouches[idx].pageY})`);
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      // log(`ctx.lineTo ( ${touches[i].pageX-lefts} , ${touches[i].pageY-tops} )`);
      ctx.lineTo(touches[i].pageX-lefts, touches[i].pageY-tops);
      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      ctx.stroke();
      
      ongoingTouches.splice(idx, 1, copyTouch(touches[i]));
      // log(".");
    } else {
      log("can't figure out which touch to continue");
    }
  }
}

function handleEnd(evt){
  evt.preventDefault();
  // log('touch end');
  let touches = evt.changedTouches;
  let el = document.getElementsByTagName("canvas")[0];
  let ctx = el.getContext("2d");
  
  for(let i=0; i<touches.length; i++){
    let color = colorForTouch(touches[i]);
    let idx = ongoingTouchIndexById(touches[i].identifier);
    
    if(idx >= 0){
      ctx.lineWidth = 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX-lefts, touches[i].pageY-tops);
      ctx.fillRect(touches[i].pageX-lefts - 4, touches[i].pageY-tops - 4, 8,8);
      ongoingTouches.splice(idx, 1);
    } else {
      log("can't figure out how to end");
    }
  }
}

function handleCancel(evt){
  evt.preventDefault();
  // log('touch Cancel');
  let touches = evt.changedTouches;
  let el = document.getElementsByTagName("canvas")[0];
  let ctx = el.getContext("2d");
  
  for(let i=0; i<touches.length; i++){
    let idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx,1);
  }
}

function colorForTouch(touch){
  let r = touch.identifier % 16;
  let g = Math.floor(touch.identifier/3)%16;
  let b = Math.floor(touch.identifier/7)%16;
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  let color = '#'+r+g+b;
  // log(`color: ${touch.identifier} = ${color}` );
  
  return color;
}

function copyTouch(touch){
  return {identifier: touch.identifier, pageX:touch.pageX-lefts, pageY:touch.pageY-tops};
}

function ongoingTouchIndexById(idToFind){
  for(let i=0; i<ongoingTouches.length; i++){
    let id = ongoingTouches[i].identifier;
    if (id == idToFind){
      return i;
    }
  }
  return -1;
}

function log(msg){
  let p = document.getElementById('log');
  p.innerHTML = msg + "\n" + p.innerHTML;
}






