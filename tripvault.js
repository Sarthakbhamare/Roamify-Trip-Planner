document.getElementById('search-transport').addEventListener('click', function() {
    const transport = document.getElementById('transport').value;
    const location = document.getElementById('location').value;
    const destination = document.getElementById('destination').value;

    const transportOptions = {
        "India-Paris": {
            "flight": [
                "Flight 101: Timing - 10:00 AM, Price - ₹45,000 (Offer: ₹42,500)",
                "Flight 202: Timing - 4:00 PM, Price - ₹50,000 (Offer: ₹47,000)",
                "Flight 303: Timing - 9:00 PM, Price - ₹48,000 (Offer: ₹45,500)"
            ],
            "train": [
                "Train A1: Timing - 6:00 AM, Price - ₹7,500 (Offer: ₹7,000)",
                "Train B2: Timing - 12:00 PM, Price - ₹9,000 (Offer: ₹8,500)"
            ],
            "bus": [
                "Bus X: Timing - 8:00 AM, Price - ₹6,000 (Offer: ₹5,500)",
                "Bus Y: Timing - 2:00 PM, Price - ₹6,750 (Offer: ₹6,250)"
            ]
        },
        "India-London": {
            "flight": [
                "Flight 401: Timing - 11:00 AM, Price - ₹55,000 (Offer: ₹52,000)",
                "Flight 505: Timing - 3:00 PM, Price - ₹60,000 (Offer: ₹57,000)"
            ],
            "train": [
                "Train C3: Timing - 5:00 AM, Price - ₹8,500 (Offer: ₹8,000)"
            ],
            "bus": [
                "Bus Z: Timing - 7:00 AM, Price - ₹7,000 (Offer: ₹6,500)"
            ]
        }
    };

    const availableOptions = (transportOptions[`${location}-${destination}`] || {})[transport] || ["No options available for this selection."];

    const results = `
        <h3>Available ${transport}s</h3>
        <p>From: ${location} To: ${destination}</p>
        <ul>
            ${availableOptions.map(option => `<li>${option}</li>`).join('')}
        </ul>
        <button onclick="bookNow('${transport}', '${location}', '${destination}')">Book Now</button>
    `;

    document.getElementById('transport-results').innerHTML = results;
});

document.getElementById('search-accommodation').addEventListener('click', function() {
    const accommodation = document.getElementById('accommodation').value;
    const location = document.getElementById('accommodation-location').value;

    const accommodationOptions = {
        "Paris": {
            "hotel": [
                "Hotel Parisian Bliss, Rent - ₹16,000 (Offer: ₹15,000), Rating - 4.8/5",
                "Eiffel View Hotel, Rent - ₹17,600 (Offer: ₹16,000), Rating - 4.7/5"
            ],
            "resort": [
                "Luxury Paris Resort, Rent - ₹24,000 (Offer: ₹22,500), Rating - 4.9/5",
                "Versailles Retreat, Rent - ₹20,000 (Offer: ₹19,000), Rating - 4.6/5"
            ],
            "homestay": [
                "Cozy Paris Homestay, Rent - ₹8,000 (Offer: ₹7,500), Rating - 4.5/5",
                "Artisan's Abode, Rent - ₹9,600 (Offer: ₹9,000), Rating - 4.4/5"
            ]
        },
        "London": {
            "hotel": [
                "Buckingham Hotel, Rent - ₹14,400 (Offer: ₹13,500), Rating - 4.7/5",
                "River Thames Inn, Rent - ₹15,200 (Offer: ₹14,000), Rating - 4.6/5"
            ],
            "resort": [
                "Windsor Luxury Resort, Rent - ₹24,800 (Offer: ₹23,000), Rating - 4.8/5",
                "Royal Gardens Retreat, Rent - ₹23,200 (Offer: ₹22,000), Rating - 4.7/5"
            ],
            "homestay": [
                "Charming London Flat, Rent - ₹8,800 (Offer: ₹8,200), Rating - 4.5/5",
                "Urban Comfort Homestay, Rent - ₹10,400 (Offer: ₹9,800), Rating - 4.6/5"
            ]
        },
        "Tokyo": {
            "hotel": [
                "Shinjuku Serenity, Rent - ₹13,600 (Offer: ₹12,500), Rating - 4.7/5",
                "Ginza Grand Hotel, Rent - ₹16,800 (Offer: ₹15,500), Rating - 4.8/5"
            ],
            "resort": [
                "Mount Fuji Resort, Rent - ₹25,600 (Offer: ₹24,000), Rating - 4.9/5",
                "Tokyo Bay Retreat, Rent - ₹24,000 (Offer: ₹22,500), Rating - 4.7/5"
            ],
            "homestay": [
                "Traditional Tokyo Stay, Rent - ₹10,400 (Offer: ₹9,500), Rating - 4.6/5",
                "Urban Zen Homestay, Rent - ₹11,200 (Offer: ₹10,500), Rating - 4.5/5"
            ]
        }
    };

    const availableAccommodations = (accommodationOptions[location] || {})[accommodation] || ["No options available for this selection."];

    const results = `
        <h3>Available ${accommodation}s</h3>
        <p>Location: ${location}</p>
        <ul>
            ${availableAccommodations.map(option => `<li>${option}</li>`).join('')}
        </ul>
        <button onclick="bookNow('${accommodation}', '${location}', '')">Book Now</button>
    `;

    document.getElementById('accommodation-results').innerHTML = results;
});

function bookNow(type, location, destination) {
    const upiId = prompt("Enter your UPI ID to proceed with the payment:");
    if (upiId) {
        alert("Redirecting to payment...");
    } else {
        alert("Payment canceled.");
    }
}
