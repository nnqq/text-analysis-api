const { describe, it } = require('mocha');
const should = require('chai').should();
const countWordRepeats = require('../lib/countWordRepeats');

describe('lib/countWordRepeats.js', () => {
  it('should return desc sorted array of words frequency', () => {
    const data = '<html>'
      + '<!-- Text between angle brackets is an HTML tag and is not displayed.'
      + 'Most tags, such as the HTML and /HTML tags that surround the contents of'
      + 'a page, come in pairs; some tags, like HR, for a horizontal rule, stand '
      + 'alone. Comments, such as the text you\'re reading, are not displayed when'
      + 'the Web page is shown. The information between the HEAD and /HEAD tags is '
      + 'not displayed. The information between the BODY and /BODY tags is displayed.-->'
      + '<head>'
      + '<title>Enter a title, displayed at the top of the window.</title>'
      + '</head>'
      + '<!-- The information between the BODY and /BODY tags is displayed.-->'
      + '<body>'
      + '<h1>Enter the main heading, usually the same as the title. </h1>'
      + '<p>Be <b>bold</b> in stating your key points. Put them in a list: </p>'
      + '<ul>'
      + '<li>The first item in your list.</li>'
      + '<li>The second item; <i>italicize</i> key words. </li>'
      + '</ul>'
      + '<p>Improve your image by including an image. </p>'
      + '<p><img src="http://www.mygifs.com/CoverImage.gif" alt="A Great HTML Resource"></p>'
      + '<p>Add a link to your favorite <a href="https://www.dummies.com/">Web site</a>.'
      + 'Break up your page with a horizontal rule or two. </p>'
      + '<hr>'
      + '<p>Finally, link to <a href="page2.html">another page</a> in your own Web site.</p>'
      + '<!-- And add a copyright notice.-->'
      + '<p>&#169; Wiley Publishing Publishing Publishing Publishing Publishing, 2011.</p>'
      + '<script>const someFunc = (number) => number + 1;</script>\n\n'
      + '<style>p {\n'
      + '  text-align: center;\n'
      + '  color: red;\n'
      + '}</style>'
      + '</body>'
      + '</html>';

    const result = [
      {
        count: 5,
        keyword: 'publishing',
      },
      {
        count: 2,
        keyword: 'image',
      },
      {
        count: 1,
        keyword: 'usually',
      },
      {
        count: 1,
        keyword: 'title',
      },
      {
        count: 1,
        keyword: 'stating',
      },
      {
        count: 1,
        keyword: 'points',
      },
      {
        count: 1,
        keyword: 'first',
      },
      {
        count: 1,
        keyword: 'listthe',
      },
      {
        count: 1,
        keyword: 'second',
      },
      {
        count: 1,
        keyword: 'italicize',
      },
      {
        count: 1,
        keyword: 'words',
      },
      {
        count: 1,
        keyword: 'heading',
      },
      {
        count: 1,
        keyword: 'enter',
      },
      {
        count: 1,
        keyword: 'including',
      },
      {
        count: 1,
        keyword: 'favorite',
      },
      {
        count: 1,
        keyword: 'sitebreak',
      },
      {
        count: 1,
        keyword: 'horizontal',
      },
      {
        count: 1,
        keyword: 'finally',
      },
      {
        count: 1,
        keyword: 'another',
      },
      {
        count: 1,
        keyword: 'site©',
      },
      {
        count: 1,
        keyword: 'wiley',
      },
      {
        count: 1,
        keyword: 'improve',
      },
    ];

    countWordRepeats(data).should.eql(result);
  });
});
