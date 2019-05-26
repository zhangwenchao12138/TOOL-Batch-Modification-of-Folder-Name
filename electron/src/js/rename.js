
var fs = require('fs');

/*
 * @Description: Get a list of path
 * @Author: wenchaoZhang
 * @Date: 2019-05-26 10:03:09
 * @LastEditTime: 2019-05-26 18:11:04
 */
function getListOfPath(path) {
    var files = fs.readdirSync(path);
    files.forEach(function (file) {
        console.log(file);
    });

    console.log(files.length);
    return files;
}


/*
 * @Description: rename a file
 * @Author: wenchaoZhang
 * @Date: 2019-05-26 10:03:09
 * @LastEditTime: 2019-05-26 11:44:46
 */
function reName (path, oldName, newName) {
    if (!fs.existsSync(path + '/' + oldName)){
        console.log("PATH : ---" + path + '/' + oldName + "--- is Nonexistent");
        return false;
    }

    fs.rename(path + '/' + oldName, path + '/' + newName, function(err) {
        if (err) {
            throw err;
        }
    });
}

module.exports = {
    getListOfPath,
    reName
}

// var oldnameList = getListOfPath(PATH);

// // oldnameList.forEach(function(oldName){
// //     if(oldName.indexOf(".") >= 0 && oldName.indexOf(".") <= 4){
// //         console.log("oldName  " + oldName);
// //         reName(PATH, oldName, oldName.split(".")[1]);

// //     }
// // });



// i = 58;
// oldnameList.forEach(function(oldName){
//     if(oldName.indexOf("四轴飞行器类") >= 0){
//         // console.log("oldName  " + "0" + i + ". " + oldName);
//         if(i<10){
//              reName(PATH, oldName, "0" + i + ". " + oldName);
//         }else{
//             reName(PATH, oldName, i + ". " + oldName);
//         }
//         i++;
//     }
// });