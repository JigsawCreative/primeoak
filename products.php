<?php /* Template Name: Products */ ?>
<?php get_header(); ?>
	<?php 
		$product_body_text = get_field( 'product_body_text' );
		$product_type = get_field( 'product_type' );
	?>	

	<?php if($product_type === 'multi-product') : ?>

		<main class="main__product multi-product main">

			<!-- Load cta section -->
			<?php get_template_part( 'cta', get_post_type() ); ?>

			<!-- Load product page header -->
			<?php get_template_part( 'product-page-header', get_post_type() ); ?>

			<!-- check url to see if image-loop or project loop template is needed -->
			<?php 
				
				$rawName = $_SERVER['REQUEST_URI']; 
				$trimmedName = trim( $rawName, '/' );
				
				if($trimmedName == 'products/special-projects' || $trimmedName == 'products/showsites') :
					
					get_template_part( 'image-loop', get_post_type()); 
				
				else: 

					get_template_part( 'projects-loop', get_post_type());
					
				endif;

			?>	

		</main>


	<?php elseif($product_type === 'single-product') : ?>

		<main class="main__product single-product main">

			<!-- Load cta section -->
			<?php get_template_part( 'cta', get_post_type() ); ?>

			<?php
				//grab single product image
				$single_product_header = get_field( 'single_product_header' );
			?>

				<div class="single-product__image" style="background: url(<?php echo esc_url($single_product_header['url']); ?>) center/cover no-repeat;" alt="<?php echo esc_attr($single_product_header['alt']); ?>">
				</div>

				<div class="single-product__body-text boxed-content">

					<h1 class="single-product__title"><?php the_title(); ?></h1>
					
					<?php echo $product_body_text; ?>
				
				</div>

				<?php 
			
					$single_product_sliders = get_field('single_product_sliders');
					if( $single_product_sliders ): ?>
						
						<div class="single-product__slider">
							
							<ul class="slides product-slides">

								<?php foreach( $single_product_sliders as $single_product_slider ): ?>
									
									<li>

										<img src="<?php echo esc_url($single_product_slider['url']); ?>" alt="<?php echo esc_attr($single_product_slider['alt']); ?>">				                    

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

				<?php endif; ?>
		
		</main>
	
	<?php endif; ?>

<?php get_footer(); ?>