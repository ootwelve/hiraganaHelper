document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const panel = document.getElementById('panel');
    const hiragana = document.getElementById('hiragana');

    options.forEach(option => {
        option.addEventListener('click', (e) => {
            const selectedRomaji = e.target.getAttribute('romaji');
            //const correctRomaji = '<%= correctAnswer %>';
            //console.log(correctRomaji);
            //console.log(selectedRomaji);
            
            if (selectedRomaji === correctAnswer) {
                panel.style.backgroundColor = 'green';
                e.target.style.color = 'green';
                hiragana.style.color = 'white';
                setTimeout(() => { window.location.reload(); }, 1000);
            } else {
                e.target.style.backgroundColor = 'red';
                e.target.style.color = 'white';

                options.forEach(button => {
                    if (button.getAttribute('romaji') === correctAnswer) {
                        button.style.backgroundColor = 'green';
                        button.style.color = 'white';
                    }
                });

                setTimeout(() => { window.location.reload(); }, 1000);
            }
        });
    });
});