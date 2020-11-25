<!-- Retrieve page name from URL and set as category name-->
	<?php $pageName = $_SERVER['REQUEST_URI']; 
    $product_category = trim( $pageName, '/' );
    ?>

<!-- Products Loop -->
	<?php 
	// the query
	$wpb_all_query = new WP_Query(array('post_type'=>'project', 'post_status'=>'publish', 'posts_per_page'=>-1, 'order'=>'DSC', 'category_name' => $product_category )); ?>
	 
	<?php if ( $wpb_all_query->have_posts() ) : ?>
	 
	 <div class="product-gallery">

		<ul class="product-list">

	    <!-- the loop -->
	    <?php $counter = 1; ?>
	  
	    <?php while ( $wpb_all_query->have_posts() ) : $wpb_all_query->the_post(); ?>

	    	<?php 

	    		$total_posts_count = $wpb_all_query->found_posts; 

	    			if( $counter == $total_posts_count && $counter %2 !=0 ) :
	    	?>

	    	<li class="product-last-post">
			
				<?php if ( has_post_thumbnail()) : the_post_thumbnail(); ?>

				<?php endif; ?>	
			
			<?php else: ?>
			
			<li class="product-<?php echo $counter;?>">

				<?php if ( has_post_thumbnail()) : the_post_thumbnail(); ?>

				<?php endif; ?>			
		           
		    <?php endif; ?>

	            <div class="product-info-container">

	                <h2 class="product-title"><?php the_title(); ?></h2>

					<?php 
					
						$remove_link = get_field( 'remove_link' );

					if($remove_link) : ?>

					<?php else: ?>

						<a class="btn-ghost product-btn" href="<?php the_permalink(); ?>">TAKE A LOOK</a>

					<?php endif;?>

	            </div>

	            <div class="product-overlay"></div>

	        </li>

			<?php $counter++; ?>

	    <?php endwhile; ?>
	    <!-- end of the loop -->
			
	   </ul>
					
	</div>
	 
	    <?php wp_reset_postdata(); ?>
	 
	<?php else : ?>

	    <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>

	<?php endif; ?>