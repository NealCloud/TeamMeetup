/**
 * Created by Mad Martigan on 3/3/2016.
 */
(function() {
    angular.module("teampUp")
        .controller('teamController', function () {
            this.user = null;
            this.loginAccount = function(){
                this.user = users[0];
            };
        })
        .controller('extraStuff', function (teamFactory) {
            this.tCtrl = teamFactory.test;
            this.addData = function(data){
                console.log(data);
                teamFactory.addTeam(data);
            }
        })
        .directive('teamsPage', function(){
            return{
                restrict: "E",
                templateUrl: "teams.html"
            }
        });

    var users = [
        {
            name: "john",
            userid: 2135,
            email: "Jdog@yahoo.com",
            number: 1 - 959 - 214 - 9348,
            password: "peconpie23",
            public: true,
            premium: false,
            teams: [
                {
                creator: 2135,
                name: "Malicious Ardvarks",
                teamId: 2309,
                leaders: [3245, 23523],
                teamspots: 4,
                standby: 2,
                public: true,
                premium: false,
                players: true,
                events: [{}]
            },
            {
                creator: 2135,
                name: "Frothing Artichokes",
                teamId: 2309,
                leaders: [3245, 23523],
                teamspots: 4,
                standby: 2,
                public: true,
                premium: false,
                players: true,
                events: [{}]
            },
            {
                creator: 2135,
                name: "Tuna Salads",
                teamId: 2309,
                leaders: [3245, 23523],
                teamspots: 4,
                standby: 2,
                public: true,
                premium: false,
                players: true,
                events: [{}]
            }
            ]
        }
    ];

    var events = [
        {
            date: 20150923,
            teams: [2325, 4366],
            public: true,
            premium: false
        }
    ];
})();
