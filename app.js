d3.select(".footer #btn")
  .on("click",function(){
  d3.event.preventDefault();
  var url = "https://randomuser.me/api/";
  fetch(url).then(function(response){
    if(!response.ok){
      throw Error();
    }
    return response.json();
  }).then(function(data){
    d3.select("img")
        .attr('src',data.results[0].picture.medium);
    d3.select("#fullname").text(data.results[0].name.first+' '+data.results[0].name.last);
    d3.select("#username").text(data.results[0].login.username);
    d3.select("div #email").text(data.results[0].email);
    d3.select("div #city").text(data.results[0].location.city);
  }).catch(function(err){
    console.log(err);
  })
});