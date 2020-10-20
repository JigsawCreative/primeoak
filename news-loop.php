<?php if (have_posts()): while (have_posts()) : the_post(); ?>
	<!-- set background image -->
	<?php $backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' ); ?>

	<!-- article -->
	
		<article style="background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(<?php echo $backgroundImg[0]; ?>) center/cover no-repeat;" id="post-<?php the_ID(); ?>" class="news">
			<div class="article-container">
				<a class="news-links" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
					<!-- post title -->
					<h1>
						<?php the_title(); ?>
					</h1>
				</a>
					<!-- /post title -->
					<!-- Read More Button -->
				<a class="news-links" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
					<button class="read-more btn btn-ghost">Read More</button>
				</a>	
					<!-- /Read More Button -->
			</div>		
				
					<?php html5wp_excerpt('html5wp_index'); // Build your custom callback length in functions.php ?>

					<?php edit_post_link(); ?>
		</article>
	
	<!-- /article -->

<?php endwhile; ?>

<?php else: ?>

	<!-- article -->
	<article>
		<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
	</article>
	<!-- /article -->

<?php endif; ?>