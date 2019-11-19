var proj = app.project;
var myRQ = proj.item(1); 
var numOM;

for (var i=1; i<=myRQ.numItems; i++){
    alert("Item" + i.toString() + "-OM 1:\n" + myRQ.item(i).outputModule(1).file.path);
    numOM = myRQ.item(1).outputModules.length;
    if(numOM > 1){
        for (var o = 2; o <=numOM; o++){
            
        }
    }
} 
