canvas = document.getElementById('myCanvas');
ctx = canvas.getcontext("2d");

car1_width = 120;
car1_height = 70;
car1_image ="car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image ="car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add()
{
    background_imgTag = new Image();
    background_imgTag.src = uploadBackground;
    background_imgTag.onload =background_image;

    car1_imgTag = new Image();
    car1_imgTag.src = uploadcar1;
    car1_imgTag.onload = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.src = uploadcar2;
    car2_imgTag.onload = car2_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadcar1()
{
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);

}
function uploadcar2()
{
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);

}

window.addEventListener("keydown",my_keydown);

function keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if(keyPressed == '38')
    {
        car1_up();
        console.log("up arrow key");
    }
    if(keyPressed == '39')
    {
        car1_right();
        console.log("right arrow key");
    }
    if(keyPressed == '40')
    {
        car1_down();
        console.log("down arrow key");
    }
    if(keyPressed == '37')
    {
        car1_left();
        console.log("left arrow key");
    }

    if(keyPressed == '87')
    {
        car2_up();
        console.log("key w");
    }
    if(keyPressed == '68')
    {
        car2_right();
        console.log("key d");
    }
    if(keyPressed == '83')
    {
        car2_down();
        console.log("key s");
    }
    if(keyPressed == '65')
    {
        car2_left();
        console.log("key a");
    }
}




function car1_up()
{
    if(car1_image >= 0)
    {
        car1_x = car1_y-10;
        console.log("when up arrow is pressed, x = "+car1_x+"and y ="+car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_down()
{
    if(car1_image <= 500)
    {
        car1_x = car1_y+10;
        console.log("when down arrow is pressed, x = "+car1_x+"and y ="+car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_left()
{
    if(car1_image >=0)
    {
       car1_x = car1_x - 10;
       console.log("when left arrow is pressed, x = "+car1_x+"and y ="+car1_y); 
       uploadbackground();
       uploadcar1();
       uploadcar2();
    }
}
function car1_right()
{
    if(car1_image <=700)
    {
       car1_x = car1_x + 10;
       console.log("when right arrow is pressed, x = "+car1_x+"and y ="+car1_y); 
       uploadbackground();
       uploadcar1();
       uploadcar2();
    }
}




function car2_up()   
{
    if(car2_image >= 0)
    {
        car2_x = car2_y-10;
        console.log("when up arrow is pressed, x = "+car2_x"and y ="+car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_down()
{
    if(car1_image <= 500)
    {
        car2_x = car2_y+10;
        console.log("when down arrow is pressed, x = "+car2_x+"and y ="+car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_left()
{
    if(car2_image >=0)
    {
       car2_x = car2_x - 10;
       console.log("when left arrow is pressed, x = "+car2_x+"and y ="+car2_y); 
       uploadbackground();
       uploadcar1();
       uploadcar2();
    }
}
function car2_right()
{
    if(car2_image <=700)
    {
       car2_x = car2_x + 10;
       console.log("when right arrow is pressed, x = "+car2_x+"and y ="+car2_y); 
       uploadbackground();
       uploadcar1();
       uploadcar2();
    }
}
if(car1_x > 700)
{
    console.log(car1 Won)
    document.getElementById('game_status').innerHTML = "Car 1 Won";
}

if(car2_x > 700)
{
    console.log(car2 Won)
    document.getElementById('game_status').innerHTML = "Car 2 Won";
}

