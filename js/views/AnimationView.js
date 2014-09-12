/**
 * Created by jgpro_000 on 06/09/14.
 */
define([
    'controllers/UserController'
], function(UserController){
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

    };
    AnimationView.prototype.animateView =  function (panelData, newPanelId, selectedRandomPanelData) {

//        selectedRandomPanelData[0].randomPanel.style.transition = "opacity 0.2s ease-out 0s";
//        selectedRandomPanelData[0].randomPanel.style.opacity = 0.2;

        var animationView = new AnimationView();
        animationView.updateView(panelData, newPanelId, selectedRandomPanelData);

    };
    AnimationView.prototype.updateView =  function (panelData, newPanelId, selectedRandomPanelData) {

        if ( panelData.id != "" && panelData.id != undefined) {
            selectedRandomPanelData[0].randomPanel.attributes[1].value = panelData.id
        }

        if ( selectedRandomPanelData[2].randomPanelType == o.panelTypes.quotes ) {

            if ( panelData.TITLECOLOUR != "" && panelData.TITLECOLOUR != undefined && selectedRandomPanelData[2].randomPanelType == o.panelTypes.quotes) {
                selectedRandomPanelData[0].randomPanel.children[0].children[0].style.color = panelData.TITLECOLOUR
            }

            if ( panelData.BACKGROUNDCOLOUR != "" && panelData.BACKGROUNDCOLOUR != undefined && selectedRandomPanelData[2].randomPanelType == o.panelTypes.quotes) {
                selectedRandomPanelData[0].randomPanel.style.backgroundColor = panelData.BACKGROUNDCOLOUR;
            }

            if ( panelData.URL != "" && panelData.URL != undefined && selectedRandomPanelData[2].randomPanelType == o.panelTypes.quotes ) {
                selectedRandomPanelData[0].randomPanel.attributes[0].value = panelData.URL;
            }
            if ( panelData.HOVER != "" && panelData.HOVER != undefined && selectedRandomPanelData[2].randomPanelType == o.panelTypes.quotes) {
                selectedRandomPanelData[0].randomPanel.children[0].children[1].style.color = panelData.HOVER;
            }
            if ( panelData.TITLE != "" && panelData.TITLE != undefined && selectedRandomPanelData[2].randomPanelType == o.panelTypes.quotes ) {
                selectedRandomPanelData[0].randomPanel.children[0].children[0].innerText =  panelData.TITLE;
            }
        }

        if ( selectedRandomPanelData[2].randomPanelType == o.panelTypes.manager ) {

            if ( panelData.PUBLISHERSHORTNAME != "" && panelData.PUBLISHERSHORTNAME != undefined && selectedRandomPanelData[2].randomPanelType == o.panelTypes.manager ) {
                selectedRandomPanelData[0].randomPanel.children[1].children[0].innerText =  panelData.PUBLISHERSHORTNAME;
            }

            if ( panelData.MODELNAME != "" && panelData.MODELNAME != undefined && selectedRandomPanelData[2].randomPanelType == o.panelTypes.manager ) {
                selectedRandomPanelData[0].randomPanel.children[1].children[1].innerText =  panelData.MODELNAME;
            }

            if ( panelData.publishername != "" && panelData.publishername != undefined && selectedRandomPanelData[2].randomPanelType == o.panelTypes.manager ) {
                selectedRandomPanelData[0].randomPanel.children[0].attributes[1].value =  panelData.publishername;
            }

            if ( panelData.IMAGES != "" && panelData.IMAGES != undefined && selectedRandomPanelData[2].randomPanelType == o.panelTypes.manager ) {
                selectedRandomPanelData[0].randomPanel.children[0].src =  panelData.IMAGES;
            }

            if ( panelData.performance != "" && panelData.performance != undefined && selectedRandomPanelData[2].randomPanelType == o.panelTypes.manager ) {
                var number = Math.round( panelData.performance * 10 ) / 10;
                selectedRandomPanelData[0].randomPanel.children[1].children[2].innerText =  number + "%";
            }

            if ( panelData.MODELURL != "" && panelData.MODELURL != undefined && selectedRandomPanelData[2].randomPanelType == o.panelTypes.manager) {
                selectedRandomPanelData[0].randomPanel.attributes[0].value = "http://covestor.com/" + panelData.MODELURL;
            }
        }

        if ( selectedRandomPanelData[2].randomPanelType == o.panelTypes.multiManager ) {

            if ( panelData.MODELNAME != "" && panelData.MODELNAME != undefined && selectedRandomPanelData[2].randomPanelType == o.panelTypes.multiManager) {
                selectedRandomPanelData[0].randomPanel.children[1].innerText =  panelData.MODELNAME;
            }

            if ( panelData.IMAGES != "" && panelData.IMAGES != undefined && selectedRandomPanelData[2].randomPanelType == o.panelTypes.multiManager ) {
                selectedRandomPanelData[0].randomPanel.children[0].src =  panelData.IMAGES;
            }

            if ( panelData.MODELURL != "" && panelData.MODELURL != undefined && selectedRandomPanelData[2].randomPanelType == o.panelTypes.multiManager ) {
                selectedRandomPanelData[0].randomPanel.attributes[0].value = "http://covestor.com/" + panelData.MODELURL;
            }
        }
//
//        if ( panelData.URL != "" && panelData.URL != undefined) {
//            selectedRandomPanelData[0].randomPanel.attributes[0].value = panelData.URL;
//        }
//
//        if ( panelData.HOVER != "" && panelData.HOVER != undefined) {
//            selectedRandomPanelData[0].randomPanel.children[0].children[1].style.color == panelData.HOVER;
//        }
//
//        if ( panelData.id != "" && panelData.id != undefined) {
//            selectedRandomPanelData[0].randomPanel.attributes[1].value = panelData.id
//        }
//
//        if ( panelData.BACKGROUNDCOLOUR != "" && panelData.BACKGROUNDCOLOUR != undefined) {
//            selectedRandomPanelData[0].randomPanel.style.backgroundColor = panelData.BACKGROUNDCOLOUR;
//        }
//
//        if ( panelData.TITLECOLOUR != "" && panelData.TITLECOLOUR != undefined) {
//            selectedRandomPanelData[0].randomPanel.children[0].children[0].style.color = panelData.TITLECOLOUR
//        }
//
//        if ( panelData.TITLE != "" && panelData.TITLE != undefined) {
//            selectedRandomPanelData[0].randomPanel.children[0].children[0].innerText =  panelData.TITLE;
//        }
//
//        if ( panelData.IMAGES != "" && panelData.IMAGES != undefined) {
//            selectedRandomPanelData[0].randomPanel.children[0].src =  panelData.IMAGES;
//        }
//
//        if ( panelData.PUBLISHERSHORTNAME != "" && panelData.PUBLISHERSHORTNAME != undefined) {
//            selectedRandomPanelData[0].randomPanel.children[1].children[1].innerText =  panelData.PUBLISHERSHORTNAME;
//        }
//
//        if ( panelData.MODELURL != "" && panelData.MODELURL != undefined) {
//            selectedRandomPanelData[0].randomPanel.attributes[0].value =  panelData.MODELURL;
//        }
//
////        if ( panelData.publishername != "" && panelData.publishername != undefined) {
////            selectedRandomPanelData[0].randomPanel.attributes[1].value =  panelData.publishername;
////        }
//
//        if ( panelData.performance != "" && panelData.performance != undefined) {
//            var number = Math.round( panelData.performance * 10 ) / 10;
//            selectedRandomPanelData[0].randomPanel.children[1].children[2].innerText =  number + "%";
//        }
//
//        if ( panelData.MODELNAME != "" && panelData.MODELNAME != undefined && selectedRandomPanelData[2].randomPanelType == o.panelTypes.multiManager) {
//            selectedRandomPanelData[0].randomPanel.children[1].innerText =  panelData.MODELNAME;
//        }

        var animationView = new AnimationView();
        animationView.fadeIn(panelData, newPanelId, selectedRandomPanelData);
    };
    AnimationView.prototype.fadeIn =  function (panelData, newPanelId, selectedRandomPanelData) {

//        selectedRandomPanelData[0].randomPanel.attributes[3].value = false;

//        selectedRandomPanelData[0].randomPanel.style.transition = "opacity 2005s ease-out 1000s";
//        selectedRandomPanelData[0].randomPanel.style.opacity = 0.8;
    };
    return AnimationView;
});