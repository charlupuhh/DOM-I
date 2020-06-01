const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

document.querySelectorAll('a')[0].textContent = siteContent['nav']['nav-item-1']
document.querySelectorAll('a')[1].textContent = siteContent['nav']['nav-item-2']
document.querySelectorAll('a')[2].textContent = siteContent['nav']['nav-item-3']
document.querySelectorAll('a')[3].textContent = siteContent['nav']['nav-item-4']
document.querySelectorAll('a')[4].textContent = siteContent['nav']['nav-item-5']
document.querySelectorAll('a')[5].textContent = siteContent['nav']['nav-item-6']
document.getElementById('logo-img').setAttribute('src', siteContent['nav']['img-src'])
document.querySelector('h1').textContent = siteContent['cta']['h1']
document.querySelector('button').textContent = siteContent['cta']['button']
document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src'])
document.querySelectorAll('h4')[0].textContent = siteContent['main-content']['features-h4']
document.querySelectorAll('p')[0].textContent = siteContent['main-content']['features-content']
document.querySelectorAll('h4')[1].textContent = siteContent['main-content']['about-h4']
document.querySelectorAll('p')[1].textContent = siteContent['main-content']['about-content']
document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src'])
document.querySelectorAll('h4')[2].textContent = siteContent['main-content']['services-h4']
document.querySelectorAll('p')[2].textContent = siteContent['main-content']['services-content']
document.querySelectorAll('h4')[3].textContent = siteContent['main-content']['product-h4']
document.querySelectorAll('p')[3].textContent = siteContent['main-content']['product-content']
document.querySelectorAll('h4')[4].textContent = siteContent['main-content']['vision-h4']
document.querySelectorAll('p')[4].textContent = siteContent['main-content']['vision-content']
document.querySelectorAll('h4')[5].textContent = siteContent['contact']['contact-h4']
document.querySelectorAll('p')[5].textContent = siteContent['contact']['address']
document.querySelectorAll('p')[6].textContent = siteContent['contact']['phone']
document.querySelectorAll('p')[7].textContent = siteContent['contact']['email']
document.querySelectorAll('p')[8].textContent = siteContent['footer']['copyright']

const siteNav = document.querySelector('header nav')

const linkAppend = document.createElement('a')
linkAppend.href = "#"
linkAppend.textContent = "More"
siteNav.appendChild(linkAppend)

const linkPrepend = document.createElement('a')
linkPrepend.href = "#"
linkPrepend.textContent = "New"
siteNav.prepend(linkPrepend)

for (let i = 0; i < document.querySelector('nav').querySelectorAll('a').length; i++){
  document.querySelector('nav').querySelectorAll('a')[i].style.color="green"
}