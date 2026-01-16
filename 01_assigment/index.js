document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const outputDiv = document.getElementById('output');
    const tableNumberInput = document.getElementById('tableNumber');
    const tableLengthInput = document.getElementById('tableLength');

    const placeholderHTML = `
        <div class="placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
            <p>Your table will appear here</p>
        </div>`;

    // Function to set the initial or error state
    function setOutputMessage(message) {
        outputDiv.innerHTML = `
            <div class="placeholder" style="color: #ff6b6b;">
                <p>${message}</p>
            </div>`;
    }

    generateBtn.addEventListener('click', () => {
        const tableNumber = parseInt(tableNumberInput.value, 10);
        const tableLength = parseInt(tableLengthInput.value, 10);

        // Clear previous output
        outputDiv.innerHTML = '';

        // Validation
        if (isNaN(tableNumber) || isNaN(tableLength) || tableNumberInput.value === '' || tableLengthInput.value === '') {
            setOutputMessage('Please enter valid numbers in both fields.');
            return;
        }

        // Generate table rows with staggered animation
        let delay = 0;
        for (let j = 1; j <= tableLength; j++) {
            const entry = document.createElement('div');
            entry.className = 'table-entry';
            entry.style.animationDelay = `${delay}s`;
            
            entry.innerHTML = `
                <span>${tableNumber}</span>
                <span class="operator">×</span>
                <span>${j}</span>
                <span class="equals">=</span>
                <span class="result">${tableNumber * j}</span>
            `;
            
            outputDiv.appendChild(entry);
            delay += 0.05; // Stagger animation for each row
        }
    });

    // Set initial placeholder on load
    outputDiv.innerHTML = placeholderHTML;
});