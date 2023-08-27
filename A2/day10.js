let galleryItems = [

    {
        id: "pencil",
        singularImage_: "images/pencil.png",
        plural_Image: "images/pencils.png",
        singular_title: "PENCIL",
        plural_title: "PENCILS"
    },
    {
        id: "apple",
        singularImage_: "images/apple.png",
        plural_Image: "images/apples.png",
        singular_title: "APPLE",
        plural_title: "APPLES"
    },
    {
        id: "butterfly",
        singularImage_: "images/butterfly.png",
        plural_Image: "images/Butterflies.png",
        singular_title: "BUTTERFLY",
        plural_title: "BUTTERFLIES"
    },
    {
        id: "ball",
        singularImage_: "images/ball.png",
        plural_Image: "images/balls.png",
        singular_title: "BALL",
        plural_title: "BALLS"
    },
    {
        id: "doll",
        singularImage_: "images/doll.png",
        plural_Image: "images/dolls.png",
        singular_title: "DOLL",
        plural_title: "DOLLS"
    },
    {
        id: "balloon",
        singularImage_: "images/balloon.png",
        plural_Image: "images/balloons.png",
        singular_title: "BALLOON",
        plural_title: "BALLOONS"
    },
    {
        id: "ice-cream",
        singularImage_: "images/ice-cream.png",
        plural_Image: "images/ice-creams.png",
        singular_title: "ICE-CREAM",
        plural_title: "ICE-CREAMS"
    },
    {
        id: "book",
        singularImage_: "images/book.png",
        plural_Image: "images/books.png",
        singular_title: "BOOK",
        plural_title: "BOOKS"
    },
    {
        id: "clock",
        singularImage_: "images/clock.png",
        plural_Image: "images/clocks.png",
        singular_title: "CLOCK",
        plural_title: "CLOCKS"
    },
    {
        id: "toy",
        singularImage_: "images/toy.png",
        plural_Image: "images/toys.png",
        singular_title: "TOY",
        plural_title: "TOYS"
    }

];

let gallery = document.getElementById("mainarea");

let generateGallery = () => {
    return (gallery.innerHTML = galleryItems.map((x) => {
        let { id, singularImage_, plural_Image, singular_title, plural_title } = x;
        return `
        <div class="bigbox" id=${id}">
            <div class="imgbox">
                <div class="leftbox">
                    <img class="leftimg" src=${singularImage_}>
                </div>
                <div class="rightbox">
                    <img class="rightimg" src=${plural_Image}>
                </div>
            </div>
            
            <div class="bottombox">
                <div class="botright">${singular_title}</div>
                <div class="botleft">${plural_title}</div>
            </div>
        </div>
        `
    })
        .join(""));

};

generateGallery()
