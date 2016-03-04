/**
 * Created by Mad Martigan on 3/3/2016.
 */

app.controller('teamController', function($scope){
    $scope.title = "Title1";
    $scope.loginFlag = true;
    //$scope.teamViewFlag = false;
    $scope.login = function(){
        $scope.user = {
            name: "john",
            userid: 2135,
            email: "Jdog@yahoo.com",
            number: 1-959-214-9348,
            password: "peconpie23",
            public: true,
            premium: false,
            teams: [{
                creator: 2135,
                name: "Malicious Ardvarks",
                teamId: 2309,
                leaders: [3245,23523],
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
                leaders: [3245,23523],
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
                leaders: [3245,23523],
                teamspots: 4,
                standby: 2,
                public: true,
                premium: false,
                players: true,
                events: [{}]
            }
            ],
            events: [
                {
                    date: 20150923,
                    teams: [2325, 4366],
                    public: true,
                    premium: false
                }
                ]
        };
        $scope.loginFlag = false;
        $scope.accountFlag = true;
    }
    $scope.teamView = function(){
        $scope.accountFlag = false;
        $scope.teamViewFlag = true;
    };
    $scope.user = null;
});