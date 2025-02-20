
// MENU ICON AND SIDEBAR

function openSidebar(x) {
    // Toggle the sidebar's active state
    document.getElementById("sidebar").classList.toggle("active");
    // Toggle the menu icon's change state
    x.classList.toggle("change");
}


// ABOUT SECTION NAV BAR SWITCHING CODE

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');
}

// WHEN PAGE IS SCROLLED NAVBAR BACKGROUND COLOR CHANGES

const pageScrolled = document.getElementById('header');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 50) {
    // If scrolled past 50px, add the 'scrolled' class (red background)
    header.classList.add('scrolled');
  } else {
    // If at the top of the page, remove the 'scrolled' class (black background)
    header.classList.remove('scrolled');
  }
});









