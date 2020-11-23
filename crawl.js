const fetch = require('node-fetch');
const jsdom = require("jsdom");

let crawl = async (url) => {
    console.log("Started crawling")

    // let body = await fetch(url)
    // .then(res => res.body())

    let body = await fetch(url)
    .then(res => res.text())
    
    const dom = new jsdom.JSDOM(body);

    title = dom.window.document.querySelector("#productTitle").textContent.trim();
    // console.log(`Title: ${title}`)

    description = dom.window.document.querySelector("#featurebullets_feature_div").textContent.trim();
    // console.log(`Description: ${description}`)

    return `{"title": ${title}, "description": ${description}}`
}

module.exports = { crawl }  