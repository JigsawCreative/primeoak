<?php
//check if flexible content has rows of data
    if(have_rows('testimonials') ) :
        $div_id = 1; 

            //loop through the rows of data
            while(have_rows('testimonials') ) : the_row();

                echo '<div id="testimonial-block-' . $div_id . '" class="testimonial-modules">';

                    include(locate_template('/template-parts/flexible-content/individual-testimonials.php'));

                echo '</div>';

            $div_id++;

            endwhile;

        else :

            // no layouts found

    endif;

?>