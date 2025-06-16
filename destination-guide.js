// Function to filter destinations based on user input
function filterDestinations() {
    const userInput = document.getElementById('location-search').value.trim().toLowerCase();
    
    // Hide the default content and show the relevant sections
    document.getElementById('default-content').style.display = 'none';
    const destinationContent = document.getElementById('destination-content');
    destinationContent.style.display = 'block';
    
    // Clear previous content
    document.getElementById('attractions').innerHTML = '';
    document.getElementById('events').innerHTML = '';
    document.getElementById('gems').innerHTML = '';

    // Define example locations with sample data and images
    const destinations = {
        "paris": {
            attractions: [
                { name: "Eiffel Tower", description: "Visit the iconic Eiffel Tower, one of Paris' most famous landmarks.", image: "eiffel-tower.jpg" },
                { name: "Louvre Museum", description: "Explore the world-renowned Louvre Museum, home to thousands of works of art.", image: "louvre-museum.jpg" }
            ],
            events: [
                { name: "Paris Fashion Week", description: "The iconic fashion event that brings together top designers and influencers.", image: "paris-fashion-week.jpg" },
                { name: "Bastille Day", description: "Celebrate France's National Day with fireworks and festivities across the city.", image: "bastille-day.jpg" }
            ],
            gems: [
                { name: "Montmartre", description: "A charming artistic district known for its bohemian atmosphere.", image: "montmartre.jpg" },
                { name: "Canal Saint-Martin", description: "A hidden gem offering peaceful walks and quaint cafes.", image: "canal-saint-martin.jpg" }
            ]
        },
        "kyoto": {
            attractions: [
                { name: "Kinkaku-ji Temple", description: "Visit the Golden Pavilion, a stunning Zen Buddhist temple.", image: "kinkaku-ji.jpg" },
                { name: "Fushimi Inari Shrine", description: "Walk through the famous red torii gates at Fushimi Inari Taisha.", image: "Fushinami Inari.jpg" }
            ],
            events: [
                { name: "Kyoto Gion Matsuri", description: "A traditional festival celebrating Kyoto's rich cultural heritage.", image: "gion-festival.jpg" },
                { name: "Hanami (Cherry Blossom Viewing)", description: "Experience the beauty of cherry blossoms in full bloom.", image: "hanami.jpg" }
            ],
            gems: [
                { name: "Arashiyama Bamboo Grove", description: "A serene bamboo forest offering a peaceful escape from the city.", image: "arashiyama-bamboo.jpg" },
                { name: "Kiyomizu-dera", description: "A historic temple offering stunning views of Kyoto.", image: "kiyomizu-dera.jpg" }
            ]
        },
        "new york": {
            attractions: [
                { name: "Statue of Liberty", description: "A symbol of freedom and democracy, the Statue of Liberty is a must-visit landmark in New York.", image: "statue-liberty.jpg" },
                { name: "Central Park", description: "A vast urban park offering beautiful landscapes and outdoor activities.", image: "cetral-park.jpg" }
            ],
            events: [
                { name: "New Year's Eve Times Square Ball Drop", description: "Ring in the new year at the famous Times Square ball drop.", image: "times-square.jpg" },
                { name: "Broadway Shows", description: "Experience world-class theater performances in the heart of New York.", image: "broadway.jpg" }
            ],
            gems: [
                { name: "Brooklyn Bridge Park", description: "Enjoy panoramic views of Manhattan and Brooklyn from this scenic park.", image: "brooklyn-bridge.jpg" },
                { name: "High Line Park", description: "An elevated park offering greenery, art, and stunning views of the city.", image: "high-line-park.jpg" }
            ]
        },
        "london": {
            attractions: [
                { name: "The British Museum", description: "Discover centuries of history at one of the world's greatest museums.", image: "british-museum.jpg" },
                { name: "Big Ben", description: "Visit the iconic clock tower and Parliament building in the heart of London.", image: "big-ben.jpg" }
            ],
            events: [
                { name: "Notting Hill Carnival", description: "A vibrant celebration of Caribbean culture with parades, music, and food.", image: "notting-hill.jpg" },
                { name: "London Fashion Week", description: "Showcasing the latest trends in fashion from top designers.", image: "london-fashion.jpg" }
            ],
            gems: [
                { name: "Kew Gardens", description: "A beautiful botanical garden offering a peaceful escape from the city.", image: "kew-gardens.jpg" },
                { name: "Hampstead Heath", description: "A vast park offering stunning views of the city skyline.", image: "hampstead heath.jpg" }
            ]
        },
        "tokyo": {
            attractions: [
                { name: "Tokyo Tower", description: "An iconic landmark offering panoramic views of the city.", image: "tokyo-tower.jpg" },
                { name: "Senso-ji Temple", description: "Japan's oldest temple, known for its beautiful architecture and cultural significance.", image: "senso-ji Temple.jpg" }
            ],
            events: [
                { name: "Tokyo Cherry Blossom Festival", description: "Enjoy the stunning beauty of cherry blossoms in full bloom.", image: "cherry-blossoms.jpg" },
                { name: "Sumida River Fireworks Festival", description: "A spectacular fireworks display over the Sumida River.", image: "sumida-firework.jpg" }
            ],
            gems: [
                { name: "Odaiba", description: "A futuristic district known for its shopping, entertainment, and waterfront views.", image: "odaiba.jpg" },
                { name: "Meiji Shrine", description: "A tranquil Shinto shrine surrounded by lush greenery.", image: "meiji-shrine.jpg" }
            ]
        }
    };

    // Check if the user input matches any destination in the list
    if (destinations[userInput]) {
        const destination = destinations[userInput];
        
        // Display Attractions
        destination.attractions.forEach(attraction => {
            const attractionDiv = document.createElement('div');
            attractionDiv.classList.add('destination');
            attractionDiv.innerHTML = `
                <img class="destination-img" src="${attraction.image}" alt="${attraction.name}">
                <div class="destination-details">
                    <h3>${attraction.name}</h3>
                    <p>${attraction.description}</p>
                </div>
            `;
            document.getElementById('attractions').appendChild(attractionDiv);
        });

        // Display Events
        destination.events.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');
            eventDiv.innerHTML = `
                <img class="event-img" src="${event.image}" alt="${event.name}">
                <div class="event-details">
                    <h3>${event.name}</h3>
                    <p>${event.description}</p>
                </div>
            `;
            document.getElementById('events').appendChild(eventDiv);
        });

        // Display Hidden Gems
        destination.gems.forEach(gem => {
            const gemDiv = document.createElement('div');
            gemDiv.classList.add('gem');
            gemDiv.innerHTML = `
                <img class="gem-img" src="${gem.image}" alt="${gem.name}">
                <div class="gem-details">
                    <h3>${gem.name}</h3>
                    <p>${gem.description}</p>
                </div>
            `;
            document.getElementById('gems').appendChild(gemDiv);
        });
    } else {
        document.getElementById('destination-content').innerHTML = "<p>No results found. Please try another destination.</p>";
    }
}
