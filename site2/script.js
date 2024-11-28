// Funcția pentru a obține informațiile despre vreme
function getWeather() {
    const apiKey = '22c7d3812881e490b70934142e959812';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sibiu&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            
            document.getElementById('weather-info').innerText = `Temperatura: ${temperature}°C, ${description}`;
        })
        .catch(error => {
            console.error('Eroare la obținerea datelor despre vreme:', error);
            document.getElementById('weather-info').innerText = 'Nu s-au putut obține informațiile despre vreme.';
        });
}

document.addEventListener('DOMContentLoaded', getWeather);


// Funcția pentru a schimba imaginea de profil
function changeProfilePhoto() {
    const profileImages = document.getElementsByClassName('profil-anim');
    for (let i = 0; i < profileImages.length; i++) {
        profileImages[i].src = 'poze/poza.jpeg'; 
    }
}
document.getElementById('change-photo-button').addEventListener('click', changeProfilePhoto);

