const divUl = document.getElementById("ajaxul");
const divtry = document.getElementById("divtry");
var cardbody = document.getElementById("cardbody");




fetch("https://fakestoreapi.com/products")
    .then(res => {
        var theres = res.json();
        // let parsedjson = JSON.parse(theres);
        // console.log(parsedjson);
        console.log();
        console.log(res);
        console.log(theres);
        theres.forEach(data => {
            
                //title, price, description, category, image, rating
                // console.log(theres, this.title);
                divtry.innerHTML =
                    // `<img id="ajaxdiverimg" src="${data.image}" />`
                    `<ul> 
                        <li> ${data.title} </li>
                    </ul>`;
                
            })
      
        // theres.forEach(element => {
        //     console.log(element);
        // });
    })
    // .then(res => console.log(res.data))
    .then(datas => {
        let output = ""; 
        // console.log(datas)
        datas.forEach((data) => {
            output += `<ul> 
            <li> ${data.title} </li>
        </ul>`;
            //title, price, description, category, image, rating
            // console.log(theres, this.title);
            divtry.innerHTML = output;
                // `<img id="ajaxdiverimg" src="${data.image}" />`
                // `<ul> 
                //     <li> ${data.title} </li>
                // </ul>`;
            
        })
    
        // diverimg.innerHTML = `<img id="ajaxdiverimg" src= "${data.image}"/>`
        // roverimg.innerHTML = `<img id="ajaxroverimg" src = "${data.rovImage}"/>`
        // damimg.innerHTML = `<img id="ajaxdamimg" src = "${data.damImage}"/>`
    })
    // .catch(error => {
    //     console.error('Error:', error)
    // })