// file reader

#include "json2.js"

// globale variablen

var file = new File;
var check = 0;

//UI

var mainWindow = new Window("palette","File Reader", undefined);
mainWindow.orientation = "column";

var groupOne = mainWindow.add("group", undefined,"groupOne");
groupOne.orientation = "row";
var fileLocBox = groupOne.add("edittext",undefined,"Selected File Location");
fileLocBox.size = [160,20];
var getFileButton = groupOne.add("button",undefined,"File...");
getFileButton.helpTip = "Select a ... File";

var groupTwo = mainWindow.add("group",undefined,"groupTwo");
groupTwo.orientation="row";
var applyButton = groupTwo.add("button", undefined, "Apply");

mainWindow.center();
mainWindow.show();

getFileButton.onClick = function() {
    file = file.openDlg("pen a file pls","Acceptable Files:*.txt,*.json,*xml");
    fileLocBox.text = file.fsName;
    check = 1; // datei wurde ausgewählt
    }

applyButton.onClick = function() {
    if (check == 0){
            alert("pls select a file");
            return false;
        } else {
            var fileExtension = fileLocBox.text;
            var fileData;
            
            if (fileExtension.substring(fileExtension.length-4, fileExtension.length) == "json"){
                fileData = readJson();
                } else {
                        switch(fileExtension.substring(fileExtension.length-3, fileExtension.length)) {
                            case "txt":
                                fileData = readText();
                            break;
                            case "xml":
                                fileData = readXml();
                            break;
                            }
                    }
            }
    }

