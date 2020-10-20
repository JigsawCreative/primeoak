<?php /* Template Name: Testimonials */ ?>

<!DOCTYPE html>

<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Client Testimonials | Prime Oak Buildings</title>
</head>

<header><?php get_header(); ?></header>	

<body>
	<main class="main__testimonials main" role="main">

	<!-- Load Flexible Content Templates -->
	<?php get_template_part( 'template-parts/flexible-content/testimonials', get_post_type() ); ?>

	</main>
</body>

<footer><?php get_footer(); ?></footer>

</html>



	

