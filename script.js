//Hiding Images or things for later uses.
    $(".magic2").hide();
    $(".magic3").hide();
    $(".moon").hide();
    $(".idk2").hide();
    $(".teddy ").hide();
    $(".teddy2 ").hide();
    $(".nighttim").hide();
    $(".teddy3 ").hide();
    $(".finalpurchase ").hide();
    var image=[];
    var sun = ".sun";

//clicking the sun to change into moon
$(".sun").click(function(){
    $(" body").fadeOut();
         $(" body").fadeIn();
         $(".cart").hide();
         $(".sidebar").hide();
         $(".ad").hide();
         console.log("sun!");
         $(".sun").fadeOut();
         $(".moon").fadeIn();
         $(".idk2").fadeIn();
         $(".idk").fadeOut();
         $(".nighttim").fadeIn();
         $(".teddy2").show();
         $(".hat").hide();
         document.body.style.backgroundImage = "url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/F5Nimut/twinkling-stars-in-the-night-sky-loop_rpkmj9ea_thumbnail-full01.png')";
         document.body.style.backgroundRepeat = "repeat-y";
         document.body.style.backgroundSize = "100% ";
});

//moon to sun
$(".moon").click(function(){
    $(" body").fadeOut();
         $(" body").fadeIn();
         $(".cart").show();
         $(".sidebar").show();
         $(".ad").show();
         $(".nighttim").hide();
         console.log("moon!");
         $(".moon").fadeOut();
         $(".sun").fadeIn();
         $(".idk2").fadeOut();
         $(".idk").fadeIn();
         $(".hat").show();
         $(".teddys").hide();
         $(".teddy2").hide();
         document.body.style.backgroundImage = "url('https://thumbs.gfycat.com/WidePowerfulBeauceron-size_restricted.gif')";
         document.body.style.backgroundRepeat = "no-repeat";
         document.body.style.backgroundSize = "100% ";
});

//when you click add it changes the animal
$(".add").click(function(){
     console.log("hello");
    $(".magic").hide();
    $(".magic2").show();
});

//when you click add it changes the animal
$(".add").mouseleave(function(){
    $(".magic").show();
    $(".magic2").hide();
});

//when you click purchase item(s) it changes the animal
$(".buy").click(function(){
    $(".magic3").show();
    $(".magic").hide();
    $(".magic2").hide();
});

//when you click purchase item(s) it changes the animal    
$(".buy").mouseleave(function(){
    $(".magic").show();
    $(".magic3").hide();
});

//arrays or extra things 
    $(".magic3").hide();
    var image=[];
    var prices=[];
    var item = [];
    var money = [];
    
//when you click add it put user's input value in
$('.add').click(function() {
    var address = $(".address").val();
    console.log(address);
    image.push(address);
    $(".productimage").append("<div>" + "<img src=" + address + ">" + "</div>");

//counting the amount of things in cart
    var counter = ".counter";
    counter = image.length;
    $(".counter").html(image.length);

//when you click add it put user's input value in
    var name = $(".item").val();
    console.log(name);
    item.push(name);
    $(".productname").append("<div class='itemname'>" + "<h3>" + name + "</h3>" + "</div>");
    $(".finalpurchase").append("<ul>" + "<li>" + name + "</li>" + "</ul>");
    

//when you click add it put user's input value in
    var cost = parseInt($(".price").val());
    console.log(cost);
    money.push(cost);
    $(".productcost").append("<div class='costthingy'>" + "<h3>" + cost + "</h3>" + "</div>");
    $("input").val("");
    
//the purchase button which adds all product cost
$('.buy').click(function() {
    var nums = cost;
    var a = 0;
    money.forEach(function(currentNum){
            console.log(currentNum);
            a+=currentNum;
            console.log(a);
            $(".money2").html("<div>" + "<h4>" +"$" + a + "</h4>" + "</div>");
            alert("thanks for purcashing " + item[0] + " and please visit soon! :)");
         });   
    });
});


//changing the animals
$(".nightadd").click(function(){
     console.log("hello");
    $(".teddy2").hide();
    $(".teddy3").show();
});

$(".nightadd").mouseleave(function(){
    $(".teddy2").show();
    $(".teddy3").hide();
});

$(".nightbuy").click(function(){
    $(".teddy2").hide();
    $(".teddy").show();
});
    
$(".nightbuy").mouseleave(function(){
    $(".teddy2").show();
    $(".teddy").hide();
});

//arrays
    var nightimage=[];
    var nightprices=[];
    var nightitem = [];
    var nightmoney = [];
    
    //when you click add it put user's input value in
$('.nightadd').click(function() {
    var nightaddress = $(".nightaddress").val();
    console.log(nightaddress);
    nightimage.push(nightaddress);
    $(".nightproductimage").append("<div>" + "<img src=" + nightaddress + ">" + "</div>");
    
    //counting the amount in night cart
    var nightcounter = ".nightcounter";
    nightcounter = nightimage.length;
    $(".nightcounter").html(nightimage.length);
    
//when you click add it put user's input value in
    var nightname = $(".nightitem").val();
    console.log(nightname);
    nightitem.push(nightname);
    $(".nightproductname").append("<div class='nightitemname'>" + "<h3>" + nightname + "</h3>" + "</div>");
    
//when you click add it put user's input value in
    var nightcost = parseInt($(".nightprice").val());
   console.log(nightcost);
    nightmoney.push(nightcost);
    $(".nightproductmoney").append("<div class='nightcostthingy'>" + "<h4>" + nightcost + "</h4>" + "</div>");
    $("input").val("");
        });

    
//when you click buy it adds all the product cost at night
    $('.nightbuy').click(function() {
    var c=0;
    var something= $(".nightprice").val();
    console.log(nightmoney);
        nightmoney.forEach(function(currentFinal){
            console.log(currentFinal);
            c+=currentFinal;
            console.log(c);
            $(".nightmoney2").html("<div>" + "<h4>" + "$" + c+ "</h4>" + "</div>");
             alert("thanks for purcashing " + nightitem[0] + " and please visit soon! :)");
    });
});


//Changes background to something completly unrelated to project when you click these 
$(".ad,.nightad").click(function(){
    document.body.style.backgroundImage = "url('http://33.media.tumblr.com/6594ec504f11d61c1c45d4a9c83112db/tumblr_nrchiceMy01u2u368o1_500.gif')";
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.backgroundSize = "200px 200px";
    console.log("dunno");
});

$(".secret").click(function(){
    document.body.style.backgroundImage = "url('https://i.imgur.com/4DJcvqZ.gif')";
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.backgroundSize = "200px 200px";
    console.log("secret");
});









