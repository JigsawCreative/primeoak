<?php /* Template Name: Showsite */ ?>
<?php get_header(); ?>

	<main class="__showsite main">
						
		<div class="showsite-text">
			<div class="showsite"><?php the_field( 'showsite_text' ); ?></div>
			<div class="viewing-times-container">
				<div class="viewing-times"><?php the_field( 'viewing_times' ); ?></div>
			</div>
		</div>
		<?php
			//$swindon_showsite = get_field( 'swindon_showsite' );
			$high_beeches_site = get_field( 'high_beeches_site' );
		?>
		<div id="swindon-showsite" class="showsite-image">
			<video width="100%" height="100%" poster="/wp-content/uploads/showsite.jpg" controls="show" class="showsite-video">
				<source src="/wp-content/uploads/primeoak.webm" type="video/webm ">
				<source src="/wp-content/uploads/primeoak.mp4" type="video/mp4">
				Your browser does not support the video tag.
			</video>
		</div>

		<div id="swindon-showsite-text" class="showsite-products">
			<?= the_field( 'swindon_showsite_text' ); ?>
		</div>

		<div id="high-beeches-showsite-text" class="showsite-products">
			<?= the_field( 'high_beeches_site_text' ); ?>
		</div>
		
		<div id="high-beeches-showsite" class="showsite-image">
			<img src="<?=$high_beeches_site['url']; ?>" alt="<?=$high_beeches_site['alt']; ?>">
		</div>
		<div class="showsite-drone-video centred">
			<div class="drone-video-inner">
				<iframe width="100%" height="100%" src="https://www.youtube.com/embed/wc7GVnFv1x0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>	
	</main>

<?php get_footer(); ?>