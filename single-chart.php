<?php get_header(); ?>

<div class="container">
    <div class="row">
      <div class="col-sm-4">
        <div id="output">
        </div>
      </div>
    </div>

    <div class="col-sm-8">
        <?php the_content(); ?>
    </div>  
</div>

<script>
// Throw out the results with this self-executing anonymous function, baby!
(function() {
     var storedResults = JSON.parse(localStorage.getItem('storedResults'));
    document.getElementById("output").innerHTML = "Life Path Number: " + storedResults.lifePath + "<br>"
 })();
</script>
<?php get_footer(); ?>
