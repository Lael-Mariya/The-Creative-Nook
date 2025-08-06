
    function showContent(sectionId) {
      const sections = document.querySelectorAll('.content-section');
      sections.forEach(section => section.classList.remove('active'));
      document.getElementById(sectionId).classList.add('active');

      const menuItems = document.querySelectorAll('.nav-menu a');
      menuItems.forEach(item => item.classList.remove('active'));
      event.target.classList.add('active');
    }
    function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}
