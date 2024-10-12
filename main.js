// Handle Flatpickr initialization

  // Handle screen size checks
  const isResponsive = window.innerWidth <= 991;
function createLargeElement() {
  // This is the large HTML block you want to repeat
  if (window.location.pathname === '/index.html') {
    if (!isResponsive) {
      return `
  <div class="mt-3 item-row ">
              <div class="w-100 card-left" id="firstRow">
                <div class="row h-100 row-card w-100">
                  <div class="col-lg-2 col-md-12 col-sm-12 one-col">
                    <button class="btn btn-add" id="firstModalButton" data-bs-toggle="modal"
                      data-bs-target="#firstModal">الإعلان</button>
                  </div>
                  <div class="col-lg-2 col-md-12 col-sm-12 one-col">
                    <div class="judge">
                      <p>منع سفر</p>
                      <img src="./assets/Travel_Block_Icon.png" class="judge-img" alt="">
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-12 col-sm-12 one-col">
                    <div class="names">
                      <p>محمد خالد عبدالله أحمد</p>
                      <p>محمد خالد عبدالله أحمد</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-12 col-sm-12 one-col">
                    <p>محمد خالد عبدالله أحمد</p>
                  </div>
                  <div class="col-lg-2 col-md-12 col-sm-12 one-col first-col">
                    <p class="id">64784676</p>
                    <div class="time-day">
                      <p>2024/8/26</p>
                      <p>الاثنين</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>     `;
    }else{
      return `
      <div class=" mt-3  item-row">

    <div class="w-100 card-left">
      <div class="row h-100 row-card w-100">
        <div class="responsive-row one-col">
          <button class="btn  btn-add" onclick="showModal('firstModal')">الإعلان</button>
        </div>
        <div class="responsive-row one-col">
          <div class="judge">
            <p>منع سفر</p>
            <img src="./assets/Travel_Block_Icon.png" class="judge-img" alt="">
          </div>
        </div>
        <div class="responsive-row one-col">
          <div class="names">
            <p>محمد خالد عبدالله أحمد</p>
            <p>محمد خالد عبدالله أحمد</p>
          </div>
        </div>
        <div class="responsive-row one-col">
          <p>محمد خالد عبدالله أحمد</p>
        </div>
        <div class="responsive-row one-col first-col">
          <p class="id">64784676</p>
          <div class="time-day">
            <p>2024/8/26</p>
            <p>الاثنين</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card-left  h-100" >
      <div class="labels-row">
        <p class="p-text">الإجراء</p>
        <p class=" p-text">الحكم</p>
        <p class="p-text">المدعى عليه</p>
        <p class="p-text">المدعي</p>
        <p class="p-text">الآلي والتاريخ</p>
      </div>

    </div>
  </div>
      `;
    }
  }else{
    if (!isResponsive) {
      return `
      <div class="row m-1 mt-3 item-row">
                <!-- Non-responsive part -->
                <div class="col-lg-2 col-md-3 col-sm-4 one-col">
                  <button class="btn btn-add" onclick="showModal('firstModal')">
                    <img src="./assets/Icon akar-arrow-left.png" class="arrow-img" alt="">
                    تنفيذ
                  </button>
                </div>
                <div class="col-lg-1 col-md-1 col-sm-4 one-col">
                  <img src="./assets/pdf.png" class="judge-img" alt="">
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 one-col">
                  <div class="statuesplus">
                    <p>تم دفع المبلغ</p>
                    <img src="./assets/check-mark.png" alt="">
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4 one-col">
                  <div class="names">
                    <div class="name">
                      <div class="two-titles">
                        <p>محمد خالد عبدالله أحمد </p>
                      </div>
                      <div class="judgment">
                        <img src="./assets/Path 67748.png" alt="">
                        <p>منع سفر</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 one-col">
                  <p>محمد خالد عبدالله أحمد</p>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4 one-col dateandtime">
                  <div class="all-in-one">
                    <p class="id">12345789</p>
                    <div class="time-day">
                      <p>2024/8/2</p>
                      <p>الاثنين</p>
                    </div>
                  </div>
                </div>
              </div>
      `;
    }else{
      return `
<!-- this is negative state -->
<div class="row m-1 mt-3 item-row">
    <div class="firstline">
      <button class="btn  btn-add" onclick="showModal('firstModal')">
        <img src="./assets/Icon akar-arrow-left.png" class="arrow-img" alt="">
        تنفيذ
      </button>
      <img src="./assets/pdf.png" class="judge-img" alt="">

      <div class="statuesfalse">
          <p>لم يتم الدفع</p>
          <img src="./assets/Icon ionic-ios-close-circle-outline.png" alt="">
      </div>
    </div>
    <div class="col-lg-12 col-md-3 col-sm-4 one-col">
      <div class="names">
        <div class="name">
          <div class="two-titles">
            <p>:المدعى عليه</p>
            <p>محمد خالد عبدالله أحمد</p>
          </div>
          <div class="judgment ">
            <img src="./assets/Path 67748.png" alt="">
            <p>منع سفر</p>
          </div>
          <div class="judgment">
            <img src="./assets/Path 67749.png" class="judge2" alt="">
            <p>منع سفر</p>
          </div>
        </div>

      </div>
    </div>
    <div class="col-lg-12 col-md-3 col-sm-4 one-col">
      <div class="two-titles">
        <p>:المدعى</p>
        <p>محمد خالد عبدالله أحمد</p>
      </div>
    </div>
    <div class="col-lg-12 col-md-3 col-sm-4 one-col dateandtime">
      <p class="p-text" >الآلي والتاريخ</p>
      <div class="all-in-one">
        <p class="id">64784676</p>
        <div class="time-day">
          <p>2024/8/26</p>
          <p>الاثنين</p>
        </div>
      </div>
    </div>
  </div>


<!-- this is positiv state --> 
<div class="row m-1 mt-3 item-row">
    <div class="firstline">
      <button class="btn  btn-add" onclick="showModal('firstModal')">
        <img src="./assets/Icon akar-arrow-left.png" class="arrow-img" alt="">
        تنفيذ
      </button>
      <img src="./assets/pdf.png" class="judge-img" alt="">

      <div class="statuesplus">
        <p>تم دفع المبلغ</p>
        <img src="./assets/check-mark.png" alt="">
      </div>
    </div>
    <div class="col-lg-12 col-md-3 col-sm-4 one-col">
      <div class="names">
        <div class="name">
          <div class="two-titles">
            <p>:المدعى عليه</p>
            <p>محمد خالد عبدالله أحمد</p>
          </div>
          <div class="judgment ">
            <img src="./assets/Path 67748.png" alt="">
            <p>منع سفر</p>
          </div>
          <div class="judgment">
            <img src="./assets/Path 67749.png" class="judge2" alt="">
            <p>منع سفر</p>
          </div>
        </div>

      </div>
    </div>
    <div class="col-lg-12 col-md-3 col-sm-4 one-col">
      <div class="two-titles">
        <p>:المدعى</p>
        <p>محمد خالد عبدالله أحمد</p>
      </div>
    </div>
    <div class="col-lg-12 col-md-3 col-sm-4 one-col dateandtime">
      <p class="p-text" >الآلي والتاريخ</p>
      <div class="all-in-one">
        <p class="id">64784676</p>
        <div class="time-day">
          <p>2024/8/26</p>
          <p>الاثنين</p>
        </div>
      </div>
    </div>
  </div>
      `;
    }
  }
}

