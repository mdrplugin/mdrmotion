

// projekt was zur zeit offen ist egal o gespeichert oder nicht

var comp = project.activeItem;

// predefined Values
var folder = Folder.myDocuments.fsName + '/Adobe/After Effects CC 2015/User Presets/';
var mdrtest1 = 'MDRTest1.ffx';
var presetfilepath = folder + mdrtest1; // "path/to/mypreset.ffx";
var pfile = File(presetfilepath);



var fontSize = 68;
var fillColour = new Array(1,1,1); // die 3 zahlen stehen für die rgb werte
var strokeColour = new Array(0,0,0);
var font = "TimesNewRomanPSMT"; 
var effectMatchName =  ("ADBE Black&White");
var scalePercent = 1.5;
//var fItem = app.project.importFile(File("myJPEGFileToImport.jpg"));
//var layer = myComp.layers.add(fItem);   // myComp is the CompItem representing your comp
//new ImportOptions().file = new File("img084.psd");

//UI
// das initialisieren eines neue Fensters 
var mainWindow = new Window("palette", "Batch Processor Script", undefined); // 1. type of winow -> 2. name des fensters -> 3. x and y values
// orientation des fensters
mainWindow.orientation = "column";

// die erste Gruppe die in einer Reihe dargestellt wird
var groupOne = mainWindow.add("group", undefined,"groupOne");
groupOne.orientation ="row";
var timeButton = groupOne.add("button",undefined,"T:0");
// .helpTip dient als Hover Element für die Buttons -> beim Hovern und halten wird dann ein extra Fenster angezeigt mit der unten gegebenen Information
timeButton.helpTip = "Sets beginning time code of every comp to 0";
var textButton = groupOne.add("button",undefined,"Text Tool");
// // .helpTip dient als Hover Element für die Buttons -> beim Hovern und halten wird dann ein extra Fenster angezeigt mit der unten gegebenen Information
textButton.helpTip = "Sets every text layer in the selected comp to predefined values";

var groupTwo = mainWindow.add("group", undefined,"groupTwo");
groupTwo.orientation = "row";
var effectsButton = groupTwo.add("button", undefined,"FX");
//effectsButton.helpTip = "Adds" + endeffect + "to every Layer in the selected Comp";
var scaleButton = groupTwo.add("Button", undefined, "Scale Tool");
scaleButton.helpTip = "Multiplies the Scale of every Layer in the selected Comp by" + scalePercent;

mainWindow.center();
mainWindow.show();

//funktionalität
// die Funktion des timeButtons


effectsButton.onClick = function(){
        app.beginUndoGroup("Anwenden Effekt bitte");
        
            for(var q = 1; q <= comp.numLayers; q++){
                comp.layer(q).add(layer);
                }
        
        app.endUndoGroup();
        alert("Effekt drinne junge");
    }






