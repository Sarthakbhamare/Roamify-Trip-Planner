function showDetails(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
}

function openDestinationPage() {
    window.location.href = 'destination-guides.html';
}
