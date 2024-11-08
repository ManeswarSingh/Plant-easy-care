

// fetch("http://localhost:3000/api")
// .then(response =>{
//     if(!response.ok){
//         throw new Error("network response not ok")
//     }
//     return response.json()
// })
// .then(data =>{
//     const test = document.getElementById("test")
//     test.innerText = data.message;
//     console.log(data)

// })
// .catch(error =>{
//     console.log("there is some erorr",error);
    
// })

document.querySelector('.detect-btn').addEventListener('click', () => {
    alert('Plant detection coming soon!');
});
// JavaScript to handle the parallax effect
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    
    // Move the left and right images (move slower, opposite directions)
    const bannerLeft = document.querySelector('.bannerleft');
    const bannerRight = document.querySelector('.bannerright');
    
    bannerLeft.style.transform = `translateX(-${scrollPosition * 0.5}px)`; // Moves to the right
    bannerRight.style.transform = `translateX(${scrollPosition * 0.5}px)`; // Moves to the left
    
    // Move the banner text (move faster)
    // const banner = document.querySelector('.banner');
    // banner.style.transform = `translateY(${scrollPosition * 0.8}px)`; // Moves down faster

    // const about = this.document.querySelector('/about-us')
    // about.style.transform = `translateY(${scrollPosition * 0.8}px)`
});
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-us');

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Make the about-us section visible when it enters the viewport
                aboutSection.classList.add('visible');

                // Stop observing once it has appeared
                // observer.unobserve(entry.target);
            }
            else {
                // If the section is out of the viewport, remove the 'visible' class
                aboutSection.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5 // Trigger when 10% of the section is visible
    });

    // Start observing the about-us section
    observer.observe(aboutSection);
});