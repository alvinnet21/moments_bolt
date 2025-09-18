// Centralized loader for header and footer fragments
(function () {
  function loadFragment(targetId, url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok for " + url);
        }
        return response.text();
      })
      .then((html) => {
        var el = document.getElementById(targetId);
        if (el) el.innerHTML = html;
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    Promise.all([
      loadFragment("header", "header.html"),
      loadFragment("footer", "footer.html"),
    ]).catch(function (error) {
      console.error("Error loading layout fragments:", error);
    });
  });
})();

