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
                output += `<div>
                <div class="card cardd" >
                    <div class="card-body">
                        <div class="card-body">
                    <img id="ajaxdiverimg" src= "${response.image}"/>
                    <ul> 
                        <li> ${response.title} </li>
                        <li> Price : ${response.price} </li>
                        <li> ${response.description} </li>
                        <li> ${response.category} </li>
                        <li> ${response.rating.rate} </li>
                        <li> ${response.rating.count} </li>
                        <a class="thebutton" href="#" class="btn btn-primary">add to cart</a>
                    </ul>
                            </div>
                        </div>
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