function repeatElements(count) {
  const container = document.getElementById('itemList');
  for (let i = 0; i < count; i++) {
      container.innerHTML += createLargeElement();
  }
}
repeatElements(5)



function addNewRow() {
    if (window.location.pathname != '/index.html') {
      return
    }
    // Get the container where rows are appended
    const dataRow = document.getElementById('itemList');

    // Clone the first row
    const firstRow = document.querySelector('.item-row');
    const newRow = firstRow.cloneNode(true); // Clone the entire row

    // Optional: Modify the content of the new row if needed
    // For example, you can change the text of names or dates here
    for (let i = 0; i < 10; i++) {
        const newRow = firstRow.cloneNode(true); // Clone the row
  
        // Optional: Modify the content of the new row if needed
        newRow.querySelector('.id').innerText = Math.floor(Math.random() * 100000000); // Random new ID
        newRow.querySelector('.time-day p').innerText = '2024/10/' + (i + 1); // Update date example
  
        // Append the new row to the container
        dataRow.appendChild(newRow);
      }
  }
  addNewRow();

  // State to store card status
let cardStates = [false, false, false, false, false, false];

// Method to toggle card states
function toggleCardState(index) {
  cardStates[index] = !cardStates[index];
  const card = document.getElementById(`card${index}`);
  if (cardStates[index]) {
      card.classList.add('active');
  } else {
      card.classList.remove('active');
  }
}
document.addEventListener('DOMContentLoaded', function() {

    flatpickr('.date', {
      dateFormat: 'Y-m-d',
      disableMobile: true,
      locale: {
        firstDayOfWeek: 1
      }
    });
  
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
  

});
  
  function checkScreenSize() {
    document.querySelectorAll('.row-card').forEach(row => {
      if (isResponsive) {
        row.classList.add('card-left');
      } else {
        row.classList.remove('card-left');
      }
    });
  }
  

  document.addEventListener("DOMContentLoaded", function () {
    // Select the search input field
    const searchInput = document.querySelector(".form-control");

    // Select all the rows that contain the searchable data
    const itemList = document.querySelectorAll("#itemList .item-row");

    // Listen for input events on the search input field
    searchInput.addEventListener("input", function (e) {
      const searchTerm = e.target.value.toLowerCase().trim(); // Get input value, convert to lowercase, and trim spaces

      // Loop through all item rows
      itemList.forEach(function (row) {
        const rowText = row.innerText.toLowerCase(); // Get the text content of the row and convert to lowercase
        
        // Check if the row contains the search term
        if (rowText.includes(searchTerm)) {
          row.style.display = ""; // If it matches, show the row
        } else {
          row.style.display = "none"; // If it doesn't match, hide the row
        }
      });
    });
  });


