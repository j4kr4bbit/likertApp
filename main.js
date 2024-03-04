// Function to reset SME buttons to default state and add event listeners
function setupPage1() {
  const smeYesButton = document.getElementById('smeYes');
  const smeNoButton = document.getElementById('smeNo');
  const evaluationForm = document.getElementById('evaluationForm');

  if (smeYesButton && smeNoButton) { // Check if we are on Page 1
      function resetSMEButtons() {
          smeYesButton.classList.remove('selected');
          smeNoButton.classList.remove('selected');
      }

      // Add event listeners to the SME buttons
      smeYesButton.addEventListener('click', function() {
          resetSMEButtons();
          this.classList.add('selected');
      });

      smeNoButton.addEventListener('click', function() {
          resetSMEButtons();
          this.classList.add('selected');
      });
  }

  if (evaluationForm) { // Check if the evaluation form exists
      evaluationForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent the form from submitting normally

          // Redirect to Page 2
          window.location.href = 'page2.html';
      });
  }
}

// Function to add event listeners for Page 2
function setupPage2() {
  const backButton = document.getElementById('backButton');
  const continueButton = document.getElementById('continueButton');

  if (backButton) { // Check if the back button exists
      backButton.addEventListener('click', function() {
          window.location.href = 'index.html'; // Redirect to Page 1
      });
  }

  if (continueButton) { // Check if the continue button exists
      continueButton.addEventListener('click', function() {
          window.location.href = 'page3.html'; // Redirect to Page 3
      });
  }
}

// Initialize setup functions for each page
setupPage1();
setupPage2();


// This can stay at the end of your existing script
if (document.title === "Large Language Model Response") {
  document.getElementById('backButton').addEventListener('click', function() {
      window.location.href = 'page2.html'; // Adjust if your previous page has a different name
  });

  // Assuming you want to handle the submit action or moving from page 3
  document.getElementById('continueButton').addEventListener('click', function() {
      // Here you can add what happens when 'Submit' is clicked, e.g., save data, show a message
      alert('Submission complete!'); // Placeholder action
      // You might want to redirect or clear form here
  });
}
