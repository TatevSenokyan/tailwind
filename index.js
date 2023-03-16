
let open = true;
function Menu(e) {
   const paths = document.querySelectorAll('nav svg path');
   const navbar = document.querySelector('nav');
   const ul = document.querySelector('ul');
   const logo = document.querySelector('.navLogo');
   const lists = document.querySelectorAll('ul li');
   lists.forEach((list, i)=>{
      if(i===2) list.classList.toggle('hidden');
      ['xs:opacity-0', 'text-right', 'opacity-100', 'text-[#FFFFFF]', 'pt-[10px]', 'text-[#212121]'].forEach(style=>list.classList.toggle(style));
   });
   ['mt-[32px]', 'mr-[14px]'].forEach(style=>e.classList.toggle(style));
   ['hidden', 'flex'].forEach(style=>logo.classList.toggle(style));
   ['bg-black', 'h-[46px]', 'h-[100vh]', 'justify-end', 'items-center'].forEach(style=>navbar.classList.toggle(style));
   ['w-[222px]', 'pt-[64px]', 'pr-[14px]', 'h-[100vh]', 'bg-[#212121]', 'block', 'flex', 'items-center', 'xs:w-full', 'm-auto', 'justify-between'].forEach(style=>ul.classList.toggle(style));
   if (open) {
      paths.forEach(item=>item.style.fill='#FFFFFF');
      open = false;
   } else {
      paths.forEach(item=>item.style.fill='#000000');
      open = true;
   }
   
}

// canvas 

function canvasBottom () {
   //draw stroke on canvas
   const canvas = document.querySelector('.line');
   const context = canvas.getContext('2d');
   window.devicePixelRatio=2; 
   var size = 259;
   canvas.style.width = size + "px";
   canvas.style.height = size + "px";

     
   var scale = window.devicePixelRatio; 
           
   canvas.width = Math.floor(size * scale);
   canvas.height = Math.floor(size * scale);

   const data = {
       x: 0,
       y: 5,
       clearX: 0
   }



   function draw() {

       context.clearRect(0, 0, data.clearX, 100); 

       context.beginPath();

       if (data.x<200) {
           context.moveTo(data.clearX, data.y);
       } else if (data.x<280) {
           context.lineWidth = 1.3;
           context.moveTo(200, 5);
       } else if (data.x<500) {
           if (data.x<300) {
               context.moveTo(280, 85);
           } else if (data.x<320) {
               context.moveTo(295, 85);
           } else if (data.x<340) {
               context.moveTo(315, 85);
           } else if (data.x<360) {
               context.moveTo(335, 85);
           } else if (data.x<380) {
               context.moveTo(355, 85);
           } else if (data.x<400) {
               context.moveTo(378, 85);
           } else if (data.x<420) {
               context.moveTo(380, 85);
           } else if (data.x<440) {
               context.moveTo(418, 85);
           } else if (data.x<460) {
               context.moveTo(420, 85);
           } else if (data.x<480) {
               context.moveTo(455, 85);
           } else if (data.x<500) {
               context.moveTo(480, 85);
           }
  
       }
       
       context.lineTo(data.x, data.y);
       context.strokeStyle = '#6ECEE2';
       context.stroke(); 
       context.closePath();
   }


   function update() {
       if(data.x<200) {
           data.x+=0.8;
           data.clearX+=0.4;
       } else if (data.x>=200 && data.x<280) {
           data.x+=0.5;
           data.y+=0.5;
           data.clearX+=0.4;
          
       } else if (data.x>=280 && data.x<500) {
           data.x+=0.5;
           if (data.x>300) {
               data.clearX +=0.7
           } else {
               data.clearX +=0.5
           }
       } else {
               context.clearRect(0, 0, 500, 200);
               data.x = 0;
               data.y=5;
               data.clearX = 0;
       } 
   }

   function loop() {
           myReqBottom = window.requestAnimationFrame(loop);
           update();
           draw();       
   }

   loop();

   //draw arc

   const canvasArc = document.querySelector('.arc');
   const contextArc = canvasArc.getContext('2d');

   canvasArc.style.width = size + "px";
   canvasArc.style.height = size + "px";

     
   var scale = window.devicePixelRatio; 
           
   canvasArc.width = Math.floor(size * scale);
   canvasArc.height = Math.floor(size * scale);

   const dataArc = {
       x: 0,
       y: 6,
   }

   function drawArc() {
      contextArc.clearRect(0, 0, 550, 200);
      contextArc.beginPath();
      contextArc.fillStyle = '#62C9DF'; 
      contextArc.arc(dataArc.x, dataArc.y, 6 , 0, 2 * Math.PI)
      contextArc.fill();
   }

   function updateArc() {
       if(dataArc.x<200) {
           dataArc.x+=0.8;
       } else if (dataArc.x>=200 && dataArc.x<280) {
           dataArc.x+=0.5;
           dataArc.y+=0.5;
       } else if (dataArc.x>=280 && dataArc.x<500) {
           // dataArc.y =45;
           dataArc.x+=0.5;
       } else {
           contextArc.clearRect(0, 0, 550, 200);
           dataArc.x = 0;
           dataArc.y=6;
       } 
   }

   function loopArc() {
       window.requestAnimationFrame(loopArc);
       updateArc();
       drawArc();
   }
   loopArc();
}

