<?php /* Template Name: Services */ ?>

<header><?php get_header(); ?></header>

	<main class="main__services main" role="main">

		<?php 
			$fullwidth_image_top = get_field( 'fw_image_top' ); 
			$middle_image_before = get_field( 'middle_image_before' );
			$middle_image_after = get_field( 'middle_image_after' );
		?>

		    <section class="fullwidth-image-top centred" style="background: url(<?php echo $fullwidth_image_top['url']; ?>) center/cover no-repeat">
		        <div class="container top-container">
		            <div class="image_text_top centred">
		                <h1 class="title"><?php echo $fullwidth_image_top['caption']; ?></h1>
						<h3 class="subtitle"><?php echo $fullwidth_image_top['description']; ?></h3>
						
						<div class="arrow-container">
							<div class="arrow-box">
								<a href="#text-column-1">
									<span class="arrow"></span>
								</a>
							</div>
		        		</div>
		            </div>        
		        </div>
		    </section>  

		   		<!-- top text columns -->
	    		<?php if( have_rows('text_columns_top') ): 
	    			$counter = 1;

	    			?>

					<?php while( have_rows('text_columns_top') ): the_row(); 

							$content = get_sub_field('text_area_top'); ?>

							<?php if($counter === 1) {
								$div_id = 'text-column-1';
							} else {
								$div_id = '';
							} ?>

							<div id="<?php echo $div_id; ?>" class="text-column text-column-top-<?php echo $counter; ?>">
								
								<?php echo $content; 
									  $counter++;
								?>

							</div>
							
						<?php endwhile; ?>
					
				<?php endif; ?>
		        
		            <div class="image_text image_text_desktop">
		            	
		                <img id="middle-img" class="after" src="<?= $middle_image_after['url']; ?>" alt="">
						<h2 class="vision-caption"><?= $middle_image_after['caption']; ?></h2>
						<img class="before" src="<?= $middle_image_before['url']; ?>" alt="">
		            </div>
		            <div class="image_text image_text_mobile" style="background: url('<?= $middle_image_after['url']; ?>') center/cover no-repeat;">
		            	
		            
		            </div>
		        
	
				<!--  middle text columns -->
				<?php if( have_rows('text_columns_middle') ): 
		    			$counter = 1;

		    			?>

						<?php while( have_rows('text_columns_middle') ): the_row(); 

								$content = get_sub_field('text_area_middle'); ?>

								<div class="text-column text-column-middle-<?php echo $counter; ?>">

									<?php echo $content; 
										  $counter++;
									?>

								</div>
								
							<?php endwhile; ?>

				<?php endif; ?>	

				<!--  bottom text columns -->
				<?php if( have_rows('text_columns_bottom') ): 
		    			$counter = 1;

		    			?>

						<?php while( have_rows('text_columns_bottom') ): the_row(); 

								$content = get_sub_field('text_area_bottom'); ?>

								<div class="text-column text-column-bottom-<?php echo $counter; ?>">

									<?php echo $content; 
										  $counter++;
									?>

								</div>
								
							<?php endwhile; ?>

				<?php endif; ?>	

				<section class="image-comparison">
					<div class="townsend-images">
						
						<?php if( have_rows('image_comparison') ): ?>

							<?php while( have_rows('image_comparison') ): the_row(); 

								$image_to_compare = get_sub_field('image_to_compare');

								?>
									<div class="townsend-image"><img src="<?php echo $image_to_compare['url']; ?>" alt="<?php echo $image_to_compare['alt'] ?>" /></div>

							<?php endwhile; ?>

						<?php endif; ?>
					</div>
				</section>

				<!--  cta section -->
				<?php include('cta.php'); ?>
	</main>

<footer><?php get_footer(); ?></footer>