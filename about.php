<?php /* Template Name: About */ ?>

<?php 
    
    $left_side_img = get_field('left_side_img');
    $showsite_img = get_field('showsite_img');
    $middle_img = get_field('middle_img');
    $annexe_img = get_field('annexe_img');

?>

<?php get_header(); ?>

	<main class="main__about main" role="main">

            <!-- Load Flexible Content Templates -->
	        <?php get_template_part( 'template-parts/flexible-content/flexible-content', get_post_type() ); ?>
	        <!-- Page images -->
	        <div id="about-left" style="background: url('<?php echo $left_side_img; ?>') center/cover no-repeat;"></div>
	        <div id="showsite-img" style="background: url('<?php echo $showsite_img; ?>') center/cover no-repeat;"></div>
	        <div id="middle_img" style="background: url('<?php echo $middle_img; ?>') center/cover no-repeat;"></div>
	        <div id="annexe_img" style="background: url('<?php echo $annexe_img; ?>') center/cover no-repeat;"></div>
	        
	        <!-- Page text areas -->
	        <div id="history" class="text-area">
	        	<div class="text-area-container">
	        		<?php the_field('history_text'); ?>
	        	</div>
	        </div>
	        <div id="quality" class="text-area">
	        	<div class="text-area-container">
	        		<?php the_field('quality_text'); ?>		
	        	</div>
	        </div>
	        <div id="recognition" class="text-area">
				<div class="text-area-container">
					<?php the_field('recognition_text'); ?>		
				</div>
	        </div>
	</main>

<?php get_footer(); ?>