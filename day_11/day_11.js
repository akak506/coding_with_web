let galleryItems = [
    {
        Vacation_name: "Italian Architectural Escapade",
        Days: 10,
        Type: "Artistic",
        Description: "Architectural Odyssey: Italy's Masterpieces Await. Explore Rome's ancient wonders, Florence's Renaissance gems, Venice's enchanting canals, and Milan's modern marvels. Ideal weather and fewer crowds in spring and early autumn. Your Italian adventure begins now!",
        who: "18+",
        place: "Italy",
        season: "September",
        images: "images_day_11/architecture.jpg"
    },
    {
        Vacation_name: "Adventure Unleashed: Italy Awaits",
        Days: 11,
        Type: "Adventure",
        Description: "Adventure Unleashed: Italy Awaits. Embark on an Italian journey filled with thrilling experiences. From hiking in the Dolomites to exploring coastal caves in Cinque Terre, Italy offers adventure at every turn. Discover hidden treasures, savor local cuisine, and create lasting memories. Get ready to seize the thrill of Italy!",
        who: "16+",
        place: "Italy",
        season: "April",
        images: "images_day_11/camping.jpg"
    },
    {
        Vacation_name: "Taste of Italy: A Culinary Journey",
        Days: 10,
        Type: "Culinary",
        Description: "Indulge in the flavors of Italy on a culinary journey that takes you from the bustling markets of Rome to the charming canals of Venice. Learn to cook traditional dishes, savor regional specialties, and immerse yourself in Italy's rich gastronomic culture. With the best of Italian cuisine at your fingertips and the beauty of Italy as your backdrop, \"Taste of Italy: A Culinary Journey\" promises a savory and unforgettable adventure.",
        who: "13+",
        place: "Italy",
        season: "May",
        images: "images_day_11/food.jpg"
    },
    {
        Vacation_name: "Italian Family Adventure: Bonds and Memories",
        Days: 10,
        Type: "Family",
        Description: "Create unforgettable family moments with the 'Italian Family Adventure.' Explore ancient wonders, taste delicious gelato, and bask on family-friendly beaches. Italy's rich history and warm hospitality await, ensuring lasting bonds and cherished memories for all ages.",
        who: "All ages",
        place: "Italy",
        season: "April",
        images: "images_day_11/family.jpg"
    },
    {
        Vacation_name: "Amore in Italia: A Romantic Honeymoon Journey",
        Days: 6,
        Type: "Romantic",
        Description: "Amore in Italia: A Romantic Honeymoon Journey\" is the epitome of romance and passion, carefully crafted for newlyweds. Italy's timeless allure, from the romantic canals of Venice to the picturesque Amalfi Coast and the eternal charm of Rome, sets the stage for your love story. Embark on this unforgettable adventure together, creating memories that will last a lifetime and celebrating your love in the most enchanting way possible.",
        who: "Couples",
        place: "Bali",
        season: "All year",
        images: "images_day_11/romance.jpg"
    }
]

let gallery = document.getElementById("vacations");

let generateGallery = () => {
    return (gallery.innerHTML = galleryItems.map((x) => {
        let { images, Vacation_name, Description } = x;
        return `
        <div class="video-container" id=${x.Vacation_name}>

        <img src=${x.images} alt="Description of the image" id="image">
        <div class="empty"></div>
        <div class="overlay">
            <h1>${x.Vacation_name}</h1>
            <h4>${x.Description}</h4>

            <button type="button" class="FB-btn">Book Now</button>
        </div>
        <div id="ww_01667c8e54329" v='1.3' loc='id'
            a='{"t":"responsive","lang":"en","sl_lpl":1,"ids":["wl3067"],"font":"Times","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#000000","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","cl_odd":"#FFFFFF17","sl_tof":"3"}'>
            Weather Data Source: <a href="https://wetterlang.de/wetter_14_tage/" id="ww_01667c8e54329_u"
                target="_blank">14 tage wettervorhersage</a></div>
        <script async src="https://app2.weatherwidget.org/js/?id=ww_01667c8e54329"></script>
    </div>

        `
    })
        .join(""));

};

generateGallery()
