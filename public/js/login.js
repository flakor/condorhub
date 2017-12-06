

$('#login').click(function(e) {
   e.preventDefault();
  swal({
        title: 'Submit Login to run ajax request',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: (email) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              if (email === 'taken@example.com') {
                swal.showValidationError(
                  'This email is already taken.'
                )
              }
              resolve()
            }, 2000)
          })
        },
        allowOutsideClick: false
        }).then((result) => {
        if (result.value) {
          console.log(result);
          swal({
            type: 'success',
            title: 'Ajax request finished!',
            html: 'Submitted email: ' + result.value
          })
          console.log('afuera');
          console.log(result.value);
          var data = {};
					data.title = "title";
					data.message = result.value;
          console.log(data);
					$.ajax({
						type: 'POST',
						data: JSON.stringify(data),
				    contentType: 'application/json',
            url: 'http://localhost:5000/login',
            success: function(data) {
                            console.log('success');
                            console.log(JSON.stringify(data));
                        }
                    });
            }
        })

})