if (window.innerWidth>=744 && window.innerWidth<1280) {
   canvasBottom744();
   canvasTop744 ();
} else if (window.innerWidth>=1280) {
   canvasBottom ();
   canvasTop ();
}



function canvasTop () {
   // draw line 
   const canvas = document.querySelector('.line-top');
   const context = canvas.getContext('2d');

   window.devicePixelRatio=3; 
   var size = 423;
   canvas.style.width = size + "px";
   canvas.style.height = size + "px";

     
   var scale = window.devicePixelRatio; 
           
   canvas.width = Math.floor(size * scale);
   canvas.height = Math.floor(size * scale);

   const data = {
       x: 0,
       y: 10,
       clearX: 0
   }

   function draw() {
       context.clearRect(0, 0, data.clearX, 400); 
       context.beginPath();
       if (data.x<210) {
           context.lineWidth = 1;
           context.moveTo(data.clearX, data.y);
       } 
       else if (data.x<270) {
           context.lineWidth = 1.5;
           context.moveTo(210, 10);
       } 
       else if (data.x<450) {
           if (data.x<290) {
              context.moveTo(270, 70.270);
           } else if (data.x<310) {
               context.moveTo(285, 70.270);
           } else if (data.x<330) {
               context.moveTo(305, 70.270);
           } else if (data.x<350) {
               context.moveTo(325, 70.270);
           } else if (data.x<370) {
               context.moveTo(345, 70.270);
           } else if (data.x<390) {
               context.moveTo(365, 70.270);
           } else if (data.x<410) {
               context.moveTo(385, 70.270);
           } else if (data.x<430) {
               context.moveTo(405, 70.270);
           } else if (data.x<450) {
               context.moveTo(425, 70.270);
           } 
       } 
       else if (data.x<480) {
           context.lineWidth = 1.5;
           context.moveTo(450, 70.270);
       } 
       else if (data.x<648) {
           if (data.x<500) {
               context.moveTo(481, 39.87);
           } else if (data.x<520) {
               context.moveTo(495, 39.87);
           } else if (data.x<540) {
               context.moveTo(515, 39.87);
           } else if (data.x<560) {
               context.moveTo(535, 39.87);
           } else if (data.x<580) {
               context.moveTo(550, 39.87);
           } else if (data.x<610) {
               context.moveTo(575, 39.87);
           } else if (data.x<630) {
               context.moveTo(605, 39.87);
           } else if (data.x<648) {
               context.moveTo(625, 39.87);
           }
       } 
       else if (data.x<714) {
           context.moveTo(648, 39.87);

       } 
       else if (data.x<873) {
           context.moveTo(714, 106.269);
       } 
       else if (data.x<963) {
           context.moveTo(873, 106.269);
       } 
       else if (data.x<1269) {
           if (data.x<1003) {
               context.moveTo(963, 15.869);
           } else if (data.x< 1023) {
               context.moveTo(1000, 15.869);
           } else if (data.x< 1043) {
               context.moveTo(1020, 15.869);
           } else if (data.x< 1063) {
               context.moveTo(1040, 15.869);
           } else if (data.x< 1083) {
               context.moveTo(1060, 15.869);
           } else if (data.x< 1103) {
               context.moveTo(1080, 15.869);
           } else if (data.x< 1123) {
               context.moveTo(1100, 15.869);
           } else if (data.x< 1143) {
               context.moveTo(1120, 15.869);
           } else if (data.x< 1163) {
               context.moveTo(1140, 15.869);
           } else if (data.x< 1183) {
               context.moveTo(1160, 15.869);
           } else if (data.x< 1203) {
               context.moveTo(1180, 15.869);
           } else if (data.x< 1223) {
               context.moveTo(1200, 15.869);
           } else if (data.x< 1243) {
               context.moveTo(1220, 15.869);
           } else if (data.x< 1269) {
               context.moveTo(1240, 15.869);
           }
           
       } 
   
       context.lineTo(data.x, data.y);
       context.strokeStyle = '#6ECEE2';
       context.stroke(); 
       context.closePath();
   }

   function update() {
       if(data.x<210) {
           data.x+=1;
           data.clearX+=0.7;
       } 
       else if (data.x>=210 && data.x<270) {
           data.x+=0.5;
           data.y+=0.5;
           data.clearX+=0.5;
       } 
       else if (data.x>=270 && data.x<450) {
           data.y = 70.270;
           data.x+=0.8;
           data.clearX+=0.6;
       } 
       else if (data.x>=350 && data.x<480) {
           data.x+=0.8;
           data.y-=0.8;
           data.clearX+=0.4;
       } 
       else if (data.x>=480 && data.x<648) {
           data.y = 39.87;
           data.x+=0.8;
           data.clearX+=0.6;
       } 
       else if (data.x>=648 && data.x<714) {
           data.x+=0.8;
           data.y+=0.8;
           data.clearX+=0.6; 
       } 
       else if (data.x>=714 && data.x<873) {
           data.y = 106.269;
           data.x+=0.8;
           data.clearX+=0.6;
       } 
       else if (data.x>=873 && data.x<963) {
           data.x+=0.8;
           data.y-=0.8;
           data.clearX+=0.6;
       } 
       else if (data.x>=963 && data.x<1269) {
           data.x+=0.5;
           data.clearX+=0.82;
           data.y = 15.869
       } 
       else {
               context.clearRect(0, 0, 1300, 50); 
               data.x=0;
               data.y=10;
               data.clearX=0;
       }

   }

   function loop() {
       myReqTop = requestAnimationFrame(loop);
       update();
       draw();
   }

   loop();


   //draw arc 

   const canvasArc = document.querySelector('.arc-top');
   const contextArc = canvasArc.getContext('2d');

   canvasArc.style.width = size + "px";
   canvasArc.style.height = size + "px";

     
   var scale = window.devicePixelRatio; 
           
   canvasArc.width = Math.floor(size * scale);
   canvasArc.height = Math.floor(size * scale);

   const dataArc = {
       x: 0,
       y: 11,
   }

   function drawArc() {
      contextArc.clearRect(0, 0, 1300, 500);
      contextArc.beginPath();
      contextArc.fillStyle = '#62C9DF'; 
      contextArc.arc(dataArc.x, dataArc.y, 8, 0, 2 * Math.PI)
      contextArc.fill();
   }

   function updateArc() {
       if(dataArc.x<210) {
           dataArc.x+=1;
       } 
       else if (dataArc.x>=210 && dataArc.x<270) {
           dataArc.x+=0.5;
           dataArc.y+=0.5;   
       } 
       else if (dataArc.x>=270 && dataArc.x<450) {
           dataArc.x+=0.8;
       } 
       else if (dataArc.x>=350 && dataArc.x<480) {
           dataArc.x+=0.8;
           dataArc.y-=0.8;
       } 
       else if (dataArc.x>=480 && dataArc.x<648) {
           dataArc.x+=0.8;
       } 
       else if (dataArc.x>=648 && dataArc.x<714) {
           dataArc.x+=0.8;
           dataArc.y+=0.8;
       } 
       else if (dataArc.x>=714 && dataArc.x<873) {
           dataArc.x+=0.8;
       } 
       else if (dataArc.x>=873 && dataArc.x<963) {
           dataArc.x+=0.8;
           dataArc.y-=0.8;
       } 
       else if (dataArc.x>=963 && dataArc.x<1269) {
           dataArc.x+=0.5;
       } 
       else {
               contextArc.clearRect(0, 0, 1300, 50); 
               dataArc.x=0;
               dataArc.y=11;
       }
   }

   function loopArc() {
       window.requestAnimationFrame(loopArc);
       updateArc();
       drawArc();
   }
   loopArc();
}

