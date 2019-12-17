function change() {
    let pic1 = document.getElementById('pic1');
    let pic2 = document.getElementById('pic2');
    let pic3 = document.getElementById('pic3');
    let pic4 = document.getElementById('pic4');
    let pic5 = document.getElementById('pic5');
    pic1.scr = "img/cat1.jpg";
    pic2.scr = "img/cat2.jpg";
    pic3.scr = "img/cat3.jpg";
    pic4.scr = "img/cat4.jpg";
    pic5.scr = "img/cat5.jpg";
    let puzz = document.getElementById('puzz');
    puzz.style.border = "none";
}
function change1() {
    let pic11 = (document.getElementById('pic1').src).slice(-6, -5);
    switch (pic11) {
        case "t":
            pic1.scr = "img/monkey1.jpg";
            document.getElementById('pic1').src = pic1.scr;
            break;
        case "y":
            pic1.scr = "img/panda1.jpg";
            document.getElementById('pic1').src = pic1.scr;
            break;
        case "a":
            pic1.scr = "img/cat1.jpg";
            document.getElementById('pic1').src = pic1.scr;
            break;
    }
}
function change2() {
    let pic21 = (document.getElementById('pic2').src).slice(-6, -5);
    switch (pic21) {
        case "t":
            pic2.scr = "img/monkey2.jpg";
            document.getElementById('pic2').src = pic2.scr;
            break;
        case "y":
            pic2.scr = "img/panda2.jpg";
            document.getElementById('pic2').src = pic2.scr;
            break;
        case "a":
            pic2.scr = "img/cat2.jpg";
            document.getElementById('pic2').src = pic2.scr;
            break;
    }
}
function change3() {
    let pic31 = (document.getElementById('pic3').src).slice(-6, -5);
    switch (pic31) {
        case "t":
            pic3.scr = "img/monkey3.jpg";
            document.getElementById('pic3').src = pic3.scr;
            break;
        case "y":
            pic3.scr = "img/panda3.jpg";
            document.getElementById('pic3').src = pic3.scr;
            break;
        case "a":
            pic3.scr = "img/cat3.jpg";
            document.getElementById('pic3').src = pic3.scr;
            break;
    }
}
function change4() {
    let pic41 = (document.getElementById('pic4').src).slice(-6, -5);
    switch (pic41) {
        case "t":
            pic4.scr = "img/monkey4.jpg";
            document.getElementById('pic4').src = pic4.scr;
            break;
        case "y":
            pic4.scr = "img/panda4.jpg";
            document.getElementById('pic4').src = pic4.scr;
            break;
        case "a":
            pic4.scr = "img/cat4.jpg";
            document.getElementById('pic4').src = pic4.scr;
            break;
    }
}
function change5() {
    let pic51 = (document.getElementById('pic5').src).slice(-6, -5);
    switch (pic51) {
        case "t":
            pic5.scr = "img/monkey5.jpg";
            document.getElementById('pic5').src = pic5.scr;
            break;
        case "y":
            pic5.scr = "img/panda5.jpg";
            document.getElementById('pic5').src = pic5.scr;
            break;
        case "a":
            pic5.scr = "img/cat5.jpg";
            document.getElementById('pic5').src = pic5.scr;
            break;
    }
}
function add() {
    let p1 = (document.getElementById('pic1').src).slice(-6, -5);
    let p2 = (document.getElementById('pic2').src).slice(-6, -5);
    let p3 = (document.getElementById('pic3').src).slice(-6, -5);
    let p4 = (document.getElementById('pic4').src).slice(-6, -5);
    let p5 = (document.getElementById('pic5').src).slice(-6, -5);
    if (p1 === p2 && p2 === p3 && p3 === p4 && p4 === p5) {
        puzz.style.border = "outset";
        document.getElementsById('puzz').style.padding = puzz.style.padding;
    }
    else {
        puzz.style.border = "none";
        document.getElementById('puzz').style.padding = "none";
    }
}
window.onload = change;
window.onload = add;
