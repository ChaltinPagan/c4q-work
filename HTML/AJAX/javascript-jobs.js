function jobsCb(response) {

    list = document.querySelector("ul");
    
      console.log(response);

      for(var i =0; i<response.length; i++){
        
            item = document.createElement('li');

            link = document.createElement("a");

            link.href = response[i].url;
        
            link.innerText = response[i].title;
        
            list.appendChild(item);

            item.appendChild(link);
        
           }  
    
    }
    
document.addEventListener('DOMContentLoaded', function(){
    
    
    
        var s = document.createElement('script');
    
        s.src = 'https://jobs.github.com/positions.json?description=javascript&location=new+york&type=full_time&callback=jobsCb' ;
    
        document.body.appendChild(s);
    
        // add callback=jobsCb to your query string
    
    
    
    });

   