function canvasBottom744 () {
   //draw stroke on canvas
   const canvas = document.querySelector('.line');
   const context = canvas.getContext('2d');
   window.devicePixelRatio=2; 
   var size = 160;
   canvas.style.width = size + "px";
   canvas.style.height = size + "px";

     
   var scale = window.devicePixelRatio; 
           
   canvas.width = Math.floor(size * scale);
   canvas.height = Math.floor(size * scale);

   const data = {
       x: 0,
       y: 5,
       clearX: 0
   }



   function draw() {

       context.clearRect(0, 0, data.clearX, 100); 

       context.beginPath();

       if (data.x<134) {
           context.moveTo(data.clearX, data.y);
       } else if (data.x<184) {
           context.lineWidth = 1.3;
           context.moveTo(134, 5);
       } else if (data.x<324) {
           if (data.x<204) {
              context.moveTo(184, 55);
           } else if (data.x<224) {
               context.moveTo(200, 55);
           } else if (data.x<244) {
               context.moveTo(220, 55);
           } else if (data.x<264) {
               context.moveTo(240, 55);
           } else if (data.x<284) {
               context.moveTo(260, 55);
           } else if (data.x<304) {
               context.moveTo(280, 55);
           } else if (data.x<324) {
               context.moveTo(300, 55);
           }
           
       }
       
       context.lineTo(data.x, data.y);
       context.strokeStyle = '#6ECEE2';
       context.stroke(); 
       context.closePath();
   }


   function update() {
       if(data.x<134) {
           data.x+=0.8;
           data.clearX+=0.4;
       } else if (data.x>=134 && data.x<184) {
           data.x+=0.5;
           data.y+=0.5;
           data.clearX+=0.4;
       } else if (data.x>=184 && data.x<324) {
           data.x+=0.5;
           if (data.x>200) {
               data.clearX +=0.7;
           } else {
               data.clearX +=0.5;
           }
       } else {
               context.clearRect(0, 0, 500, 200);
               data.x = 0;
               data.y=5;
               data.clearX = 0;
       } 
   }

   function loop() {
           myReqBottom= window.requestAnimationFrame(loop);
           update();
           draw();       
   }

   loop();

   //draw arc

   const canvasArc = document.querySelector('.arc');
   const contextArc = canvasArc.getContext('2d');

   canvasArc.style.width = size + "px";
   canvasArc.style.height = size + "px";

     
   var scale = window.devicePixelRatio; 
           
   canvasArc.width = Math.floor(size * scale);
   canvasArc.height = Math.floor(size * scale);

   const dataArc = {
       x: 0,
       y: 6,
   }

   function drawArc() {
      contextArc.clearRect(0, 0, 550, 200);
      contextArc.beginPath();
      contextArc.fillStyle = '#62C9DF'; 
      contextArc.arc(dataArc.x, dataArc.y, 6 , 0, 2 * Math.PI)
      contextArc.fill();
   }

   function updateArc() {
       if(dataArc.x<134) {
           dataArc.x+=0.8;
       } else if (dataArc.x>=134 && dataArc.x<184) {
           dataArc.x+=0.5;
           dataArc.y+=0.5;
       } else if (dataArc.x>=184 && dataArc.x<324) {
           dataArc.x+=0.5;
       } else {
               contextArc.clearRect(0, 0, 500, 200);
               dataArc.x = 0;
               dataArc.y=6;
       } 
   }

   function loopArc() {
       window.requestAnimationFrame(loopArc);
       updateArc();
       drawArc();
   }
   loopArc();
}


