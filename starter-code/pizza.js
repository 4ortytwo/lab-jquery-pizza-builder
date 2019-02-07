// Write your Pizza Builder JavaScript in this file.

const myPizza = {
    pepperonni: 0, 
    mushrooms: 0, 
    greenPeppers: 0, 
    whiteSauce: 0, 
    glutenFreeCrust: 0, 
    total: 10,
    pizzaTotal: function() {
    
        return this.total + this.pepperonni + this.mushrooms + this.greenPeppers + this.whiteSauce + this.glutenFreeCrust;
    }
};

var total = () => $('#total').text(myPizza.pizzaTotal());

total();

$(document).ready (() => {
   
    
    

    $('#whites').hide();
    $('#gfcrust').hide();
    $('.btn-pepperonni').toggleClass('active');
    $('.btn-mushrooms').toggleClass('active');
    $('.btn-green-peppers').toggleClass('active');
    total();
    if ($('.btn-pepperonni').hasClass('active')) {myPizza.pepperonni = 1; total();}else{myPizza.pepperonni = 0;total()}
    if ($('.btn-mushrooms').hasClass('active')) {myPizza.mushrooms = 1; total();}else{myPizza.mushrooms = 0;total()}
    if ($('.btn-green-peppers').hasClass('active')) {myPizza.greenPeppers = 1; total();}else{myPizza.greenPeppers = 0;total()}

    //pepperonni
    $('.btn-pepperonni').click(() => {$('.pep').toggle()});
    $('.btn-pepperonni').click(() => {$('.btn-pepperonni').toggleClass('active');
    if ($('.btn-pepperonni').hasClass('active')) {
        myPizza.pepperonni = 1; 
        $('#pepp').toggle();
        total();
    }else{
        myPizza.pepperonni = 0;
        $('#pepp').toggle();
        total()} 
    });
    

    //mushrooms
    $('.btn-mushrooms').click(() => {$('.mushroom').toggle()});
    $('.btn-mushrooms').click(() => {$('.btn-mushrooms').toggleClass('active')
    if ($('.btn-mushrooms').hasClass('active')) {
        myPizza.mushrooms = 1;$('#mush').toggle();
        total();
    }else{
        myPizza.mushrooms = 0;$('#mush').toggle();
        total()}
    });

    //green-peppers
    $('.btn-green-peppers').click(() => {$('.green-pepper').toggle()});
    $('.btn-green-peppers').click(() => {$('.btn-green-peppers').toggleClass('active')
    if ($('.btn-green-peppers').hasClass('active')) {
        myPizza.greenPeppers = 1; total();$('#greenp').toggle();
        total();
    }else{
        myPizza.greenPeppers = 0;total();$('#greenp').toggle()};
    });
    
    
    // sauce
    let sauceAct = false;
    $('.btn-sauce').click(() => {$('.sauce').toggleClass('sauce-white')});
    $('.btn-sauce').click(() => {$('.btn-sauce').toggleClass('active')});
    $('.btn-sauce').click(() => {
        if(!sauceAct){
            $('#whites').show();
            sauceAct=true; 
            myPizza.whiteSauce = 3;
            total();
            }
        else{$('#whites').hide();
        sauceAct=false; 
        myPizza.whiteSauce = 0;
        total();}
        
    }
    );

    // //crust
    let crustAct = false;
    $('.btn-crust').click(() => {$('.crust').toggleClass('crust-gluten-free')});
    $('.btn-crust').click(() => {$('.btn-crust').toggleClass('active')});
    $('.btn-crust').click(() => {if(!crustAct){$('#gfcrust').show();crustAct=true;myPizza.glutenFreeCrust = 5;total();}else{$('#gfcrust').hide();crustAct=false;myPizza.glutenFreeCrust = 0;total();}});
    
})