var project = app.project;
//var comp = project.activeItem;

// vordefinierte informationen für das script
var fontSize = 68; // schriftgöße
var fillColour = new Array(1, 1, 1); // rgb werte
var strokeColour = new Array(0, 0, 0); // rgb werte
var font = "TimesNewRomanPSMT";
var effectMatchName = "ADBE Black&White"; // after effects vorintegrierter effekt (darum ADBE im namen)
var folder = Folder.myDocuments.fsName + '/Adobe/After Effects CC 2015/User Presets/';
var mdrtest1 = 'MDRTest1.ffx';
var presetfilepath = folder + mdrtest1; // "path/to/mypreset.ffx";
var pfile = File(presetfilepath);

// binary icons
var deleteKeyframesImage = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x00\x01\x00\x00\x00\x01\x018\"\u00F4@\x00\x00\x00$zTXtCreator\x00\x00\b\u0099sL\u00C9OJUpL+I-RpMKKM.)\x06\x00Az\x06\u00CEjz\x15\u00C5\x00\x00\x03\tIDATH\u0089\u00C5\u00D6Oh]E\x14\u00C7\u00F1\u00CF\u00DC&)m(y\u00B1\u00BA1\u00D5>\u00844\x18\u00A8oc7\u0082\x0Bk0\u00D6\u0085\u008B\u00A8 \u00DD\u0099Z\\\tE\x17]%b\"H\u00BA\u0090\u0082 n\u00AC\u00E0\u00B6\u00F8\u0087\u00BA(\u0091j\x17\u00C1\u0085\u00B4\u009B\x07\u0092\u00D2\x06\u00C2-\x1A!\u0098\u00D2\u00844}BR\u00C6\u00C5\u00BD7\u00B9yy\x0Fb\x15\u00FC\u00AD\u00EE\u009C\u00999\u00DF;sf\u00CE\u0099\u00A0I\u00F5j\u00B5\u00DC<\u0080\x11\u009C\u00C01\x1C\u00C6\x1E<\u00C0m\\\u00C3e|\u0083U\u00A8\u00A5i\u00B3K\u00A1\rd\x1F\u00CE\u00E2\fzv\u00CC\u00DA\u00A9\x15\u009C\u00C7T-M\x1B\u00BB\u0081\u00D4p\x11\u00FD\u00BBp\u00DE\u00AC9\u00BC\u0081za\u00A8\u00A5\u00A9\u008E\u00A6\u00ED9\u008EK\u00E8.\u00D9n\u00E0\x02\u00AE`\u00B6oz\u00F9\u00F9\u00C5\u0091\u00BE\u0099\u00F5\u00B5\u00B5\u00C1\x10\u00C2\u0090\x18G\u00F1t>\u00B6\x1F\u00BF\u00E0\x15\u00FC\u00B4\u00B9\u0092\x12\u00A4\u0086\u009FK\u0080U\u009Cy&M\u00BF\x14c\u0084;s\u00BD\x131\u00C61L>6\u00B02\u009E\u00AF<\u00E0\x14>Cg>w\x1D\u00CF\u00E1z-M%\u00B9q\u009Fl\u008B\n\u00C0\u00EFx\x16\x17\x021\u0084`\u00E9V\u00A5\x00\u00C0\u00D8\u009F7{&\u00F2\u00EF\x04/\u0094\x00\u00F2\u00EFos\u00BF\u009B\u0090\u00B3\u00B6b\u00B0\u008A\x17q\u00AB\u0098\u0091;\x1C\u00B3]cK7+\u0093\u00F8\n'\u00ED\u00D4\u00A1\u00DC\u00AFP\u00AFV\x0F\u00E07[\u00A7\u00E8\u0094,\x06\u00E0\u00F1\u00E9\u00BB\u00AD\x00D\u0096\u00CFu\u00BB\x7F\u00B5\u008B\u0098\u0099\x02\u00EB\u0091\u00CF\u00F1n>j\x05Ot\u00C8\u00EEA\x01\u00B8\u0091\u00C7\x00E\f\u00DA\x03\x1AW\u00BB\x04\u00C4@\u0088\u00D6\u0085\u00F0\u00BA\x18\u00BF\u00C7\u0090\u00EC0\u00F4`$\u0091]\u00B4B\u00EDb\u00D0\x12P(\u00D9\x1B\u00F5\u00BC\u00D3\u00F8\u00FA\u00E8\u00FC\u00FC\u00A5l\u00C4\u00D6N\u00E0D\"\u00BB\u00C9\u0085\u00AE\u00D06\x06-\x01ao\u00F4\u00C8\u00C4=\u00FBG\u00FEz\u00F3\u00CE\\\u00EFD\u00D9O\u00AEc\u0089,U\x14\u009A}\x18@Wm#\x1B\x12\u00E3X\u00DF\x0F\u00CB\x13\x1D\u00DD\u00DD\u00B3\u00A5\u0099\u0087C\u00BDZ\u008DE\u00ABozy(\u008A\u00E5\u00BF\u00D85\u00A0\u00AC \f-\fW6\u00FD$\u00B2d\x07\x16\u0086+3\u0098\u00FCW\u0080\x10&\x17G\u00FAfJ\u00A6\x07\u0089,\u009B\x16\x1A|\u00F4\u00C8\u00F2x\ba\u00B2-`\x7Ft\u00F0\\k\x00&\x17^\u00AA\u008Co\u00AC\u00AD\r\u0096l\u00B7\x13Y\u00BA.4\x04\x07\u00FB\u00EF\u008E\x07\u00E1\u00A3\u0096\u0080\u008F\u00EF\u00E9\x1Ch\r(RM\u00E1'\u00D7\u00B5DV\x0F\n\u008D\n!\\\fa\u00CF\u00C2\u00CB\u00BDO\u00DD\x7F8@\u00C0h\u00A9\u00EFr\u00AB\x1B\x7FZ\u0096\u008BN\x16S\u0092\u00DD\x03\u00D4\u00AB\u00D5Q|\u009177o\u00FC\u00AA\u00AC\u00E0|\u0090w\u0094\u00B3\u00A9\x10-U\u00DEo|\u00D79\u00B0\u00F1v+\u00C0\x1F\u00C3\u00BD\u00E3\u00F5jo\u00D1>\u0092\u00FB*t\u00BE\u0096\u00A6\u00ABE\u0082\u009C\u0092\x15\x1C\u00B6g\u00D3%Ir\u00FC\u00D0[\u008B\u00A77\x0FC\u009B\x15\u00E4\u0080\x1Fe%[\u00EEo\u008A\u00AD,\u00DC\u00C0{MN\">=:?\u00FF+\u00F9a\u00D8\x02\u00B5\u008A\u00C1uY\u00E6\u00855Y\u0085l\u00B0\u00BDh\u00C1\u0087(\u00FF\x1D\u00FF\u00AC2\x16\u0080W\u00E5\u0095\u00B1\u0096\u00A6-k\u00FC'x\rO6\u00F7\u00EDB-k\u00FC\u00FF\u00F6Z)7\u00FF\u0093w\u00D7\u00DFpDV\u00A3\x1AtB\x00\x00\x00\x00\x00IEND\u00AEB`\u0082";
var deleteExpressionsImage = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x00\x01\x00\x00\x00\x01\x018\"\u00F4@\x00\x00\x00$zTXtCreator\x00\x00\b\u0099sL\u00C9OJUpL+I-RpMKKM.)\x06\x00Az\x06\u00CEjz\x15\u00C5\x00\x00\x04\u0084IDATH\u0089\u00BD\u0096\u00CBo\x13W\x14\u00C6\x7Fg\u00C6\u00E3\u00D8\u00B5\fH\u0091H0\u0086\u0098$M\u0080\u00A4u\u00D5\u0082\u0080<T\u00A9AH,X\x14\u00CA\u00BA\x15\u00AAX\x15\tuQT\u00A9\u00A2\u00A5/T\u00F5!\u00FE\x02v]T\u00AD`\u0081*6\u00A8\u00B4\u00A2UMi*\"E\u0089P\u00EC\u00C4\u00C1\x10\x1A,\u0093\u0087\u00ED\u0099\u00C4\x1E\u00CF\u00EDb<f\u00E2@\u00C5\u00A2\u00EA\u00B7\u00BAs\u00EE=\u00E7;\u00F7<\u00EE\x19\u00A1\tc\u0089\u0084\u00FF3\n\x1C\x05\x0E\x03{\u0081\x0E@\x07j\u00C0,p\x0B\u00B8\n\\\x02\u008A\x00\u00C9l\u00B6\u00D9$\u00F2\x14\u00920p\x068\rl\\\u00A7\u00B5\x1EK\u00C0\x05\u00E0\u008Bd6k=\x0BI\x12\u00F8\x1Ex\u00FE\x19\u008C7c\n8\x0E\u008Cy\u0082d6\u008B4\u0085\u00E75D\u00AE\u00A0\u00D4s\u009E\u00E0o\u0091\u0095_\u0094*\u00FC\u00A5T1\r+UP\x06H7\u0084^\x16\u0089\u00BE*\u00D2\u00DA\u00AET\u00C8;\u00AF\u00A0\"J\x1D~1\u009B\u00FD\t@D\u00D6\u0090$\u0081\u00DF\u0080\b\"X\u00C0EM\u00E3\u00BA\b\nPJ\u00E1)5\u0087bD)N:\x0E:\u0080R\bTE\u00D7\x07\u00FA\u00D3\u00E9?E\u0084@\u00FDl\u00B8\x1E\u00A2\b@A\u0084\u008F\r\u0083\x07\u0080(\u00C5\u00C6\r\x1B\u00D8\u00B6m\x1B\u00F1x\u00BCA\u0092\u00CB\u00E5\u00C8\u00E5r\u0094\u0096\u0097y\u00A1Vs\t\x1E\u00DF\u00C6P\u00B5\u00DA\u00E5\u00D4\u00F6\u00ED=\u0080\u00A5\u00D5\u00E5g\u00A8\u00E7@\u0089\u0094\u00CF\x05\x02<\x00\f\u00C3@\u00D7u4M#\x1C\x0E\u00D3\u00DE\u00DE\u00CE\u00C8\u00C8\bmmm\u0084\u00C3a\x02\u009A\u00C6\u00A9Z\u008D!\u00C7yR~\u00E2\x11]?\x03\u00A0\u00E1\u0096\u00E9iogF\u00E4\u00FC\x03 \x1A\u008D\u00D2\u00D1\u00D1\u00C1\u00A6M\u009B0M\u0093\u00A9\u00A9)R\u00A9\x14\x007o\u00DEd:\u009D\u00E6\u00CD\u00C5\u00C55\x0457\n\u00DF\u00FA\u0088N\u008F%\x12Q\r\u00B7\x0F\u00BC2\u009D\u00FC@\u00D7/\u008B\b\u00C9d\u0092C\u0087\x0E\u00D1\u00D3\u00D3\u00C3\u00D6\u00AD[\u00D9\u00B7o\x1F\x03\x03\x03X\u0096\u00C5\u00F0\u00D0\x10\u00EF\u00B5\u00B40P\u00AD\u00AE!\u00F8J\u00D79\x15\b|\u008E\u00C8d=l\x1B\u0081\u00A3\x01\u00DCF\u00F3p\u00B1*\u00A2\x04XZZ\u00C24M\u0086\u0087\u0087\u00B1m\u009B\u00B9\u00B99FGG\u00F9#\u0095\u00E2\u008D{\u00F7\u00E8z\u00F4\u00A8\u00A1T\x15\u00E1k]g\u00D4\u00CD\u0097\x02.\x02_\u00D6\u00B7\x0F\x07p;\u00D9\u00C35p+iff\u0086\u009D;wb\u00DB6w\u00EE\u00DC!\u0093\u00C9\u00B0b\u009A\u009C\u00B4,\u00FA\u00FD7\u00D0u~\x1E\x1Cd\u00E2\u00F6m\u00B0\u00DC>TJ]\u00F3\u00D5\u00E0^\r\u00F7\u00A9\u00F00\x01n\u0099n\u00DE\u00BC\x19]\u00D7\u0099\u009E\u009Efrr\u0092\u0085B\u0081\u00B7K\u00A55!\u00AA\x00\u00DF\u00F5\u00F6RL$\u00E8\u00ED\u00EDmT\u009E\x11\u0089L\u00F8lvh\u00B0\u00A6\u00FA*\u00DE\u00A2\u00AB\u00AB\u008BR\u00A9\u00C4\u00FD\u00FB\u00F7)\x17\u008B\u00EB\u00AA\u00A8\x02\u009C\x0F\x04\u00F8\u00BDX\u00A4P(\u00D0\u00D7\u00D7\u00D7 \u00D9=>^\u00F1\u00D9\u00D45\u00DC\u009Cy\bz7imm\u00A5P(PZ^~*\u00C1\u00B8\b\x0B\x0B\x0B\u00E4\u00F3yb\u00B1\x18\u0086a\x10\f\x06\u0099\u00E8\u00EF\x0F\u00FAl\u00D64\u00DC\u00D7\u00D4\u00C3n\u00DF\u009A\u00D5\u0095\u0095uej\x01\x1F\x19\x06\u00E3u\u00AF+\u0095\n\u0096e\x11\f\x06\x1B$\u00D5r\u00D9ogV\u00C3}\u00AE=\x1C\u00F4\x16f\u00B9\u00CC\u0091t\u009A\u00FD\u00AB\u00ABk\b>1\f\u00A6|\n\u0086a\x10\n\u0085\u00A8V\u00AB\u0098\u00A6I\u00A9TBD\x0E\u00FA\u008E\u00DC\u00D2p\u00E7\u0081\u0087\x13\u0086R\"J\u00F1\u00CA\u008D\x1B\u00F4\x15\n\u00FFJ \"D\u00A3Q\"\u0091\b\u0099L\u00C6%UJ\u0080\x13\u00BEcW5\u00DC\u0081\u00B3T\x17\u00EC\u00FA\u00CC\u00B6\u008F\u00BDc\u00DB\u00ECz\u00F8\u00F01\u0081\u00C8:\x02\u0080\u0096\u0096\x16:;;\u0089\u00C7\u00E3\u00A4R)\u0094R|Z\u00AB\u00BD\u008ER\u00BB\x00\u00C4\u00B5{I\u00C3\u009Dh\x17<\u00C5\x1DJ\u009D\u00F5\u00E7`\u00B5\u00A5\u0085\u00AB\u0083\u0083\u0094c\u00B1\u0086L\u00D7ub\u00B1\x18{\u00F6\u00EC!\x1E\u008F377\u00C7\u00FC\u00FC<\u00EDJ\u00B1C\u00A9\u00F7}~\\Hf\u00B3E\u00F1M\u00C21\u00BCAUOjI\u00D3\u00F8!\u0099D\x12\tl\u00DB\u00A6Z\u00EF\x11M\u00D3\b\u0085B8\u008EC>\u009Fgff\u0086@>\u00CF\u0087\u00B6Mk\u00DDA\u0081\u00A9r\u00AD\u0096<\u0090\u00CBY\u00DESo\x01\u00EF\x02W<\x17\x14\u00F0\u00A3\b\u00D73\x19\u00DAM\u0093\u00EE\u00EEn\u00B6l\u00D9\u00D2pqqq\u0091t:\u00CD\u00DD\u00D9Y\x0EX\x16o\u00D96\u00E1\u00C7\u00C9*kp|\u00FF\u00DD\u00BB\x16MC\x0B\u00E0\x1Cp\u00D6/\u0098\u00D7\u00B4\u0095_E\n\u00B75\u00AD8\u00ADi\u008D\u00C9\u00D8\u00E98\u00A1\u0097\x1C':\u00A4Tk\u009B\u00E34&#\"&\u008Esd\u00CDdl\u00CA%c\u0089\u00C47\u00C01`{\u00F3\u00DE3\u00E0\u00C93\u00FE\t$\u00F0?\u00FC\u00AD\u00F8?\u00FF\u0093\u00FF\u00AE\x7F\x00\u00FF\u0099\u00E3\u0099\u0092\u00D2>\u00B9\x00\x00\x00\x00IEND\u00AEB`\u0082";
var deleteEffectsImage = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x00\x01\x00\x00\x00\x01\x018\"\u00F4@\x00\x00\x00$zTXtCreator\x00\x00\b\u0099sL\u00C9OJUpL+I-RpMKKM.)\x06\x00Az\x06\u00CEjz\x15\u00C5\x00\x00\x04\u00C5IDATH\u0089\u00BD\u0096Kl\u0094U\x14\u00C7\x7F\u00E7~\u00DFL\u009F\u00D2VH\u00E9\x03\u00CA\u00F4\x19S\u00DEi1BHL\u00C3\u0082E\u0091\u0084\u00E2\u00C2\u00B0@\x13Q\x03h\u00A8\u00C4\u0098\u00BA\u0092\u0085\u0091X\u00AD4qc\x031\u00B1\x1Bk\\!H\f\x10^\u0089a\u00C1\x10\u00B5-\u00B5\u00D0\u00E9\x1B\u00DA\u00F2\u00CA\u00D4\u00B63m\u0099\u0099\u00EF\u00B8\u00E87\u00D3\u00A1-!.\u00F4$'\u00DF\u00FD\u00EE=\u00F7\u00FC\u00EF\u00F9\u009F{\u00EF\u00B9\u00C2\x02Q\u00D5D\u00FBfaa\u00BA\u00ED\u00F1\u00D4\u00881[\x05*\x15\u00F2E\u00D5\u00A8\u0088#0\u00AA\u00D0\u00A5\u008Es=\x1A\u0089\\\u00AE\u00BAw/\f \"\x0B]\u00B2\u00A8GU\tTT\u00A4LG\u00A3\u00FB\u00817P\u00CD\\4k\u0091\x17\u0099\x02\u00DA\u00D2l\u00BB\u00B5\u00BC\u00A7g\u00F6\u00B9 \u00BF\u0097\u0096\u0096\x1B\u00C79.\u00AA\u00AB\u009F\u00EB|\u00E1\x02E\u0086\x1Dc>\u00D9\x14\b\u00F4\u00CC\u00E3\x0B\u0092LOgYY\u00B5\x13\u008B}%\u0090\u00964w@T\x7F\u008EY\u00D6\u008DhNN\x7F\u0095\u00DF\x1F\u00B9Y]\u00ED\u00B1\u0083\u00C1b+\x16\u00DB\u00A2\"\u00BB\x01_\u0092\u00FD\x13\u00B1\u00AC\x0F\u00D7\x05\x02\u00FEE \x7F\u0094\u0095\u0095\u009BX\u00ECd\x02@$\u00AC\"_o\u00E8\u00EB;\u009B\u009C\u00A8\u0085\u009C+HGq\u00F1n\u0085\u008FE\u00D5v#\u008AZ\u00AA\x07\u00D6\u00F6\u00F7\u00FF%\"\x18\u0080@EE\u008Aq\u009C\u00E3I\x11<\u00B0D\u00DE\u00DC\u00D0\u00DB{F@E\u0084\u00B8.!\u0082jU\x1C\x00@Tm\x07\x1A\x03\x15\x15)\u00C0\x1C\u00C8t4\u00BA?\u0091\x03\u0091\u00B0e\u00CC\u00E1\u00CA\u00DE\u00DE\u00A1%yW\u009DW0\x1D>\u00DF1`\u00E7\x12\u00A6\u00B9\u00EE\u00E6A\u00FC\x05\x05\u00E9\u00DE\u0094\u00943\u00A8fz\u00CB\u00CB+V\x1E9\x12\u00CC\u00AE\u00AD\u009DH2~\x01Hw\u00F5*p\x16\u00F8\\U\x7F\u00E9,)\x19L\x06P\u00CBrr\x0F\x1E\u00CC\r]\u00BDZ8\u00D3\u00D7w\u00DB\t\u0087\x1F=\u0099\u009D}\u00CD\u00B6=\u009E\u009A\u00F86M)*\"\u00BB\u00B6\u00B6x\u00A9\b\\)\x00,T\u0097?ln\u00DEo\u0096/\u00EFq\x1E?\x0E\u00C6\u00F3\u00B0\u00BA\u00B11\u0090SW\u00F7\u00CA\u00F0\u00C0\x003}}\u0082j\u00A6\u00E5\u00F1\u00D4\x181fkb\u00C9;v\u00C4#\u00F8\t(vu\x1D\u00B0\x19\u00D8\x0E\x1Cbp\u00F0\u0087\u00B1\u00C6\u00C6\u0089\u00C9k\u00D7H\u00CD\u00CF_\u0083m\x1B\u0085\u00D9\u009C={Zr\u00EA\u00EA\u00F6\x01\u00A4WWw8\u00A1\u00D04\u00801f\u00AB-P\x19\x07\u00C9\u00D8\u00BC\u00F9>P\x04\u008C\u0088\u00C8@<\x07\t\x111\x1D>\u00DF1\u0093\u009D=\u0092\u00EA\u00F3-\u00C3\u00B6\u00BD\u00DE5k\u00F2bcc{W75}\x03\u00D8\u00C0\u00F8tw\u00F7\u00FB\u00C0\u0097\x00\u00A2Zi\x14\u00F2\u00E3>R\u00CA\u00CA\u00A6\u009FI\u0094\x0B\x00\u00ECt\u00C6\u00C7'\u00A2\u00C1\u00E0\u00A8x\u00BD\x14\u009D8QP\u00D9\u00D9y\x00x\u00D9\u00B5<x\u00FF\u00C2\u0085\u00EB\u0089<A\u00BE-\u00AA&\u00E1\u00C7\u00B6\u00FFv\u009B\u00DBT\u00B5\x1EX\x06\x18T\u00B3\u0086\u00EA\u00EB\u00B7q\u00FE|*\u00E1\u00F0\f\u00C0\u0093\u00E1\u00E1\u00BE\u00D5MM\u00A1\u00B4\u00F5\u00EB\u00CB\u0080w\u00DCy?\x02mU~?\x1D\u00C5\u0089\u00D4\x1A[E\u009C8\u0090F\"\u0088\u00C7\x03\u00B0\u00C5UP\u00E5As3\u0091\u0081\x01\u008C\u00D7\u00DB\u00ED\u0084\u00C33\n\u00B3F\u00E4hzUU6p\u00C1u\x16\x02\x0E\x03\u00DC\u00AC\u00AE\u00F6x\u00E79p\u008C\u00C0h\u00FCo\u00E6\u00CE\u009Dt\u00B7y\x17\u00F8^U[\u00EF64\u00FC9~\u00EE\\065\x15$\x1A\u008D \x12R\u00C79\u00E8^\x1B\u00B5I\u0084f\x00\u00AF\x02\u00D8\u00C1`\"\f\u0081Q[\u00A1K\u00A0\x10 |\u00E3\u00C6\u008A\u00B4\u00B5k\x01~E\u00E4\u00BD\u00CE\u00B9\x1C\u00BC\x04\u00F4\u00B8y\t9\u00B1\u00D8\x07\x1B\x07\x07o\x01;\u0080z\u00D7\u00D7$s\u00E7\u00A9\x05\u00F8\u00CD\u00BD\u00D3\u00E6\u0088\x10\u00E92\u00EA8\u0089$M\\\u00B9R0\u00C7\u0090z\x17\u009Dd\x17`\u00D3\u00D0\u00D0-\u00E0E\u00A0\u00D5\x1D\u00B9\u00C5\u00DC\u00F6\u009E\x05V\x00\u00A7\u00DCKs\u008E+\u00C7\u00B9n\u00A2\u0091\u00C8e\u00B7\x1E\x10\x1D\x1BK\u009D\u00BCx\u0091{\r\r\x1B\u0097\x02p#\u00C0]q\x01\x10\x03\u00DE\x12\u0091v\u00E03\u0080\u00C9K\u0097v\u00D9\u00B9\u00B9[\u00DCyS\u00B1H\u00E4\u00B2q+Z\x1B\x00\u00C6X\x0FZZ\b\u00F9\u00FD\u00AB\u0092\u00B8\x1E\x17\u00D5Cq\x00U\u00AD\x05^w\u00C7N\x00~\u00F7,}\x11\x19\x1E\u00BE\u00FD\u00E8\u00D4)\u00BCyyE\u00E2\u00F1\u00D8@[\u00F5\u00C8H\u00D8\x00\u00A4\u00D9v\u00AB\u008A\f\x03\x10\u008D\"\u00C6\u00C4\u00B7\u00F5\u00B8q\u009CC\u00EB\u00FA\u00FB\u00BB\u0093@\u00CB\u00DDo\x00\u00F84\u00DE\u00D9UZ\u009A\x1F\u00D8\u00BB\u00F7alz\x1A\u008C\u00B1LVV0\u00CD\u00B6[\u0081\u00F9z\u00D2^Z\u00BA\u00DD\u00CA\u00C8\u00F8\x16\u00CB\u00B2\u0088\u00C5\u00A2\u00CE\u00E4dHUOn\x18\x1C\u00FC\u00EE\u00E9c\u00CF*\u00A0\f\b\u0088\u00C8]\x05i/)\u00D9%\u00AAGQM7YY\u0099\u0092\u009A\u00AAi+W\u00EE+>}\u00BA}Qe\u00EC()y\x17\u00D5\u00B7yZ\u00FEUeT\u00986\u0096\u00F5\u00D1S\u0095q\u0081C\u00DA}\u00BEz\u0085\x1A\u0081\u00BC\u0085c\u00CF\u0093g\u00D6\u00F8E\u0086\u00FF\u00C7k\u00E5\u00BFxw\u00FD\x03\u00A8\u008CW;\u00D3\u00AC\u00ED&\x00\x00\x00\x00IEND\u00AEB`\u0082";
var resetTransformImage = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x00\x01\x00\x00\x00\x01\x018\"\u00F4@\x00\x00\x00$zTXtCreator\x00\x00\b\u0099sL\u00C9OJUpL+I-RpMKKM.)\x06\x00Az\x06\u00CEjz\x15\u00C5\x00\x00\x02\x1FIDATH\u0089\u00ED\u0096=kZ\x01\x14\u0086\u009F\u0088^TD\u008Ah\u0094X\fH\u00C9R!\x12\u0087K\u00A0\u00B8\x04A\u00E8\u00E4\u00A2h\b(\u00F1c\u0095L\u00F9\x01\x1D\"t\u00E9\x1F\x10\x11\u00CC\u0090d\u0088\u008B\u00A3\u00A4\x19\x14\u00AE\u0082!\u009D\x04\u00E5\u0082\u0083\u0092\x04\x11\tf\u00F0*\u00E9\u0092\u0094\u0096\x18[\u0090\f\x05\u00DF\u00ED\x1C^\u00DE\u0087s\u00CErVz\u00BD\x1Es\u00F4\t0\u00CF3\u00FCEm\u00E0\u0087\u00FA\u00A9P\x01\u008E\x19\u00A6\u00AF\u0080\u00B8\x00\u00E4\x1B\u0090~\u0086\x18\x01y\u0081\u00B0\u00B9R\u00BDU\u00F0\x12\u00B2\u0084,!K\u00C8\u00FF\x02\u00E9\u00F7\u00FBo\x0F\x11E\u0091\u00AB\u00AB\u00AB\x17}\u00F5\u00EFE>\u009F\u00C7b\u00B1\u00D0l6I$\x12\u009C\u009E\u009ER.\u0097\u00D9\u00DE\u00DE&\u0095JQ\u00AB\u00D58;;\u00E3\u00E8\u00E8\u0088\u00C1`@&\u0093a8\x1C\u0092L&\x11\x04\x01EQ(\x16\u008BL\u00A7S<\x1E\u00CF\u00ECIJ\u00A5\x12\x07\x07\x07H\u0092D\u00B1X$\u009B\u00CD\x12\b\x04\u00C8\u00E5r\x14\n\x05\u00F6\u00F7\u00F7\u00B1\u00DB\u00EDL&\x13\u00E2\u00F18j\u00B5\x1A\u0097\u00CBE$\x12\u00A1\u00DDn\u00F3\u00F8\u00F8\u00C8\u00ED\u00ED-www\u00AF\u00AF\u00CBd2\x11\u008DF9>>\u00A6\\.\u00B3\u00B6\u00B6\u0086$Ih4\x1A\x1A\u008D\x06v\u00BB\u009Dj\u00B5J\u00B7\u00DBE\u0092$\x04A@\u0096e\x1E\x1E\x1EX__G\u00A7\u00D3qxx\u0088\u00DF\u00EF\x7F}]\u0082 \u00A0\u00D7\u00EB\x01\u00D0\u00EB\u00F5\u008CF#vvv\b\x06\u0083X,\x16\u00CCf3\u00C9d\u0092\u0093\u0093\x13T*\x15V\u00AB\x15\u009F\u00CFG(\x14bkk\x0B\x00EQ\u00E6\u00DF\u00E4\u00FE\u00FE\u009E\u00F1x\f\u00C0\u00DE\u00DE\x1E\u00E1p\x18\u00ADVK\u00AB\u00D5\"\x14\n1\x1A\u008Dh4\x1A\u00EC\u00EE\u00EE\x12\u0089D\u00C8f\u00B3lnnR\u00A9T\u00B8\u00B8\u00B8@\u00AB\u00D5\u0092N\u00A7\t\x04\x02\u00C4b\u00B1_\u00B9+O\u00DF\u00CA;`p}}\u008D\u00C1`\u00C0\u00E9t\x02\u00D0\u00E9t\u0090$\u0089\u00D5\u00D5U\u00BC^/\u00F5z\x1D\u00A3\u00D1\u00C8\u00C6\u00C6\x06\x00\u0097\u0097\u0097\u00DC\u00DC\u00DC \u008A\"\x0E\u0087\u0083f\u00B3\u0089,\u00CB\u00B8\u00DDnl6\x1B<=\x12\u00CF\x10\r\u00F0\u00F9\u00C5\u009C\u00F0\x05\u00F88\u00A3\u00FF\u00AF\u00FA\u00E3[Q\u0080\u00F3\x19\u00A6\u00F7\u00C0\u0087\x05 \u00DF\x01~\x02\u008B\u00EC\u00BB\u00FCyx\u00BE\u00FE\x00\x00\x00\x00IEND\u00AEB`\u0082";


