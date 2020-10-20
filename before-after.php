<?php /* Template Name: Before-After */ ?>

<header><?php get_header(); ?></header>

	<main class="main__ba main" role="main">
			<!-- Load Before and Afters -->
            <?php get_template_part( 'template-parts/flexible-content/before-and-after', get_post_type() ); ?>

		<?php 
			$ba_image_header = get_field( 'ba_image_header' ); 			
		?>

		    <section class="ba-image-header" style="background: url(<?php echo $ba_image_header['url']; ?>) center/cover no-repeat;">
	 
		        <div class="container ba-top-container">
		        	<div class="ba-title-box centred-column">
		       			<h1 class="ba-image-title"><?php the_field( 'ba_image_title' ); ?></h1>
		        		<hr> 		
		        	</div>
		            
		        </div>
		    </section>  

			<section class="ba_cta_section">
				<!--  cta section -->
				<?php if( have_rows('ba_call_to_action') ): 
		    			$counter = 1;

		    			?>

						<?php while( have_rows('ba_call_to_action') ): the_row(); 

								$ba_cta_title = get_sub_field('ba_cta_title'); 
								$ba_mobile_button_text = get_sub_field( 'ba_mobile_button_text' );
								$ba_cta_button_text = get_sub_field( 'ba_cta_button_text' );
								$ba_cta_button_link = get_sub_field( 'ba_cta_button_link' );

								?>

								<div id="ba_cta-<?php echo $counter; ?>" class="call-to-action">
									<p class="ba-cta-title"><?php echo $ba_cta_title; ?></p>
									<a href="<?php echo $ba_cta_button_link; ?>" class="cta-button btn-ghost"><?php echo $ba_cta_button_text; ?></a>
									<a href="<?php echo $ba_cta_button_link; ?>" class="cta-mobile-btn btn-ghost"><?php echo $ba_mobile_button_text; ?></a>
								</div>
								<?php $counter++; ?>
							<?php endwhile; ?>

				<?php endif; ?>	
			</section>
	<!-- Image Comparison JS -->			
	<!-- <script src="/wp-content/themes/prime-oak/src/js/jquery.twentytwenty.min.js"></script>
	<script src="/wp-content/themes/prime-oak/src/js/jquery.event.move.min.js"></script> -->
	</main>

<footer><?php get_footer(); ?></footer>