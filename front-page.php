<form class="form-inline" name="numerologicalForm">
  <div class="form-group">
    <label for="Birthday">Full Name</label><br>
    <input type="text" class="form-control" id="Birthday" name="Birthday" value="1987-06-18" placeholder="Enter full birth day">
  </div>
  <div class="form-group">
    <label for="FullName">Full Name</label><br>
    <input type="text" class="form-control" id="FullName" name="FullName" value="Victor Gerard Temprano" placeholder="Enter full birth name">
  </div>
  <p><small>Enter in your name as on your birth certificate. Translated names may not be accurate (see <a href="">world numerology systems</a>).</small></p>
  <input id="ajaxButton" type="button" value="Get your numbers!" class="btn btn-success" onclick="numerologically();">
  <div id="output">
  </div>
</form>
