<?php /* Template Name: Before-After */ ?>

<?php get_header(); ?>

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

									<!-- Decide whether or not to render link with gold text -->
									<?php if($counter > 2) : ?>
										
										<a href="<?php echo $ba_cta_button_link; ?>" class="cta-button btn-ghost office-number"><p class="office-contact"><?php echo $ba_cta_button_text; ?></p></a>

									<?php else : ?>

										<a href="<?php echo $ba_cta_button_link; ?>" class="cta-button btn-ghost"><?php echo $ba_cta_button_text; ?></a>

									<?php endif; ?>			
									
									<a href="<?php echo $ba_cta_button_link; ?>" class="cta-mobile-btn btn-ghost"><?php echo $ba_mobile_button_text; ?></a>

								</div>

								<?php $counter++; ?>

							<?php endwhile; ?>

				<?php endif; ?>	
			</section>
	</main>

<?php get_footer(); ?>