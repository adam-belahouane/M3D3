const searchImg = () => {
    let query = document.querySelector('input[type="search"]').value

    api(query)
        .then((response) => {
            return response.json()
        })
        .then((body) => {
            console.log(body)
            let row = document.querySelector('#card-row')
            body.photos.forEach((photo) => {
                console.log(photo.src)
                let img = photo
                let col = document.createElement('div')
                col.className = 'col-md-4'

                col.innerHTML = `<div class="card mb-4 shadow-sm">
                                  <img src="${img.src.medium}" alt="">
                                  <div class="card-body">
                                    <p class="card-text">
                                      This is a wider card with supporting text below as a natural
                                      lead-in to additional content. This content is a little bit
                                      longer.
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                      <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">
                                          View
                                        </button>
                                        <button onclick="hide(this.closest('.col-md-4'))" type="button" class="btn btn-sm btn-outline-secondary">
                                          Hide
                                        </button>
                                      </div>
                                      <small class="text-muted">9 mins</small>
                                    </div>
                                  </div>
                                </div>`

                row.appendChild(col)
            })
        })
        .catch(() => {
            console.log('An Error')
        })
}
const seconderyBtn = () => {
    let secondry = document.querySelector('#secondary-img')

    secondry.addEventListener('click', () => {
        api('surf')
        // console.log(api('surf').then(data => data.json()))
    })
}

const createSecond = (body) => {
    seconderyBtn()

    let row = document.querySelector('#card-row')
    row.innerHTML = ''
    body.photos.forEach((photo) => {
        let img = photo
        let col = document.createElement('div')
        col.className = 'col-md-4'
        col.innerHTML = `<div class="card mb-4 shadow-sm">
                              <img src="${img.src.medium}" alt="">
                              <div class="card-body">
                                <p class="card-text">
                                  This is a wider card with supporting text below as a natural
                                  lead-in to additional content. This content is a little bit
                                  longer.
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                  <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">
                                      View
                                    </button>
                                    <button onclick="hide(this.closest('.col-md-4'))" type="button" class="btn btn-sm btn-outline-secondary">
                                      Hide
                                    </button>
                                  </div>
                                  <small class="text-muted">9 mins</small>
                                </div>
                              </div>
                            </div>`
        row.appendChild(col)
    })
}
const api = (search) => {
    // return fetch('https://api.pexels.com/v1/search?query=' + search, {
    return fetch('https://api.pexels.com/v1/search?query=' + search, {
        "method": "GET",
        "headers": {
            "Authorization": "bearer 563492ad6f91700001000001fe7f1bfa604c4313af35b3f3b8ea9b23"
        }
    })
}

const hide = (e) => {
    e.remove()
    // there is a "this" key work that is getting the event 
    // (this) key onto the function is targetinging that specific element
    // ".closest"
}

window.onload = () => {
    seconderyBtn()
}