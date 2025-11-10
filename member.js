function skillsMember() {
    return {
        restrict: "E",
        templateUrl: "skills/skills-member.html",
        controller: "SkillsMemberController",
        controllerAs: "vm",
        bindToController: true,
        scope: {
            member: "="
        }
    };
}