/**
 * Created by jgpro_000 on 06/09/14.
 */
define([
    'models/DataModel'
], function(DataModel){
    var data = new DataModel();
    data.getData('js/data/data.json',
        function(data) { console.log(data) },
        function(xhr) { console.error(xhr); }
    );
});