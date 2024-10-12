		document.addEventListener('DOMContentLoaded', function () {
			var caseListModal = document.getElementById('remote_cases_list_modal');
			var caseDateModal = document.getElementById('remote_case_by_date_modal');
			caseListModal.addEventListener('show.bs.modal', function () {
				caseDateModal.style.display = 'none';
			});
			caseListModal.addEventListener('hidden.bs.modal', function () {
				caseDateModal.style.display = 'block';
			});
		});
		$("#kt_daterangepicker_1").daterangepicker({
			altInput: true,
			altFormat: "F j, Y",
			dateFormat: "Y-m-d",
			mode: "range"
		});
		$("#kt_datepicker_7").flatpickr({
			altInput: true,
			altFormat: "F j, Y",
			dateFormat: "Y-m-d",
			mode: "range"
		});
		
		document.addEventListener('DOMContentLoaded', function () {
			var stackedModal = document.getElementById('kt_modal_stacked_2');
			var inviteFriendsModal = document.getElementById('accept_case_modal');

			stackedModal.addEventListener('show.bs.modal', function () {
				inviteFriendsModal.style.display = 'none';
			});

			stackedModal.addEventListener('hidden.bs.modal', function () {
				inviteFriendsModal.style.display = 'block';
			});
		});
		document.addEventListener('DOMContentLoaded', function () {
			var userinfoModal = document.getElementById('party_info_modal');
			var atrafModal = document.getElementById('case_details_modal');

			userinfoModal.addEventListener('show.bs.modal', function () {
				atrafModal.style.display = 'none';
			});

			userinfoModal.addEventListener('hidden.bs.modal', function () {
				atrafModal.style.display = 'block';
			});
		});
		$("#kt_daterangepicker_1").daterangepicker({
			altInput: true,
			altFormat: "F j, Y",
			dateFormat: "Y-m-d",
			mode: "range"
		});
$("#kt_datepicker_7").flatpickr({
			altInput: true,
			altFormat: "F j, Y",
			dateFormat: "Y-m-d",
			mode: "range"
		});
		document.addEventListener('show.bs.modal', function (event) {
			var button = event.relatedTarget;
			var targetTab = button.getAttribute('data-bs-tab-target');
			if (targetTab) {
				var tabToActivate = document.querySelector('button[data-bs-target="' + targetTab + '"]');
				if (tabToActivate) {
					var tabInstance = new bootstrap.Tab(tabToActivate);
					tabInstance.show();
				}
			}
		});
document.addEventListener('DOMContentLoaded', function () {
    var securityQuestionModal = document.getElementById('security_question_modal');
    var loginAuthModal = new bootstrap.Modal(document.getElementById('login_authentication_modal'));

    securityQuestionModal.addEventListener('show.bs.modal', function () {
        loginAuthModal.hide();
    });

    securityQuestionModal.addEventListener('hidden.bs.modal', function () {
        loginAuthModal.show();
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var kmIModal = document.getElementById('kmi_modal');
    var loginAuthModal = new bootstrap.Modal(document.getElementById('login_authentication_modal'));

    kmIModal.addEventListener('show.bs.modal', function () {
        loginAuthModal.hide();
    });

    kmIModal.addEventListener('hidden.bs.modal', function () {
        loginAuthModal.show();
    });
});
  document.addEventListener('DOMContentLoaded', function () {
    // Function to remove the backdrop manually
    function removeModalBackdrop() {
      var backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.parentNode.removeChild(backdrop);
      }
    }

    // Get all modals
    var modals = document.querySelectorAll('.modal');

    // Add event listener to each modal to handle the hidden event
    modals.forEach(function (modal) {
      modal.addEventListener('hidden.bs.modal', function () {
        // Use a short timeout to ensure all modals have finished closing
        setTimeout(function () {
          // Check if there are any modals still open
          var openModals = document.querySelectorAll('.modal.show');
          if (openModals.length === 0) {
            removeModalBackdrop();
          }
        }, 500);
      });
    });
  });
  $("#datepicker_from").flatpickr();
  $("#datepicker_to").flatpickr();