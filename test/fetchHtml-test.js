const { describe, it } = require('mocha');
const should = require('chai').should();
const fetchHtml = require('../lib/fetchHtml');

describe('lib/fetchHtml.js', () => {
  it('should return website html', async () => {
    const data = 'https://npms.io';
    const result = `<!DOCTYPE html> <html lang=""> <head> <meta charset="utf-8"> <meta http-equiv="x-ua-compatible" content="ie=edge"> <title>npms</title> <meta name="description" content="npms was built to empower the javascript community by providing a better and open sourced search for node modules."> <meta name="viewport" content="width=device-width,initial-scale=1"> <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet"> <link href="https://fonts.googleapis.com/css?family=Oleo+Script:700" rel="stylesheet" type="text/css"> <link rel="stylesheet" href="/build/app.a0fe6ba5445b6cc27ce5.css"> <link title="npms.io" type="application/opensearchdescription+xml" href="https://npms.io/opensearch.xml" rel="search"> </head> <body> <div id="root"></div> <script src="/build/main.a0fe6ba5445b6cc27ce5.js"></script> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/outdated-browser/1.1.3/outdatedbrowser.min.css"> <script src="https://cdnjs.cloudflare.com/ajax/libs/outdated-browser/1.1.3/outdatedbrowser.min.js"></script> <div id="outdated"> <h6>Your browser is out-of-date!</h6> <p>Update your browser to view this website correctly. <a id="btnUpdateBrowser" href="http://outdatedbrowser.com/">Update my browser now </a></p> <p class="last"><a href="#" id="btnCloseUpdateBrowser" title="Close">&times;</a></p> </div> <script>window.onload=function(){outdatedBrowser({bgColor:"#f25648",color:"#ffffff",lowerThan:"borderImage",languagePath:""})}</script> <script>!function(e,a,t,n,g,c){e.GoogleAnalyticsObject=n,e.ga||(e.ga=function(){(e.ga.q=e.ga.q||[]).push(arguments)}),e.ga.l=+new Date,g=a.createElement(t),c=a.getElementsByTagName(t)[0],g.src="https://www.google-analytics.com/analytics.js",c.parentNode.insertBefore(g,c)}(window,document,"script","ga"),ga("create","UA-76842622-1","auto"),ga("send","pageview")</script> <script type="application/ld+json"> {
          "@context": "http://schema.org",
          "@type": "WebSite",
          "url": "https://npms.io/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://npms.io/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        } </script> </body> </html> `;
    const response = await fetchHtml(data);
    response.should.equal(result);
  });
});