// UI 
var mainWindow = new Window("palette", "MDR Motion Test", undefined);
mainWindow.orientation = "column";

// erste reihe der Gui
var groupOne = mainWindow.add("group", undefined, "groupOne");
groupOne.orientation = "row";
// buttons der ersten rihe
var comp1Button = groupOne.add("button", undefined, "Komp 1");
comp1Button.helpTip = "Changes all compositions' beginning timecodes to 0 seconds";
var comp2Button = groupOne.add("button", undefined, "Komp 2");
comp2Button.helpTip = "Changes every text layer in a selected comp to predefined values";

 // zweite reihe der gui
var groupTwo = mainWindow.add("group", undefined, "groupTwo");
groupTwo.orientation = "row";
// buttons der zwiten reihe
var comp3Button = groupTwo.add("button", undefined, "Komp 3");
comp3Button.helpTip = "comp3";
var comp4Button = groupTwo.add("button", undefined, "Komp 4");
comp4Button.helpTip = "com4";


// dritte reihe der gui
var groupThree = mainWindow.add("group", undefined, "groupThree");
groupThree.orientation = "row";
// buttons der dritten reihe
var effekt1Button = groupThree.add("button", undefined, "Effekt 1");
effekt1Button.helpTip = "adobe effekte";
var effekt2Button = groupThree.add("button", undefined, "Effekt 2");
effekt2Button.helpTip = "eigene effekte";


