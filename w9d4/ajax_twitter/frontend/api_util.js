const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'post',
      dataType: "json",
      data: { user_id: `${id}` }
    });
  },

  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'delete',
      dataType: "json",
      data: { user_id: `${id}` }
    });
  },

  searchUsers: queryVal => {
    // debugger;
    console.log(queryVal);
    return $.ajax({
      url: `/users/search`,
      method: "get",
      dataType: "json",
      // data: { params: {query: queryVal} }
      data: {query: queryVal}
    });
  }




};

module.exports = APIUtil;
