const locationData = {
    "paris": {
        dining: [
            {
                name: "Le Gourmet",
                img: "https://via.placeholder.com/100",
                rating: 4.5,
                reviews: 120,
                location: "Paris"
            },
            {
                name: "Café de Flore",
                img: "https://via.placeholder.com/100",
                rating: 4.7,
                reviews: 180,
                location: "Paris"
            },
            {
                name: "L'Atelier de Joël Robuchon",
                img: "https://via.placeholder.com/100",
                rating: 4.8,
                reviews: 150,
                location: "Paris"
            }
        ],
        transportation: [
            {
                from: "Current Location",
                to: "Le Gourmet",
                mode: "Taxi",
                price: "$20",
                duration: "15 min"
            },
            {
                from: "Current Location",
                to: "Café de Flore",
                mode: "Metro",
                price: "$2",
                duration: "10 min"
            },
            {
                from: "Current Location",
                to: "L'Atelier de Joël Robuchon",
                mode: "Bus",
                price: "$3",
                duration: "20 min"
            },
            {
                from: "Current Location",
                to: "Le Gourmet",
                mode: "Bike",
                price: "$5",
                duration: "25 min"
            },
            {
                from: "Current Location",
                to: "Café de Flore",
                mode: "Walk",
                price: "$0",
                duration: "30 min"
            }
        ]
    },
    "tokyo": {
        dining: [
            {
                name: "Sushi Dai",
                img: "https://via.placeholder.com/100",
                rating: 4.9,
                reviews: 250,
                location: "Tokyo"
            },
            {
                name: "Ichiryu Ramen",
                img: "https://via.placeholder.com/100",
                rating: 4.6,
                reviews: 150,
                location: "Tokyo"
            },
            {
                name: "Tonkatsu Maisen",
                img: "https://via.placeholder.com/100",
                rating: 4.7,
                reviews: 200,
                location: "Tokyo"
            }
        ],
        transportation: [
            {
                from: "Current Location",
                to: "Sushi Dai",
                mode: "Taxi",
                price: "$25",
                duration: "20 min"
            },
            {
                from: "Current Location",
                to: "Ichiryu Ramen",
                mode: "Metro",
                price: "$2",
                duration: "12 min"
            },
            {
                from: "Current Location",
                to: "Tonkatsu Maisen",
                mode: "Bus",
                price: "$3",
                duration: "15 min"
            },
            {
                from: "Current Location",
                to: "Sushi Dai",
                mode: "Bike",
                price: "$4",
                duration: "25 min"
            },
            {
                from: "Current Location",
                to: "Tonkatsu Maisen",
                mode: "Walk",
                price: "$0",
                duration: "18 min"
            }
        ]
    }
};

let currentCountry = '';

function searchCountry() {
    const countryInput = document.getElementById("country-search").value.toLowerCase();
    const diningInfo = document.getElementById("dining-info");
    const defaultInfo = document.getElementById("default-info");

    // Clear previous content
    diningInfo.innerHTML = "";
    defaultInfo.innerHTML = "";

    // Check if the location exists
    if (locationData[countryInput]) {
        currentCountry = countryInput; // Store the current country to fetch transportation info later
        const diningList = locationData[countryInput].dining;

        // Show dining information with transport options
        diningList.forEach(place => {
            const diningItem = document.createElement("div");
            diningItem.classList.add("dining-item");
            diningItem.innerHTML = `
                <img src="${place.img}" alt="${place.name}">
                <div>
                    <h4>${place.name}</h4>
                    <div class="rating">Rating: ${place.rating} / 5</div>
                    <div class="reviews">${place.reviews} reviews</div>
                    <button class="enable-gps" onclick="askForLocation('${place.name}')">Enable GPS for Transportation</button>
                    <div id="transport-container-${place.name}" class="transport-container" style="display:none;">
                        <h5>Available Transportation:</h5>
                        <ul id="transport-list-${place.name}"></ul>
                    </div>
                </div>
            `;
            diningInfo.appendChild(diningItem);
        });

        // Display default info
        defaultInfo.innerHTML = "<p>Search complete. Please enable GPS to view transportation options for the dining spots.</p>";
    } else {
        defaultInfo.innerHTML = "<p>Location not found. Please try again.</p>";
    }
}

function askForLocation(diningName) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log("User's Location: Latitude: " + lat + " Longitude: " + lon);

            // Now show transportation info after GPS is enabled
            alert("GPS is turned on. You can now view transportation options.");
            displayTransportation(diningName); // Show transportation based on the specific dining place
        }, function(error) {
            alert("Please enable GPS to continue. Error: " + error.message);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function displayTransportation(diningName) {
    const transportInfo = document.getElementById(`transport-container-${diningName}`);
    const transportListContainer = document.getElementById(`transport-list-${diningName}`);

    // Get transportation details for the selected country and dining place
    const transportList = locationData[currentCountry].transportation.filter(transport => transport.to === diningName);

    // Show transportation information for the specific dining place
    transportInfo.style.display = "block";
    transportListContainer.innerHTML = ""; // Clear previous list

    transportList.forEach(transport => {
        const transportItem = document.createElement("li");
        transportItem.innerHTML = `Mode: ${transport.mode} - Price: ${transport.price} - Duration: ${transport.duration}`;
        transportListContainer.appendChild(transportItem);
    });
}