// vierte reihe der gui
var groupFour = mainWindow.add("group", undefined, "groupFour");
groupFour.orientation = "row";
// buttons der vierten reihe
var deleteKeyframesButton = groupFour.add("image", undefined, deleteKeyframesImage);
deleteKeyframesButton.size = [35, 35];
deleteKeyframesButton.helpTip = "Delete all the keyframes of the selected layers";
var deleteExpressionsButton = groupFour.add("image", undefined, deleteExpressionsImage);
deleteExpressionsButton.size = [35, 35];
deleteExpressionsButton.helpTip = "Remove all the expressions of the selected layers";
var deleteEffectsButton = groupFour.add("image", undefined, deleteEffectsImage);
deleteEffectsButton.size = [35, 35];
deleteEffectsButton.helpTip = "Remove all the effects of the selected layers";
var resetTransformButton = groupFour.add("image", undefined, resetTransformImage);
resetTransformButton.size = [35, 35];
resetTransformButton.helpTip = "Reset the transform values for the selected layers";

// fenster anzeigen lassen und zentrieren
mainWindow.center();
mainWindow.show();

// event listener für die 4 buttons hinzufügen
deleteKeyframesButton.addEventListener('click', deleteKeys, false);
deleteExpressionsButton.addEventListener('click', deleteExpressions, false);
deleteEffectsButton.addEventListener('click', deleteEffects, false);
resetTransformButton.addEventListener('click', resetTransform, false);
/*
effekt1Button.onClick = function(){
    app.beginUndoGroup("Apply Effects");
    for(var i = 1; i <= comp.numLayers; i++){
            comp.layer(i).Effects.addProperty(effectMatchName);
        }
    app.endUndoGroup();
    alert("Completed Successfully!");
*/

