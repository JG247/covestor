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
                var saveDataToLocalStorage = new DataModel();
                saveDataToLocalStorage.saveDataToLocalStorage(data);
            },
            function(xhr) {
                console.error(xhr);
            });
    };
    DataModel.prototype.checkLocalStorage = function () {
        if (localStorage != "undefined"){
            return true;
        } else {
            return false;
        }
    };
    DataModel.prototype.saveDataToLocalStorage = function (data) {
        this.data = data;
        var checkLocalStorage = new DataModel();
        if (checkLocalStorage.checkLocalStorage() == true) {
            window.localStorage.setItem("Data", JSON.stringify(data));
        } else {
            // browser not supported
        }
    };
    DataModel.prototype.data = window.localStorage.getItem("Data");
    DataModel.prototype.selectRandomPanel = function () {
        var panels = document.getElementsByClassName('panel'),
        randomPanelPosition = Math.floor((Math.random() * panels.length) + 0),
        randomPanel = panels[randomPanelPosition],
        randomPanelType = randomPanel.attributes.class.value,
        randomPanelData = [{"randomPanel" : randomPanel}, {"randomPanelPosition": randomPanelPosition}, {"randomPanelType" : randomPanelType}],
        o = options;
        if ( randomPanelType == o.panelTypes.quotes ) {
            var id = randomPanel.children[0].children[0].textContent;
            randomPanelData.push({"id": id});
            return randomPanelData;
        } else if ( randomPanelType == o.panelTypes.manager ) {
            var id = randomPanel.children[1].children[0].textContent;
            randomPanelData.push({"id": id});
            return randomPanelData;
        } else if ( randomPanelType == o.panelTypes.multiManager ) {
            var id = randomPanel.children[1].textContent;
            randomPanelData.push({"id": id});
            return randomPanelData;
        }
    };
    var dataModel = new DataModel();
    dataModel.getJson();
    dataModel.selectRandomPanel();
    return DataModel;
});