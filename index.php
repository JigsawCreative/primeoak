<?php get_header(); ?>

	<!-- Pull in custom news article design -->
	<?php if( is_home() ) : ?>
		<main class="main__news main">
		
			<?php get_template_part('news-loop'); ?>
		
		</main>
	<?php get_footer(); ?>
	<?php else : ?>

		<main role="main">
			<!-- section -->
			<section>

				<h1><?php _e( 'Latest Posts', 'html5blank' ); ?></h1>

				<?php get_template_part('loop'); ?>

				<?php get_template_part('pagination'); ?>

			</section>
			<!-- /section -->
		</main>

	<?php get_sidebar(); ?>

	<?php get_footer(); ?>
<?php endif; ?>