
module.exports =function(app, database){
app.get('/', function (req, res) {
    res.send({
    Description: 'notes-backend', 
     CreatedDate: '04/04/18',
     Author: 'Adrian Acosta'
  });
})};
