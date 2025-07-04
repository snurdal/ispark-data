const getIsParkData = (pid = 0) => {
    let url = "https://api.ibb.gov.tr/ispark/"
    if (pid) {
        url = `${url}ParkDetay?id=${pid}`
    } else {
        url = `${url}Park`
    }

    //JSON.stringify: javascript object olarak gelen veriyi metin formatında okunaklı hale getirir.
    fetch(url)
        .then(res => res.json())
        .then(json => document.getElementById('json').innerText = JSON.stringify(json))
        .catch(err => console.error("Fetch JSON Data Error:", err))
}

document.getElementById('btn-json').addEventListener('click', () => getIsParkData(1))