// document.addEventListener('DOMContentLoaded', function() {
//   const mainContent = document.getElementById('mainContent');

//   if (!isResponsive) {
//     // Non-responsive layout
//     mainContent.innerHTML = `
//       <div class="row main-content">
//         <div class="col-lg-9 col-md-12 col-sm-12 mb-3">
//           ${sharedParameter === 'add' ? '<app-add-table></app-add-table>' : '<app-implement-table></app-implement-table>'}
//         </div>
//         <div class="col-lg-3 col-md-12 col-sm-12">
//           <app-choose-container></app-choose-container>
//         </div>
//       </div>
//     `;
//   } else {
//     // Responsive layout
//     mainContent.innerHTML = `
//       <div class="row main-content">
//         <div class="col-lg-3 col-md-12 col-sm-12">
//           <app-choose-container></app-choose-container>
//         </div>
//         <div class="col-lg-9 col-md-12 col-sm-12 mb-3">
//           ${sharedParameter === 'add' ? '<app-add-table></app-add-table>' : '<app-implement-table></app-implement-table>'}
//         </div>
//       </div>
//     `;
//   }
// });

const labelsRow = document.getElementById('labelsRow');

function toggleResponsive() {
  if (isResponsive) {
    labelsRow.style.display = 'none';
  } else {
    labelsRow.style.display = 'flex';
  }
}

// // Event listener for first modal button
// document.getElementById('firstModalButton').addEventListener('click', () => {
//   document.getElementById('firstModal').style.display = 'block';
// });

