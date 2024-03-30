document.addEventListener("DOMContentLoaded", function() {
    const dashboardButton = document.querySelector(".list-item-big");
    const inputDataButton = document.querySelector(".list-item-big-8");
    const reportButton = document.querySelector(".list-item-big-b");
  
    dashboardButton.addEventListener("click", function() {
      window.location.href = "index.html";
    });
  
    inputDataButton.addEventListener("click", function() {
      window.location.href = "data.html";
    });
  
    reportButton.addEventListener("click", function() {
      window.location.href = "report.html";
    });
  });
  function redirectToForm() {
    window.location.href = 'form.html';
  }
  function goToDataPage() {
    window.location.href = 'data.html';
  }  