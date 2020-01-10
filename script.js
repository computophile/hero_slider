// hero-images links
hero_images = [
    'https://image.businessinsider.com/5d1087e2e3ecba059b6096c7?width=1100&format=jpeg&auto=webp',
    'https://image.businessinsider.com/5d922a0d2e22af22cb0c0235?width=1100&format=jpeg&auto=webp',
    'https://www.glaad.org/sites/default/files/styles/1200x630/public/images/2019-08/turing%202%20%281%29.png',
    'http://universeinsideyou.net/wp-content/uploads/2017/11/gqegqeqehqeh.jpg'
]

// hero-title contents
hero_titles = [
    'Bill Brilliant Gates',
    'Elon Great Musk',
    'Alan Legend Turing',
    'Nikola Generous Tesla'
]

// Hero - button contents
hero_buttons = [
    'About Bill',
    'About Elon',
    'About Alan',
    'About Tesla',
]

// all queries
hero_image_query = document.querySelector('.section-hero-div');
hero_title_query = document.getElementsByClassName('hero-title')[0];
hero_button_query = document.getElementsByClassName('hero-button')[0]
var interval = setInterval(show_hero,3000);
var current_hero = 0;
function  show_hero(){

         current_hero = (current_hero+1)%hero_images.length
         console.log(document.querySelector('#hero'));

        hero_image_query.style.backgroundImage = ' linear-gradient(to right, #56ab2f91, #a8e06391), url('+hero_images[current_hero]+')';
        hero_title_query.innerHTML = hero_titles[current_hero];
        hero_button_query.innerHTML = hero_buttons[current_hero];

        hero_image_query.animate([
            {transform:'translateX(.5rem)', opacity:0},
            {transform:'translateX(0)', opacity:1}
            ],
            {   
                duration: 300,
                easing: 'ease-in',
                fill: 'backwards'
            });

            hero_image_query.animate([
                {transform:'translateX(0rem)', opacity:1},
                {transform:'translateX(-.5rem)', opacity:0}
                ],
                {   
                    delay: 2700,
                    duration: 300,
                    easing: 'ease-out',
                });

}
// sorry couldn't comment as much but this code shouldn't be difficult to follow!
show_hero();