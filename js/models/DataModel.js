/**
 * Created by jgpro_000 on 06/09/14.
 */
define([
], function(){
    var options = {
        ajax : {
            get : "GET",
            path: "js/data/data.json"
        },
        compare : {
            undefined : "undefined"
        },
        localStorage: {
            Data: "Data"
        },
        selectors: {
            panel : "panel"
        },
        panelTypes : {
            quotes : "panel quote QUOTES",
            multiManager: "panel mmp MMPPANELS",
            manager: "panel moneyManager MANAGERPANEL"
        },
        delay : {
            min : 1000,
            max : 2000
        }
    };
    function DataModel () {}
    DataModel.prototype.getJsonConstructor =  function (path, success, error) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function()
            {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        if (success)
                            success(JSON.parse(xhr.responseText));
                    } else {
                        if (error)
                            error(xhr);
                    }
                }
            };
            xhr.open("GET", path, true);
            xhr.send();
    };
    DataModel.prototype.getJson = function () {
        var getJsonConstructor = new DataModel();
        getJsonConstructor.getJsonConstructor('js/data/data.json',
            function(data) {
                var dataModel = new DataModel();
                dataModel.selectNewPanelData(data);
            },
            function(xhr) {
                console.error(xhr);
            });
    };
    DataModel.prototype.selectRandomPanel = function () {
        var panels = document.getElementsByClassName('panel'),
        randomPanelPosition = Math.floor((Math.random() * panels.length) + 0),
        randomPanel = panels[randomPanelPosition],
        randomPanelType = randomPanel.attributes.class.value,
        randomPanelId = randomPanel.attributes[1].value,
        randomPanelData = [{"randomPanel" : randomPanel}, {"randomPanelPosition": randomPanelPosition}, {"randomPanelType" : randomPanelType},{"randomPanelId" : randomPanelId}],
        o = options;
        if ( randomPanelType == o.panelTypes.quotes ) {
            return randomPanelData;
        } else if ( randomPanelType == o.panelTypes.manager ) {
            return randomPanelData;
        } else if ( randomPanelType == o.panelTypes.multiManager ) {
            return randomPanelData;
        }
    };
    DataModel.prototype.triggerNewPanelData = function () {
        window.setInterval(function () { dataModel.getJson()}, 2000);
    };
    DataModel.prototype.selectNewPanelData = function (data) {
        var dataModel = new DataModel();
        var selectedRandomPanelData = dataModel.selectRandomPanel();
        if ( selectedRandomPanelData[2].randomPanelType ==  "panel quote QUOTES") {
            var quotes = data.QUOTES,
            id = selectedRandomPanelData[3].randomPanelId;
            for (var i = 0; i < quotes.length; i++) {
                if ( quotes[i].id == id) {
                    quotes.splice(i,1);
                    var newSelectedQuote = Math.floor((Math.random() * quotes.length  ) + 0),
                    newQuote = quotes[newSelectedQuote];
                    return newQuote;
                }
            }
        } else if ( selectedRandomPanelData[2].randomPanelType == "panel moneyManager MANAGERPANEL") {
            var managers = data.MANAGERPANEL,
            id = selectedRandomPanelData[3].randomPanelId;
            for (var i = 0; i < managers.length; i++) {
                if ( managers[i].id == id) {
                    managers.splice(i,1);
                    var newSelectedManager = Math.floor((Math.random()* managers.length) + 0 ),
                    newManager = managers[newSelectedManager];
                    return newManager;
                }
            }
        } else {
            var multiManagers = data.MMPPANELS,
            id = selectedRandomPanelData[3].randomPanelId;
            for (var i = 0; i < multiManagers.length; i++) {
                if ( multiManagers[i].id == id) {
                    multiManagers.splice(i,1);
                    var newSelectedMultiManager = Math.floor((Math.random()* multiManagers.length) + 0 ),
                    newMultiManager = multiManagers[newSelectedMultiManager];
                    return newMultiManager;
                }
            }
        }
    };
    var dataModel = new DataModel();
    dataModel.triggerNewPanelData();
    return DataModel;
});