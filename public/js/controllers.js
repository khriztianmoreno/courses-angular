(function () {

  /**
  *  Module
  *
  * Description
  */
  angular.module('course.controllers', [])
    .controller('CourseController', function(){    
      this.course = {
        id: "50592A",
        name: "Advanced SQL Azure",
        description: "This 4-day Instructor Led course This class is an in-depth look at SQL Azure, the database cloud offering in Windows Azure. Learn the basics around server and database provisioning, valid Azure TSQL, and how security is implemented and managed. Advanced topics include partitioning with sharding, database design optimization, backup and synchronization via Synchronization Framework and Azure Data Sync and migrating various database scenarios to SQL Azure",
        audiences: ["IT Professionals", "Developers"],
        technology:"Microsoft Azure SQL Database",
        length: "4 Days",
        type: ["Course", "Lab"],
        cost: "USD 400",
        modules:
        [
            {
              id:"11",
              name:"Introduction to SQL Azure",
              lessons:{
                id:"1",
                name: "Introduction to SQL Azure",
                labs: ["Create a LiveID","Setup Azure Account","Add SQL Azure subscription","Create SQL Azure server","Create SQL Administrators"]
              }
            },
            {
              id:"22",
              name:"SQL Azure RDBMS Support",
              lessons:{
                id:"1",
                name: "RDBMS Support",
                labs: ["Create a LiveID","Setup Azure Account","Add SQL Azure subscription","Create SQL Azure server","Create SQL Administrators"]
              }
            }
        ],
        prerequisites:["Azure","Understanding of basic SQL concepts (TSQL and tables)"]
      };   
    })

    .controller('TabsController', function(){
      this.tab = 1;
      this.selectTab = function(tab){
        this.tab = tab;
      }
    }); 

})();
