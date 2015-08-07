function fingerprint_flash() {
    "use strict";
    var strOnError, objPlayerVersion, strVersion, strOut;

    strOnError = "N/A";
    objPlayerVersion = null;
    strVersion = null;
    strOut = null;

    try {
        objPlayerVersion = swfobject.getFlashPlayerVersion();
        strVersion = objPlayerVersion.major + "." + objPlayerVersion.minor + "." + objPlayerVersion.release;
        if (strVersion === "0.0.0") {
            strVersion = "N/A";
        }
        strOut = strVersion;
        return strOut;
    } catch (err) {
        return strOnError;
    }
}

function fingerprint_browser() {
    "use strict";
    var strOnError, strUserAgent, numVersion, strBrowser, strOut;

    strOnError = "Error";
    strUserAgent = null;
    numVersion = null;
    strBrowser  = null;
    strOut = null;

    try {
        strUserAgent = navigator.userAgent.toLowerCase();
        if (/msie (\d+\.\d+);/.test(strUserAgent)) { //test for MSIE x.x;
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            if (strUserAgent.indexOf("trident/6") > -1) {
                numVersion = 10;
            }
            if (strUserAgent.indexOf("trident/5") > -1) {
                numVersion = 9;
            }
            if (strUserAgent.indexOf("trident/4") > -1) {
                numVersion = 8;
            }
            strBrowser = "Internet Explorer " + numVersion;
        } else if (strUserAgent.indexOf("trident/7") > -1) { //IE 11+ gets rid of the legacy 'MSIE' in the user-agent string;
            numVersion = 11;
            strBrowser = "Internet Explorer " + numVersion;
        }  else if (/firefox[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Firefox " + numVersion;
        } else if (/opera[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Opera/x.x or Opera x.x (ignoring remaining decimal places);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Opera " + numVersion;
        } else if (/chrome[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Chrome/x.x or Chrome x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Chrome " + numVersion;
        } else if (/version[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Version/x.x or Version x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Safari " + numVersion;
        } else if (/rv[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for rv/x.x or rv x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Mozilla " + numVersion;
        } else if (/mozilla[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Mozilla/x.x or Mozilla x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Mozilla " + numVersion;
        } else if (/binget[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for BinGet/x.x or BinGet x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (BinGet) " + numVersion;
        } else if (/curl[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Curl/x.x or Curl x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (cURL) " + numVersion;
        } else if (/java[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Java/x.x or Java x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (Java) " + numVersion;
        } else if (/libwww-perl[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for libwww-perl/x.x or libwww-perl x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (libwww-perl) " + numVersion;
        } else if (/microsoft url control -[\s](\d+\.\d+)/.test(strUserAgent)) { //test for Microsoft URL Control - x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (Microsoft URL Control) " + numVersion;
        } else if (/peach[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Peach/x.x or Peach x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (Peach) " + numVersion;
        } else if (/php[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for PHP/x.x or PHP x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (PHP) " + numVersion;
        } else if (/pxyscand[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for pxyscand/x.x or pxyscand x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (pxyscand) " + numVersion;
        } else if (/pycurl[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for pycurl/x.x or pycurl x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (PycURL) " + numVersion;
        } else if (/python-urllib[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for python-urllib/x.x or python-urllib x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (Python URLlib) " + numVersion;
        } else if (/appengine-google/.test(strUserAgent)) { //test for AppEngine-Google;
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Cloud (Google AppEngine) " + numVersion;
        } else {
            strBrowser = "Unknown";
        }
        strOut = strBrowser;
        return strOut;
    } catch (err) {
        return strOnError;
    }
}

function fingerprint_canvas() {
    "use strict";
    var strOnError, canvas, strCText, strText, strOut;

    strOnError = "Error";
    canvas = null;
    strCText = null;
    strText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~1!2@3#4$5%6^7&8*9(0)-_=+[{]}|;:',<.>/?";
    strOut = null;

    try {
        canvas = document.createElement('canvas');
        strCText = canvas.getContext('2d');
        strCText.textBaseline = "top";
        strCText.font = "14px 'Arial'";
        strCText.textBaseline = "alphabetic";
        strCText.fillStyle = "#f60";
        strCText.fillRect(125, 1, 62, 20);
        strCText.fillStyle = "#069";
        strCText.fillText(strText, 2, 15);
        strCText.fillStyle = "rgba(102, 204, 0, 0.7)";
        strCText.fillText(strText, 4, 17);
        strOut = canvas.toDataURL();
        return strOut;
    } catch (err) {
        return strOnError;
    }
}

function fingerprint_connection() {
    "use strict";
    var strOnError, strConnection, strOut;

    strOnError = "N/A";
    strConnection = null;
    strOut = null;

    try {
        // only on android
        strConnection = navigator.connection.type;
        strOut = strConnection;
    } catch (err) {
        // return N/A if navigator.connection object does not apply to this device
        return strOnError;
    }
    return strOut;
}

function fingerprint_cookie() {
    "use strict";
    var strOnError, bolCookieEnabled, bolOut;

    strOnError = "Error";
    bolCookieEnabled = null;
    bolOut = null;

    try {
        bolCookieEnabled = (navigator.cookieEnabled) ? true : false;

        //if not IE4+ nor NS6+
        if (typeof navigator.cookieEnabled === "undefined" && !bolCookieEnabled) {
            document.cookie = "testcookie";
            bolCookieEnabled = (document.cookie.indexOf("testcookie") !== -1) ? true : false;
        }
        bolOut = bolCookieEnabled;
        return bolOut;
    } catch (err) {
        return strOnError;
    }
}

function fingerprint_display() {
    "use strict";
    var strSep, strPair, strOnError, strScreen, strDisplay, strOut;

    strSep = "|";
    strPair = "=";
    strOnError = "Error";
    strScreen = null;
    strDisplay = null;
    strOut = null;

    try {
        strScreen = window.screen;
        if (strScreen) {
            strDisplay = strScreen.colorDepth + strSep + strScreen.width + strSep + strScreen.height + strSep + strScreen.availWidth + strSep + strScreen.availHeight;
        }
        strOut = strDisplay;
        return strOut;
    } catch (err) {
        return strOnError;
    }
}

function fingerprint_fontsmoothing() {
    "use strict";
    var strOnError, strFontSmoothing, canvasNode, ctx, i, j, imageData, alpha, strOut;

    strOnError = "Unknown";
    strFontSmoothing = null;
    canvasNode = null;
    ctx = null;
    imageData = null;
    alpha = null;
    strOut = null;

    if (typeof(screen.fontSmoothingEnabled) !== "undefined") {
        strFontSmoothing = screen.fontSmoothingEnabled;
    } else {
        try {
            fontsmoothing = "false";
            canvasNode = document.createElement('canvas');
            canvasNode.width = "35";
            canvasNode.height = "35";
            canvasNode.style.display = 'none';
            document.body.appendChild(canvasNode);
            ctx = canvasNode.getContext('2d');
            ctx.textBaseline = "top";
            ctx.font = "32px Arial";
            ctx.fillStyle = "black";
            ctx.strokeStyle = "black";
            ctx.fillText("O", 0, 0);
            for (j = 8; j <= 32; j = j + 1) {
                for (i = 1; i <= 32; i = i + 1) {
                    imageData = ctx.getImageData(i, j, 1, 1).data;
                    alpha = imageData[3];
                    if (alpha !== 255 && alpha !== 0) {
                        strFontSmoothing = "true"; // font-smoothing must be on.
                    }
                }
            }
            strOut = strFontSmoothing;
        } catch (err) {
            return strOnError;
        }
    }
    strOut = strFontSmoothing;
    return strOut;
}

function fingerprint_fonts() {
    "use strict";
    var strOnError, style, fonts, count, template, fragment, divs, i, font, div, body, result, e;

    strOnError = "Error";
    style = null;
    fonts = null;
    font = null;
    count = 0;
    template = null;
    divs = null;
    e = null;
    div = null;
    body = null;
    i = 0;

    try {
        style = "position: absolute; visibility: hidden; display: block !important";
        fonts = ["Abadi MT Condensed Light", "Adobe Fangsong Std", "Adobe Hebrew", "Adobe Ming Std", "Agency FB", "Aharoni", "Andalus", "Angsana New", "AngsanaUPC", "Aparajita", "Arab", "Arabic Transparent", "Arabic Typesetting", "Arial Baltic", "Arial Black", "Arial CE", "Arial CYR", "Arial Greek", "Arial TUR", "Arial", "Batang", "BatangChe", "Bauhaus 93", "Bell MT", "Bitstream Vera Serif", "Bodoni MT", "Bookman Old Style", "Braggadocio", "Broadway", "Browallia New", "BrowalliaUPC", "Calibri Light", "Calibri", "Californian FB", "Cambria Math", "Cambria", "Candara", "Castellar", "Casual", "Centaur", "Century Gothic", "Chalkduster", "Colonna MT", "Comic Sans MS", "Consolas", "Constantia", "Copperplate Gothic Light", "Corbel", "Cordia New", "CordiaUPC", "Courier New Baltic", "Courier New CE", "Courier New CYR", "Courier New Greek", "Courier New TUR", "Courier New", "DFKai-SB", "DaunPenh", "David", "DejaVu LGC Sans Mono", "Desdemona", "DilleniaUPC", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Engravers MT", "Eras Bold ITC", "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "Eurostile", "FangSong", "Forte", "FrankRuehl", "Franklin Gothic Heavy", "Franklin Gothic Medium", "FreesiaUPC", "French Script MT", "Gabriola", "Gautami", "Georgia", "Gigi", "Gisha", "Goudy Old Style", "Gulim", "GulimChe", "GungSeo", "Gungsuh", "GungsuhChe", "Haettenschweiler", "Harrington", "Hei S", "HeiT", "Heisei Kaku Gothic", "Hiragino Sans GB", "Impact", "Informal Roman", "IrisUPC", "Iskoola Pota", "JasmineUPC", "KacstOne", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "Kino MT", "KodchiangUPC", "Kokila", "Kozuka Gothic Pr6N", "Lao UI", "Latha", "Leelawadee", "Levenim MT", "LilyUPC", "Lohit Gujarati", "Loma", "Lucida Bright", "Lucida Console", "Lucida Fax", "Lucida Sans Unicode", "MS Gothic", "MS Mincho", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS UI Gothic", "MV Boli", "Magneto", "Malgun Gothic", "Mangal", "Matura MT Script Capitals", "Meiryo UI", "Meiryo", "Menlo", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "Miriam Fixed", "Miriam", "Mongolian Baiti", "MoolBoran", "NSimSun", "Narkisim", "News Gothic MT", "Niagara Solid", "Nyala", "PMingLiU", "PMingLiU-ExtB", "Palace Script MT", "Palatino Linotype", "Papyrus", "Perpetua", "Plantagenet Cherokee", "Playbill", "Prelude Bold", "Prelude Condensed Bold", "Prelude Condensed Medium", "Prelude Medium", "PreludeCompressedWGL Black", "PreludeCompressedWGL Bold", "PreludeCompressedWGL Light", "PreludeCompressedWGL Medium", "PreludeCondensedWGL Black", "PreludeCondensedWGL Bold", "PreludeCondensedWGL Light", "PreludeCondensedWGL Medium", "PreludeWGL Black", "PreludeWGL Bold", "PreludeWGL Light", "PreludeWGL Medium", "Raavi", "Rachana", "Rockwell", "Rod", "Sakkal Majalla", "Sawasdee", "Script MT Bold", "Segoe Print", "Segoe Script", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Segoe UI", "Shonar Bangla", "Showcard Gothic", "Shruti", "SimHei", "SimSun", "SimSun-ExtB", "Simplified Arabic Fixed", "Simplified Arabic", "Snap ITC", "Sylfaen", "Symbol", "Tahoma", "Times New Roman Baltic", "Times New Roman CE", "Times New Roman CYR", "Times New Roman Greek", "Times New Roman TUR", "Times New Roman", "TlwgMono", "Traditional Arabic", "Trebuchet MS", "Tunga", "Tw Cen MT Condensed Extra Bold", "Ubuntu", "Umpush", "Univers", "Utopia", "Utsaah", "Vani", "Verdana", "Vijaya", "Vladimir Script", "Vrinda", "Webdings", "Wide Latin", "Wingdings"];
        count = fonts.length;
        template = '<b style="display:inline !important; width:auto !important; font:normal 10px/1 \'X\',sans-serif !important">ww</b>' + '<b style="display:inline !important; width:auto !important; font:normal 10px/1 \'X\',monospace !important">ww</b>';
        fragment = document.createDocumentFragment();
        divs = [];
        for (i = 0; i < count; i = i + 1) {
            font = fonts[i];
            div = document.createElement('div');
            font = font.replace(/['"<>]/g, '');
            div.innerHTML = template.replace(/X/g, font);
            div.style.cssText = style;
            fragment.appendChild(div);
            divs.push(div);
        }
        body = document.body;
        body.insertBefore(fragment, body.firstChild);
        result = [];
        for (i = 0; i < count; i = i + 1) {
            e = divs[i].getElementsByTagName('b');
            if (e[0].offsetWidth === e[1].offsetWidth) {
                result.push(fonts[i]);
            }
        }
        // do not combine these two loops, remove child will cause reflow
        // and induce severe performance hit
        for (i = 0; i < count; i = i + 1) {
            body.removeChild(divs[i]);
        }
        return result.join('|');
    } catch (err) {
        return strOnError;
    }
}

var fontDetector = function() {
    // a font will be compared against all the three default fonts.
    // and if it doesn't match all 3 then that font is not available.
    var baseFonts = ['monospace', 'sans-serif', 'serif'];

    //we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    var testString = "mmmmmmmmmmlli";

    //we test using 72px font size, we may use any size. I guess larger the better.
    var testSize = '72px';

    var h = document.getElementsByTagName("body")[0];

    // create a SPAN in the document to get the width of the text we use to test
    var s = document.createElement("span");
    s.style.fontSize = testSize;
    s.innerHTML = testString;
    var defaultWidth = {};
    var defaultHeight = {};
    for (var index in baseFonts) {
        //get the default width for the three base fonts
        s.style.fontFamily = baseFonts[index];
        h.appendChild(s);
        defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
        defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
        h.removeChild(s);
    }

    function detect(font) {
        var detected = false;
        for (var index in baseFonts) {
            s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
            h.appendChild(s);
            var matched = (s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]]);
            h.removeChild(s);
            detected = detected || matched;
        }
        return detected;
    }

    this.detect = detect;
};

function fingerprint_java() {
    "use strict";
    var strOnError, strJavaEnabled, strOut;

    strOnError = "Error";
    strJavaEnabled = null;
    strOut = null;

    try {
        if (navigator.javaEnabled()) {
            strJavaEnabled = "true";
        } else {
            strJavaEnabled = "false";
        }
        strOut = strJavaEnabled;
        return strOut;
    } catch (err) {
        return strOnError;
    }
}

function fingerprint_language() {
    "use strict";
    var strSep, strPair, strOnError, strLang, strTypeLng, strTypeBrLng, strTypeSysLng, strTypeUsrLng, strOut;

    strSep = "|";
    strPair = "=";
    strOnError = "Error";
    strLang = null;
    strTypeLng = null;
    strTypeBrLng = null;
    strTypeSysLng = null;
    strTypeUsrLng = null;
    strOut = null;

    try {
        strTypeLng = typeof (navigator.language);
        strTypeBrLng = typeof (navigator.browserLanguage);
        strTypeSysLng = typeof (navigator.systemLanguage);
        strTypeUsrLng = typeof (navigator.userLanguage);

        if (strTypeLng !== "undefined") {
            strLang = "lang" + strPair + navigator.language;
        } else if (strTypeBrLng !== "undefined") {
            strLang = "lang" + strPair + navigator.browserLanguage;
        } else {
            strLang = "lang" + strPair;
        }
        strOut = strLang;
        return strOut;
    } catch (err) {
        return strOnError;
    }
}

function fingerprint_silverlight() {
    "use strict";
    var strOnError, objControl, objPlugin, strSilverlightVersion, strOut;

    strOnError = "Error";
    objControl = null;
    objPlugin = null;
    strSilverlightVersion = null;
    strOut = null;

    try {
        try {
            objControl = new ActiveXObject('AgControl.AgControl');
            if (objControl.IsVersionSupported("5.0")) {
                strSilverlightVersion = "5.x";
            } else if (objControl.IsVersionSupported("4.0")) {
                strSilverlightVersion = "4.x";
            } else if (objControl.IsVersionSupported("3.0")) {
                strSilverlightVersion = "3.x";
            } else if (objControl.IsVersionSupported("2.0")) {
                strSilverlightVersion = "2.x";
            } else {
                strSilverlightVersion = "1.x";
            }
            objControl = null;
        } catch (e) {
            objPlugin = navigator.plugins["Silverlight Plug-In"];
            if (objPlugin) {
                if (objPlugin.description === "1.0.30226.2") {
                    strSilverlightVersion = "2.x";
                } else {
                    strSilverlightVersion = parseInt(objPlugin.description[0], 10);
                }
            } else {
                strSilverlightVersion = "N/A";
            }
        }
        strOut = strSilverlightVersion;
        return strOut;
    } catch (err) {
        return strOnError;
    }
}

function fingerprint_os() {
    "use strict";
    var strSep, strOnError, strUserAgent, strPlatform, strOS, strOSBits, strOut;

    strSep = "|";
    strOnError = "Error";
    strUserAgent = null;
    strPlatform = null;
    strOS = null;
    strOSBits = null;
    strOut = null;

    try {
        /* navigator.userAgent is supported by all major browsers */
        strUserAgent = navigator.userAgent.toLowerCase();
        /* navigator.platform is supported by all major browsers */
        strPlatform = navigator.platform.toLowerCase();
        if (strUserAgent.indexOf("windows nt 6.3") !== -1) {
            strOS = "Windows 8.1";
        } else if (strUserAgent.indexOf("windows nt 6.2") !== -1) {
            strOS = "Windows 8";
        } else if (strUserAgent.indexOf("windows nt 6.1") !== -1) {
            strOS = "Windows 7";
        } else if (strUserAgent.indexOf("windows nt 6.0") !== -1) {
            strOS = "Windows Vista/Windows Server 2008";
        } else if (strUserAgent.indexOf("windows nt 5.2") !== -1) {
            strOS = "Windows XP x64/Windows Server 2003";
        } else if (strUserAgent.indexOf("windows nt 5.1") !== -1) {
            strOS = "Windows XP";
        } else if (strUserAgent.indexOf("windows nt 5.01") !== -1) {
            strOS = "Windows 2000, Service Pack 1 (SP1)";
        } else if (strUserAgent.indexOf("windows xp") !== -1) {
            strOS = "Windows XP";
        } else if (strUserAgent.indexOf("windows 2000") !== -1) {
            strOS = "Windows 2000";
        } else if (strUserAgent.indexOf("windows nt 5.0") !== -1) {
            strOS = "Windows 2000";
        } else if (strUserAgent.indexOf("windows nt 4.0") !== -1) {
            strOS = "Windows NT 4.0";
        } else if (strUserAgent.indexOf("windows nt") !== -1) {
            strOS = "Windows NT 4.0";
        } else if (strUserAgent.indexOf("winnt4.0") !== -1) {
            strOS = "Windows NT 4.0";
        } else if (strUserAgent.indexOf("winnt") !== -1) {
            strOS = "Windows NT 4.0";
        } else if (strUserAgent.indexOf("windows me") !== -1) {
            strOS = "Windows ME";
        } else if (strUserAgent.indexOf("win 9x 4.90") !== -1) {
            strOS = "Windows ME";
        } else if (strUserAgent.indexOf("windows 98") !== -1) {
            strOS = "Windows 98";
        } else if (strUserAgent.indexOf("win98") !== -1) {
            strOS = "Windows 98";
        } else if (strUserAgent.indexOf("windows 95") !== -1) {
            strOS = "Windows 95";
        } else if (strUserAgent.indexOf("windows_95") !== -1) {
            strOS = "Windows 95";
        } else if (strUserAgent.indexOf("win95") !== -1) {
            strOS = "Windows 95";
        } else if (strUserAgent.indexOf("ce") !== -1) {
            strOS = "Windows CE";
        } else if (strUserAgent.indexOf("win16") !== -1) {
            strOS = "Windows 3.11";
        } else if (strUserAgent.indexOf("iemobile") !== -1) {
            strOS = "Windows Mobile";
        } else if (strUserAgent.indexOf("wm5 pie") !== -1) {
            strOS = "Windows Mobile";
        } else if (strUserAgent.indexOf("windows") !== -1) {
            strOS = "Windows (Unknown Version)";
        } else if (strUserAgent.indexOf("openbsd") !== -1) {
            strOS = "Open BSD";
        } else if (strUserAgent.indexOf("sunos") !== -1) {
            strOS = "Sun OS";
        } else if (strUserAgent.indexOf("ubuntu") !== -1) {
            strOS = "Ubuntu";
        } else if (strUserAgent.indexOf("ipad") !== -1) {
            strOS = "iOS (iPad)";
        } else if (strUserAgent.indexOf("ipod") !== -1) {
            strOS = "iOS (iTouch)";
        } else if (strUserAgent.indexOf("iphone") !== -1) {
            strOS = "iOS (iPhone)";
        } else if (strUserAgent.indexOf("mac os x beta") !== -1) {
            strOS = "Mac OSX Beta (Kodiak)";
        } else if (strUserAgent.indexOf("mac os x 10.0") !== -1) {
            strOS = "Mac OSX Cheetah";
        } else if (strUserAgent.indexOf("mac os x 10.1") !== -1) {
            strOS = "Mac OSX Puma";
        } else if (strUserAgent.indexOf("mac os x 10.2") !== -1) {
            strOS = "Mac OSX Jaguar";
        } else if (strUserAgent.indexOf("mac os x 10.3") !== -1) {
            strOS = "Mac OSX Panther";
        } else if (strUserAgent.indexOf("mac os x 10.4") !== -1) {
            strOS = "Mac OSX Tiger";
        } else if (strUserAgent.indexOf("mac os x 10.5") !== -1) {
            strOS = "Mac OSX Leopard";
        } else if (strUserAgent.indexOf("mac os x 10.6") !== -1) {
            strOS = "Mac OSX Snow Leopard";
        } else if (strUserAgent.indexOf("mac os x 10.7") !== -1) {
            strOS = "Mac OSX Lion";
        } else if (strUserAgent.indexOf("mac os x") !== -1) {
            strOS = "Mac OSX (Version Unknown)";
        } else if (strUserAgent.indexOf("mac_68000") !== -1) {
            strOS = "Mac OS Classic (68000)";
        } else if (strUserAgent.indexOf("68K") !== -1) {
            strOS = "Mac OS Classic (68000)";
        } else if (strUserAgent.indexOf("mac_powerpc") !== -1) {
            strOS = "Mac OS Classic (PowerPC)";
        } else if (strUserAgent.indexOf("ppc mac") !== -1) {
            strOS = "Mac OS Classic (PowerPC)";
        } else if (strUserAgent.indexOf("macintosh") !== -1) {
            strOS = "Mac OS Classic";
        } else if (strUserAgent.indexOf("googletv") !== -1) {
            strOS = "Android (GoogleTV)";
        } else if (strUserAgent.indexOf("xoom") !== -1) {
            strOS = "Android (Xoom)";
        } else if (strUserAgent.indexOf("htc_flyer") !== -1) {
            strOS = "Android (HTC Flyer)";
        } else if (strUserAgent.indexOf("android") !== -1) {
            strOS = "Android";
        } else if (strUserAgent.indexOf("symbian") !== -1) {
            strOS = "Symbian";
        } else if (strUserAgent.indexOf("series60") !== -1) {
            strOS = "Symbian (Series 60)";
        } else if (strUserAgent.indexOf("series70") !== -1) {
            strOS = "Symbian (Series 70)";
        } else if (strUserAgent.indexOf("series80") !== -1) {
            strOS = "Symbian (Series 80)";
        } else if (strUserAgent.indexOf("series90") !== -1) {
            strOS = "Symbian (Series 90)";
        } else if (strUserAgent.indexOf("x11") !== -1) {
            strOS = "UNIX";
        } else if (strUserAgent.indexOf("nix") !== -1) {
            strOS = "UNIX";
        } else if (strUserAgent.indexOf("linux") !== -1) {
            strOS = "Linux";
        } else if (strUserAgent.indexOf("qnx") !== -1) {
            strOS = "QNX";
        } else if (strUserAgent.indexOf("os/2") !== -1) {
            strOS = "IBM OS/2";
        } else if (strUserAgent.indexOf("beos") !== -1) {
            strOS = "BeOS";
        } else if (strUserAgent.indexOf("blackberry95") !== -1) {
            strOS = "Blackberry (Storm 1/2)";
        } else if (strUserAgent.indexOf("blackberry97") !== -1) {
            strOS = "Blackberry (Bold)";
        } else if (strUserAgent.indexOf("blackberry96") !== -1) {
            strOS = "Blackberry (Tour)";
        } else if (strUserAgent.indexOf("blackberry89") !== -1) {
            strOS = "Blackberry (Curve 2)";
        } else if (strUserAgent.indexOf("blackberry98") !== -1) {
            strOS = "Blackberry (Torch)";
        } else if (strUserAgent.indexOf("playbook") !== -1) {
            strOS = "Blackberry (Playbook)";
        } else if (strUserAgent.indexOf("wnd.rim") !== -1) {
            strOS = "Blackberry (IE/FF Emulator)";
        } else if (strUserAgent.indexOf("blackberry") !== -1) {
            strOS = "Blackberry";
        } else if (strUserAgent.indexOf("palm") !== -1) {
            strOS = "Palm OS";
        } else if (strUserAgent.indexOf("webos") !== -1) {
            strOS = "WebOS";
        } else if (strUserAgent.indexOf("hpwos") !== -1) {
            strOS = "WebOS (HP)";
        } else if (strUserAgent.indexOf("blazer") !== -1) {
            strOS = "Palm OS (Blazer)";
        } else if (strUserAgent.indexOf("xiino") !== -1) {
            strOS = "Palm OS (Xiino)";
        } else if (strUserAgent.indexOf("kindle") !== -1) {
            strOS = "Kindle";
        } else if (strUserAgent.indexOf("wii") !== -1) {
            strOS = "Nintendo (Wii)";
        } else if (strUserAgent.indexOf("nintendo ds") !== -1) {
            strOS = "Nintendo (DS)";
        } else if (strUserAgent.indexOf("playstation 3") !== -1) {
            strOS = "Sony (Playstation Console)";
        } else if (strUserAgent.indexOf("playstation portable") !== -1) {
            strOS = "Sony (Playstation Portable)";
        } else if (strUserAgent.indexOf("webtv") !== -1) {
            strOS = "MSN TV (WebTV)";
        } else if (strUserAgent.indexOf("inferno") !== -1) {
            strOS = "Inferno";
        } else {
            strOS = "Unknown";
        }
        if (strPlatform.indexOf("x64") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("wow64") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("win64") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("win32") !== -1) {
            strOSBits = "32 bits";
        } else if (strPlatform.indexOf("x64") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("x32") !== -1) {
            strOSBits = "32 bits";
        } else if (strPlatform.indexOf("x86") !== -1) {
            strOSBits = "32 bits*";
        } else if (strPlatform.indexOf("ppc") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("alpha") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("68k") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("iphone") !== -1) {
            strOSBits = "32 bits";
        } else if (strPlatform.indexOf("android") !== -1) {
            strOSBits = "32 bits";
        } else {
            strOSBits = "Unknown";
        }
        strOut = strOS + strSep + strOSBits;
        return strOut;
    } catch (err) {
        return strOnError;
    }
}

function fingerprint_timezone() {
    "use strict";
    var strOnError, dtDate, numOffset, numGMTHours, numOut;

    strOnError = "Error";
    dtDate = null;
    numOffset = null;
    numGMTHours = null;
    numOut = null;

    try {
        dtDate = new Date();
        numOffset = dtDate.getTimezoneOffset();
        numGMTHours = (numOffset / 60) * (-1);
        numOut = numGMTHours;
        return numOut;
    } catch (err) {
        return strOnError;
    }
}

function fingerprint_touch() {
    "use strict";
    var bolTouchEnabled, bolOut;

    bolTouchEnabled = false;
    bolOut = null;

    try {
        if (document.createEvent("TouchEvent")) {
            bolTouchEnabled = true;
        }
        bolOut = bolTouchEnabled;
        return bolOut;
    } catch (ignore) {
        bolOut = bolTouchEnabled
        return bolOut;
    }
}

function fingerprint_truebrowser() {
    "use strict";
    var strBrowser, strUserAgent, strOut;

    strBrowser = "Unknown";
    strUserAgent = null;
    strOut = null;

    strUserAgent = navigator.userAgent.toLowerCase();

    /* Checks for different browsers, cannot use Try/Catch block */
    if (document.all && document.getElementById && navigator.savePreferences && (strUserAgent.indexOf("Netfront") < 0) && navigator.appName !== "Blazer") {
        strBrowser = "Escape 5";
    } else if (navigator.vendor === "KDE") {
        strBrowser = "Konqueror";
    } else if (document.childNodes && !document.all && !navigator.taintEnabled && !navigator.accentColorName) {
        strBrowser = "Safari";
    } else if (document.childNodes && !document.all && !navigator.taintEnabled && navigator.accentColorName) {
        strBrowser = "OmniWeb 4.5+";
    } else if (navigator.__ice_version) {
        strBrowser = "ICEBrowser";
    } else if (window.ScriptEngine && ScriptEngine().indexOf("InScript") + 1 && document.createElement) {
        strBrowser = "iCab 3+";
    } else if (window.ScriptEngine && ScriptEngine().indexOf("InScript") + 1) {
        strBrowser = "iCab 2-";
    } else if (strUserAgent.indexOf("hotjava") + 1 && (navigator.accentColorName) === "undefined") {
        strBrowser = "HotJava";
    } else if (document.layers && !document.classes) {
        strBrowser = "Omniweb 4.2-";
    } else if (document.layers && !navigator.mimeTypes["*"]) {
        strBrowser = "Escape 4";
    } else if (document.layers) {
        strBrowser = "Netscape 4";
    } else if (window.opera && document.getElementsByClassName) {
        strBrowser = "Opera 9.5+";
    } else if (window.opera && window.getComputedStyle) {
        strBrowser = "Opera 8";
    } else if (window.opera && document.childNodes) {
        strBrowser = "Opera 7";
    } else if (window.opera) {
        strBrowser = "Opera " + window.opera.version();
    } else if (navigator.appName.indexOf("WebTV") + 1) {
        strBrowser = "WebTV";
    } else if (strUserAgent.indexOf("netgem") + 1) {
        strBrowser = "Netgem NetBox";
    } else if (strUserAgent.indexOf("opentv") + 1) {
        strBrowser = "OpenTV";
    } else if (strUserAgent.indexOf("ipanel") + 1) {
        strBrowser = "iPanel MicroBrowser";
    } else if (document.getElementById && !document.childNodes) {
        strBrowser = "Clue browser";
    } else if (navigator.product && navigator.product.indexOf("Hv") === 0) {
        strBrowser = "Tkhtml Hv3+";
    } else if (typeof InstallTrigger !== 'undefined') {
        strBrowser = "Firefox";
    } else if (window.atob) {
        strBrowser = "Internet Explorer 10+";
    } else if (XDomainRequest && window.performance) {
        strBrowser = "Internet Explorer 9";
    } else if (XDomainRequest) {
        strBrowser = "Internet Explorer 8";
    } else if (document.documentElement && document.documentElement.style.maxHeight !== "undefined") {
        strBrowser = "Internet Explorer 7";//xxxxx
    } else if (document.compatMode && document.all) {
        strBrowser = "Internet Explorer 6";//xxxxx
    } else if (window.createPopup) {
        strBrowser = "Internet Explorer 5.5";
    } else if (window.attachEvent) {
        strBrowser = "Internet Explorer 5";
    } else if (document.all && navigator.appName !== "Microsoft Pocket Internet Explorer") {
        strBrowser = "Internet Explorer 4";
    } else if ((strUserAgent.indexOf("msie") + 1) && window.ActiveXObject) {
        strBrowser = "Pocket Internet Explorer";
    } else if (document.getElementById && ((strUserAgent.indexOf("netfront") + 1) || navigator.appName === "Blazer" || navigator.product === "Gecko" || (navigator.appName.indexOf("PSP") + 1) || (navigator.appName.indexOf("PLAYSTATION 3") + 1))) {
        strBrowser = "NetFront 3+";
    } else if (navigator.product === "Gecko" && !navigator.savePreferences) {
        strBrowser = "Gecko engine (Mozilla, Netscape 6+ etc.)";
    } else if (window.chrome) {
        strBrowser = "Chrome";
    }
    strOut = strBrowser;
    return strOut;
}

function activeXDetect(componentClassID) {
    "use strict";
    var strComponentVersion, strOut;

    strComponentVersion = "";
    strOut = "";

    try {
        strComponentVersion = document.body.getComponentVersion('{' + componentClassID + '}', 'ComponentID');
        if (strComponentVersion !== null) {
            strOut = strComponentVersion;
        } else {
            strOut = false;
        }
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}

function stripIllegalChars(strValue) {
    "use strict";
    var iCounter, strOriginal, strOut;

    iCounter = 0;
    strOriginal = "";
    strOut = "";

    try {
        strOriginal = strValue.toLowerCase();
        for (iCounter = 0; iCounter < strOriginal.length; iCounter = iCounter + 1) {
            if (strOriginal.charAt(iCounter) !== '\n' && strOriginal.charAt(iCounter) !== '/' && strOriginal.charAt(iCounter) !== "\\") {
                strOut = strOut + strOriginal.charAt(iCounter);
            } else if (strOriginal.charAt(iCounter) === '\n') {
                strOut = strOut + "n";
            }
        }
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}

function hashtable_containsKey(key) {
    "use strict";
    var bolExists, iCounter;

    bolExists = false;
    iCounter = 0;

    for (iCounter = 0; iCounter < this.hashtable.length; iCounter = iCounter + 1) {
        if (iCounter === key && this.hashtable[iCounter] !== null) {
            bolExists = true;
            break;
        }
    }
    return bolExists;
}

function hashtable_get(key) {
    "use strict";
    return this.hashtable[key];
}

function hashtable_keys() {
    "use strict";
    var keys, iCounter;

    keys = [];
    iCounter = 0;

    for (iCounter in this.hashtable) {
        if (this.hashtable[iCounter] !== null) {
            keys.push(iCounter);
        }
    }
    return keys;
}

function hashtable_put(key, value) {
    "use strict";
    if (key === null || value === null) {
        throw "NullPointerException {" + key + "},{" + value + "}";
    }
    this.hashtable[key] = value;
}

function hashtable_size() {
    "use strict";
    var iSize, iCounter, iOut;

    iSize = 0;
    iCounter = 0;
    iOut = 0;

    for (iCounter in this.hashtable) {
        if (this.hashtable[iCounter] !== null) {
            iSize = iSize + 1;
        }
    }
    iOut = iSize;
    return iOut;
}

function Hashtable() {
    "use strict";
    this.containsKey = hashtable_containsKey;
    this.get = hashtable_get;
    this.keys = hashtable_keys;
    this.put = hashtable_put;
    this.size = hashtable_size;
    this.hashtable = [];
}

/* Detect Plugins */
function fingerprint_plugins() {
    "use strict";
    var htIEComponents, strKey, strName, strVersion, strTemp, bolFirst, iCount, strMimeType, strOut;

    try {
        /* Create hashtable of IE components */
        htIEComponents = new Hashtable();
        htIEComponents.put('7790769C-0471-11D2-AF11-00C04FA35D02', 'AddressBook'); // Address Book
        htIEComponents.put('47F67D00-9E55-11D1-BAEF-00C04FC2D130', 'AolArtFormat'); // AOL ART Image Format Support
        htIEComponents.put('76C19B38-F0C8-11CF-87CC-0020AFEECF20', 'ArabicDS'); // Arabic Text Display Support
        htIEComponents.put('76C19B34-F0C8-11CF-87CC-0020AFEECF20', 'ChineseSDS'); // Chinese (Simplified) Text Display Support
        htIEComponents.put('76C19B33-F0C8-11CF-87CC-0020AFEECF20', 'ChineseTDS'); // Chinese (traditional) Text Display Support
        htIEComponents.put('238F6F83-B8B4-11CF-8771-00A024541EE3', 'CitrixICA'); // Citrix ICA Client
        htIEComponents.put('283807B5-2C60-11D0-A31D-00AA00B92C03', 'DirectAnim'); // DirectAnimation
        htIEComponents.put('44BBA848-CC51-11CF-AAFA-00AA00B6015C', 'DirectShow'); // DirectShow
        htIEComponents.put('9381D8F2-0288-11D0-9501-00AA00B911A5', 'DynHTML'); // Dynamic HTML Data Binding
        htIEComponents.put('4F216970-C90C-11D1-B5C7-0000F8051515', 'DynHTML4Java'); // Dynamic HTML Data Binding for Java
        htIEComponents.put('D27CDB6E-AE6D-11CF-96B8-444553540000', 'Flash'); // Macromedia Flash
        htIEComponents.put('76C19B36-F0C8-11CF-87CC-0020AFEECF20', 'HebrewDS'); // Hebrew Text Display Support
        htIEComponents.put('630B1DA0-B465-11D1-9948-00C04F98BBC9', 'IEBrwEnh'); // Internet Explorer Browsing Enhancements
        htIEComponents.put('08B0E5C0-4FCB-11CF-AAA5-00401C608555', 'IEClass4Java'); // Internet Explorer Classes for Java
        htIEComponents.put('45EA75A0-A269-11D1-B5BF-0000F8051515', 'IEHelp'); // Internet Explorer Help
        htIEComponents.put('DE5AED00-A4BF-11D1-9948-00C04F98BBC9', 'IEHelpEng'); // Internet Explorer Help Engine
        htIEComponents.put('89820200-ECBD-11CF-8B85-00AA005B4383', 'IE5WebBrw'); // Internet Explorer 5/6 Web Browser
        htIEComponents.put('5A8D6EE0-3E18-11D0-821E-444553540000', 'InetConnectionWiz'); // Internet Connection Wizard
        htIEComponents.put('76C19B30-F0C8-11CF-87CC-0020AFEECF20', 'JapaneseDS'); // Japanese Text Display Support
        htIEComponents.put('76C19B31-F0C8-11CF-87CC-0020AFEECF20', 'KoreanDS'); // Korean Text Display Support
        htIEComponents.put('76C19B50-F0C8-11CF-87CC-0020AFEECF20', 'LanguageAS'); // Language Auto-Selection
        htIEComponents.put('08B0E5C0-4FCB-11CF-AAA5-00401C608500', 'MsftVM'); // Microsoft virtual machine
        htIEComponents.put('5945C046-LE7D-LLDL-BC44-00C04FD912BE', 'MSNMessengerSrv'); // MSN Messenger Service
        htIEComponents.put('44BBA842-CC51-11CF-AAFA-00AA00B6015B', 'NetMeetingNT'); // NetMeeting NT
        htIEComponents.put('3AF36230-A269-11D1-B5BF-0000F8051515', 'OfflineBrwPack'); // Offline Browsing Pack
        htIEComponents.put('44BBA840-CC51-11CF-AAFA-00AA00B6015C', 'OutlookExpress'); // Outlook Express
        htIEComponents.put('76C19B32-F0C8-11CF-87CC-0020AFEECF20', 'PanEuropeanDS'); // Pan-European Text Display Support
        htIEComponents.put('4063BE15-3B08-470D-A0D5-B37161CFFD69', 'QuickTime'); // Apple Quick Time
        htIEComponents.put('DE4AF3B0-F4D4-11D3-B41A-0050DA2E6C21', 'QuickTimeCheck'); // Apple Quick Time Check
        htIEComponents.put('3049C3E9-B461-4BC5-8870-4C09146192CA', 'RealPlayer'); // RealPlayer Download and Record Plugin for IE
        htIEComponents.put('2A202491-F00D-11CF-87CC-0020AFEECF20', 'ShockwaveDir'); // Macromedia Shockwave Director
        htIEComponents.put('3E01D8E0-A72B-4C9F-99BD-8A6E7B97A48D', 'Skype'); // Skype
        htIEComponents.put('CC2A9BA0-3BDD-11D0-821E-444553540000', 'TaskScheduler'); // Task Scheduler
        htIEComponents.put('76C19B35-F0C8-11CF-87CC-0020AFEECF20', 'ThaiDS'); // Thai Text Display Support
        htIEComponents.put('3BF42070-B3B1-11D1-B5C5-0000F8051515', 'Uniscribe'); // Uniscribe
        htIEComponents.put('4F645220-306D-11D2-995D-00C04F98BBC9', 'VBScripting'); // Visual Basic Scripting Support v5.6
        htIEComponents.put('76C19B37-F0C8-11CF-87CC-0020AFEECF20', 'VietnameseDS'); // Vietnamese Text Display Support
        htIEComponents.put('10072CEC-8CC1-11D1-986E-00A0C955B42F', 'VML'); // Vector Graphics Rendering (VML)
        htIEComponents.put('90E2BA2E-DD1B-4CDE-9134-7A8B86D33CA7', 'WebEx'); // WebEx Productivity Tools
        htIEComponents.put('73FA19D0-2D75-11D2-995D-00C04F98BBC9', 'WebFolders'); // Web Folders
        htIEComponents.put('89820200-ECBD-11CF-8B85-00AA005B4340', 'WinDesktopUpdateNT'); // Windows Desktop Update NT
        htIEComponents.put('9030D464-4C02-4ABF-8ECC-5164760863C6', 'WinLive'); // Windows Live ID Sign-in Helper
        htIEComponents.put('6BF52A52-394A-11D3-B153-00C04F79FAA6', 'WinMediaPlayer'); // Windows Media Player (Versions 7, 8 or 9)
        htIEComponents.put('22D6F312-B0F6-11D0-94AB-0080C74C7E95', 'WinMediaPlayerTrad'); // Windows Media Player (Traditional Versions)

        strTemp = "";
        bolFirst = true;

        /* strOpera gives full path of the file, extract the filenames, ignoring description and length */
        if (navigator.plugins.length > 0) {
            for (iCount = 0; iCount < navigator.plugins.length; iCount = iCount + 1) {
                if (bolFirst === true) {
                    strTemp += navigator.plugins[iCount].name;
                    bolFirst = false;
                } else {
                    strTemp += glbSep + navigator.plugins[iCount].name;
                }
            }
        } else if (navigator.mimeTypes.length > 0) {
            strMimeType = navigator.mimeTypes;
            for (iCount = 0; iCount < strMimeType.length; iCount = iCount + 1) {
                if (bolFirst === true) {
                    strTemp += strMimeType[iCount].description;
                    bolFirst = false;
                } else {
                    strTemp += glbSep + strMimeType[iCount].description;
                }
            }
        } else {
            document.body.addBehavior("#default#clientCaps");
            strKey = htIEComponents.keys();
            for (iCount = 0; iCount < htIEComponents.size(); iCount = iCount + 1) {
                strVersion = activeXDetect(strKey[iCount]);
                strName = htIEComponents.get(strKey[iCount]);
                if (strVersion) {
                    if (bolFirst === true) {
                        strTemp = strName + glbPair + strVersion;
                        bolFirst = false;
                    } else {
                        strTemp += glbSep + strName + glbPair + strVersion;
                    }
                }
            }
            strTemp = strTemp.replace(/,/g, ".");
        }
        strTemp = stripIllegalChars(strTemp);
        if (strTemp === "") {
            strTemp = "None";
        }
        strOut = strTemp;
        return strOut;
    } catch (err) {
        return false;
    }
}

function fingerprint_useragent() {
    "use strict";
    var strSep, strTmp, strUserAgent, strOut;

    strSep = "|";
    strTmp = null;
    strUserAgent = null;
    strOut = null;

    /* navigator.userAgent is supported by all major browsers */
    strUserAgent = navigator.userAgent.toLowerCase();
    /* navigator.platform is supported by all major browsers */
    strTmp = strUserAgent + strSep + navigator.platform;
    /* navigator.cpuClass only supported in IE */
    if (navigator.cpuClass) {
        strTmp += strSep + navigator.cpuClass;
    }
    /* navigator.browserLanguage only supported in IE, Safari and Chrome */
    if (navigator.browserLanguage) {
        strTmp += strSep + navigator.browserLanguage;
    } else {
        strTmp += strSep + navigator.language;
    }
    strOut = strTmp;
    return strOut;
}

/* Calc MD5 functions */
function utf8_encode(argString) {
  //  discuss at: http://phpjs.org/functions/utf8_encode/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: sowberry
  // improved by: Jack
  // improved by: Yves Sucaet
  // improved by: kirilloid
  // bugfixed by: Onno Marsman
  // bugfixed by: Onno Marsman
  // bugfixed by: Ulrich
  // bugfixed by: Rafal Kukawski
  // bugfixed by: kirilloid
  //   example 1: utf8_encode('Kevin van Zonneveld');
  //   returns 1: 'Kevin van Zonneveld'

  if (argString === null || typeof argString === 'undefined') {
    return '';
  }

  // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  var string = (argString + '');
  var utftext = '',
    start, end, stringl = 0;

  start = end = 0;
  stringl = string.length;
  for (var n = 0; n < stringl; n++) {
    var c1 = string.charCodeAt(n);
    var enc = null;

    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(
        (c1 >> 6) | 192, (c1 & 63) | 128
      );
    } else if ((c1 & 0xF800) != 0xD800) {
      enc = String.fromCharCode(
        (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      );
    } else {
      // surrogate pairs
      if ((c1 & 0xFC00) != 0xD800) {
        throw new RangeError('Unmatched trail surrogate at ' + n);
      }
      var c2 = string.charCodeAt(++n);
      if ((c2 & 0xFC00) != 0xDC00) {
        throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
      }
      c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
      enc = String.fromCharCode(
        (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      );
    }
    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }
      utftext += enc;
      start = end = n + 1;
    }
  }

  if (end > start) {
    utftext += string.slice(start, stringl);
  }

  return utftext;
}

function md5(str) {
  //  discuss at: http://phpjs.org/functions/md5/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // improved by: Michael White (http://getsprink.com)
  // improved by: Jack
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //    input by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //  depends on: utf8_encode
  //   example 1: md5('Kevin van Zonneveld');
  //   returns 1: '6e658d4bfcb59cc13f96c14450ac40b9'

  var xl;

  var rotateLeft = function (lValue, iShiftBits) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
  };

  var addUnsigned = function (lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = (lX & 0x80000000);
    lY8 = (lY & 0x80000000);
    lX4 = (lX & 0x40000000);
    lY4 = (lY & 0x40000000);
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) {
      return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
    }
    if (lX4 | lY4) {
      if (lResult & 0x40000000) {
        return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
      } else {
        return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
      }
    } else {
      return (lResult ^ lX8 ^ lY8);
    }
  };

  var _F = function (x, y, z) {
    return (x & y) | ((~x) & z);
  };
  var _G = function (x, y, z) {
    return (x & z) | (y & (~z));
  };
  var _H = function (x, y, z) {
    return (x ^ y ^ z);
  };
  var _I = function (x, y, z) {
    return (y ^ (x | (~z)));
  };

  var _FF = function (a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };

  var _GG = function (a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };

  var _HH = function (a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };

  var _II = function (a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };

  var convertToWordArray = function (str) {
    var lWordCount;
    var lMessageLength = str.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    var lWordArray = new Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount) << lBytePosition));
      lByteCount++;
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  };

  var wordToHex = function (lValue) {
    var wordToHexValue = '',
      wordToHexValue_temp = '',
      lByte, lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = (lValue >>> (lCount * 8)) & 255;
      wordToHexValue_temp = '0' + lByte.toString(16);
      wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
    }
    return wordToHexValue;
  };

  var x = [],
    k, AA, BB, CC, DD, a, b, c, d, S11 = 7,
    S12 = 12,
    S13 = 17,
    S14 = 22,
    S21 = 5,
    S22 = 9,
    S23 = 14,
    S24 = 20,
    S31 = 4,
    S32 = 11,
    S33 = 16,
    S34 = 23,
    S41 = 6,
    S42 = 10,
    S43 = 15,
    S44 = 21;

  str = this.utf8_encode(str);
  x = convertToWordArray(str);
  a = 0x67452301;
  b = 0xEFCDAB89;
  c = 0x98BADCFE;
  d = 0x10325476;

  xl = x.length;
  for (k = 0; k < xl; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = _FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
    d = _FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
    c = _FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
    b = _FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
    a = _FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
    d = _FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
    c = _FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
    b = _FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
    a = _FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
    d = _FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
    c = _FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
    b = _FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
    a = _FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
    d = _FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
    c = _FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
    b = _FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
    a = _GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
    d = _GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
    c = _GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
    b = _GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
    a = _GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
    d = _GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = _GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
    b = _GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
    a = _GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
    d = _GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
    c = _GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
    b = _GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
    a = _GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
    d = _GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
    c = _GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
    b = _GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
    a = _HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
    d = _HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
    c = _HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
    b = _HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
    a = _HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
    d = _HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
    c = _HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
    b = _HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
    a = _HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
    d = _HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
    c = _HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
    b = _HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
    a = _HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
    d = _HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
    c = _HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
    b = _HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
    a = _II(a, b, c, d, x[k + 0], S41, 0xF4292244);
    d = _II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
    c = _II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
    b = _II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
    a = _II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
    d = _II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
    c = _II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
    b = _II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
    a = _II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
    d = _II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
    c = _II(c, d, a, b, x[k + 6], S43, 0xA3014314);
    b = _II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
    a = _II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
    d = _II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
    c = _II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
    b = _II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
    a = addUnsigned(a, AA);
    b = addUnsigned(b, BB);
    c = addUnsigned(c, CC);
    d = addUnsigned(d, DD);
  }

  var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);

  return temp.toLowerCase();
}

function generate_fingerprint() {
    var fonts_js = ["Abadi MT Condensed Extra Bold", "AcadEref", "Adobe Arabic", "Adobe Caslon Pro", "Adobe Devanagari", "Adobe Garamond Pro", "Adobe Hebrew", "Agency FB", "Aharoni", "AIGDT", "Al Bayan Bold", "Al Nile", "Al Tarikh",  "Albertus MT", "Albertus MT Lt", "Aldhabi", "Algerian", "AmdtSymbols", "American Typewriter", "American Typewriter Bold", "American Typewriter Condensed", "AMGDT", "Andale Mono", "Andalus", "Antique Olive", "Antique Olive Compact", "Antique Olive Roman", "Aparajita", "Apple Braille", "Apple Chancery", "Apple Color Emoji", "Apple LiGothic Medium", "Apple LiSung Light", "Apple SD Gothic Neo Bold", "Apple Symbols", "AppleGothic Regular", "AppleMyungjo Regular", "AR BERKLEY", "Arabic Typesetting", "Arial",  "Arial Hebrew", "Arial Hebrew Bold", "Arial Hebrew Light",  "Arial Unicode MS", "Athelas Regular", "Avenir Next Regular", "Avenir Roman", "Ayuthaya", "Baghdad", "Bangla MN", "BankGothic Lt BT", "BankGothic Md BT", "Baoli SC Regular", "Baskerville", "Baskerville Old Face",  "Beirut", "Bell MT", "Berlin Sans FB",  "BiauKai", "Big Caslon Medium", "Birch Std", "Bitstream Charter", "Blackadder ITC", "Blackoak Std", "Bodoni",  "Bodoni Poster", "Book Antiqua", "Bookman Old Style",  "Bradley Hand ITC", "Braggadocio",  "Broadway", "Brush Script MT", "Brush Script Std",  "Californian FB", "Calisto MT", "Cambria", "Cambria Math", "Candara", "Candid", "Castellar", "Centaur", "CentSchbkCyrill BT", "Century", "Century Gothic", "Century Schoolbook", "Century Schoolbook L", "Century725 Cn BT", "Century751 BT", "Century751 No2 BT", "Century751 SeBd BT", "CG Omega", "CG Times", "Chalkboard", "Chalkduster", "Chaparral Pro", "Charcoal CY", "Charlemagne Std", "Charter Black", "Charter Roman", "Chicago", "Chiller", "CityBlueprint", "Clarendon", "Clarendon Blk BT", "Clarendon BT", "Clarendon Condensed", "Clarendon Light", "Clarendon Lt BT", "Cochin", "Colonna MT", "Comic Sans MS", "CommercialPi BT", "Complex", "Consolas", "Constantia",  "Copperplate",  "Copperplate Light", "Copperplate32bc", "Copperplate33bc", "Corbel", "Coronet", "Corsiva Hebrew", "CountryBlueprint", "Courier Bold", "Courier Bold Oblique", "Courier New", "Courier Oblique", "CourierPS", "Curlz MT", "Damascus", "Damascus Medium", "DaunPenh", "David", "DecoType Naskh", "DejaVu Sans",  "DejaVu Sans Mono", "DejaVu Serif",  "Desdemona", "Devanagari MT", "Devanagari Sangam MN", "DeVinne Txt BT", "DFGothic-EB", "DFKai-SB", "DFMincho-SU", "DFMincho-UB", "DFPOP1-W9", "Didot", "DilleniaUPC", "DIN Alternate Bold", "DIN Condensed Bold", "Dingbats", "Diwan Kufi", "Diwan Mishafi", "Diwan Thuluth", "DokChampa", "Dutch801 Rm BT", "Dutch801 XBd BT", "Ebrima", "Eccentric Std", "Edwardian Script ITC", "Elephant", "Embassy BT", "Engravers MT", "EngraversGothic BT",  "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "Euro Sign", "EuroRoman", "Eurostile", "Eurostile Bold", "Eurostile ExtendedTwo", "Exotc350 Bd BT", "Exotc350 DmBd BT", "FangSong", "Farah", "Farisi", "Felix Titling",  "Forte", "Franklin Gothic Book",    "FrankRuehl", "Freehand521 BT", "FreeMono", "FreeSans", "FreeSerif", "FreesiaUPC", "Freestyle Script", "French Script MT", "Futura Bk BT", "Futura Condensed Medium", "Futura Md BT", "Futura Medium", "Gabriola", "Gadugi", "Garamond", "gargi", "Garuda", "Gautami", "GB18030 Bitmap", "GDT", "Geeza Pro", "Geeza Pro Bold", "Geneva", "Geneva CY", "GENISO", "Gentium Basic", "Gentium Book Basic", "Geometr212 BkCn BT", "Geometr415 Blk BT", "Geometr706 BlkCn BT", "Georgia", "GeoSlab703 Md BT", "GeoSlab703 MdCn BT", "Giddyup Std", "Gigi",  "Gill Sans MT",  "Gisha",  "GothicE", "GothicG", "GothicI", "Goudy", "Goudy ExtraBold", "Goudy Old Style", "Goudy Stout", "GreekC", "GreekS", "Gujarati MT", "Gujarati Sangam MN", "GungSeo Regular", "Gurmukhi MN", "Gurmukhi MT", "Gurmukhi Sangam MN", "Haettenschweiler", "Hannotate SC Regular", "Hannotate TC Regular", "HanziPen SC Regular", "HanziPen TC Regular", "Harlow Solid,Harlow Solid Italic", "Harrington", "HeadLineA Regular", "Heavy Heap", "Hei Regular", "Heiti SC Light", "Heiti TC Light", "Helvetica Bold", "Helvetica Condensed", "Helvetica CY Bold", "Helvetica CY BoldOblique", "Helvetica CY Oblique", "Helvetica Light", "Helvetica Narrow", "Helvetica Neue", "Helvetica Neue Thin", "Helvetica Neue UltraLight", "Helvetica Oblique", "Herculanum", "High Tower Text", "Hobo Std", "Hoefler Text", "Hoefler Text Black", "Hoefler Text Ornaments", "Hoefler Text Regular", "HP PSG", "Humanst521 BT", "Humanst521 Lt BT", "Humnst777 BT", "Impact", "Imprint MT Shadow", "InaiMathi", "Informal Roman", "Iowan Old Style Black", "IrisUPC", "Iskoola Pota", "ISOCP", "ISOCPEUR", "ISOCT", "ISOCTEUR", "ItalicC", "ITC Zapf Chancery", "JasmineUPC", "Javanese Text", "Joanna MT", "Jokerman", "Juice ITC", "KacstBook", "Kai Regular", "Kailasa Regular", "KaiTi", "Kaiti SC Regular", "Kaiti TC Regular", "Kalinga", "Kannada MN", "Kartika", "Kaufmann BT", "Kedage", "Kefa Regular", "Khmer MN", "Khmer OS", "Khmer OS System", "Khmer Sangam MN", "Khmer UI", "Kinnari", "Kino MT", "KodchiangUPC", "Kokila", "Kokonor Regular", "Kristen ITC", "Krungthep", "KufiStandardGK", "Kunstler Script", "Lantinghei SC Demibold", "Lao MN", "Lao UI", "Latha", "Leelawadee", "Leelawadee UI", "Letter Gothic", "Letter Gothic Std", "Levenim MT", "Liberation Mono",  "Libian SC Regular", "LiHei Pro", "LilyUPC", "LiSong Pro", "Lohit Bengali", "Lubalin Graph", "Lucida Blackletter", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "Lucida Grande", "Lucida Handwriting", "Lucida Sans,Lucida Sans Regular", "Lucida Sans Typewriter,Lucida Sans Typewriter Regular", "Lucida Sans Unicode", "Magneto", "Maiandra GD", "Malayalam MN", "Mallige", "Mangal", "Marigold", "Marion Regular", "Marker Felt Thin", "Marker Felt Wide", "Matura MT Script Capitals", "Meera", "Meiryo", "Menlo Regular", "Mesquite Std", "Microsoft Himalaya", "Microsoft JhengHei",  "Microsoft JhengHei UI",  "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei",  "Microsoft YaHei UI",  "Microsoft Yi Baiti", "MingLiU", "Minion Pro", "Miriam", "Mistral",  "Mona Lisa Recut", "Monaco", "Mongolian Baiti", "Monospac821 BT", "Monotxt", "Monotype Corsiva", "Monotype Sorts", "MoolBoran", "mry_KacstQurn", "MS Gothic", "MS Mincho", "MS Outlook", "MS PMincho", "MS Reference Sans Serif", "MS Reference Specialty", "Mshtakan",  "Mukti Narrow", "Muna", "MV Boli", "Myanmar MN", "Myanmar Text", "Myriad Arabic", "Myriad Hebrew", "Myriad Pro", "Myriad Web Pro", "Nadeem", "Nanum Brush Script", "NanumGothic", "NanumGothic Bold", "NanumMyeongjo", "NanumMyeongjo Bold", "Narkisim", "New Peninim MT", "New York", "News Gothic MT", "News701 BT", "NewsGoth BT", "NewsGoth Lt BT", "Niagara Solid", "Nimbus Mono L", "Nirmala UI",  "Norasi", "Noteworthy Bold", "NSimSun",  "Nyala",  "OCR A Std", "Old English Text MT", "Onyx",  "OpenSymbol", "Optima", "Optima Regular", "Orator Std", "Oriya MN", "Osaka", "Oxford", "Palace Script MT", "Palatino Bold", "Palatino Linotype", "PanRoman", "Papyrus", "Parchment", "PCMyungjo Regular", "Perpetua", "Perpetua Titling MT,Perpetua Titling MT Light", "Phetsarath OT", "PilGi Regular", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poplar Std", "Pothana2000", "Prestige Elite Std", "Pristina", "PT Mono", "PT Sans", "PT Sans Bold", "PT Serif", "Purisa", "Raanana", "Raavi", "Rachana", "Ravie", "Rekha", "Rockwell", "Rod", "RomanC", "Romantic", "Saab", "Sakkal Majalla", "Sana", "SansSerif", "Sathu", "Sawasdee", "Schadow BT", "ScriptC", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Symbol", "Seravek", "Shonar Bangla", "Showcard Gothic", "Shruti", "Silom", "SimHei", "Simplex", "Simplified Arabic", "SimSun", "SimSun-ExtB", "Sinhala MN", "Sitka Banner", "Skia Regular", "Snap ITC", "Snell Roundhand", "Songti SC Regular", "Songti TC Regular", "Source Sans Pro", "Square721 BT", "Square721 Cn BT", "Standard Symbols L", "StempelGaramond Roman", "Stencil", "Stencil Std", "STFangsong", "STHeiti", "STKaiti", "STSong", "Stylus BT", "Superclarendon Regular", "SuperFrench", "Swis721 BdOul BT", "Swis721 Blk BT", "Swis721 BlkCn BT", "Swis721 BlkEx BT", "Swis721 BlkOul BT", "Swis721 BT", "Swis721 Cn BT", "Swis721 Ex BT", "Swis721 Hv BT", "Swis721 Lt BT", "Swis721 LtCn BT", "Swis721 LtEx BT", "Swis721 WGL4 BT", "Syastro", "Sylfaen", "Symap", "Symath", "Symbol", "SymbolPS", "Symeteo", "Symusic", "System Font Regular", "Taffy", "Tahoma", "TakaoPGothic", "Tamil MN", "TeamViewer8", "TeamViewer9", "Technic", "Tekton Pro", "Telugu MN", "Tempus Sans ITC", "Thonburi", "Thonburi Light", "Times Bold", "Times New Roman", "Times Roman", "Tlwg Typist", "Traditional Arabic", "Trajan Pro", "Trebuchet MS", "Tunga", "Tw Cen MT", "Txt", "TypoUpright BT", "Ubuntu", "Umpush", "Univers", "Univers Condensed", "Univers Extended", "UniversalMath1 BT", "Urdu Typesetting", "URW Bookman L", "Utsaah", "Vani", "Vemana2000", "Verdana", "Vijaya", "Viner Hand ITC", "Vivaldi", "Vladimir Script", "Vrinda", "Waree", "Waseem", "Wawati SC Regular", "Webdings", "Weibei SC Bold", "Wide Latin", "Wingdings", "WP Arabic Sihafa", "WP MultinationalA Helve", "WP MultinationalA Roman", "WP MultinationalB Roman", "WST_Engl", "Xingkai SC Bold", "Yu Gothic", "Yuanti SC Regular", "Yuppy TC Regular", "Zapfino", "ZWAdobeF", "Segoe Marker", "Buxton Sketch", "SketchFlow Print", "Roboto", "Titan", "Linux Biolinum G", "Linux Libertine G", "Charlesworth", "SWAstro", "SWIsot1", "TriglavCaps", "VECER_Vassallo", "YuHelvetica", "SD Viewer Font", "Razer Header Regular", "Vodafone Rg", "Finale Copyist Text Ext", "Inkpen2 Metronome Std", "PhotoScore", "Nokia Pure Text", "Asp32Dsy", "Asp32Sym", "AMGDT_IV25", "ISOCP2", "ISOCP2_IV50", "abeatbyKai", "SAPDings", "CATIA Symbols", "Mathematica1", "Mathematica1Mono", "Mathematica2", "TI-Nspire"];
    var detective = new fontDetector();
    var fontList = 0;
    for (i = 0; i < fonts_js.length; i++) {
        if(detective.detect(fonts_js[i])) {
            fontList = fontList+1;
            $('body').append(fonts_js[i] + "<br />");
        }
    }
    var fingerToHash = '';
    //fingerToHash = fingerToHash+fingerprint_flash();
    //fingerToHash = fingerToHash+'~'+fingerprint_browser();
    //fingerToHash = fingerToHash+'~'+fingerprint_canvas();
    //fingerToHash = fingerToHash+'~'+fingerprint_connection();
    //fingerToHash = fingerToHash+'~'+fingerprint_cookie();
    fingerToHash = fingerToHash+'~'+fingerprint_display();
    //fingerToHash = fingerToHash+'~'+fingerprint_fontsmoothing();
    //fingerToHash = fingerToHash+'~'+fingerprint_fonts();
    fingerToHash = fingerToHash+'~'+fontList;
    //fingerToHash = fingerToHash+'~'+fingerprint_java();
    fingerToHash = fingerToHash+'~'+fingerprint_language();
    //fingerToHash = fingerToHash+'~'+fingerprint_silverlight();
    fingerToHash = fingerToHash+'~'+fingerprint_os();
    fingerToHash = fingerToHash+'~'+fingerprint_timezone();
    //fingerToHash = fingerToHash+'~'+fingerprint_touch();
    //fingerToHash = fingerToHash+'~'+fingerprint_truebrowser();
    //fingerToHash = fingerToHash+'~'+fingerprint_plugins();
    //fingerToHash = fingerToHash+'~'+fingerprint_useragent();

    /* Generate hash value of data collected and return result */
    fingerToHash = fingerToHash.toLowerCase();
    alert(fingerToHash);
    fingerHashResult = md5(fingerToHash);
    return fingerHashResult;
}