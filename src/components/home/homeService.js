angular.module("app")
.service("homeService", function($http){
  this.getBlogs = ()=> {
    return $http.get("/api/blogs")
    .then(function(response){
      response.data.reverse()
      const blogs = []
      response.data.forEach((cv, i, arr)=>{
      blogs.push(arr[i])
      })
      return blogs;
    })
  }
})