<?php get_header(); ?>

	<?php if(is_front_page()) : 
		$video_logo = get_field( 'video_logo' );
		$home_slides = get_field( 'home_slides' );
		$label_image = get_field( 'label_image' );
		?>

		<div class="video-title">

			<?php the_field( 'video_title' ); ?>

		</div>
	
			<video id="video-container" autoplay="">

				<source src="<?php the_field( 'mp4_video' ); ?>">

				<source src="<?php the_field( 'webm_video' ); ?>">

			</video>
						
			<div class="video-titles centred-column">

			<img class="prime-oak-logo no-lazyload" src="<?php echo $video_logo['url']; ?>" alt="Prime Oak Logo">

			</div>
				
	<main class="main__page" role="main">

		<div class="flexslider carousel">

			<ul id="home_slides" class="slides">

				<?php foreach( $home_slides as $home_slide ): ?>

					<li class="slide-wrapper">

						<img class="front-page" src="<?php echo $home_slide['url']; ?>" alt="<?php echo $home_slide['alt']; ?>">

						<div class="slide-content">

							<h1 class="slide-title slide-in"><?php echo $home_slide['caption']; ?></h1>

							<div class="name-wrapper">
								
								<h2 class="product-name slide-up"><?php echo $home_slide['alt']; ?></h2>
							
							</div>
						
						</div>
					
					</li>

				<?php endforeach ?>    
			</ul>    
			
		</div>
			<img class="twenty-year-logo" src="<?php echo $label_image['url']; ?>"  alt="<?php echo $label_image['alt']; ?>"/>
	</main>		
		
		<?php else: ?>

	<main class="main__page" role="main">

        <content>
            
            <!-- Load Flexible Content Templates -->
	        <?php get_template_part( 'template-parts/flexible-content/flexible-content', get_post_type() ); ?>
                       
        </content>

	</main>

<?php endif; ?>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>

<?php get_footer(); ?>