<?php /* Template Name: Products */ ?>
<?php get_header(); ?>
	<?php 
		$product_body_text = get_field( 'product_body_text' );
	?>	

	<main class="main__product main">

		<!-- Load product page header -->
		<?php get_template_part( 'product-page-header', get_post_type() ); ?>

		<!-- Load cta section -->
		<?php get_template_part( 'cta', get_post_type() ); ?>
	
		<div class="product-body-text boxed-content"><?php echo $product_body_text; ?></div>
		
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

<?php get_footer(); ?>