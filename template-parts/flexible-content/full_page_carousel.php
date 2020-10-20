<?php if( get_row_layout() == 'full_page_carousel' ) : 
    $full_page_slides = get_sub_field('full_page_slides'); 
?>
        <section class="flexslider carousel">
            <ul class="slides">
                <?php foreach( $full_page_slides as $full_page_slide ): ?>
                    <li class="slide-wrapper">
                      <img src="<?php echo $full_page_slide['url']; ?>" />
                       <div class="slide-content">
                            <h1 class="slide-title slide-in"><?php echo $full_page_slide['caption']; ?></h1>
                           <div class="name-wrapper"><h2 class="product-name slide-up"><?php echo $full_page_slide['alt']; ?></h2></div>
                       </div>
                    </li>
                <?php endforeach ?>    
            </ul>            
        </section>
<?php endif; ?>