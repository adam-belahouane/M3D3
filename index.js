const doingSomthing = () => {
    api()
        .then((response) => {
            return response.json()

        })
        .then((body) => {
            console.log(body)
        })
}

const api = () => {
    return fetch('https://api.pexels.com/videos/search?query=People', {
        "method": "GET",
        "headers": {
            "Authorization": "563492ad6f9170000100000120628be3036d41feb0b2936d48c5d3a4"
        }
    })
}


window.onload = function () {
    doingSomthing()
}