$("document").ready(function(){
	$("#stable").one("click",function(){
		$(".table").show();
		$.getJSON("../../vendor/data/data.json",function(data){
			var student_data="";
			$.each(data,function(key,value){
				student_data+="<tr><td>"+value.Sno+"</td><td>"+value.FirstName+"</td><td>"+value.LastName+"</td><td>"+value.Qualification+"</td></tr>";

			
			});
			
			$("#student-table").append(student_data);
		
			$("#student-table").stop();
		
		});
		

	});
	});