function canvasTop744 () {
   // draw line 
   const canvas = document.querySelector('.line-top');
   const context = canvas.getContext('2d');

   window.devicePixelRatio=3; 
   var size = 256;
   canvas.style.width = size + "px";
   canvas.style.height = size + "px";

     
   var scale = window.devicePixelRatio; 
           
   canvas.width = Math.floor(size * scale);
   canvas.height = Math.floor(size * scale);

   const data = {
       x: 0,
       y: 10,
       clearX: 0
   }

   function draw() {
       context.clearRect(0, 0, data.clearX, 400); 
       context.beginPath();
       if (data.x<153) {
           context.lineWidth = 1;
           context.moveTo(data.clearX, data.y);
       } 
       else if (data.x<192) {
           context.lineWidth = 1.5;
           context.moveTo(153, 10);
       } 
       else if (data.x<303) {
           if (data.x<212) {
               context.moveTo(192, 49);
           } else if (data.x<232) {
               context.moveTo(210, 49);
           } else if (data.x<252) {
               context.moveTo(230, 49);
           } else if (data.x<272) {
               context.moveTo(250, 49);
           } else if (data.x<292) {
               context.moveTo(270, 49);
           } else if (data.x<303) {
               context.moveTo(290, 49);
           }
           
       } 
       else if (data.x<333) {
           context.lineWidth = 1.5;
           context.moveTo(303, 49);
       } 
       else if (data.x<432) {
           context.moveTo(333, 18.6);
       } 
       else if (data.x<471) {
           context.moveTo(432, 18.6);
       } 
       else if (data.x<567) {
           context.moveTo(471, 57.79);
       } 
       else if (data.x<618) {
           context.moveTo(567, 57.79);
       } 
       else if (data.x<777) {
           if (data.x<638) {
               context.moveTo(618, 6.6);
           } else if (data.x<638) {
               context.moveTo(615, 6.6);
           } else if (data.x<658) {
               context.moveTo(635, 6.6);
           } else if (data.x<678) {
               context.moveTo(655, 6.6);
           } else if (data.x<698) {
               context.moveTo(675, 6.6);
           } else if (data.x<718) {
               context.moveTo(695, 6.6);
           } else if (data.x<738) {
               context.moveTo(715, 6.6);
           } else if (data.x<758) {
               context.moveTo(735, 6.6);
           } else if (data.x<777) {
               context.moveTo(755, 6.6);
           }
          
       } 
   
       context.lineTo(data.x, data.y);
       context.strokeStyle = '#6ECEE2';
       context.stroke(); 
       context.closePath();
   }

   function update() {
       if(data.x<153) {
           data.x+=1;
           data.clearX+=0.7;
       } 
       else if (data.x>=153 && data.x<192) {
           data.x+=0.5;
           data.y+=0.5;
           data.clearX+=0.5;    
       } 
       else if (data.x>=192 && data.x<303) {
           data.x+=0.8;
           data.clearX+=0.6;
       } 
       else if (data.x>=303 && data.x<333) {
           data.x+=0.8;
           data.y-=0.8;
           data.clearX+=0.4;
       } 
       else if (data.x>=333 && data.x<432) {
           data.x+=0.8;
           data.clearX+=0.6;
       } 
       else if (data.x>=432 && data.x<471) {
           data.x+=0.8;
           data.y+=0.8;
           data.clearX+=0.6; 
       } 
       else if (data.x>=471 && data.x<567) {
           data.x+=0.8;
           data.clearX+=0.6;
       } 
       else if (data.x>=567 && data.x<618) {
           data.x+=0.8;
           data.y-=0.8;
           data.clearX+=0.6;
       } 
       else if (data.x>=606 && data.x<777) {

           data.x+=0.5;
           data.clearX+=0.85;
       } 
       else {
               context.clearRect(0, 0, 1300, 50); 
               data.x=0;
               data.y=10;
               data.clearX=0;
       }

   }

   function loop() {
       myReqTop = requestAnimationFrame(loop);
       update();
       draw();
   }

   loop();


   //draw arc 

   const canvasArc = document.querySelector('.arc-top');
   const contextArc = canvasArc.getContext('2d');

   canvasArc.style.width = size + "px";
   canvasArc.style.height = size + "px";

     
   var scale = window.devicePixelRatio; 
           
   canvasArc.width = Math.floor(size * scale);
   canvasArc.height = Math.floor(size * scale);

   const dataArc = {
       x: 0,
       y: 12,
   }

   function drawArc() {
      contextArc.clearRect(0, 0, 1300, 500);
      contextArc.beginPath();
      contextArc.fillStyle = '#62C9DF'; 
      contextArc.arc(dataArc.x, dataArc.y, 8, 0, 2 * Math.PI)
      contextArc.fill();
   }

   function updateArc() {
       if(dataArc.x<153) {
           dataArc.x+=1;
           dataArc.clearX+=0.7;
       } 
       else if (dataArc.x>=153 && dataArc.x<192) {
           dataArc.x+=0.5;
           dataArc.y+=0.5;
           dataArc.clearX+=0.5;    
       } 
       else if (dataArc.x>=192 && dataArc.x<303) {
           dataArc.x+=0.8;
           dataArc.clearX+=0.6;
       } 
       else if (dataArc.x>=303 && dataArc.x<333) {
           dataArc.x+=0.8;
           dataArc.y-=0.8;
           dataArc.clearX+=0.4;
       } 
       else if (dataArc.x>=333 && dataArc.x<432) {
           dataArc.x+=0.8;
           dataArc.clearX+=0.6;
       } 
       else if (dataArc.x>=432 && dataArc.x<471) {
           dataArc.x+=0.8;
           dataArc.y+=0.8;
           dataArc.clearX+=0.6; 
       } 
       else if (dataArc.x>=471 && dataArc.x<567) {
           dataArc.x+=0.8;
           dataArc.clearX+=0.6;
       } 
       else if (dataArc.x>=567 && dataArc.x<618) {
           dataArc.x+=0.8;
           dataArc.y-=0.8;
           dataArc.clearX+=0.6;
       } 
       else if (dataArc.x>=606 && dataArc.x<777) {

           dataArc.x+=0.5;
           dataArc.clearX+=0.82;
       } 
       else {
               contextArc.clearRect(0, 0, 1300, 50); 
               dataArc.x=0;
               dataArc.y=12;
               dataArc.clearX=0;
       }
   }

   function loopArc() {
       window.requestAnimationFrame(loopArc);
       updateArc();
       drawArc();
   }
   loopArc();
}

