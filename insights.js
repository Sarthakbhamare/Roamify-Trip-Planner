const countryData = {
    "japan": {
        "culturalInsights": "Japan has a rich cultural heritage, including tea ceremonies, sumo wrestling, and traditional festivals like Hanami (cherry blossom viewing).",
        "languageTips": "Learn basic Japanese phrases such as 'Konnichiwa' (Hello), 'Arigatou' (Thank you), and 'Sumimasen' (Excuse me).",
        "etiquetteGuides": "When visiting temples, remove your shoes. Always bow to show respect. Be mindful of quiet and polite behavior in public.",
        "languageTranslation": {
            "thank you": "Arigatou",
            "hello": "Konnichiwa",
            "goodbye": "Sayonara",
            "excuse me": "Sumimasen",
            "sorry": "Gomen nasai"
        }
    },
    "paris": {
        "culturalInsights": "Paris is known for its art, cuisine, and fashion. Explore world-famous museums like the Louvre and enjoy café culture.",
        "languageTips": "Learn key French phrases like 'Bonjour' (Hello), 'Merci' (Thank you), and 'Excusez-moi' (Excuse me).",
        "etiquetteGuides": "In Paris, it's customary to greet people with a kiss on both cheeks. Keep your voice low in public spaces.",
        "languageTranslation": {
            "thank you": "Merci",
            "hello": "Bonjour",
            "goodbye": "Au revoir",
            "excuse me": "Excusez-moi",
            "sorry": "Désolé"
        }
    },
    "italy": {
        "culturalInsights": "Italy is famous for its art, history, and culinary excellence. Explore cities like Rome, Florence, and Venice with their rich cultural heritage.",
        "languageTips": "Learn essential Italian phrases like 'Ciao' (Hello), 'Grazie' (Thank you), and 'Scusa' (Excuse me).",
        "etiquetteGuides": "Italians value family and meals, so expect to spend long hours enjoying food. Always greet with a handshake or kiss on both cheeks.",
        "languageTranslation": {
            "thank you": "Grazie",
            "hello": "Ciao",
            "goodbye": "Arrivederci",
            "excuse me": "Scusa",
            "sorry": "Mi scuso"
        }
    },
    "spain": {
        "culturalInsights": "Spain is renowned for its festivals, flamenco, and delicious food. Don't miss the La Tomatina festival or a flamenco performance.",
        "languageTips": "Master Spanish phrases like 'Hola' (Hello), 'Gracias' (Thank you), and 'Perdón' (Excuse me).",
        "etiquetteGuides": "In Spain, it's common to greet people with a hug or kiss on the cheek. Be prepared for a late-night dinner culture.",
        "languageTranslation": {
            "thank you": "Gracias",
            "hello": "Hola",
            "goodbye": "Adiós",
            "excuse me": "Perdón",
            "sorry": "Lo siento"
        }
    },
    "germany": {
        "culturalInsights": "Germany is known for its historical landmarks, beer gardens, and festivals like Oktoberfest. Explore the fairy-tale castles and scenic villages.",
        "languageTips": "Learn German basics such as 'Hallo' (Hello), 'Danke' (Thank you), and 'Entschuldigung' (Excuse me).",
        "etiquetteGuides": "Germans value punctuality, so always arrive on time. A firm handshake is expected when greeting someone.",
        "languageTranslation": {
            "thank you": "Danke",
            "hello": "Hallo",
            "goodbye": "Auf Wiedersehen",
            "excuse me": "Entschuldigung",
            "sorry": "Es tut mir leid"
        }
    },
    "brazil": {
        "culturalInsights": "Brazil is famous for its carnivals, beaches, and samba. Rio de Janeiro's Carnival is one of the biggest cultural celebrations in the world.",
        "languageTips": "Portuguese phrases like 'Oi' (Hello), 'Obrigado' (Thank you), and 'Desculpe' (Excuse me) are essential.",
        "etiquetteGuides": "Brazilians are very friendly and affectionate, so don't be surprised if you're greeted with hugs or cheek kisses.",
        "languageTranslation": {
            "thank you": "Obrigado",
            "hello": "Oi",
            "goodbye": "Adeus",
            "excuse me": "Desculpe",
            "sorry": "Desculpa"
        }
    }
};

function searchCountry() {
    const countryInput = document.getElementById("country-search").value.toLowerCase();
    const content = document.getElementById("content");

    if (countryData[countryInput]) {
        content.innerHTML = `
            <h3>${countryInput.charAt(0).toUpperCase() + countryInput.slice(1)}</h3>
            <h4>Cultural Insights:</h4>
            <p>${countryData[countryInput].culturalInsights}</p>
            <h4>Language Tips:</h4>
            <p>${countryData[countryInput].languageTips}</p>
            <h4>Etiquette Guides:</h4>
            <p>${countryData[countryInput].etiquetteGuides}</p>
        `;
    } else {
        content.innerHTML = `
            <p>No data found for the entered country. Please try again.</p>
        `;
    }
}

function translateLanguage() {
    const countryInput = document.getElementById("country-search").value.toLowerCase();
    const languageInput = document.getElementById("language-input").value.trim().toLowerCase();
    const translationOutput = document.getElementById("translation-output");

    // Check if country and translation phrase are available
    if (countryData[countryInput] && countryData[countryInput].languageTranslation[languageInput]) {
        const translation = countryData[countryInput].languageTranslation[languageInput];
        translationOutput.innerHTML = `The translation of "<strong>${languageInput}</strong>" in ${countryInput.charAt(0).toUpperCase() + countryInput.slice(1)} is: <strong>${translation}</strong>`;
        
        // Play the audio translation
        speakTranslation(translation);
    } else {
        translationOutput.innerHTML = "Please enter a valid phrase (e.g., 'thank you') for translation.";
    }
}

// Function to play the translation audio
function speakTranslation(translation) {
    const utterance = new SpeechSynthesisUtterance(translation);
    // Optionally, change language based on the country
    if (translation === "Arigatou") {
        utterance.lang = "ja-JP"; // Japanese
    } else if (translation === "Merci") {
        utterance.lang = "fr-FR"; // French
    } else if (translation === "Grazie") {
        utterance.lang = "it-IT"; // Italian
    } else if (translation === "Gracias") {
        utterance.lang = "es-ES"; // Spanish
    } else if (translation === "Danke") {
        utterance.lang = "de-DE"; // German
    } else if (translation === "Obrigado") {
        utterance.lang = "pt-BR"; // Portuguese
    }
    window.speechSynthesis.speak(utterance);
}
