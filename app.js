const app = require('express')();
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const apiTextAnalysis = require('./routes/api/textAnalysis');

app.enable('trust proxy');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);
app.use(bodyParser.json());
app.use('/api/textAnalysis', apiTextAnalysis);

app.listen(process.env.PORT || 3000);
