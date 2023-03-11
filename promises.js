const user = {
    name: 'John',
    lastActivityTime: null,
    posts: []
  };
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.posts.push(post);
        resolve();
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        resolve();
      }, 1000);
    });
  }
  
  function deleteLastPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.posts.length > 0) {
          const deletedPost = user.posts.pop();
          resolve(deletedPost);
        } else {
          reject("ERROR: ARRAY IS EMPTY");
        }
      }, 1000);
    });
  }
  
  createPost({title: 'Post1'})
    .then(() => updateLastUserActivityTime())
    .then(() => createPost({title: 'Post2'}))
    .then(() => updateLastUserActivityTime())
    .then(() => createPost({title: 'Post3'}))
    .then(() => updateLastUserActivityTime())
    .then(() => {
      console.log("All posts created and last activity time updated");
      console.log("User's posts: ", user.posts);
      console.log("User's last activity time: ", user.lastActivityTime);
    })
    .then(() => deleteLastPost())
    .then((deletedPost) => {
      console.log("Post deleted: ", deletedPost.title);
      console.log("User's posts: ", user.posts);
    })
    .catch((error) => {
      console.log(error);
    });
  