const faqToggle = document.querySelectorAll('.faq-toggle')
const faq = document.querySelectorAll('.faq')

faqToggle.forEach((item, idx) => {
    // var toActivate = faq[idx];
    item.addEventListener('click', () => toggleActive(idx));
})

function toggleActive(i) {
    const toToggle = faq[i]
    if (toToggle.classList.contains('active')) {
        toToggle.classList.remove('active')
    } else {
    toToggle.classList.add('active')
    }
}

// Easy Solution:
// faqToggle.forEach(toggle => {
//     toggle.addEventListener('click', () => {
//         toggle.parentNode.classList.toggle('active')
//     })
// })