// SERVICES PART

function hover (e) {
    e.firstElementChild.firstElementChild.firstElementChild.style.fill='#1E9EC3';
    e.lastElementChild.style.color='#1E9EC3';
}

function leave (e) {
    if (clicked && e.attributes[0].nodeValue === clickedItem) return;
    e.firstElementChild.firstElementChild.firstElementChild.style.fill='#FFFFFF';
    e.lastElementChild.style.color='#FFFFFF';
}

const texts = {
   mobile: `${'\tOur engineering team providing iOS and Android apps development. Starting from design up to market deploy with continious support. We are keeping strict SDLC process for deliver mature and bug free apps. Have an idea or design of a app... contact us, we will be hapy to cowork'+' '+'&#128521;'}`,
   web: `${"\tOur WEB developers team providing wide range of development such as eCommerce, Shopify, Finance, Telco,  Management as well as distributed backend services with API's for mobile apps and 3rd parties."+
   "Need to automate, enhance or design service... or just have a plans to create WEB... feel free to contact us"+ " "+"&#128077;"}`,
   test: `${"\tHave a project and stucked with issues... no matter it's WEB or mobile app we will help to figure out the stuff starting from simple QA up to QA process setup with automation"+" "+"&#128030;"}`,
   design: `${"No matter it's new project or existing one, if it has design then changes and development ongoing efficent, quickly and without back and forwards.<br /> Our designers will help to get all project logic, pages and app views before starting development. It will garantiy the rule What you see that you get. <br/>Interested ?... go ahead to contact us"+" "+"&#128208;"}`,
   support: `${'\tHave a outsourced project which has enhancement or fixing needs. Our fellow engineers will help to job done in short manner.<br /> Try and you will satisfied'+' '+'&#128736;'}`,
};
var clicked;
var clickedNode;
var clickedItem = undefined; 
const desc = document.querySelector('.serviceDescr');
const descText = document.querySelector('.serviceDescr div');
let textHeight = 0;

