const APIUtil = require('./api_util.js');

class UsersSearch {
  constructor(el){
    this.$el = $(el);
    this.$input = $("#input");
    this.$ul = $(".users");
    this.handleInput();
  }

  handleInput(){
    this.$input.on("input", (e) => {
      this.$ul.html("")
      e.preventDefault();
    
      APIUtil.searchUsers(this.$input.val())
        .then((users) => {
          // console.dir(users);
          // this.$ul.append(users);
          users.forEach((user) => {
            this.$ul.append(`<li>${user.username}</li>`);
          });
        });
    });
  }
}

module.exports = UsersSearch;