const scrollToTopBtn = document.getElementById('scrollToTop')

const scroll = () => window.scrollTo({ top: 0, behavior: 'smooth' })

scrollToTopBtn.addEventListener('click', scroll)
