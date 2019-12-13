const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");

$(document).ready(function(){
  const $buttons = $(".follow-toggle");
  $buttons.each(function(idx){
    let followToggle = new FollowToggle($buttons[idx]);
  });

  const $searches = $(".user-search");
  $searches.each(function(idx){
    let userSearch = new UsersSearch();
  });
});