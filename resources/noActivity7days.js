//TODO: Yet to be implemented, this is a copy of untouched.js code
var Issue       = require('model').getModelByName('Issue');

exports = module.exports = create;

function create(request, reply) {

  Issue.all({}, gotIssues);
 
  function gotIssues(err, issues) {
    var filtered = [];

    for (var i=0;i<issues.length;i++){
      if(issues[i].labels.length === 0 &&
        !issues[i].assignee && !issues[i].milestone) {
        filtered.push(issues[i]);
      }
    }
    var context = {
      issues: filtered,
      a: 'active'
    };
    reply.view('template', context);
    console.log(filtered[0]);
  }




}
