var folder = new Folder;
folder = folder.selectDlg ("Select a folder pls");

var files = folder.getFiles();

files = filterFiles(files, "mp4");

importFiles(files);

function filterFiles(files, extension){
        var filtered = [];
        for(var i =0; i<files.length;i++){
            if(files[i].name.indexOf (extension)==-1){
                    filtered.push (files[i]);
                }
        }
    return filtered;
    }

function importFiles(files){
    app.beginSuppressDialogs();
    for(var i =0; i<files.length;i++){
            app.project.importFile(new ImportOptions(files[i]));
        }
    app.endSuppressDialogs(false);
    }