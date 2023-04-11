const articles = document.querySelectorAll('.qs-card')

window.addEventListener('scroll', checkArticles)

checkArticles()

function checkArticles() {
    const triggerBottom = window.innerHeight / 5 * 4

    articles.forEach(article => {
        const articleTop = article.getBoundingClientRect().top

        if(articleTop < triggerBottom) {
            article.classList.add('show')
        } else {
            article.classList.remove('show')
        }
    })
}