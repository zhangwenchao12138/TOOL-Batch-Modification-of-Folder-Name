window.$ = window.jQuery = require('jquery');

function submitPath() {
    var originalPATH = $('#pathInput').val();
    var PATH = normalizationPath(originalPATH);
    console.log(PATH);
    var oldnameList = getListOfPath(PATH);

    $("#dirList").html( dirGenerateInnerString(oldnameList) );
}


function pathEnterInput(){
    if (event.keyCode == 13) {//判断是否为回车键，Event是window对象的一个属性，是全局的。
        submitPath();
        event.keyCode = 0;//屏蔽回车键
        event.returnValue = false;
    }
}

function dirGenerateInnerString(dirList){
    if(dirList==undefined || dirList.length <= 0){
        alert("该路径下没有文件");
        return false;
    }
    var code= "";
    dirList.forEach(dirname => {
        code += "<li>" + dirname + "</li>";
    });
    
    return code;
}



