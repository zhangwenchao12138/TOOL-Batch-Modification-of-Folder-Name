var rename = require('./rename');

var originalPATH = "E:\\PROJECT\\testbbcc"; // 目录

var PATH = rename.normalizationPath(originalPATH);

console.log(PATH);

var oldnameList = rename.getListOfPath(PATH);

