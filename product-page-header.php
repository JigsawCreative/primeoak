<?php /* Template Name: Product Page Header */ ?>
		<?php
			//grab featured image
			$product_header_img = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), "full" )[0];
		?>
		    <section class="product-header" style="background: url(<?php echo $product_header_img; ?>) center/cover no-repeat;">
		        <!-- <div class="container ba-top-container"> -->
		        	<div class="title-box centred-column fh">
		       			<h1 class="image-title"><?php the_title(); ?></h1>
		        		<hr> 		
		        	</div>
		        <!-- </div> -->
		    </section>  