// // Close first modal
// document.getElementById('closeFirstModal').addEventListener('click', () => {
//   document.getElementById('firstModal').style.display = 'none';
// });

// // Confirm first modal action
// document.getElementById('confirmFirstModal').addEventListener('click', () => {
//   document.getElementById('firstModal').style.display = 'none';
//   alert('تم تأكيد الإعلان');
// });

// Example toggle for class
function toggleClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}
function gotot(params) {
    if (params === 'add') {
        if (window.location.pathname != '/index.html') {
            window.location.pathname = './index.html';
        }
    }else{
        window.location.pathname = './implement.html';
    }
}





  // Hide modal function
  function hideModal(modalId) {
    var modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
    
    if (modal) {
      modal.hide();
  
      // Use 'hidden.bs.modal' event to handle backdrop removal after modal is fully closed
      document.body.querySelectorAll('.modal-backdrop').forEach(function (backdrop) {
        backdrop.remove();
      });
      document.getElementById(modalId).addEventListener('hidden.bs.modal', function () {
        // Remove all modal-backdrops to prevent stacking
  
        // Reset body overflow style after modal is closed and backdrops are removed
        document.body.style.overflow = '';
      }, { once: true });
    }
  }

  // Show modal function
// Function to hide modal and only after it's hidden, show the next modal
// function showModal(modalId) {
//   var modal = new bootstrap.Modal(document.getElementById(modalId));
//   modal.show();
// }
function showModal(modalId) {
    // Check if any modal is open
    const currentModal = document.querySelector('.modal.show');
    
    if (currentModal) {
        // Wait until the current modal is fully hidden before showing the next one
        currentModal.addEventListener('hidden.bs.modal', function() {
            var modal = new bootstrap.Modal(document.getElementById(modalId));
            modal.show();
        }, { once: true });
        
        // Hide the currently open modal
        bootstrap.Modal.getInstance(currentModal).hide();
    } else {
        // If no modal is open, simply show the new one
        var modal = new bootstrap.Modal(document.getElementById(modalId));
        modal.show();
    }
}


  // Function to toggle calculation options
  function onIsCalc(isCalc) {
    const optionSection = document.getElementById('optionSection');
    const radio = document.getElementById('radio-inline-calc');
    
    if (!optionSection) {
      console.error('Option sections not found');
      return;
    }

    if (isCalc) {
      optionSection.classList.remove('hidden');
      radio.classList.add('below-radio');
    } else {
      optionSection.classList.add('hidden');
      radio.classList.remove('below-radio');
    }
  }

  // Function to handle option change
  function onOptionChange(option) {
    
  const option1BtnDetails = document.getElementById('option1-details');
  const option2BtnDetails = document.getElementById('option2-details');
  const option1Btn = document.getElementById('option1Btn');
  const option2Btn = document.getElementById('option2Btn');
  if (option === 'option1') {
    // Add active class to option1 and remove from option2
    option1Btn.classList.add('btn-options-active');
    option1Btn.classList.remove('btn-options-inactive');

    option2Btn.classList.add('btn-options-inactive');
    option2Btn.classList.remove('btn-options-active');

    option1BtnDetails.classList.remove('hide');
    option2BtnDetails.classList.add('hide');
} else if (option === 'option2') {
    // Add active class to option2 and remove from option1
    option2Btn.classList.add('btn-options-active');
    option2Btn.classList.remove('btn-options-inactive');
    
    option1Btn.classList.add('btn-options-inactive');
    option1Btn.classList.remove('btn-options-active');
    
    option1BtnDetails.classList.add('hide');
    option2BtnDetails.classList.remove('hide');

  }
}

  // Function to select a value in dropdown
  function selectDuration(spanClassName, value) {
    // Get all elements with the specified class name
    const elements = document.getElementsByClassName(spanClassName);
    
    // Convert HTMLCollection to an array and iterate over each element
    Array.from(elements).forEach(element => {
      element.innerText = value; // Update only the innerText of the span
    });
  }
  


