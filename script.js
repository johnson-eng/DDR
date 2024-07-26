document.getElementById('preferenceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.getElementById('location').value;
    const interests = document.getElementById('interests').value;
    const budget = document.getElementById('budget').value;
    
    // إنشاء عنصر DOM لعرض التوصيات
    const recommendationsSection = document.getElementById('recommendations');
    recommendationsSection.innerHTML = `
        <h2>Recommended Destinations</h2>
        <div class="recommendation">
            <h3>${location} - Beautiful Beaches</h3>
            <p>Enjoy the sun and sand with amazing beach views. Perfect for relaxation.</p>
            <img src="assets/beach.jpg" alt="Beach Image">
        </div>
        <div class="recommendation">
            <h3>${location} - Majestic Mountains</h3>
            <p>Explore the mountains and enjoy breathtaking views and hiking trails.</p>
            <img src="assets/mountains.jpg" alt="Mountain Image">
        </div>
        <div class="recommendation">
            <h3>${location} - City Life</h3>
            <p>Experience the vibrant city life with endless entertainment and shopping options.</p>
            <img src="assets/city.jpg" alt="City Image">
        </div>
    `;
});
