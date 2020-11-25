<?php /* Template Name: About Us */ ?>

<?php get_header(); 

$about_us_image = get_field( 'about_us_image' );

?>

<main class="about-us main">
    
    <article class="about-us__article">
            
        <div class="about-us__image">

            <div class="about-us__image-overlay"></div>
            <img src="<?=$about_us_image['url']; ?>" alt="<?=$about_us_image['alt']; ?>">
        
        </div>

        <div class="about-us__text"><?php the_field( 'about_us_text' ); ?></div>

    </article>

</main>

<?php get_footer(); ?>