// funktionalität der buttons die was hinzufügen
comp1Button.onClick = function() {

app.beginUndoGroup("test1");

try {

// CREATE FOLDER HIERARCHY START
// CREATE FOLDER HIERARCHY END

// CREATE COMPOSITIONS START
	var test1_comp_properties = {"name":"test1","typeName":"Composition","label":15,"comment":"","height":1080,"width":1920,"pixelAspect":1,"bgColor":[0,0,0],"duration":3.003003003003,"numLayers":3,"frameRate":29.9700012207031};
	var test1_comp = app.project.items.addComp(test1_comp_properties.name, test1_comp_properties.width, test1_comp_properties.height, 1, 3.003003003003, 29.9700012207031);
		test1_comp.time = 0;
		test1_comp.bgColor = test1_comp_properties.bgColor;
		test1_comp.dropFrame = true;
		test1_comp.shutterPhase = -90;
		test1_comp.resolutionFactor = [1, 1];
// CREATE COMPOSITIONS END

// IMPORT FOOTAGE ITEMS START
	var sc6utGlitch18mp4_footage_properties = {"name":"sc6ut glitch (18).mp4","typeName":"Footage","label":3,"comment":""};
	var sc6utGlitch18mp4_footage = findProjectItem(app.project.rootFolder, false, sc6utGlitch18mp4_footage_properties);
	if (sc6utGlitch18mp4_footage === null) {
		var sc6utGlitch18mp4_path = "/f/MOCKUPS_RESSOURCES_AND_MORE_MUCH_MORE/OVERLAYS/glitch/sc6ut glitch (18).mp4";
		var sc6utGlitch18mp4_importOptions = new ImportOptions(new File(sc6utGlitch18mp4_path));
		sc6utGlitch18mp4_footage = app.project.importFile(sc6utGlitch18mp4_importOptions);
		sc6utGlitch18mp4_footage.label = sc6utGlitch18mp4_footage_properties.label;
		sc6utGlitch18mp4_footage.mainSource.fieldSeparationType = FieldSeparationType.OFF;
		sc6utGlitch18mp4_footage.selected = false;
	}
	var orangeBurnwmv_footage_properties = {"name":"orange burn.wmv","typeName":"Footage","label":3,"comment":""};
	var orangeBurnwmv_footage = findProjectItem(app.project.rootFolder, false, orangeBurnwmv_footage_properties);
	if (orangeBurnwmv_footage === null) {
		var orangeBurnwmv_path = "/f/MOCKUPS_RESSOURCES_AND_MORE_MUCH_MORE/OVERLAYS/burns/orange burn.wmv";
		var orangeBurnwmv_importOptions = new ImportOptions(new File(orangeBurnwmv_path));
		orangeBurnwmv_footage = app.project.importFile(orangeBurnwmv_importOptions);
		orangeBurnwmv_footage.label = orangeBurnwmv_footage_properties.label;
		orangeBurnwmv_footage.mainSource.fieldSeparationType = FieldSeparationType.OFF;
		orangeBurnwmv_footage.selected = false;
	}
// IMPORT FOOTAGE ITEMS END

// Working with comp "test1", varName "test1_comp";
	test1_comp.openInViewer();
	// Add existing footage item "sc6ut glitch (18).mp4", varName "sc6utGlitch18mp4_footage";
	var sc6utGlitch18mp4 = test1_comp.layers.add(sc6utGlitch18mp4_footage);
		sc6utGlitch18mp4.enabled = false;
		sc6utGlitch18mp4.audioEnabled = false;
		sc6utGlitch18mp4.moveToEnd();
		sc6utGlitch18mp4.property("ADBE Transform Group").property("ADBE Scale").setValue([213.333333333333,213.333333333333,100]);
		sc6utGlitch18mp4.selected = false;
	var wasGeht = test1_comp.layers.addText("Was geht!");
		wasGeht.name = "Was geht!";
		wasGeht.moveToEnd();
		wasGeht.trackMatteType = TrackMatteType.LUMA;
		var wasGeht_TextProp = wasGeht.property("ADBE Text Properties").property("ADBE Text Document");
		var wasGeht_TextDocument = wasGeht_TextProp.value;
			wasGeht_TextDocument.font = "MonumentExtended-Ultrabold";
			wasGeht_TextDocument.fontSize = 140;
			wasGeht_TextDocument.applyFill = true;
			wasGeht_TextDocument.fillColor = [0.92156898975372,0.92156898975372,0.92156898975372];
			wasGeht_TextDocument.applyStroke = false;
			wasGeht_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			wasGeht_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				wasGeht_TextDocument.verticalScale = 1;
				wasGeht_TextDocument.horizontalScale = 1;
				wasGeht_TextDocument.baselineShift = 0;
				wasGeht_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// wasGeht_TextDocument.fauxBold = false;
				// wasGeht_TextDocument.fauxItalic = false;
				// wasGeht_TextDocument.allCaps = false;
				// wasGeht_TextDocument.smallCaps = false;
				// wasGeht_TextDocument.superscript = false;
				// wasGeht_TextDocument.subscript = false;
			}
			wasGeht_TextProp.setValue(wasGeht_TextDocument);
		wasGeht.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([482.157305955887,-38.5,0]);
		wasGeht.selected = false;
	// Add existing footage item "orange burn.wmv", varName "orangeBurnwmv_footage";
	var orangeBurnwmv = test1_comp.layers.add(orangeBurnwmv_footage);
		orangeBurnwmv.outPoint = 2.36903570236904;
		orangeBurnwmv.audioEnabled = false;
		orangeBurnwmv.moveToEnd();
		orangeBurnwmv.property("ADBE Transform Group").property("ADBE Scale").setValue([150,150,100]);
		orangeBurnwmv.selected = false;
test1_comp.openInViewer();

return {
	compItem : test1_comp
};

} catch (e) {
	alert (e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, '') + 
		"\nFunction: " + arguments.callee.name + 
		"\nError on Line: " + e.line.toString());
}
app.endUndoGroup();


