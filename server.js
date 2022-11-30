const express = require('express');
const app = express();

//Setting the view engine ejs
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Use res.render to load up an ejs view file

//Index page
app.get('/', (req, res) =>{
    //res.render('pages/index');This works well
    var mascots = [
        {
            name: 'Sammy',
            organization: 'Digital Ocean',
            birthYear: 2012
        },
        {
            name: 'Tux',
            organization: 'Linux',
            birthYear: 1996
        },
        {
            name: 'Moby Dock',
            organization: 'Docker',
            birthYear: 2013
        }
    ];
    var tagLine = "No programming concept is complete without a cute animal mascot,";
    res.render('pages/index',{
        mascots: mascots,
        tagLine: tagLine
        });

});

//About the page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(5000);
console.log('Server is listening on port 5000');