function clickItem(e) {
    hover(e);
    if (clickedItem !== e.attributes[0].nodeValue) {
       clickedItem = e.attributes[0].nodeValue;
       clicked = true;
       if(!clickedNode) {
         clickedNode = e;
       } else {
        leave(clickedNode);
        clickedNode = e;
       }
    } else {
       clickedItem = undefined;
       clicked = false;
    }

    descText.innerHTML = texts[clickedItem] || '';
    textHeight = descText.scrollHeight+'px';

    desc.style.height = textHeight;
    desc.style.backgroundColor = 'rgba(33, 33, 33, 0.48)';
    desc.style.transition = 'height 1s linear';
    descText.style.opacity = 1;
    descText.style.transition = 'opacity 1s linear 1s';
}

// READ MORE  PART
const elem = document.querySelector('.aboutRead');
const aboutContainer = document.querySelector('.aboutContainer');
const aboutText = document.querySelector('.aboutWrapper');


elem.addEventListener('click', ()=>{
    if (aboutContainer.classList.contains('readOpen')) {
        elem.innerHTML = 'More';
    } else {
        elem.innerHTML = 'Less';
    }
    aboutContainer.classList.toggle('readOpen');
    aboutContainer.classList.toggle('m-h-[400px]');
    aboutText.classList.toggle('aboutOpen');
    ['h-auto', 'h-[182px]', 'sm:h-[144px]'].forEach(style=>aboutText.classList.toggle(style));
});

//projects modal 

function content () {
    return `
      <div class="projectModalContent lg:w-[1129px] lg:h-[711px] lg:rounded-[20px] md:w-[664px] md:h-[418.16px] md:rounded-[11.76px] w-[100%] h-[201px] bg-[#FFFFFF] m-auto sm:w-[345px] sm:h-[217.27px] sm:rounded-[6px]">
        <div class="projectContainer lg:w-[1049px] lg:my-[80px] lg:mx-auto md:w-[617px] md:my-[32px] md:mx-auto sm:w-[321px] w-[298px] my-[14px] mx-auto flex flex-col justify-center sm:mx-auto sm:my-[20px]">
        <div class="projectModalTitle flex items-center justify-center">
            <img class="projectModalLogo w-[19px] h-[19px]" />
            <span class="projectModalName ml-[6px] md:text-[23.5px] lg:ml-[20px] lg:text-[40px]"></span>
        </div>
        <div class="projectModalText lg:h-[140px] lg:leading-[28px] lg:mt-[29px] lg:text-[24px] md:text-[18px] md:w-[607px] md:h-[84px] md:leading-[18px] md:mt-[20px] text-[8px] w-[273px] text-center font-roboto font-normal not-italic leading-[8px] text-[#212121] m-auto mt-[10px] lg:w-[793px]"></div>
        <div class="projectModalButtons my-[10px] mx-auto w-[158px] flex sm:my-[5px] md:w-[261px] md:my-[11px] md:mx-auto lg:m-auto lg:w-[316px]"></div>
        <img class="projectModalImage"></img>
        </div>   
     </div>
    `
}

