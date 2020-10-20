<?php if(get_row_layout() == 'testimonials_layout') : ?>
			
	<?php if( have_rows('individual_testimonials') ): ?>

		<?php while( have_rows('individual_testimonials') ): the_row(); 

			$testimonial_image = get_sub_field('testimonial_image');
			$testimonial_text = get_sub_field( 'testimonial_text' );

			?>
				<div class="<?php the_sub_field( 'image_position' ); ?>"><img src="<?php echo $testimonial_image['url']; ?>" alt="<?php echo $testimonial_image['alt'] ?>" /></div>
			
				<div class="testimonial-text centred-column <?php the_sub_field( 'text_position' ); ?>"><?php echo $testimonial_text; ?></div>
			
		<?php endwhile; ?>

	<?php endif; ?>
<?php endif; ?>