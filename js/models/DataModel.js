/**
 * Created by jgpro_000 on 06/09/14.
 */
define([
], function(){
    function DataModel () {};
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
        randomPanelNumber = Math.floor((Math.random() * panels.length) + 0),
        randomPanel = panels[randomPanelNumber];
        return randomPanel;
    };
    var dataModel = new DataModel();
    dataModel.getJson();
    dataModel.selectRandomPanel();
    return DataModel;
});