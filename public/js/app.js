(function () {

  var app = angular.module('brainsCourse',[]);

  app.controller('CourseController', function(){
    this.course = {
      id: "50592A",
      name: "Advanced SQL Azure",
      description: "This 4-day Instructor Led course This class is an in-depth look at SQL Azure, the database cloud offering in Windows Azure. Learn the basics around server and database provisioning, valid Azure TSQL, and how security is implemented and managed. Advanced topics include partitioning with sharding, database design optimization, backup and synchronization via Synchronization Framework and Azure Data Sync and migrating various database scenarios to SQL Azure",
      audiences: ["IT Professionals", "Developers"],
      length: "4 Days",
      type: ["Course", "Lab"],
      cost: "USD 400"
    };
  });

})();
