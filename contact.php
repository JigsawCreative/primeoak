<?php /* Template Name: Contact */ ?>
<header><?php get_header(); ?></header>

    <?php 
        
        $contact_mob_image = get_field('contact_us_image');
        $opp_image = get_field('opportunities_image');

        ?>

    <main class="main__contact main" role="main">
                    
        <div class="contact__mobile">
            <div class="contact-us mobile-btn" style="background: url('<?php echo $contact_mob_image; ?>') center/cover no-repeat;">
                <h2 class="mobile-titles">Contact Us</h2>
                <hr class="white-no-margin">
            </div>
            <div class="opportunities mobile-btn" style="background: url('<?php echo $opp_image; ?>') center/cover no-repeat;">
                <h2 class="mobile-titles">Opportunities</h2>
                <hr class="white-no-margin">
            </div>
        </div>     
        
        <div class="contact-col-1 cols">
            <div class="x centred">
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="contact-box">
                <h1 class="contact__title">GET IN TOUCH</h1>
                <div class="contact-details">

                <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=prime%20oak%20swindon&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    <div class="address">
                        <p>Prime Oak Ltd</p>
                        <p>Whitehouse Farm,</p>
                        <p>Whitehouse Lane,</p>
                        <p>Swindon,</p>
                        <p>South Staffordshire,</p>
                        <p>DY3 4PE</p>
                        <hr>
                    </div>    
                        
                    <div class="hours">
                        <p>Office opening hours are 8am – 5:30pm Monday to Friday.</p>

                        <p>Should you need to call out of hours, please leave a message with our answering service.</p>
                    </div>
                    
                    <div class="tel">
                        <p>Tel: <a href="tel:+44 1384 296 611">+44 1384 296 611</a></p>
                        <p>Fax: +44 1384 273 118</p> 
                        <p>Email: <a href="mailto:info@primeoak.co.uk">info@primeoak.co.uk</a></p>
                    </div>
                </div>     
            </div>
        </div>    
          
        <div id="opp_image" style="background: url('<?php echo $opp_image; ?> ') center/cover;" class="contact-col-2 cols">
            
            <div class="x centred">
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="opps-titles">
                <h1>OPPORTUNITIES</h1>
                <hr class="h2hr">
            </div>
            <div class="opps-container">
                <h3>If you are interested in working for Prime Oak please email your CV or contact details to:</h3>
                <h3><b><a href="mailto:recruitment@primeoak.co.uk">recruitment@primeoak.co.uk</a></b></h3>
                <hr>
                
                <h3>We are currently hiring Site Carpenters and Designers across the country and have one position available at our head office for a CAD Technician and one position becoming available over the next few months for an Administrator. Please send in your CV and cover letter to apply for any of the above positions.</h3>
                <hr>

                <h3>for more information regarding the vacancies please email: <b><a href="mailto:recruitment@primeoak.co.uk​">recruitment@primeoak.co.uk​</a></b></h3>
            </div>  
            <div class="social-icons">
                <ul class="icon-list">
                    <li class="social"><a href="https://www.facebook.com/PrimeOak" class="fb"><img src="/wp-content/uploads/facebook.svg"></a></li>
                    <li class="social"><a href="https://twitter.com/PrimeOakUK" class="twitter"><img src="/wp-content/uploads/twitter.svg"></a></li>
                    <li class="social"><a href="https://www.pinterest.co.uk/primeoak/" class="pinterest"><img src="/wp-content/uploads/pinterest.svg"></a></li>
                    <li class="social"><a href="https://www.houzz.co.uk/professionals/design-and-build/prime-oak-ltd-pfvwgb-pf~1133562070" class="houzz"><img src="/wp-content/uploads/houzz.svg"></a></li>
                </ul>
            </div>  
        </div>   
    </main>

<footer><?php get_footer(); ?></footer>