function buttons (app, google) {
    return `
        <a target='_blank' href=${app}>
            <button class='modal-app-store'>
                <div class='modal-app-button-content'>
                    <span class='modal-download-text'>Download on the</span>
                    <span class='modal-app-text'>App Store</span>
                </div>
            </button>
        </a>
        <a target='_blank' href=${google}>
            <button class='modal-google-play'>
                <div class='modal-google-button-content'>
                    <span class='modal-get-text'>Get it on</span>
                    <span class='modal-google-text'>Google Play</span>
                </div>
            </button>
        </a>
    `  
}

const projectModal = document.querySelector('.projectModal');
const projectModalContent = document.querySelector('.projectModalContent');
projectModal.addEventListener('click', ()=>{
    projectModal.classList.toggle('hidden');
    projectModal.classList.toggle('flex');
});
projectModalContent.addEventListener('click', (e)=>{
    projectModal.classList.toggle('hidden');
    projectModal.classList.toggle('flex');
    e.stopPropagation();
});

function renderProjectModal(project) {
    projectModal.classList.toggle('hidden');
    projectModal.classList.toggle('flex');
    projectModalContent.innerHTML = content();
    const a = document.querySelector('.a');
    a.style.marginTop = window.pageYOffset+'px';
    const modalImgLogo = document.querySelector('.projectModalLogo');
    const modalImgTitle = document.querySelector('.projectModalName');
    const modalText = document.querySelector('.projectModalText');
    const modalBtns = document.querySelector('.projectModalButtons');
    const modalProjImg = document.querySelector('.projectModalImage');
    if(project==='miner') {
            modalImgLogo.src = `images/minerbox_logo.png`;
            modalProjImg.src = `images/miner_modal.png`;
            modalImgTitle.innerHTML = 'MinerBox';
            modalText.innerHTML = document.querySelector('.project-text').innerHTML;
            modalBtns.innerHTML = buttons('https://itunes.apple.com/us/app/minerbox/id1445878254?ls=1&mt=8', 'https://play.google.com/store/apps/details?id=com.witplex.minerbox_android')
            
            modalImgLogo.classList.add('projectLogo');
            modalImgTitle.classList.add('minerTitle');
            modalProjImg.className = 'projectImg converterModalImg';
    } 
    if (project==='converter') {
        modalImgLogo.src = `images/converter_logo.png`;
        modalProjImg.src = `images/converter_modal.png`;
        modalImgTitle.innerHTML = 'Coin Converter';
        modalText.innerHTML = document.querySelector('.project-text-converter').innerHTML;
        modalBtns.innerHTML = buttons('https://apps.apple.com/us/app/coinconverter-crypto-currency/id1494639072', 'https://play.google.com/store/apps/details?id=com.witplex.coinconverter');
        
        modalImgLogo.classList.add('projectLogo');
        modalImgTitle.classList.add('converterTitle');
        modalProjImg.className = 'projectImg converterModalImg';
    }

    if (project==='playTime') {
        modalImgLogo.src = `images/playTime_logo.png`;
        modalProjImg.src = `images/playTime_modal.png`;
        modalImgTitle.innerHTML = 'Play Time';
        modalText.innerHTML = document.querySelector('.project-text-playTime').innerHTML;
        modalBtns.innerHTML = buttons('https://itunes.apple.com/us/app/id1461758812', 'https://play.google.com/store/apps/details?id=com.witplex.playtimecoloring');
        
        modalImgLogo.classList.add('projectLogo');
        modalImgTitle.classList.add('playTimeTitle');
        modalProjImg.className = 'projectImg';
    }

    if (project==='math') {
        modalImgLogo.src = `images/math_logo.png`;
        modalProjImg.src = `images/math_modal.png`
        modalImgTitle.innerHTML = 'Math for Kids';
        modalText.innerHTML = document.querySelector('.project-text-math').innerHTML;
        modalBtns.innerHTML = buttons('https://apps.apple.com/us/app/math-for-kids-cool-fun-games/id1570425468', 'https://play.google.com/store/apps/details?id=com.witplex.preschoolmathgame');
        
        modalImgLogo.classList.add('projectLogo');
        modalImgTitle.classList.add('mathTitle');
        modalProjImg.className = 'projectImg';
    }

}

