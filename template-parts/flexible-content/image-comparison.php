<?php if(get_row_layout() == 'image_comparison_module') : ?>

				<div class="project-title"><p><?php the_sub_field( 'project_title' ); ?></p></div>
				<div class="ba_images_to_compare twentytwenty-container">
					
					<?php if( have_rows('image_comparison') ): ?>

						<?php while( have_rows('image_comparison') ): the_row(); 

							$images_to_compare = get_sub_field('images_to_compare');

							?>
								<img src="<?php echo $images_to_compare['url']; ?>" alt="<?php echo $images_to_compare['alt'] ?>" />

						<?php endwhile; ?>

					<?php endif; ?>
				</div>
<?php endif; ?>