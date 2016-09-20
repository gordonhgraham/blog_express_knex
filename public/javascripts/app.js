'use strict';

$(document).ready(() => {
  updateUserListener()
});

var id = parseInt(window.location.pathname.split('/')[2])

function updateUserListener(){
  $('#edit-user-form').submit(() => {
    $.ajax({
      url: `/users/${id}`,
      method: 'PUT',
      success: () => {
        console.log('user updated')
      }
    })
  })
}
