

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

document.addEventListener("DOMContentLoaded", () => {
    const detectButton = document.getElementById("detect-button");
    const loginLink = document.querySelector(".navbar-links li a[href='/user/login']");
    const logoutDropdown = document.getElementById("logout-dropdown");
    const logoutButton = document.getElementById("logout-button");

    fetch("/api/login-status")
        .then(response => response.json())
        .then(data => {
            if (data.isLoggedIn) {
                detectButton.textContent = "Detect Now";
                loginLink.textContent = data.email +" - "+ "logout";
                loginLink.href = "/"; 
                loginLink.addEventListener("click",()=>{
                    const userConfirmed = confirm("Are you sure you want to log out?");
    
                    if (userConfirmed) {
                        // Proceed with logout if user clicks "OK"
                        fetch("/user/logout", { method: "POST" })
                            .then(response => response.json())
                            .then(data => {
                                alert(data.message); // Notify user of successful logout
                                // Update UI after logout
                                loginLink.textContent = "Login";
                                loginLink.href = "/user/login";
                                detectButton.textContent = "Get Started";
                                logoutDropdown.style.display = "none"; // Hide dropdown
                            })
                            .catch(error => console.error("Error logging out:", error));
                    }
                })
            }  else {
                detectButton.textContent = "Get Started";
                loginLink.textContent = "Login";
                loginLink.href = "/user/login"; // Show Login link for non-logged-in users
            }
        })
        .catch(error => console.error("Error fetching login status:", error));

        // loginLink.addEventListener("click", (event) => {
        //     event.preventDefault();
        //     logoutDropdown.style.display = logoutDropdown.style.display === "none" ? "block" : "none";
        // });

        // logoutButton.addEventListener("click", () => {
        //     fetch("/api/logout", { method: "POST" })
        //         .then(response => response.json())
        //         .then(data => {
        //             alert(data.message); // Notify user of successful logout
        //             // Update UI after logout
        //             loginLink.textContent = "Login";
        //             loginLink.href = "/user/login";
        //             detectButton.textContent = "Get Started";
        //             logoutDropdown.style.display = "none"; // Hide dropdown
        //         })
        //         .catch(error => console.error("Error logging out:", error));
        // });
});


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