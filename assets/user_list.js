const url = "https://jsonplaceholder.typicode.com/users/";

const EXTRATEGY = "ASYNC_AWAIT"; // "FETCH_THEN"

const callAPI = async(renderCallBack) => {
    try {
      let response = await fetch(url)
      let data = await response.json()
   
      renderCallBack(data)
    } catch(err) {
      //throw "some error happen 3:" + err
      alert("some error happen 3: "+ err)
    }
}

function bringData() {
	fetch(url)
		.then(
      (response) => response.json(),
      (err) => alert("some error happen 1: "+ err )
    )
		.then(
      (json) => renderDataToHtml(json),
      (err) => alert("some error happen 1: "+ err )
    )
}

EXTRATEGY == "ASYNC_AWAIT" ? callAPI(renderDataToHtml) : bringData();

function renderDataToHtml(jsonData) {

	jsonData.forEach((user) => {
		document.querySelector(".data").innerHTML += `
          <div class="col-md-4 mt-4">
                <a class="card" href="user_profile.html?userId=${user.id}">
                    <article class="card-body">
                        <h3 class="card-title">${user.name}</h3>
                        <p class="card-text"><strong>Telephono:</strong> ${user.phone}</p>
                        <p class="card-text"><strong>User name:</strong> ${user.username}</p>
                        <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                    </article>
                </a>
          </div>
            `
	})

}