function findProjectItem(searchFolder, recursion, userData) {
	var folderItem;
	for (var i = 1, il = searchFolder.items.length; i <= il; i++) {
		folderItem = searchFolder.items[i];
			if (propertiesMatch(folderItem, userData))
				return folderItem;
			else if (recursion === true && folderItem instanceof FolderItem && folderItem.numItems > 0) {
				var item = findProjectItem(folderItem, recursion, userData);
				if (item !== null) return item;
			}
		}
	return null;
}

function propertiesMatch(projectItem, userData) {
	if (typeof userData === "undefined") return true;

	for (var propertyName in userData) {
		if (!userData.hasOwnProperty(propertyName)) continue;

		if (typeof userData[propertyName] !== typeof projectItem[propertyName])
			return false;

		if (isArray(userData[propertyName]) && isArray(projectItem[propertyName])) {
			if (userData[propertyName].toString() !== projectItem[propertyName].toString()) {
				return false;
			}
		} else if (typeof userData[propertyName] === "object" && typeof projectItem[propertyName] === "object") {
			if (!propertiesMatch(projectItem[propertyName], userData[propertyName])) {
				return false;
			}
		} else if (projectItem[propertyName] !== userData[propertyName]) {
			return false;
		}
	}
	return true;
}

function isArray(object) {
	return Object.prototype.toString.apply(object) === "[object Array]";
}

}

//---------------------------------------------------------------------------------------------------------

