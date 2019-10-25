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
$("#axios").click(function(){
axios.get(url)
.then(function(res){
    $( "#quote" ).html(res.data);
})
.catch(function(){
    console.log("error");
})
});

//request with XHR

//request with FETC