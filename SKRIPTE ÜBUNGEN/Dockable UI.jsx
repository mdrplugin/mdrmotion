 {
        function myScript(thisObj){
            function myScript_buildUI(thisObj){
                // die Variable repräsentiert unsere UI
                var myPanel = (thisObj instanceof Panel) ? thisObj : new Window ("palette","Dockable Script",undefined,{resizable:true, closeButton:true});
                // unsere  Variable "res" UI und "group" ist unser Fenster
                res = "group{orientation:'column',\
                groupOne: Group{orientation:'row',\
                createCompButton: Button{text:'Create Comp'},\
                },\
                groupTwo: Panel{orientation:'row',\
                deleteCompButton: Button{text:'-'},\
                deleteText: StaticText{text:'Delete Active Comp'},\
                },\
                groupThree: Group {orientation:'row',\
                closeButton: Button{text:'Close'},\
                },\
                }";
                // unser Fenster was oben definiert wurde
                // .grp ist eine Referenz auf Prinzip alles was sich in der Gruppe befindet
                myPanel.grp = myPanel.add(res);
                
                // Defaults/Funktionalität
                myPanel.grp.groupTwo.deleteCompButton.size  = [25, 25];
                
                 myPanel.grp.groupOne.createCompButton.onClick = function(){
                        createComp();
                     }
                 
                 myPanel.grp.groupTwo.deleteCompButton.onClick = function(){
                        if(app.project.activeItem == undefined || app.project.activeItem == null){
                                alert ("Please select a Composition");
                                return false;
                            }
                        else {
                                deleteActiveComp (app.project.activeItem);
                            }
                     }
                
                myPanel.grp.groupThree.closeButton.onClick = function(){
                    myPanel.close();
                }
            
                //------------------------------------------------------------------------------------//
                
                // unser Layout
                myPanel.layout.layout(true);
                // Ausgabe des PAnels 
                return myPanel;
            }
            // für unser Build UI und gibt die Variablen weiter
            var myScriptPal = myScript_buildUI (thisObj)
            // wenn es exisitert oder null ist bzw. ein Fenster ist
            if (myScriptPal != null && myScriptPal instanceof Window){
                myScriptPal.center();
                myScriptPal.show();
                
            }
        }
     
    myScript(this);
 
 }

function createComp(){
        app.project.items.addComp("New Composition", 1920, 1080,1,10,30);
    }

function deleteActiveComp(comp){
        comp.remove();
    }