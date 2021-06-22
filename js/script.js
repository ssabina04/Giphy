//================PROMISE==================

// setTimeout(() => {
//        console.log('Request data...')
//        const backendData = {
//            server: 'AAA',
//            port: 2000,
//            status: 'working'
//        }
//        setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//        }, 2000)
//     }, 3000)

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'AAA',
//             port: 2000,
//             status: '500'
//         }
//         // resolve(backendData)
//         reject(backendData)
//     }, 2000)
// })
// p.then((data) => {
//     console.log('Promise resolved', data)
// })

// p
//     .then((data) => console.log('OK', data))
//     .catch((err) => {
//         console.error('ERROR:', err)
//     }).finally((data) => console.log('FINALLY'))

//========Fetch========Async========Await=====

// const search = async() => {
//     let url = 'https://www.samurai.com/users'
//     let response = await fetch(url)
//     let request = await response.json()
//     console.log(request)
// }


//========================================

const KEY = '6ql2v8MwBS6ZVv7TfTRCgXNl2hHiLfbX'
const API = 'https://api.giphy.com/v1/gifs/search?api_key='
const secondStr = '&limit=12&q='

const input = document.getElementById('searchGiphy')
const btn = document.getElementById('btn')
const output = document.getElementById('output')
const searchBar = document.createElement('div')
const search = async () => {
    let text = input.value
    let url = API + KEY + secondStr + text
    let response = await fetch(url)
    let request = await response.json()

    output.innerHTML = ''
    input.value = ''

    renderGiphy(request.data)

}

const renderGiphy = (data) => {
    console.log(data)
    data.forEach(element => {
        let ifrm = document.createElement('iframe')
        ifrm.src = element.embed_url
        output.append(ifrm)
    })

}

btn.addEventListener('click', () => {
    search()
})