comp2Button.onClick = function() {

app.beginUndoGroup("test2");

try {

// CREATE FOLDER HIERARCHY START
	var solids_folder_properties = {"name":"Solids","typeName":"Folder","label":2,"comment":""};
	var solids_folder = findProjectItem(app.project.rootFolder, false, solids_folder_properties);
	if (solids_folder === null) {
		solids_folder = app.project.items.addFolder(solids_folder_properties.name);
		solids_folder.label = solids_folder_properties.label;
	}
// CREATE FOLDER HIERARCHY END

// CREATE COMPOSITIONS START
	var test2_comp_properties = {"name":"test2","typeName":"Composition","label":15,"comment":"","height":1080,"width":1920,"pixelAspect":1,"bgColor":[0,0,0],"duration":3.003003003003,"numLayers":1,"frameRate":29.9700012207031};
	var test2_comp = app.project.items.addComp(test2_comp_properties.name, test2_comp_properties.width, test2_comp_properties.height, 1, 3.003003003003, 29.9700012207031);
		test2_comp.time = 0;
		test2_comp.bgColor = test2_comp_properties.bgColor;
		test2_comp.dropFrame = true;
		test2_comp.shutterPhase = -90;
		test2_comp.resolutionFactor = [1, 1];
// CREATE COMPOSITIONS END

// CREATE SOLID LAYERS START
	var whiteSolid1_solid_properties = {"name":"White Solid 1","typeName":"Footage","comment":"","label":1,"height":1080,"width":1920,"mainSource":{"color":[1,1,1]}};
	var whiteSolid1_solid = findProjectItem(solids_folder, false, whiteSolid1_solid_properties);
	if (whiteSolid1_solid === null) {
		var whiteSolid1_tempSolid = test2_comp.layers.addSolid([1, 1, 1], "White Solid 1", 1920, 1080, 1);
			whiteSolid1_solid = whiteSolid1_tempSolid.source;
			whiteSolid1_solid.label = whiteSolid1_solid_properties.label;
			whiteSolid1_solid.parentFolder = solids_folder;
		whiteSolid1_tempSolid.remove();
	}
// CREATE SOLID LAYERS END

// Working with comp "test2", varName "test2_comp";
	test2_comp.openInViewer();
	// Add existing Solid Layer "White Solid 1", varName "whiteSolid1_solid";
	var whiteSolid1 = test2_comp.layers.add(whiteSolid1_solid);
		whiteSolid1.moveToEnd();
		whiteSolid1.property("ADBE Effect Parade").addProperty("CC Mr. Mercury");
		whiteSolid1.property("ADBE Effect Parade").property(1).name = "CC Mr. Mercury";
		whiteSolid1.selected = false;

// Remove empty Solids folder
	var tempNullComp = app.project.items.addComp("tempNullComp", 100, 100, 1, 1, 24);
	var tempNullLayer = tempNullComp.layers.addNull();
	var nullFolder = tempNullLayer.source.parentFolder;
		tempNullLayer.source.remove();
		tempNullComp.remove();
	if (nullFolder.numItems === 0)
		nullFolder.remove();
test2_comp.openInViewer();

return {
	compItem : test2_comp
};

} catch (e) {
	alert (e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, '') + 
		"\nFunction: " + arguments.callee.name + 
		"\nError on Line: " + e.line.toString());
}
app.endUndoGroup();


function findProjectItem(searchFolder, recursion, userData) {
	var folderItem;
	for (var i = 1, il = searchFolder.items.length; i <= il; i++) {
		folderItem = searchFolder.items[i];
			if (propertiesMatch(folderItem, userData))
				return folderItem;
			else if (recursion === true && folderItem instanceof FolderItem && folderItem.numItems > 0) {
				var item = findProjectItem(folderItem, recursion, userData);
				if (item !== null) return item;
			}
		}
	return null;
}

function propertiesMatch(projectItem, userData) {
	if (typeof userData === "undefined") return true;

	for (var propertyName in userData) {
		if (!userData.hasOwnProperty(propertyName)) continue;

		if (typeof userData[propertyName] !== typeof projectItem[propertyName])
			return false;

		if (isArray(userData[propertyName]) && isArray(projectItem[propertyName])) {
			if (userData[propertyName].toString() !== projectItem[propertyName].toString()) {
				return false;
			}
		} else if (typeof userData[propertyName] === "object" && typeof projectItem[propertyName] === "object") {
			if (!propertiesMatch(projectItem[propertyName], userData[propertyName])) {
				return false;
			}
		} else if (projectItem[propertyName] !== userData[propertyName]) {
			return false;
		}
	}
	return true;
}

function isArray(object) {
	return Object.prototype.toString.apply(object) === "[object Array]";
}

}

//-------------------------------------------------------------------------------------------------------------

comp3Button.onClick = function () {

app.beginUndoGroup("test3");

try {

// CREATE FOLDER HIERARCHY START
	var solids_folder_properties = {"name":"Solids","typeName":"Folder","label":2,"comment":""};
	var solids_folder = findProjectItem(app.project.rootFolder, false, solids_folder_properties);
	if (solids_folder === null) {
		solids_folder = app.project.items.addFolder(solids_folder_properties.name);
		solids_folder.label = solids_folder_properties.label;
	}
// CREATE FOLDER HIERARCHY END

// CREATE COMPOSITIONS START
	var test3_comp_properties = {"name":"test3","typeName":"Composition","label":15,"comment":"","height":1080,"width":1920,"pixelAspect":1,"bgColor":[0,0,0],"duration":3.003003003003,"numLayers":2,"frameRate":29.9700012207031};
	var test3_comp = app.project.items.addComp(test3_comp_properties.name, test3_comp_properties.width, test3_comp_properties.height, 1, 3.003003003003, 29.9700012207031);
		test3_comp.time = 0;
		test3_comp.bgColor = test3_comp_properties.bgColor;
		test3_comp.dropFrame = true;
		test3_comp.shutterPhase = -90;
		test3_comp.resolutionFactor = [1, 1];
// CREATE COMPOSITIONS END

// IMPORT FOOTAGE ITEMS START
	var layer161024x1024editjpg_footage_properties = {"name":"Layer-16-1024x1024-edit.jpg","typeName":"Footage","label":5,"comment":""};
	var layer161024x1024editjpg_footage = findProjectItem(app.project.rootFolder, false, layer161024x1024editjpg_footage_properties);
	if (layer161024x1024editjpg_footage === null) {
		var layer161024x1024editjpg_path = "~/Desktop/Assets/Layer-16-1024x1024-edit.jpg"; // dateipfad + bilddatei
		var layer161024x1024editjpg_importOptions = new ImportOptions(new File(layer161024x1024editjpg_path));
		layer161024x1024editjpg_footage = app.project.importFile(layer161024x1024editjpg_importOptions);
		layer161024x1024editjpg_footage.label = layer161024x1024editjpg_footage_properties.label;
		layer161024x1024editjpg_footage.selected = false;
	}
// IMPORT FOOTAGE ITEMS END

// CREATE SOLID LAYERS START
	var whiteSolid2_solid_properties = {"name":"White Solid 2","typeName":"Footage","comment":"","label":1,"height":1080,"width":1920,"mainSource":{"color":[1,1,1]}};
	var whiteSolid2_solid = findProjectItem(solids_folder, false, whiteSolid2_solid_properties);
	if (whiteSolid2_solid === null) {
		var whiteSolid2_tempSolid = test3_comp.layers.addSolid([1, 1, 1], "White Solid 2", 1920, 1080, 1);
			whiteSolid2_solid = whiteSolid2_tempSolid.source;
			whiteSolid2_solid.label = whiteSolid2_solid_properties.label;
			whiteSolid2_solid.parentFolder = solids_folder;
		whiteSolid2_tempSolid.remove();
	}
// CREATE SOLID LAYERS END

// Working with comp "test3", varName "test3_comp";
	test3_comp.openInViewer();
	// Add existing footage item "Layer-16-1024x1024-edit.jpg", varName "layer161024x1024editjpg_footage";
	var layer161024x1024editjpg = test3_comp.layers.add(layer161024x1024editjpg_footage);
		layer161024x1024editjpg.blendingMode = BlendingMode.LINEAR_LIGHT;
		layer161024x1024editjpg.moveToEnd();
		layer161024x1024editjpg.property("ADBE Transform Group").property("ADBE Position").setValue([1012,1120,0]);
		layer161024x1024editjpg.property("ADBE Transform Group").property("ADBE Scale").setValue([62.890625,62.890625,100]);
		layer161024x1024editjpg.selected = false;
	// Add existing Solid Layer "White Solid 2", varName "whiteSolid2_solid";
	var whiteSolid2 = test3_comp.layers.add(whiteSolid2_solid);
		whiteSolid2.moveToEnd();
		whiteSolid2.property("ADBE Effect Parade").addProperty("ADBE Fractal Noise");
		whiteSolid2.property("ADBE Effect Parade").property(1).name = "Fractal Noise";
		whiteSolid2.property("ADBE Effect Parade").property(1).property("ADBE Fractal Noise-0002").setValue(4);
		whiteSolid2.property("ADBE Effect Parade").property(1).property("ADBE Fractal Noise-0004").setValue(197);
		whiteSolid2.property("ADBE Effect Parade").property(1).property("ADBE Fractal Noise-0013").setValue([919,540]);
		whiteSolid2.property("ADBE Effect Parade").property(1).property("ADBE Fractal Noise-0023").setValue(0);
		whiteSolid2.selected = false;

// Remove empty Solids folder
	var tempNullComp = app.project.items.addComp("tempNullComp", 100, 100, 1, 1, 24);
	var tempNullLayer = tempNullComp.layers.addNull();
	var nullFolder = tempNullLayer.source.parentFolder;
		tempNullLayer.source.remove();
		tempNullComp.remove();
	if (nullFolder.numItems === 0)
		nullFolder.remove();


	// Apply expressions to properties
		try {
			whiteSolid2.property("ADBE Effect Parade").property(1).property("ADBE Fractal Noise-0023").expression = "time*100";
		} catch (err) {}

test3_comp.openInViewer();

return {
	compItem : test3_comp
};

} catch (e) {
	alert (e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, '') + 
		"\nFunction: " + arguments.callee.name + 
		"\nError on Line: " + e.line.toString());
}
app.endUndoGroup();


