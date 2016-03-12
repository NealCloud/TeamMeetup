/**
 * Created by Mad Martigan on 3/11/2016.
 */
(function(){
    angular.module("teampUp")

        .factory('extraStuff', function () {
            this.Teams = "hey this extra!";

            this.firebaseRef = new Firebase("https://popping-heat-5383.firebaseio.com/");

            this.addTeam = function(teamName){
                firebaseRef.push({
                    name: teamName
                });
            };
        })
})();