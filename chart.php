<?php 
    $obj = json_decode($_POST['allResults']);
    // Declare variables
    $allData = array (
        "birthDay" => $obj->birthDay,
        "birthMonth" => $obj->birthMonth,
        "birthYear" => $obj->birthYear,
        "firstName" => $obj->firstName,
        "middleName" => $obj->middleName,
        "lastName" => $obj->lastName,
        "firstNum" => $obj->firstNum,
        "middleNum" => $obj->middleNum,
        "lastNum" => $obj->lastNum,
        "lifePath" => $obj->lifePath,
        "expression" => $obj->expression,
        "heartsDesire" => $obj->heartsDesire,
        "personality" => $obj->personality,
        "challengeOne" => $obj->challengeOne,
        "challengeTwo" => $obj->challengeTwo,
        "challengeThree" => $obj->challengeThree,
        "challengeFour" => $obj->challengeFour,
        "pinnacleOne" => $obj->pinnacleOne,
        "pinnacleTwo" => $obj->pinnacleTwo,
        "pinnacleThree" => $obj->pinnacleThree,
        "pinnacleFour" => $obj->pinnacleFour,
        "physicalTransit" => $obj->physicalTransit,
        "mentalTransit" => $obj->mentalTransit,
        "spiritualTransit" => $obj->spiritualTransit,
        "essences" => $obj->essences,
        "karmicDebt" => $obj->karmicDebt,
    );
    $allResults = array (
        "lifePath" => $obj->lifePath,
        "expression" => $obj->expression,
        "heartsDesire" => $obj->heartsDesire,
        "personality" => $obj->personality,
        "challengeOne" => $obj->challengeOne,
        "challengeTwo" => $obj->challengeTwo,
        "challengeThree" => $obj->challengeThree,
        "challengeFour" => $obj->challengeFour,
        "pinnacleOne" => $obj->pinnacleOne,
        "pinnacleTwo" => $obj->pinnacleTwo,
        "pinnacleThree" => $obj->pinnacleThree,
        "pinnacleFour" => $obj->pinnacleFour,
    );

    define('WP_USE_THEMES', false);  
    require_once('../../../wp-blog-header.php');
?>

<div class="row">
        <div class="col-sm-4">
            <ul class="list-group">
                <li class="list-group-item">
                    <a href="#">FULL CHART</a>
                </li>
                <p style="font-size:10px;padding:15px;margin-bottom:0px;">Hover/click learn more about the numbers of your numerology chart.</p>
                <?php 
                    foreach ($allResults as $key => $allResults) { 
                ?>
                    <li class="list-group-item">
                        <a href="#" data-toggle="modal" data-target="<?php echo "#$key"; ?>Modal"><strong><?php echo $allResults; ?></strong> <?php echo $key; ?></a>
                    </li>
                    <div class="modal fade" id="<?php echo "$key"; ?>Modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                        <?php $the_query = new WP_Query( "name=$allResults" ); ?>
                        <?php if ( $the_query->have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post();  ?>
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <h4 class="modal-title" id="myModalLabel"><?php the_title(); ?> - <?php the_field('subtitle'); ?></h4>
                          </div>
                          <div class="modal-body">
                            <?php 
                            $this_field = $key . "_description";
                            the_field("$this_field"); ?>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Rate description</button>
                          </div>
                        <?php endwhile; else: endif; wp_reset_postdata(); ?>
                        </div>
                      </div>
                    </div>
                <?php
                    }
                ?>
            </ul>
        </div>
    <!-- 
        For each variable:
            - Create the area on the left side with the number, the modal, then rewind for the chart
            - Array of values and cycle through them (array in array for Challenges, etc?)
    -->
        <div class="col-sm-8" style="text-align:center;">
            <h1><?php echo $allData['firstName'] . ' ' . $allData['middleName'] . ' ' . $allData['lastName']; ?></h1>
            <h4 style="text-transform:uppercase;"><small>Full Numerology Chart</small></h4>
            <hr>
            <div class="full-chart">
                <div class="row">
                    <div class="lifepath col-sm-3 col-xs-6">
                        <div class="circles hover-fill" data-toggle="modal" data-target="#myModal">
                            <p><a href="#"><?php echo $allData[lifePath]; ?></a></p>
                        </div>
                        <p class="chart-label"><small>Life Path</small></p>
                    </div>
                    <div class="expression col-sm-3 col-xs-6" data-toggle="tooltip" data-placement="bottom" title="Your Expression is your strengths and weaknesses.">
                        <div class="triangle-container">
                            <div class="triangle">
                                <p><?php echo $allData[expression]; ?></p>
                            </div>
                        </div>
                        <p class="chart-label"><small>Expression</small></p>
                    </div>
                    <div class="hearts-desire col-sm-3 col-xs-6" data-toggle="tooltip" data-placement="bottom" title="Your Heart's Desire describes your inner drives.">
                        <div class="circle hover-fill">
                            <p><?php echo $allData[heartsDesire]; ?></p>
                        </div>
                        <p class="chart-label"><small>Heart's Desire</small></p>
                    </div>
                    <div class="personality col-sm-3 col-xs-6" data-toggle="tooltip" data-placement="bottom" title="Your Personality describes your outward self.">
                        <div class="rectangle hover-fill">
                            <p><?php echo $allData[personality]; ?></p>
                        </div>
                        <p class="chart-label"><small>Personality</small></p>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="panel-group" id="accordion">
                        <div class="col-sm-4">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                  <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                      Minor Numbers
                                    </a>
                                  </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse in">
                                  <div class="panel-body">
                                    A bunch of minor numbers will be listed here.
                                  </div>
                                </div>
                          </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                  <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                      Karmic Numbers
                                    </a>
                                  </h4>
                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse in">
                                  <div class="panel-body">
                                    Your karmic numbers will be displayed here in a big row and column.
                                  </div>
                                </div>
                          </div>
                        </div>
                        <div class="col-sm-4">
                             <div class="panel panel-default">
                                <div class="panel-heading">
                                  <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                      Lifespan Chart
                                    </a>
                                  </h4>
                                </div>
                                <div id="collapseThree" class="panel-collapse collapse in">
                                  <div class="panel-body">
                                    A link to your life chart, along with a summary of recent 5 years and the next 5 years, goes here.
                                  </div>
                                </div>
                          </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <table class="table">
                        <tr>
                            <td>Physical Transit</td>
                            <?php for($i=1;$i<100;$i++) {
                                echo "<td>" . $allData['physicalTransit'][$i] . "</td>";  } 
                            ?>
                        </tr>
                        <tr>
                            <td>Mental Transit</td>
                            <?php for($i=1;$i<100;$i++) {
                                echo "<td>" . $allData['mentalTransit'][$i] . "</td>";  } 
                            ?>
                        </tr>
                        <tr>
                            <td>Spiritual Transit</td>
                            <?php for($i=1;$i<100;$i++) {
                                echo "<td>" . $allData['spiritualTransit'][$i] . "</td>";  } 
                            ?>
                        </tr>
                        <tr>
                            <td>Essence Numbers</td>
                            <?php foreach($allData['essences'] as $number) { 
                                echo "<td>" . $number . "</td>";  } 
                            ?>
                        </tr>
                    </table>

                    <div class="col-xs-12">
                        <p>Here will go some general stats and comments on you from your chart results.</p>
                    </div>
                </div>
        </div>
