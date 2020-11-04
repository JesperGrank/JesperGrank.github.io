//Handle all tooltips.

let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Register Modal

let registerAccountButton = document.getElementById('registerAccountButton');
let registerAccountModal = new bootstrap.Modal(document.getElementById('registerAccountModal'), {
    keyboard: false
})
registerAccountButton.addEventListener('click', function () {
    registerAccountModal.toggle();
})