function findProjectItem(searchFolder, recursion, userData) {
	var folderItem;
	for (var i = 1, il = searchFolder.items.length; i <= il; i++) {
		folderItem = searchFolder.items[i];
			if (propertiesMatch(folderItem, userData))
				return folderItem;
			else if (recursion === true && folderItem instanceof FolderItem && folderItem.numItems > 0) {
				var item = findProjectItem(folderItem, recursion, userData);
				if (item !== null) return item;
			}
		}
	return null;
}

function propertiesMatch(projectItem, userData) {
	if (typeof userData === "undefined") return true;

	for (var propertyName in userData) {
		if (!userData.hasOwnProperty(propertyName)) continue;

		if (typeof userData[propertyName] !== typeof projectItem[propertyName])
			return false;

		if (isArray(userData[propertyName]) && isArray(projectItem[propertyName])) {
			if (userData[propertyName].toString() !== projectItem[propertyName].toString()) {
				return false;
			}
		} else if (typeof userData[propertyName] === "object" && typeof projectItem[propertyName] === "object") {
			if (!propertiesMatch(projectItem[propertyName], userData[propertyName])) {
				return false;
			}
		} else if (projectItem[propertyName] !== userData[propertyName]) {
			return false;
		}
	}
	return true;
}

function isArray(object) {
	return Object.prototype.toString.apply(object) === "[object Array]";
}

}

//-----------------------------------------------------------------------------------------------------------------

comp4Button.onClick = function () {

app.beginUndoGroup("test");

try {

// CREATE FOLDER HIERARCHY START
// CREATE FOLDER HIERARCHY END

// CREATE COMPOSITIONS START
	var test_comp_properties = {"name":"test","typeName":"Composition","label":15,"comment":"","height":1080,"width":1920,"pixelAspect":1,"bgColor":[0,0,0],"duration":3.003003003003,"numLayers":4,"frameRate":29.9700012207031};
	var test_comp = app.project.items.addComp(test_comp_properties.name, test_comp_properties.width, test_comp_properties.height, 1, 3.003003003003, 29.9700012207031);
		test_comp.time = 2.83616950283617;
		test_comp.bgColor = test_comp_properties.bgColor;
		test_comp.dropFrame = true;
		test_comp.shutterPhase = -90;
		test_comp.resolutionFactor = [1, 1];
// CREATE COMPOSITIONS END

// IMPORT FOOTAGE ITEMS START
	var zineFrontCoverKosmopolitanjpg_footage_properties = {"name":"ZINE FRONT COVER KOSMOPOLITAN.jpg","typeName":"Footage","label":5,"comment":""};
	var zineFrontCoverKosmopolitanjpg_footage = findProjectItem(app.project.rootFolder, false, zineFrontCoverKosmopolitanjpg_footage_properties);
	if (zineFrontCoverKosmopolitanjpg_footage === null) {
		var zineFrontCoverKosmopolitanjpg_path = "~/Desktop/Fotoprojekte/ZINE FRONT COVER KOSMOPOLITAN.jpg";
		var zineFrontCoverKosmopolitanjpg_importOptions = new ImportOptions(new File(zineFrontCoverKosmopolitanjpg_path));
		zineFrontCoverKosmopolitanjpg_footage = app.project.importFile(zineFrontCoverKosmopolitanjpg_importOptions);
		zineFrontCoverKosmopolitanjpg_footage.label = zineFrontCoverKosmopolitanjpg_footage_properties.label;
		zineFrontCoverKosmopolitanjpg_footage.selected = false;
	}
// IMPORT FOOTAGE ITEMS END

// Working with comp "test", varName "test_comp";
	test_comp.openInViewer();
	// Add existing footage item "ZINE FRONT COVER KOSMOPOLITAN.jpg", varName "zineFrontCoverKosmopolitanjpg_footage";
	var zineFrontCoverKosmopolitanjpg = test_comp.layers.add(zineFrontCoverKosmopolitanjpg_footage);
		zineFrontCoverKosmopolitanjpg.moveToEnd();
		zineFrontCoverKosmopolitanjpg.property("ADBE Transform Group").property("ADBE Scale").setValue([20.7538899846592,20.7538899846592,100]);
		var zineFrontCoverKosmopolitanjpgOpacity = zineFrontCoverKosmopolitanjpg.property("ADBE Transform Group").property("ADBE Opacity");
			var zineFrontCoverKosmopolitanjpgOpacity_keyTimesArray = [1.8018018018018,2.83616950283617];
			var zineFrontCoverKosmopolitanjpgOpacity_valuesArray = [0,100];
			zineFrontCoverKosmopolitanjpgOpacity.setValuesAtTimes(zineFrontCoverKosmopolitanjpgOpacity_keyTimesArray, zineFrontCoverKosmopolitanjpgOpacity_valuesArray);
		zineFrontCoverKosmopolitanjpg.selected = false;
	var wieImmerTest = test_comp.layers.addText("wie immer test");
		wieImmerTest.name = "wie immer test";
		wieImmerTest.moveToEnd();
		var wieImmerTest_TextProp = wieImmerTest.property("ADBE Text Properties").property("ADBE Text Document");
		var wieImmerTest_TextDocument = wieImmerTest_TextProp.value;
			wieImmerTest_TextDocument.font = "TimesNewRomanPSMT";
			wieImmerTest_TextDocument.fontSize = 70;
			wieImmerTest_TextDocument.applyFill = true;
			wieImmerTest_TextDocument.fillColor = [0.92156898975372,0.92156898975372,0.92156898975372];
			wieImmerTest_TextDocument.applyStroke = false;
			wieImmerTest_TextDocument.justification = ParagraphJustification.LEFT_JUSTIFY;
			wieImmerTest_TextDocument.tracking = 0;
			if (parseFloat(app.version) >= 13.2 ) {
				wieImmerTest_TextDocument.verticalScale = 1;
				wieImmerTest_TextDocument.horizontalScale = 1;
				wieImmerTest_TextDocument.baselineShift = 0;
				wieImmerTest_TextDocument.tsume = 0;
				// These values are read-only. You have to set them manually in the comp.
				// wieImmerTest_TextDocument.fauxBold = false;
				// wieImmerTest_TextDocument.fauxItalic = false;
				// wieImmerTest_TextDocument.allCaps = false;
				// wieImmerTest_TextDocument.smallCaps = false;
				// wieImmerTest_TextDocument.superscript = false;
				// wieImmerTest_TextDocument.subscript = false;
			}
			wieImmerTest_TextProp.setValue(wieImmerTest_TextDocument);
		wieImmerTest.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([208.27392578125,-23.8232421875,0]);
		wieImmerTest.property("ADBE Transform Group").property("ADBE Position").setValue([947.861145019531,517.189880371094,0]);
		var wieImmerTestOpacity = wieImmerTest.property("ADBE Transform Group").property("ADBE Opacity");
			var wieImmerTestOpacity_keyTimesArray = [0,2.03536870203537];
			var wieImmerTestOpacity_valuesArray = [0,100];
			wieImmerTestOpacity.setValuesAtTimes(wieImmerTestOpacity_keyTimesArray, wieImmerTestOpacity_valuesArray);
		wieImmerTest.selected = false;
	// Add Shape Layer "Shape Layer 2", varName "shapeLayer2";
	var shapeLayer2 = test_comp.layers.addShape();
		shapeLayer2.name = "Shape Layer 2";
		shapeLayer2.moveToEnd();
		shapeLayer2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer2.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([1744.61535644531,123.602249145508]);
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer2.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([165.590957641602,239.099411010742]);
		var shapeLayer2Position1 = shapeLayer2.property("ADBE Transform Group").property("ADBE Position");
			var shapeLayer2Position1_keyTimesArray = [0,2.03536870203537];
			var shapeLayer2Position1_valuesArray = [[2681,540,0],[934,540,0]];
			shapeLayer2Position1.setValuesAtTimes(shapeLayer2Position1_keyTimesArray, shapeLayer2Position1_valuesArray);
			var shapeLayer2Position1_inSpatialTangents = [[291.166656494141,0,0],[291.166656494141,0,0]];
			var shapeLayer2Position1_outSpatialTangents = [[-291.166656494141,0,0],[-291.166656494141,0,0]];
			applySpatialTangents(shapeLayer2Position1, shapeLayer2Position1_keyTimesArray, shapeLayer2Position1_inSpatialTangents, shapeLayer2Position1_outSpatialTangents);
		shapeLayer2.selected = false;
	// Add Shape Layer "Shape Layer 1", varName "shapeLayer1";
	var shapeLayer1 = test_comp.layers.addShape();
		shapeLayer1.name = "Shape Layer 1";
		shapeLayer1.moveToEnd();
		shapeLayer1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
		shapeLayer1.property("ADBE Root Vectors Group").property(1).name = "Rectangle 1";
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Shape - Rect");
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).property(1).name = "Rectangle Path 1";
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).property(1).property("ADBE Vector Rect Size").setValue([1839.84985351563,143.86491394043]);
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Stroke");
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).property(2).name = "Stroke 1";
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).addProperty("ADBE Vector Graphic - Fill");
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(2).property(3).name = "Fill 1";
		shapeLayer1.property("ADBE Root Vectors Group").property(1).property(3).property("ADBE Vector Position").setValue([-137.335861206055,-285.703582763672]);
		var shapeLayer1Position1 = shapeLayer1.property("ADBE Transform Group").property("ADBE Position");
			var shapeLayer1Position1_keyTimesArray = [0,2.03536870203537];
			var shapeLayer1Position1_valuesArray = [[-810,540,0],[756,540,0]];
			shapeLayer1Position1.setValuesAtTimes(shapeLayer1Position1_keyTimesArray, shapeLayer1Position1_valuesArray);
			var shapeLayer1Position1_inSpatialTangents = [[-261,0,0],[-261,0,0]];
			var shapeLayer1Position1_outSpatialTangents = [[261,0,0],[261,0,0]];
			applySpatialTangents(shapeLayer1Position1, shapeLayer1Position1_keyTimesArray, shapeLayer1Position1_inSpatialTangents, shapeLayer1Position1_outSpatialTangents);
		shapeLayer1.selected = false;
