document.addEventListener("DOMContentLoaded", () => {
    const detectButton = document.getElementById("detect-button");
    const loginLink = document.querySelector(".navbar-links li a[href='/user/login']");
    
    // Fetch login status
    fetch("/api/login-status")
        .then(response => response.json())
        .then(data => {
            if (data.isLoggedIn) {
                // User is logged in
                detectButton.textContent = "Detect Now";
                detectButton.removeEventListener('click', redirectToRegister); // Remove any conflicting listener
                detectButton.addEventListener('click', () => {
                    window.location.href = 'https://plant-easy-care.streamlit.app';
                });

                loginLink.textContent = `${data.email} - logout`;
                loginLink.href = "/";
                loginLink.addEventListener("click", () => {
                    const userConfirmed = confirm("Are you sure you want to log out?");
                    if (userConfirmed) {
                        fetch("/user/logout", { method: "POST" })
                            .then(response => response.json())
                            .then(data => {
                                alert(data.message); // Notify user
                                // Reset UI after logout
                                loginLink.textContent = "Login";
                                loginLink.href = "/user/login";
                                detectButton.textContent = "Get Started";
                                detectButton.removeEventListener('click', redirectToStreamlit);
                                detectButton.addEventListener('click', redirectToRegister);
                            })
                            .catch(error => console.error("Error logging out:", error));
                    }
                });
            } else {
                // User is not logged in
                detectButton.textContent = "Get Started";
                detectButton.removeEventListener('click', redirectToStreamlit); // Remove any conflicting listener
                detectButton.addEventListener('click', redirectToRegister);

                loginLink.textContent = "Login";
                loginLink.href = "/user/login";
            }
        })
        .catch(error => console.error("Error fetching login status:", error));

    function redirectToStreamlit() {
        window.location.href = 'https://plant-easy-care.streamlit.app';
    }

    function redirectToRegister() {
        window.location.href = '/user/register';
    }
});
