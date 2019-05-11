
var entryCount = 0;
var displayCount = 0;

$(document).ready(function() {


  $('.coverup').on('click', function(){
  		$('.coverup').addClass('dissolve');
  });

  $('body').on('dblclick', function(){
      $('.container').addClass('reveal');
  });

  $('body').on('click', function(){
      $('.container').removeClass('reveal');
  });



  //capture key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;
    displayCount ++;

    //translate unicode to characters
    //https://unicodelookup.com/
    if (e.which == 13) {
          console.log("enter");
          var elem = $('#cursor');
          elem.before('<div class="nextline"></span>');
    } else {
      var char = String.fromCharCode(e.which);
      console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
      createElement(char);
    }
  });

  //capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      displayCount --;
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement();
    }

  });

});

function createElement(k) {
  var elem = $('#cursor');
  if (k == " ") { elem.before('<span class="inner"><div class="spacebox"></span>'); }

  //punctuation and symbol keys
  if (k == "." || k == ">") { elem.before('<span class="inner"><p>.</p>.</span>'); }
  if (k == "," || k == "<") { elem.before('<span class="inner"><p>,</p>,</span>'); }
  if (k == "/" || k == "?") { elem.before('<span class="inner"><p>?</p>?</span>'); }
  if (k == ":" || k == ";") { elem.before('<span class="inner"><p>:<p>:</span>'); }

  //number keys
  if (k == "1") { elem.before('<span class="inner">1<div class="box1"></span>'); }
  if (k == "2") { elem.before('<span class="inner">2<div class="box2"></span>'); }
  if (k == "3") { elem.before('<span class="inner">3<div class="box3"></span>'); }
  if (k == "4") {  elem.before('<span class="inner">4<div class="box4"></span>'); }
  if (k == "5") { elem.before('<span class="inner">5<div class="box5"></span>'); }
  if (k == "6") { elem.before('<span class="inner">6<div class="box6"></span>'); }
  if (k == "7") { elem.before('<span class="inner">7<div class="box7"></span>'); }
  if (k == "8") { elem.before('<span class="inner">8<div class="box8"></span>'); }
  if (k == "9") { elem.before('<span class="inner">9<div class="box9"></span>'); }
  if (k == "0") { elem.before('<span class="inner">0<div class="box0"></span>'); }

  //leter keys
  if (k == "a" || k == "A") { elem.before('<span class="inner">A<div class="Abox"></span>'); }
  if (k == "b" || k == "B") { elem.before('<span class="inner">B<div class="Bbox"></span>'); }
  if (k == "c" || k == "C") { elem.before('<span class="inner">C<div class="Cbox"></span>'); }
  if (k == "d" || k == "D") { elem.before('<span class="inner">D<div class="Dbox"></span>'); }
  if (k == "e" || k == "E") { elem.before('<span class="inner">E<div class="Ebox"></span>'); }
  if (k == "f" || k == "F") { elem.before('<span class="inner">F<div class="Fbox"></span>'); }
  if (k == "g" || k == "G") { elem.before('<span class="inner">G<div class="Gbox"></span>'); }
  if (k == "h" || k == "H") { elem.before('<span class="inner">H<div class="Hbox"></span>'); }
  if (k == "i" || k == "I") { elem.before('<span class="inner">I<div class="Ibox"></span>'); }
  if (k == "j" || k == "J") { elem.before('<span class="inner">J<div class="Jbox"></span>'); }
  if (k == "k" || k == "K") { elem.before('<span class="inner">K<div class="Kbox"></span>'); }
  if (k == "l" || k == "L") { elem.before('<span class="inner">L<div class="Lbox"></span>'); }
  if (k == "m" || k == "M") { elem.before('<span class="inner">M<div class="Mbox"></span>'); }
  if (k == "n" || k == "N") { elem.before('<span class="inner">N<div class="Nbox"></span>'); }
  if (k == "o" || k == "O") { elem.before('<span class="inner">O<div class="Obox"></span>'); }
  if (k == "p" || k == "P") { elem.before('<span class="inner">P<div class="Pbox"></span>'); }
  if (k == "q" || k == "Q") { elem.before('<span class="inner">Q<div class="Qbox"></span>'); }
  if (k == "r" || k == "R") { elem.before('<span class="inner">R<div class="Rbox"></span>'); }
  if (k == "s" || k == "S") { elem.before('<span class="inner">S<div class="Sbox"></span>'); }
  if (k == "t" || k == "T") { elem.before('<span class="inner">T<div class="Tbox"></span>'); }
  if (k == "u" || k == "U") { elem.before('<span class="inner">U<div class="Ubox"></span>'); }
  if (k == "v" || k == "V") { elem.before('<span class="inner">V<div class="Vbox"></span>'); }
  if (k == "w" || k == "W") { elem.before('<span class="inner">W<div class="Wbox"></span>'); }
  if (k == "x" || k == "X") { elem.before('<span class="inner">X<div class="Xbox"></span>'); }
  if (k == "y" || k == "Y") { elem.before('<span class="inner">Y<div class="Ybox"></span>'); }
  if (k == "z" || k == "Z") { elem.before('<span class="inner">Z<div class="Zbox"></span>'); }

  // if (k === 13) {
  //       { elem.before('<span class="inner"><br></span>'); }

//   if (k.which == 13) {
//         alert('You pressed enter!');
//     } { elem.before('<span class="inner"><div class="spacebox"></span>') };
//
//   // if (k == "z") { elem.before('<span class="inner"><br></span>'); }
//   //
//   // if(e.which == 13) { elem.before('<span class="inner"><br></span>')};
//   //
//   //
//   // if (keyCodePressed == 13) {
//   //   const keyCodePressed = event.keyCode;
//   //   elem.before('<span class="inner"><br></span>'); }

}

function deleteElement() {
  $(".inner").last().remove();
}
