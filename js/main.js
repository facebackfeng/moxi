requirejs.config({
    paths : {
        "jquery" : "../lib/jquery-1.10.1.min",
        "cookie" : "../lib/jquery.cookie",
        "mycool" : "../lib/mycool",
        "prompt" : "prompt",
        "comHeader" : "comHeader",
        "index" : "index"
    },
    //依赖关系
    shim : {
        'comHeader' : {
            deps : ['jquery','mycool']
        },
        'index' : {
            deps : ['jquery','cookie','mycool','prompt']
        }
    }
});
requirejs(['jquery','cookie','mycool','prompt','comHeader','index'],function($){

});