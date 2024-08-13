// ----------------------------------------------REFRESH ON RESIZE CODE---------------------------------------------------

var widthValue;

window.onload = function()
{
    widthValue = window.innerWidth;
}

window.onresize = function(event)
{
    if( widthValue != window.innerWidth )
        {
            document.location.reload(true);
            widthValue = window.innerWidth;
        }  
}


// ----------------------------------------------TOGGLE NAVBAR CODE---------------------------------------------------


if(document.documentElement.clientWidth < 1007)
{
    function toggle()
    {
        document.getElementById('toggle').style.display = "none";
        document.getElementById('close').style.display = "block";
        document.getElementById('menu').style.display = "block";
    }

    function close1()
    {
        document.getElementById('menu').style.display = "none";
        document.getElementById('close').style.display = "none";
        document.getElementById('toggle').style.display = "block";
    }
}



// ----------------------------------------------PROJECT CONTENT CODE---------------------------------------------------


function readmore(project)
{
    if(project == 1)
        {
            document.getElementById('more1').style.display = "inline";
            document.getElementById('readmore1').style.display = "none";
        }
    if(project == 2)
        {
            document.getElementById('more2').style.display = "inline";
            document.getElementById('readmore2').style.display = "none";
        }
    if(project == 3)
        {
            document.getElementById('more3').style.display = "inline";
            document.getElementById('readmore3').style.display = "none";
        }
}

function readless(project)
{
    if(project == 1)
        {
            document.getElementById('more1').style.display = "none";
            document.getElementById('readmore1').style.display = "inline";
        }
    if(project == 2)
        {
            document.getElementById('more2').style.display = "none";
            document.getElementById('readmore2').style.display = "inline";
        }
    if(project == 3)
        {
            document.getElementById('more3').style.display = "none";
            document.getElementById('readmore3').style.display = "inline";
        }
}


// ----------------------------------------------SCROLL SECTION ACTIVE CODE---------------------------------------------------


const sections = document.querySelectorAll('.scroll-active');
const navlinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () =>{

    let current = '';
    sections.forEach( sec => {
        const sectionTop = sec.offsetTop - 550;
        const sectionHeight = sec.clientHeight;

        if(pageYOffset >= (sectionTop))
            {
                current = sec.getAttribute('id');
            }
    });
    
    navlinks.forEach( li => {

        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }

    });
});



// ----------------------------------------------SCROLL REVEAL CODE---------------------------------------------------


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 100,

});

ScrollReveal().reveal('.details h3, .details ol li, .intro, .projects .box, .logo, .education .box, .card, .contact button', { origin: 'left' });
ScrollReveal().reveal('.title .title-fade, .title2, .details .resume, .education h3, .details p', { origin: 'right' });
ScrollReveal().reveal('.title .title1', {distance: '150px', origin: 'right' });
ScrollReveal().reveal('.image, .up, .artwork', { origin: 'top' });


// ----------------------------------------------TYPED JS CODE---------------------------------------------------


const typed = new Typed('#typedjs', {
    strings: ['Software Developer', 'Software Engineer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
  });
