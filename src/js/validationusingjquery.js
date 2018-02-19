/* $.validator.setDefaults( {
				submitHandler: function () 
			{
				alert( "submitted!" );
			}
		} );*/
			$(document).ready( function () {
			$( "#signupForm" ).validate( {
				rules:
				{
					firstname: "required",
					lastname: "required",
					username: 
					{
						required: true,
						minlength: 2
					},
					password:
					 {
						required: true,
						minlength: 5
					},
					confirm_password: 
					{
						required: true,
						minlength: 5,
						equalTo: "#password"
					},
					email:
					 {
						required: true,
						email: true
					},
					
				},
				messages:
				{
					firstname: "Please enter your firstname",
					lastname: "Please enter your lastname",
					username: 
					{
						required: "Please enter a username",
						minlength: "Your username must consist of at least 2 characters"
					},
					password: 
					{
						required: "Please provide a password",
						minlength: "Your password must be at least 5 characters long"
					},
					confirm_password: 
					{
						required: "Please provide a password",
						minlength: "Your password must be at least 5 characters long",
						equalTo: "Please enter the same password as above"
					},
					email: "Please enter a valid email address"
					
				}
				
			} );
			$("#btn-add").click(function(){
				$("#btn-update").hide();
			var _fname=$("input[name='firstname']").val();
			var _lname=$("input[name='lastname']").val();
			var _uname=$("input[name='username']").val();
			var _email=$("input[name='email']").val();
			
			var _pwd=$("input[name='password']").val();
			var confirm_pwd=$("input[name='confirm_password']").val();
			console.log(_fname);
			console.log(_lname);
			console.log(_uname);
			console.log(_email);
			console.log(_pwd);
			console.log(confirm_pwd);
var _tr="<tr><td>"+_fname+"</td><td>"+_lname +"</td><td>"+_uname +"</td><td>"+_email +"</td><td>"+_pwd +"</td><td>"+confirm_pwd +"</td><td><button type='button'class='btn btn-primary btn-edit'>Edit</button></td>|<td><button type='button'class='btn btn-danger btn-delete'>Delete</button></td></tr>";
		$("tbody").append(_tr);
			});
			var _trEdit=null;
			$(document).on("click",".btn-edit",function(){
				$("#btn-update").show();
				$("#btn-add").hide();
				 _trEdit=$(this).closest('tr');
				var _fname=$(_trEdit).find('td:eq(0)').text();
				var _lname=$(_trEdit).find('td:eq(1)').text();
				var _uname=$(_trEdit).find('td:eq(2)').text();
				var _email=$(_trEdit).find('td:eq(3)').text();
				var _pwd=$(_trEdit).find('td:eq(4)').text();
				var confirm_pwd=$(_trEdit).find('td:eq(5)').text();
				$("#firstname").val(_fname);
				$("#lastname").val(_lname);
				$("#username").val(_uname);
				$("#email").val(_email);
				$("#password").val(_pwd);
				$("#confirm_password").val(confirm_pwd);
				});
			$("#btn-update").click(function(){
				$("#btn-add").hide();
				if(_trEdit){
				var _fname=$("input[name='firstname']").val();
	
			     var _lname=$("input[name='lastname']").val();
			     
			    var _uname=$("input[name='username']").val();
			    
			    var _email=$("input[name='email']").val();
				
			    var _pwd=$("input[name='password']").val();
			   
			    var confirm_pwd=$("input[name='confirm_password']").val();
			    
			
				$(_trEdit).find('td:eq(0)').text(_fname);
				$(_trEdit).find('td:eq(1)').text(_lname);
				$(_trEdit).find('td:eq(2)').text(_uname);
				$(_trEdit).find('td:eq(3)').text(_email);
				$(_trEdit).find('td:eq(4)').text(_pwd);
				$(_trEdit).find('td:eq(5)').text(confirm_pwd);
				alert("record has been updated");
				_trEdit=null;

				}
			
			});
			$(document).on("click",".btn-danger",function(){
				$(this).closest('tr').remove();
			});
			
			

		});

