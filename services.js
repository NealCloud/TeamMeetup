/**
 * Created by Mad Martigan on 3/11/2016.
 */
(function(){
    angular.module("teampUp")

        .factory('teamFactory', function (){
            var team = {};
            team.test = "test success";
            team.firebaseRef = new Firebase("https://popping-heat-5383.firebaseio.com/teams");

            team.addTeam = function(teamName){
                this.firebaseRef.push({
                    name: teamName
                });
            };
            return team;
        })
})();