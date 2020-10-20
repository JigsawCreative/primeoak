<div class="image_grid_area">
    
        <ul class="image_grid unstyled-list">
            <?php foreach( $grid_images as $grid_image ): ?>
                <li>
                    <img src="<?=$grid_image['url']?>" alt="<?=$grid_image['alt']; ?>">
                </li>
            <?php endforeach; ?>
        </ul> 
</div>