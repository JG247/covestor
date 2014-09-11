/**
 * Created by jgpro_000 on 06/09/14.
 */
define([
], function(){
    var options = {
        panelTypes : {
            quotes : "panel quote QUOTES",
            multiManager: "panel mmp MMPPANELS",
            manager: "panel moneyManager MANAGERPANEL"
        }
    };
    var o = options;
    function AnimationView () {};
    AnimationView.prototype.getPanelData =  function (panelData, newPanelId, selectedRandomPanelData) {
        var animationView = new AnimationView();
        animationView.animateView(panelData, newPanelId, selectedRandomPanelData);
        console.log(panelData)
        console.log(selectedRandomPanelData)
    };
    AnimationView.prototype.animateView =  function (panelData, newPanelId, selectedRandomPanelData) {

//        selectedRandomPanelData[0].randomPanel.style.transition = "opacity 0s ease-out 0s";
//        selectedRandomPanelData[0].randomPanel.style.opacity = 0;

        var animationView = new AnimationView();
        animationView.updateView(panelData, newPanelId, selectedRandomPanelData);

    };
    AnimationView.prototype.updateView =  function (panelData, newPanelId, selectedRandomPanelData) {

        if ( panelData.URL != "" && panelData.URL != undefined) {
            selectedRandomPanelData[0].randomPanel.attributes[0].value = panelData.URL;
        }

        if ( panelData.HOVER != "" && panelData.HOVER != undefined) {
            selectedRandomPanelData[0].randomPanel.children[0].children[1].style.color == panelData.HOVER;
        }

        if ( panelData.id != "" && panelData.id != undefined) {
            selectedRandomPanelData[0].randomPanel.attributes[1].value = panelData.id
        }

        if ( panelData.BACKGROUNDCOLOUR != "" && panelData.BACKGROUNDCOLOUR != undefined) {
            selectedRandomPanelData[0].randomPanel.style.backgroundColor = panelData.BACKGROUNDCOLOUR;
        }

        if ( panelData.TITLECOLOUR != "" && panelData.TITLECOLOUR != undefined) {
            selectedRandomPanelData[0].randomPanel.children[0].children[0].style.color = panelData.TITLECOLOUR
        }

        if ( panelData.TITLE != "" && panelData.TITLE != undefined) {
            selectedRandomPanelData[0].randomPanel.children[0].children[0].innerText =  panelData.TITLE;
        }

        if ( panelData.IMAGES != "" && panelData.IMAGES != undefined) {
            selectedRandomPanelData[0].randomPanel.children[0].src =  panelData.IMAGES;
        }

        var animationView = new AnimationView();
        animationView.fadeIn(panelData, newPanelId, selectedRandomPanelData);
    };
    AnimationView.prototype.fadeIn =  function (panelData, newPanelId, selectedRandomPanelData) {

//
//        selectedRandomPanelData[0].randomPanel.style.transition = "opacity 2.5s ease-out 0s";
//        selectedRandomPanelData[0].randomPanel.style.opacity = 1;

    };
    return AnimationView;
});