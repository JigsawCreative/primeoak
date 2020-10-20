<?php /* Template Name: Product Slider */ ?>

	<?php
			//get url for slider back button
		    $go_back = htmlspecialchars($_SERVER['HTTP_REFERER']);
		?>

		<?php 
			$product_sliders = get_field('product_sliders');
			if( $product_sliders ): ?>
			    <div class="product-slider">
			    	<div class="x centred">
						<a href="<?php echo $go_back; ?>" class="back-btn">
							<!-- <span></span>
							<span></span> -->
							<p><b>BACK</b></p>
						</a>
					</div>
			        <ul class="slides product-slides">
			            <?php foreach( $product_sliders as $product_slider ): ?>
			                <!-- <li style="background: url(<?php echo esc_url($product_slider['url']); ?>) center/cover no-repeat;" alt="<?php echo esc_attr($product_slider['alt']); ?>">				                    
							</li> -->
							
							<li> <img src="<?php echo esc_url($product_slider['url']); ?>" alt="<?php echo esc_attr($product_slider['alt']); ?>">				                    
			                </li>
			            <?php endforeach; ?>
					</ul>

					<!-- Arrow navigation -->
					<div class="custom-navigation">
					  <a href="#" class="flex-prev">
					  	<img src="/wp-content/uploads/prev.png" alt="">
					  </a>
					  <a href="#" class="flex-next">
						<img src="/wp-content/uploads/next.png" alt="">
					  </a>
					</div>
				</div>
				
				<!-- Load cta section -->
				<?php get_template_part( 'cta', get_post_type() ); ?>

			<?php endif; ?>