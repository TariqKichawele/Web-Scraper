const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const cors = require('cors');

const app = express();
const url = 'https://www.theguardian.com/uk'

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const articles = [];
        $('h3', html).each(function() {
           const title = $(this).text()
           const url = $(this).find('a').attr('href')
           articles.push({
            title,
            url
           });
        })

        console.log(articles);
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));




