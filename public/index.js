const inputfilter = document.getElementById("inputfilter");
const myaccount = document.getElementById("my_account");
const modalaccount = document.getElementById("modalaccount");
// FILTRAGEM
inputfilter.addEventListener('input', event => {
        const thoughtcards = document.querySelectorAll("#thought_card")

        const inputvalue = event.target.value.toLocaleUpperCase()

        thoughtcards.forEach(phrasecard => {
            const textphrase = phrasecard.querySelector('.phrase').textContent.toLocaleUpperCase()
            const nameauthor = phrasecard.querySelector('.author').textContent.toLocaleUpperCase()

            if (textphrase.includes(inputvalue) || nameauthor.includes(inputvalue)) {
                phrasecard.style.display = 'block'
                return
            }
            phrasecard.style.display = 'none'
                // document.getElementById('h1').innerHTML = inputvalue
        })
    })
    // MOSTRAR MODAL ACCOUNT

myaccount.addEventListener('click', (event) => {
    modalaccount.classList.toggle('hidden')
})