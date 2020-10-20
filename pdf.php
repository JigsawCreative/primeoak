<?php $fileUrl = get_field( 'designer_file_url' ); ?>

<div class="pdf-container">

    <div class="pdf-button-container centred-column">
        <!-- Desktop buttons -->
        <a href="/designers/designer-files/pdf/" class="btn-light pdf-btn">Go Back</a>
        <a download href="<?=$fileUrl['url']; ?>" class="btn-light pdf-btn">Download file</a>
    </div>

    <!-- Mobile buttons -->
    <div class="x-file">
        <a href="/file/pdf">
            <span></span>
            <span></span>
        </a>
    </div>
    <a download href="<?=$fileUrl['url']; ?>" class="btn-dark mobile-download">Download file</a>

    <!-- Pull in PDF file from post main content area -->
    <?php the_content(); ?>

</div>