test_comp.openInViewer();

return {
	compItem : test_comp
};

} catch (e) {
	alert (e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, '') + 
		"\nFunction: " + arguments.callee.name + 
		"\nError on Line: " + e.line.toString());
}
app.endUndoGroup();


function findProjectItem(searchFolder, recursion, userData) {
	var folderItem;
	for (var i = 1, il = searchFolder.items.length; i <= il; i++) {
		folderItem = searchFolder.items[i];
			if (propertiesMatch(folderItem, userData))
				return folderItem;
			else if (recursion === true && folderItem instanceof FolderItem && folderItem.numItems > 0) {
				var item = findProjectItem(folderItem, recursion, userData);
				if (item !== null) return item;
			}
		}
	return null;
}

function propertiesMatch(projectItem, userData) {
	if (typeof userData === "undefined") return true;

	for (var propertyName in userData) {
		if (!userData.hasOwnProperty(propertyName)) continue;

		if (typeof userData[propertyName] !== typeof projectItem[propertyName])
			return false;

		if (isArray(userData[propertyName]) && isArray(projectItem[propertyName])) {
			if (userData[propertyName].toString() !== projectItem[propertyName].toString()) {
				return false;
			}
		} else if (typeof userData[propertyName] === "object" && typeof projectItem[propertyName] === "object") {
			if (!propertiesMatch(projectItem[propertyName], userData[propertyName])) {
				return false;
			}
		} else if (projectItem[propertyName] !== userData[propertyName]) {
			return false;
		}
	}
	return true;
}

function isArray(object) {
	return Object.prototype.toString.apply(object) === "[object Array]";
}

function applySpatialTangents(property, keyTimesArray, inSpatialTangentsArray, outSpatialTangentsArray) {
	for (var sp = 0, spl = keyTimesArray.length; sp < spl; sp ++) {
		property.setSpatialTangentsAtKey(sp+1, inSpatialTangentsArray[sp], outSpatialTangentsArray[sp]);
	}
}
}

//----------------------------------------------------------------------------------------------------------------------------------

// buttons die was entfernen

function deleteKeys() {
    if(layerCheck().length < 1) {
        alert("Please select at least 1 layer");
            return false;
        } else {
            var layers = app.project.activeItem.selectedLayers;
            for(var i = 0; i < layers.length; i++) {
                if(layers[i].property("Position").numKeys > 0) {
                        deleteTheseKeys("Position", layers[i]);
                    }
                if(layers[i].property("Scale").numKeys > 0) {
                        deleteTheseKeys("Scale", layers[i]);
                    }
                if(layers[i].property("Opacity").numKeys > 0) {
                        deleteTheseKeys("Opacity", layers[i]);
                    }
                if(layers[i].property("Anchor Point").numKeys > 0) {
                        deleteTheseKeys("Anchor Point", layers[i]);
                    }
                if(layers[i].property("Audio Levels").numKeys > 0) {
                deleteTheseKeys("Audio Levels", layers[i]);
                }             
                }
            }
    }

function deleteTheseKeys(property, layer) {
    var theseKeys = layer.property(property).numKeys;
    for(var i = theseKeys; i > 0; i--) {
        //alert(i);
        layer.property(property).removeKey(i);
        //alert(layer.property(property).numKeys);
        }
    }

//----------------------------------------------------------------------------------------------------------------------------------

function deleteExpressions() {
    if(layerCheck().length < 1) {
        alert("Please select at least 1 layer");
            return false;
        } else {
            var layers = app.project.activeItem.selectedLayers;
            for(var i = 0; i < layers.length; i++) {
                layers[i].property("Position").expression = "";
                layers[i].property("Scale").expression = "";
                layers[i].property("Opacity").expression = "";
                layers[i].property("Anchor Point").expression = "";
                if(layers[i].property("Audio Levels") != null) {
                layers[i].property("Audio Levels").expression = "";
                }
                var numEffects = layers[i].Effects.numProperties;
            //alert(numEffects);
            for(var e = 1; e <= numEffects; e++) {
                var thisEffect = layers[i].effect(e);
               // alert(thisEffect);
               // alert(thisEffect.numProperties);
                for(var r = 1; r <= thisEffect.numProperties; r++) {
                    thisEffect.property(r).expression = "";
                    }
                }
                }
            
            }
    }

//----------------------------------------------------------------------------------------------------------------------------------

function deleteEffects() {
    if(layerCheck().length < 1) {
        alert("Please select at least 1 layer");
            return false;
        } else {
            var layers = app.project.activeItem.selectedLayers;
            for(var a = 0; a < layers.length; a++) {
                var numEffects = layers[a].Effects.numProperties;
                for(var e = numEffects; e >= 0; e--) {
                    layers[a].effect(e).remove();
                    }
                }
            }
    }

//----------------------------------------------------------------------------------------------------------------------------------

function resetTransform() {
    if(layerCheck().length < 1) {
        alert("Please select at least 1 layer");
            return false;
        } else {
            var layers = app.project.activeItem.selectedLayers;
            for(var i = 0; i < layers.length; i++) {
                layers[i].property("Position").setValue([app.project.activeItem.width/2, app.project.activeItem.height/2]);
                layers[i].property("Scale").setValue([100, 100]);
                layers[i].property("Opacity").setValue(100);
                layers[i].property("Anchor Point").setValue([app.project.activeItem.width/2, app.project.activeItem.height/2]);
                layers[i].property("Rotation").setValue(0);
                if(layers[i].property("Audio Levels") != null) {
                        layers[i].property("Audio Levels").setValue([0, 0]);
                    }
                }
            }
    }

//----------------------------------------------------------------------------------------------------------------------------------

function layerCheck() {
    var selectedLayers = app.project.activeItem.selectedLayers;

    return selectedLayers;
    }

//----------------------------------------------------------------------------------------------------------------------------------

// extra buttons für die effekte 


/*
effekt2Button.onClick = function(){
        app.beginUndoGroup("Anwenden Effekt bitte");
        
            for(var k = 1; k <= comp.numLayers; k++){
                comp.layer(k).add(pfile);
                }
        
        app.endUndoGroup();
        alert("anderer Effekt drinne junge");
    }
*/

