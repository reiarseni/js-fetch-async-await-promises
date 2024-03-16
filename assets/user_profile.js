const params = new URLSearchParams(document.location.search)
const id = params.get("userId")
const url = `https://jsonplaceholder.typicode.com/users/${id}`

const EXTRATEGY = "ASYNC_AWAIT"; // "FETCH_THEN"

EXTRATEGY == "ASYNC_AWAIT" ? trying() : bringData();

async function trying() {
    try {
      let response = await fetch(url)
      let data = await response.json()
      renderDataToHtml(data)
    } catch(err) {
      //throw "some error happen 3: "+ err
      alert("some error happen 3: "+ err)
    }
}

function bringData() {
	fetch(url)
		.then(
            (response) => response.json(),
            (err) => alert("some error happen 1: "+ err)
         )
		.then(
            (json) => renderDataToHtml(json),
            (err) => alert("some error happen 2: "+ err)
        )
}

function renderDataToHtml(jsonData) {

	document.querySelector(".data").innerHTML += `
            <article class="card mt-3">
              <div class="card-body">
                <h3 class="card-title">${jsonData.name}</h3>
                <p class="card-text"><strong>Telephono:</strong> ${jsonData.phone}</p>
                <p class="card-text"><strong>User name:</strong> ${jsonData.username}</p>
                <p class="card-text"><strong>Email:</strong> <a href="#">${
									jsonData.email
								} </a></p>
                <p class="card-text"><strong>Website:</strong><a href="#"> ${
									jsonData.website
								}</a></p>
                <div class="companyCont">
                    <span><strong>Company</strong></span>    
                    <ul>
                        <li>${jsonData.company.name.toUpperCase()}</li>
                        <li>${jsonData.company.catchPhrase}</li>
                        <li>${jsonData.company.bs}</li>
                    </ul>
                </div>
                <div class="card-text">
                    <span><strong>Address</strong></span>    
                    <ul>
                        <li>${jsonData.address.street}, ${
		jsonData.address.suite
	}</li>
                        <li>${jsonData.address.city}, ${
		jsonData.address.zipcode
	}</li>                        
                    </ul>
                </div>
              </div>    
            </article>
    `
}
