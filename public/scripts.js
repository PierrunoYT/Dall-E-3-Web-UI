document.addEventListener('DOMContentLoaded', init);

    function init() {
    const promptForm = document.getElementById('prompt-form');
    const imageForm = document.getElementById('image-form');
    const customPromptForm = document.getElementById('custom-prompt-form');
    const promptSelect = document.getElementById('prompt');
    // Removed unused imageSizeSelect variable

    const imageSizeSelectForImageForm = document.getElementById('image-size-for-image-form');
    const imageContainer = document.getElementById('image-container');

    // Function to handle generating an image
    async function generateImage(prompt, size) {
        try {
            const response = await fetch('/generate-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: prompt, size: size })
            });
            const data = await response.json();
            if (data && data.data) {
                imageContainer.innerHTML = '';
                data.data.forEach(imgData => {
                    const img = document.createElement('img');
                    img.src = imgData.url;
                    img.alt = 'Generated Image';
                    img.style = 'width: 100%; height: auto; margin-top: 20px;';
                    imageContainer.appendChild(img);
                });
            }
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    }

    // Event listener for the prompt form submission
    promptForm.addEventListener('submit', handlePromptFormSubmit);

    async function handlePromptFormSubmit(event) {
        event.preventDefault();
        const idea = document.getElementById('idea').value;
        try {
            const response = await fetch('/generate-prompts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ idea: idea })
            });
            const data = await response.json();
            promptSelect.innerHTML = '';
            data.prompts.forEach(function (prompt) {
                const promptOption = document.createElement('option');
                promptOption.value = prompt;
                promptOption.textContent = prompt;
                promptSelect.appendChild(promptOption);
            });
            imageForm.classList.remove('d-none');
        } catch (error) {
            console.error('Error fetching prompts:', error);
        }
    
    }

    // Event listener for the random prompt button
    const randomPromptBtn = document.getElementById('random-prompt-btn');
    randomPromptBtn.addEventListener('click', handleRandomPromptBtnClick);

    async function handleRandomPromptBtnClick() {
        try {
            const response = await fetch('/generate-prompts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ idea: '' }) // Send an empty string for random prompts
            });
            const data = await response.json();
            promptSelect.innerHTML = '';
            data.prompts.forEach(function (prompt) {
                const promptOption = document.createElement('option');
                promptOption.value = prompt;
                promptOption.textContent = prompt;
                promptSelect.appendChild(promptOption);
            });
            imageForm.classList.remove('d-none');
        } catch (error) {
            console.error('Error fetching prompts:', error);
        }
    }

    // Event listener for the custom prompt form submission
    customPromptForm.addEventListener('submit', handleCustomPromptFormSubmit);

    function handleCustomPromptFormSubmit(event) {
        event.preventDefault();
        const customPrompt = document.getElementById('custom-prompt').value;
        const selectedSize = imageSizeSelectForImageForm.value;
        generateImage(customPrompt, selectedSize);
    }

    // Event listener for the image form submission
    imageForm.addEventListener('submit', handleImageFormSubmit);

    function handleImageFormSubmit(event) {
        event.preventDefault();
        const selectedPrompt = promptSelect.value;
        const selectedSize = imageSizeSelectForImageForm.value;
        generateImage(selectedPrompt, selectedSize);
    }
}
