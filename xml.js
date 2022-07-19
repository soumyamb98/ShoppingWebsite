// $(document).ready(function () {
    const xhttp = new XMLHttpRequest();
    var cardbody = document.getElementById("cardbody");




    xhttp.open("GET", "https://fakestoreapi.com/products", true);
    
    
    xhttp.onload = function () {
        if (this.status == 200) {
            var response = JSON.parse(this.responseText)
            console.log(this.responseText)
            var key = Object.keys(response);
            var value = Object.values(response)
            console.log(key)
            console.log(value)
            let output = "";
            response.forEach((response) => {
                output += `<div class="container card cards-list">
                    
                    <div class="card-body">
                    <div class="card_image">
                    <img class="card-img-top" id="ajaximg" src= "${response.image}"/>
                    </div>
                    <ul class="card-text ajaxul">
                        <li class="ajaxtitleli card_title"> ${response.title} </li>
                        <li class="ajaxli"> Price : ${response.price} </li>
                        <li class="ajaxli"> ${response.description} </li>
                        <li class="ajaxli"> Category: ${response.category} </li>
                        <li class="ajaxli"> The product rating: ${response.rating.rate} </li>
                        <li class="ajaxli"> ${response.rating.count} </li>
                        <a href="#" class="btn btn-primary thebutton">add to cart</a>
                    </ul>
                    </div>
                </div>`
                // console.log(response.rating);
            
                
                //     output += `<ul> 
                //     <li> ${response.title} </li>
                // </ul>`;
                //title, price, description, category, image, rating
                
            })
            
            cardbody.innerHTML = output;
            
        }

        // console.log(this.responseText)
    }

    
    xhttp.send();

// })
