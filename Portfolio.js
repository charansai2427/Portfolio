var typed =new Typed(".text",{
    strings:[" Frontend Developer" , "Backend Developer" , "Full Stack Developer" , "Web Designer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
})

document.querySelector('.footer-iconTop a').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#home').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('titles-cv').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'Sai_Charan_Pilla_CV.pdf';
    link.download = 'Sai_Charan_Pilla_CV.pdf';
    link.click(); 
});

function toggleShow() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "More About Me";
        moreText.style.display = "none";
        btnText.style.marginTop = "0";  
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
        btnText.style.marginTop = "14em";  
    }
}

function toggleText(element) {
    var parentDiv = element.parentElement;
    var dots = parentDiv.querySelector(".dots");
    var moreText = parentDiv.querySelector(".more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        element.innerHTML = "Learn more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        element.innerHTML = "Show less";
        moreText.style.display = "inline";
    }
}




