<?php
//check if flexible content has rows of data
    if(have_rows('flexible_content') ) :
        $div_id = 1; 

            //loop through the rows of data
            while(have_rows('flexible_content') ) : the_row();

                echo '<div id="content-div-' . $div_id . '">';
                    include(locate_template('/template-parts/flexible-content/full_page_carousel.php'));

                    include(locate_template('/template-parts/flexible-content/20_year_label.php'));

                    //include(locate_template('/template-parts/flexible-content/fullwidth-image.php' ));

                    //include(locate_template('/template-parts/flexible-content/multi_column_text.php'));

                echo '</div>';

            $div_id++;

            endwhile;

        else :

            // no layouts found

    endif;

?>