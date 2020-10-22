<?php get_header(); ?>
	
	<main class="main__single-news main">
	<!-- section -->
	<section>	

	<?php if (have_posts()): while (have_posts()) : the_post(); ?>

		<!-- article -->
		<article id="post-<?php the_ID(); ?>" class="single-news">


			<div class="news-body">

				<!-- cross button -->
				<div class="x centred">
					<a href="/news" class="news-back">
						<span></span>
						<span></span>
					</a>
				</div>	

				<!-- image slider -->
				<?php 
					$news_sliders = get_field('news_slider');
					if( $news_sliders ): 
						include('news-slider.php')
					?>
					
				<?php endif; ?>

				<!-- /image slider -->
		
				<!-- post title -->

				<div class="news-body-text">

					<h1><?php the_title(); ?></h1>

					<!-- /post title -->	

					<?php the_field( 'news_body_text' ); ?>

				</div>

				<?php
				$before_and_after = get_field( 'add_before_and_after' );
					if($before_and_after) :
						$div_id = 1; 
							echo '<section class="post-ba-image-comparison">';
							echo '<p class="post-ba-title">Please drag the arrows across the image to reveal the Before and After images</p>';
							//loop through the rows of data
							while(have_rows('post_before_and_after') ) : the_row();

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

			</div>

			<div class="news-image-grid">
				<?php $grid_images = get_field( 'grid_images' );  

				if($grid_images): 

					include('grid-images.php');

				endif; ?>
			</div>

		</article>
		<!-- /article -->

	<?php endwhile; ?>

	<?php else: ?>

		<!-- article -->
		<article>

			<h1><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h1>

		</article>
		<!-- /article -->

	<?php endif; ?>

	</section>
	<!-- /section -->
	</main>

<?php get_footer(); ?>