$(document).ready(function(){
	$('#add-book').submit(function(e){
		e.preventDefault();
		var title = $('#title').val();
		// console.log(title);
		var category = $('#category').val();
		// console.log(category);
		var excerpt = $('#excerpt').val();
		// console.log(excerpt);
		$.ajax( { 
			  url: "https://api.mlab.com/api/1/databases/shopping/collections/books?apiKey=7p_R9bQSW-65TX2Ue_iMQyzUAwIPJ_nz",
			  data: JSON.stringify( {
			  	"title" : title,
			  	"category": category,
			  	"excerpt": excerpt
			  } ),
			  type: "POST",
			  // dataType: "jsonp",
			  contentType: "application/json",
			  success:function(data){
			  	window.location.href="index.html";
			  },
			  error:function(xhr,status,err){
			  	console.log(err);
			  }
		});
	});
});
function getBooks(){

	$.ajax({
		url: "https://api.mlab.com/api/1/databases/shopping/collections/books?apiKey=7p_R9bQSW-65TX2Ue_iMQyzUAwIPJ_nz"
	}).done(function(data){
		var output='<div>';
		$.each(data, function(key,data){
			output+='<div class="well">';
			output+='<h3>'+data.title+'</h3>';
			output+='<p> Category:' +data.category+'</p>';
			output+='<p>'+data.excerpt+'</p>';
			output+='</div>';
		});
		
		$('#books').html(output);
	});
}