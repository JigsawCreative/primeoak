<?php /* Template Name: 404 Error */ ?>

	<?php get_header(); ?>

		<?php $bg_image = get_field( '404_bg_image' ); ?>
			<main class="main__404 main">
				<!-- section -->
					<section class="section-404" style="background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('/wp-content/uploads/annexe-outdoor.jpg') center/cover no-repeat;">
						<div class="container-404 centred">
							<div class="content-404 centred-column">
								<h1 class="title-404">Sorry we couldn't find that page, try one of the links below</h1>
								<div class="button-box">
									
									<a href="/" class="btn-dark btn-404">Home</a>
									<a class="btn-dark btn-404 product-404">Products</a>
									<a href="/request-a-brochure/" class="btn-dark btn-404">Brochure</a>
									<a href="/contact/" class="btn-dark btn-404">Contact</a>

								</div>
								
								<div class="tel-404">
									<h2>or call us on <a href="tel:-1384-296611">01384 296611</a></h2>
								</div>
							</div>
						</div>
					</section>
				<!-- /section -->
			</main>

<?php get_footer(); ?>