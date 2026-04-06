// 1. Find all password fields on the current webpage
const passwordFields = document.querySelectorAll('input[type="password"]');

passwordFields.forEach(field => {
    // 2. Create the visual strength meter
    const meterContainer = document.createElement('div');
    meterContainer.className = 'securepass-meter-container';
    
    const meterBar = document.createElement('div');
    meterBar.className = 'securepass-meter-bar';
    meterContainer.appendChild(meterBar);

    // 3. Inject the meter right after the password field
    field.parentNode.insertBefore(meterContainer, field.nextSibling);

    // 4. Listen for every keystroke the user types
    field.addEventListener('input', (e) => {
        const password = e.target.value;
        const strength = calculateStrength(password);
        updateMeter(meterBar, strength);
    });
});

// --- HELPER FUNCTIONS ---

// A basic algorithm to calculate password complexity
function calculateStrength(password) {
    let score = 0;
    if (!password) return score;

    // Check length
    if (password.length > 8) score += 1;
    if (password.length > 12) score += 1;

    // Check character variety using Regex
    if (/[A-Z]/.test(password)) score += 1; // Has uppercase
    if (/[0-9]/.test(password)) score += 1; // Has number
    if (/[^A-Za-z0-9]/.test(password)) score += 1; // Has special symbol

    return Math.min(score, 4); // Max score of 4
}

// Update the CSS based on the score
function updateMeter(meterBar, score) {
    const colors = ['#e0e0e0', '#ff4d4d', '#ffa64d', '#ffff4d', '#00cc44'];
    const widths = ['0%', '25%', '50%', '75%', '100%'];

    meterBar.style.width = widths[score];
    meterBar.style.backgroundColor = colors[score];
}