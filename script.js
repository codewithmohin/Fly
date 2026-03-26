let t=0;setInterval(()=>{console.clear();for(let y=0;y<20;y++){let l="";for(let x=0;x<40;x++)l+=Math.sin(x*t+y)>0?"*":" ";console.log(l)}t+=0.1},60);
