<?php
//check if flexible content has rows of data
    if(have_rows('before_and_after') ) :
        $div_id = 1; 
            echo '<section class="ba-image-comparison">';
            //loop through the rows of data
            while(have_rows('before_and_after') ) : the_row();

                echo '<div id="ba-comparison-' . $div_id . '">';

                    include(locate_template('/template-parts/flexible-content/image-comparison.php'));

                echo '</div>';

            $div_id++;

            endwhile;
            echo '</section>';

        else :

            // no layouts found

    endif;

?>