//bloom slides

const arr = [0,1,2,3,4,5];
let currentIndex = 0;
const bloom = document.querySelector('.bloom-slides');

function createDiv(num) {
    const div = document.createElement('div');
    const src = `images/${'bloom-'+num}.png`;
    div.style.backgroundImage = `url(${src})`;
    div.style.backgroundPosition = '50% 50%';
    div.style.backgroundRepeat = 'no-repeat';

    if (window.innerWidth>=1280) {
       div.addEventListener('click', () => {
         changeModalState();
         bloomModal();
         drawModal(num);
       });
    }
    let styles = [];
    let sizes = [];
    if (window.innerWidth < 744) {
        styles =  ["min-w-[57px]", "h-[58px]", "bg-black", "m-[5px]"];
        sizes  =  ["50px 54px", "50px 54px", "50px 54px","50px 54px", "50px 54px", "50px 54px"];
    } else if (window.innerWidth >= 744 && window.innerWidth < 1280) {
        styles =  ["min-w-[111px]", "h-[111px]", "bg-[#FFFFFF]", "m-[10px]"];
        sizes  =  ["40.39px 103.22px", "80.78px 103.22px", "65.82px 103.22px","89.01px 103.22px", "86.77px 86.77px", "89.01px 103.22px"];
    } else {
        styles =  ["min-w-[149px]", "h-[148px]", "bg-[#FFFFFF]", "cursor-pointer", "m-[13px]"];
        sizes  =  ["54px 138px", "108px 138px", "88px 138px","119px 138px", "116px 116px", "108px 138px"];
    }
    div.style.backgroundSize = sizes[num];
    styles.forEach(style=>div.classList.toggle(style));
    return div;
}

function renderBloom () {
    bloom.innerHTML = '';
    let current = currentIndex;
    const index = [currentIndex];
    while(index.length<arr.length) {
        index.push((current+1)%arr.length);
        current = (current+1)%arr.length;
    }
    index.forEach(item=>{
        const div = createDiv(item);
        bloom.appendChild(div);
      });
    currentIndex = (currentIndex+1)%arr.length;
    return bloom;
}

setInterval(renderBloom, 5000);
function bloomModal() {
    const bloom = document.querySelector('.bloomContainer');
    const bloomSlides = document.querySelector('.bloom-slides-container');
    bloom.classList.toggle('absolute');
    bloomSlides.classList.toggle('md:hidden');
    bloomSlides.classList.toggle('block');
}
const bloomContainer = document.querySelector('.bloomContainer');
const bloomSlides = document.querySelector('.bloom-slides-container');
bloomContainer.addEventListener('mouseover', (e)=>{
    if (window.innerWidth < 744) return;
    bloomModal();
    e.stopPropagation();
})
bloomSlides.addEventListener('mouseleave', (e)=>{
    if (window.innerWidth < 744) return;
    bloomModal();
    e.stopPropagation();
});

window.addEventListener("resize", () => {
    renderBloom();
});
// create bloom slider for each item

var modalWrapper = document.querySelector('.openSlider');
var modal = document.querySelector('.modal');

function changeModalState() {
    modalWrapper.classList.toggle('flex');
    modalWrapper.classList.toggle('hidden');
}

modalWrapper.addEventListener('click', ()=>{
    changeModalState();
    if(modalWrapper.classList.contains('flex')) {
        document.body.style.overflow = 'hidden'
       } else {
        document.body.style.overflow = 'scroll'
       }
})
modal.addEventListener('click', ()=>{
    changeModalState();
})

let activeModalImg;

function  drawModal(num) {
    modal.style.marginTop = window.pageYOffset+'px'
    activeModalImg = num;
    const modalImg = document.querySelector('.modalImg');
    modalImg.className = 'modalImg';
    modalImg.src= `images/${'bloom-'+num}.png`;
    modalImg.style.width = '82%';
    modalImg.style.height = 'auto';
    modalImg.style.backgroundSize = 'cover';
    modalImg.style.backgroundRepeat = 'no-repeat';
    modalImg.style.backgroundPosition = '50% 50%';
}

const modalNextBtn = document.querySelector('.modalNext');
const modalPrevBtn = document.querySelector('.modalPrev');
const modalImgs = [0, 1, 2, 3, 4, 5];
modalNextBtn.addEventListener('click', () => {
    activeModalImg = (activeModalImg+1)%modalImgs.length;
    drawModal(activeModalImg);
})

modalPrevBtn.addEventListener('click', () => {
    activeModalImg = (activeModalImg-1+modalImgs.length)%modalImgs.length;
    drawModal(activeModalImg);
})




