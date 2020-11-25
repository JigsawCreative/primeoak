<?php get_header(); ?>
	
	<?php 
		$page_url = $_SERVER['REQUEST_URI'];
			//get url for slider back button
			$go_back = htmlspecialchars($_SERVER['HTTP_REFERER']);
			$fi_type = get_field( 'fi_type' );
	?>	
<?php if($fi_type) : ?>

	<main class="main__single-project main">

		<!-- Load cta section -->
		<?php get_template_part( 'cta', get_post_type() ); ?>

				<div class="image_grid_area">
					<div class="back-btn">
						<a href="<?php echo $go_back; ?>" class="back-btn">
							<p><b>BACK</b></p>
						</a>
					</div>
					<?php 
						$fi_images = get_field( 'fi_images' );
						if( $fi_images ): ?>
						    <ul class="image_grid unstyled-list">
						        <?php foreach( $fi_images as $fi_image ): ?>
						            <li>
										<img src="<?=$fi_image['url']; ?>" alt="<?=$fi_image['alt']; ?>">
						            </li>
						        <?php endforeach; ?>
						    </ul>
					<?php endif; ?>
				</div>
			
			<?php else: ?>

	<main class="main__single-project main full-height">
		
		<!-- Load project slider -->
		<?php get_template_part( 'product-slider', get_post_type() ); ?>
		
		<?php endif; ?>

	</main>

<?php get_footer(); ?>