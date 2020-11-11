<?php /* Template Name: Forms */ ?>
<?php get_header(); ?>
	<?php $form_header = get_field( 'form_header' ); 

	?>
	<main class="main__form main">
		
		<section class="form-header" style="background: url(<?php echo $form_header['url']; ?>) center/cover no-repeat;">
			<div class="form-header-container">
				<div class="forms-title-box">
					<h1><?php the_title(); ?></h1>	
				</div>
			</div>
		</section>

	<!-- Pull in specific contact page designs -->
	<?php if( is_page('request-a-brochure') ) : 

		$gravity_form_brochure = get_field( 'gravity_form_brochure' );
		
		?>
		
			<section class="brochure-form">
				<div class="form-details">
					<?php echo do_shortcode( $gravity_form_brochure ); ?>
				</div>
			</section>
		
	<?php get_footer(); ?>

	<?php elseif( is_page('design-consultation') ) : 
		$gravity_form_consulation = get_field( 'gravity_form_consulation' );

		?>
		<section class="design-consultation">
			<div class="form-details">
				<?php echo do_shortcode( $gravity_form_consulation ); ?>
			</div>
		</section>

	<?php elseif( is_page('thank-you') ) : ?>

		<section class="thank-you">
			<div class="thank-you-container">
				<?php the_field( 'thank_you_text' ); ?>
			</div>
		</section>
		
	<?php else : ?>

		<main role="main">
			<!-- section -->
			<section>

				<h1><?php _e( 'Latest Posts', 'html5blank' ); ?></h1>

				<?php get_template_part('loop'); ?>

				<?php get_template_part('pagination'); ?>

			</section>
			<!-- /section -->
			
		<?php endif; ?>

	</main>	

	<?php get_footer(); ?>