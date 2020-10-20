<?php /** Template Name: Image Loop **/ ?>

<div class="product-gallery">
	<?php 
		$image_loop_images = get_field('image_loop_gallery');
		if( $image_loop_images ): ?>
		    <ul class="product-list unstyled-list">
		        <?php foreach( $image_loop_images as $image_loop_image ): ?>
		            <li>
		                     <img src="<?php echo esc_url($image_loop_image['sizes']['large']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />	         
		            </li>
		        <?php endforeach; ?>
		    </ul>
	<?php endif; ?>
</div>