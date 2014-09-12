/**
 * Created by jgpro_000 on 06/09/14.
 */
define([
    'models/DataModel',
    'views/AnimationView'
], function(DataModel, AnimationView){
    function UserController () {};
    UserController.prototype.interact =  function () {
        var data = new DataModel();
        return data.getJson();
    };
    UserController.prototype.getPanelData = function (panelData, newPanelId, selectedRandomPanelData) {
        var animationView = new AnimationView();
        animationView.getPanelData(panelData, newPanelId, selectedRandomPanelData);
    };
    UserController.prototype.previousPanelData = function (previousPanelData) {
        console.log("Previous panel data" +  " " + previousPanelData)
    };
    return UserController;
});