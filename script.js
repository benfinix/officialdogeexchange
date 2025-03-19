document.addEventListener('DOMContentLoaded', () => {
    const partyTrigger = document.getElementById('trigger-party');
    const body = document.body;
    
    // Handle the click on the philosophy text
    partyTrigger.addEventListener('click', function(e) {
        e.stopPropagation();
        launchConfetti();
        startPartyMode();
    });
    
    // Launch confetti explosion
    function launchConfetti() {
        try {
            const dogeColors = [
                '#cb9e26', // Dogecoin yellow
                '#f2a900', // Dogecoin orange
                '#fff',    // White
                '#5c4b37'  // Brown
            ];
            
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 200,
                    spread: 160,
                    origin: { y: 0.6 },
                    colors: dogeColors
                });
            }
        } catch (error) {
            console.error('Error launching confetti:', error);
        }
    }
    
    // Start the party mode
    function startPartyMode() {
        body.classList.add('party-mode');
        
        // Stop the party after 10 seconds
        setTimeout(() => {
            body.classList.remove('party-mode');
        }, 10000);
    }
}); 