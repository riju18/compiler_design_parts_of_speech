$(document).ready(function () {
    $("#result").hide();
    $("#words").hide();
    $("#userInput").keypress(function (e) { 
        if (e.which==13) {
            var getVal = $(this).val();
            $("#result").show();
            $("#words").show();
            var m = new RiString(getVal);
            var pos = m.pos();
            /*pos name*/
        var v = "verb";
        var n = "noun";
        var d = "determiner";
        var jj = "adjective";
        var In = "preposition";
        var stop = "end-of-sentence";
        var cc = "conjunction";
        var cd = "Cardinal-number";
        var ex = "Existential-there";
        var fw = "Foreign-word";
        var md = "modal";
        var pdt = "Predeterminer";
        var psv = "Possessive-ending";
        var prp = "Personal-pronoun";
        var prp$ = "Possessive-pronoun";
        var rb = "Adverb";
        var rbr =  "Adverb_comparative";
        var rbs = "Adverb_superlative";
        var rp = "Particle";
        var sym = "Symbol";
        var to = "to";
        var uh = "Interjection";
        var wdt = "Wh-determiner";
        var wp = "Wh-pronoun";
        var wp$ = "Possessive_wh-pronoun";
        var wrb = "Wh-adverb";
        /*pos name*/
            var emp = "";
            for (var i=0; i<pos.length; i++){
                //emp+=pos[i];
                //$("#pos").html(emp);
                if (pos[i] ==='nn') {
                    emp+=n+" ";
                    $("#pos").html(emp);
                }
                if (pos[i] ==='vbz'|pos[i] ==='vb'|pos[i] ==='vbg'|pos[i] ==='vbd'|pos[i] ==='vbn'|pos[i] ==='vbp') {
                    emp+=v+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'dt' ) {
                    emp+=d+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'jj' ) {
                    emp+=jj+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'in' ) {
                    emp+=In+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === '.' ) {
                    emp+=stop+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'cc' | pos[i] === '&' ) {
                    emp+=cc+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'cd' ) {
                    emp+=cd+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'ex' ) {
                    emp+=ex+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'fw' ) {
                    emp+=fw+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'md' ) {
                    emp+=md+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'pdt' ) {
                    emp+=pdt+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'psv' ) {
                    emp+=psv+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'prp' ) {
                    emp+=prp+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'prp$' ) {
                    emp+=prp$+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'rb' ) {
                    emp+=rb+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'rbr' ) {
                    emp+=rbr+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'rbs' ) {
                    emp+=rbs+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'rp' ) {
                    emp+=rp+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'to' ) {
                    emp+=to+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'uh' ) {
                    emp+=uh+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'wdt' ) {
                    emp+=wdt+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'wp' ) {
                    emp+=wp+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'wp$' ) {
                    emp+=wp$+" ";
                    $("#pos").html(emp);
                }
                if ( pos[i] === 'wrb' ) {
                    emp+=wrb+" ";
                    $("#pos").html(emp);
                }
            }
            /* for lexime */
            var words = m.words();
            $("#lexime").html(words+" ");
            /* for lexime */
        }
    });
});