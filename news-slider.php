<div id="slider" class="news-slider">

    <ul id="news_slides" class="slides">

        <?php foreach( $news_sliders as $news_slider ): ?>
            
            <li>
                <img src="<?=$news_slider['url']; ?>" alt="<?=$news_slider['alt']; ?>" />
            </li>
            
        <?php endforeach; ?>
    </ul>
        <!-- Arrow navigation -->
        <div class="custom-navigation">
            <a href="#" class="flex-prev">
            <img src="/wp-content/uploads/prev.png" alt="">
            </a>
            <a href="#" class="flex-next">
            <img src="/wp-content/uploads/next.png" alt="">
            </a>
        </div>
</div>