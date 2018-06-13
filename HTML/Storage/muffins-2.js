document.addEventListener('DOMContentLoaded', function() {

  // bind, i.e. "declare and assign" relevant elements

  var muffin = document.getElementById('muffinCount');

  var eat = document.getElementById('eat');

  var bake = document.getElementById('bake');

    var count = 10;

var count = window.localStorage.getItem('count');

  if (count) {

    count = Number(count);

   } else {

     count = 10;

   }

  muffin.innerText = "Muffin Count: " + count;



  // listen to the "eat" button

  eat.addEventListener('click', function(event) {

    count -= 1;

    muffin.innerText = "Muffin Count: " + count;

    window.localStorage.setItem('count', count);

  });



  // listen to the "bake" button

  bake.addEventListener('click', function(event) {

    count += 5;

    muffin.innerText = "Muffin Count: " + count;

    window.localStorage.setItem('count', count);

  });

});
