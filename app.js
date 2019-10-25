var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

//request with Jquery
$("#jquery").click(function(){ 
  $.getJSON(url)
    .done(function(data){
      $( "#quote" ).html( data );
      })
    .fail(function(){
      console.log("error");
    })
  });

//request with Axios

//request with XHR

//request with FETC