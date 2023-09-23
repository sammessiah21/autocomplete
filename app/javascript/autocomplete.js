// $(document).on('turbolinks:load', function() {
//   $('#thing-name').autocomplete({
//     source: '/things/autocomplete',
//     minLength: 2 // Minimum characters before triggering autocomplete
//   });
// });

// $(document).ready(function () {
// debugger
//   $('#thing-name').typeahead({
//     ajax: '/things/autocomplete',
//     minLength: 2 // Minimum characters before triggering autocomplete
//   });
// });

$(document).ready(function () {
  $('#thing-name').autocomplete({
    source: (request, response) => {
      $.ajax({
        url: '/things/autocomplete',
        type: 'GET',
        dataType: 'json',
        data: {
          search: request.term
        },
        success: data =>
          response(data.map((e, idx) => ({ label: e, value: idx })))
      });
    },
    minLength: 2 // Minimum characters before triggering autocomplete
  });
});