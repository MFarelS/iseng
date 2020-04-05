function startTime() {

    var today = new Date();
    var d = today.getDate();
    var M = today.getMonth();
    var y = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var b = M + 1

    var time = h + ":" + m + ":" + s;
    var date = d + " / " + b + " / " + y;

    document.getElementById('time').innerHTML =
    time;   

    document.getElementById('date').innerHTML =
    date;   
    var t = setTimeout(startTime, 500);

    if (time > '17:59:00'){
        document.getElementById("body").style.backgroundColor = "#00004d";
        document.getElementById("body").style.color = "white";
    }

    if (time < '03:00:00'){
        typeWriter('Tidur goblok, jangan begadang!')
    }

    if (time < '10:00:00'){
        typeWriter('Masih idup aja lu nyet!')
    }

    if (time < '18:00:00'){
        typeWriter('Netflix-an yuk!')
    }
    
    if (time <= '18:50:00'){
        typeWriter('solat magrib, goblok!')
    }

    if (time <= '23:59:00'){
        typeWriter('Isya dulu, baru tidur tolol!')
    }
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var i = 0;
var speed = 100;

function typeWriter(txt) {
  if (i < txt.length) {
    document.getElementById("msg").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var nodesjs = new NodesJs({
    id: 'nodes',
    width: window.innerWidth,
    height: window.innerHeight,
    particleSize: 2,
    lineSize: 1,
    particleColor: [255, 255, 255, 0.3],
    lineColor: [255, 255, 255],
    backgroundFrom: [10, 25, 100],
    backgroundTo: [25, 50, 150],
    backgroundDuration: 4000,
    nobg: false,
    number: window.hasOwnProperty('orientation') ? 30: 100,
    speed: 20,
    pointerCircleRadius: 150
});
  