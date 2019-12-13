const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.handleClick();
  }

  render() {

    if (this.followState === "unfollowed") {
      this.$el.attr("disabled", false);
      this.$el.text("Follow!");
    } else if (this.followState === "followed") {
      this.$el.attr("disabled", false);
      this.$el.text("Unfollow!");
    } else {
      this.$el.attr("disabled", true);
    }
  }

  handleClick(){
    this.$el.on("click", (e) => {
      e.preventDefault();
      let that = this;
      if (this.followState === 'followed') { 
        this.followState = 'unfollowing';
        that.render();
        APIUtil.unfollowUser(this.userId)
          .then(function() {
            that.followState = "unfollowed";
            that.render();
          });
      } else {
        this.followState = 'following';
        that.render();
        APIUtil.followUser(this.userId)
          .then(function () {
            that.followState = 'followed';
            that.render();
          });
      }
    });
  }
}

module.exports = FollowToggle;

