var clickCount = 0;

$(document).ready(function () {
  $('.hobbitcat').click(function(e) {
    clickCount += 1;
    console.log(clickCount);
  });
});


/*

<script>
  var clickCount = 0;

  var catImage = document.getElementById("hobbitcat");
  catImage.addEventListener('click', function(){
    clickCount += 1;
    console.log(clickCount);
  }, false);
</script>


var clickCount = 0;

  $('.hobbitcat').click(function() {
    clickCount += 1;
    console.log(clickCount);
  });
*/
