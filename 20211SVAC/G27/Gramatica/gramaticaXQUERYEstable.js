/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramaticaXQUERYEstable = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[5,8],$V2=[1,19],$V3=[1,16],$V4=[1,17],$V5=[1,20],$V6=[1,21],$V7=[1,22],$V8=[1,23],$V9=[1,28],$Va=[1,25],$Vb=[1,31],$Vc=[1,32],$Vd=[1,26],$Ve=[1,27],$Vf=[1,29],$Vg=[1,30],$Vh=[5,8,10,21,23,25,26,27,28,32,33],$Vi=[1,40],$Vj=[1,41],$Vk=[1,54],$Vl=[1,44],$Vm=[1,45],$Vn=[1,46],$Vo=[1,47],$Vp=[1,48],$Vq=[1,49],$Vr=[1,50],$Vs=[1,51],$Vt=[1,52],$Vu=[1,53],$Vv=[1,55],$Vw=[1,56],$Vx=[15,16,30,33,34,35,36,37,38,39,40,41,42,43,44,45],$Vy=[10,21,23,25,26,27,28],$Vz=[15,16,30,33,36,37,38,39,40,41,42,43,44,45],$VA=[15,16,30,33,39,40,41,42,43,44,45],$VB=[15,16,30,33,41,44,45];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"START":3,"XQUERY":4,"EOF":5,"INSTRUCCION":6,"ASIGNACION":7,"let":8,"dolar":9,"nodoid":10,"dosPuntosIgual":11,"DECLARACION2":12,"parentesisa":13,"EXPRESION":14,"to":15,"parentesisc":16,"XPATH":17,"LISTA_NODOS":18,"OPERADOR":19,"NODO":20,"ddoble":21,"VALOR_NODO":22,"dsimple":23,"NODO_COMPLEMENTO":24,"FUNCION":25,"SELECT":26,"EJE":27,"arroba":28,"cora":29,"corc":30,"dpunto":31,"union":32,"or":33,"mas":34,"menos":35,"por":36,"div":37,"mod":38,"menor":39,"mayor":40,"igual":41,"menorigual":42,"mayorigual":43,"and":44,"noigual":45,"entero":46,"decimal":47,"punto":48,"STRING":49,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"let",9:"dolar",10:"nodoid",11:"dosPuntosIgual",13:"parentesisa",15:"to",16:"parentesisc",21:"ddoble",23:"dsimple",25:"FUNCION",26:"SELECT",27:"EJE",28:"arroba",29:"cora",30:"corc",31:"dpunto",32:"union",33:"or",34:"mas",35:"menos",36:"por",37:"div",38:"mod",39:"menor",40:"mayor",41:"igual",42:"menorigual",43:"mayorigual",44:"and",45:"noigual",46:"entero",47:"decimal",48:"punto",49:"STRING"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[7,5],[12,5],[12,1],[17,3],[17,1],[18,2],[18,1],[20,2],[20,2],[20,1],[22,2],[22,1],[22,1],[22,1],[22,3],[24,3],[24,1],[19,1],[19,1],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,1],[14,1],[14,2],[14,1],[14,1],[14,2],[14,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
}
},
table: [{3:1,4:2,6:3,7:4,8:$V0},{1:[3]},{5:[1,6],6:7,7:4,8:$V0},o($V1,[2,3]),o($V1,[2,4]),{9:[1,8]},{1:[2,1]},o($V1,[2,2]),{10:[1,9]},{11:[1,10]},{10:$V2,12:11,13:[1,12],17:13,18:14,20:15,21:$V3,22:18,23:$V4,25:$V5,26:$V6,27:$V7,28:$V8},o($V1,[2,5]),{9:$V9,13:$Va,14:24,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},o($V1,[2,7]),o($V1,[2,9],{22:18,19:33,20:34,10:$V2,21:$V3,23:$V4,25:$V5,26:$V6,27:$V7,28:$V8,32:[1,35],33:[1,36]}),o($Vh,[2,11]),{10:$V2,22:37,25:$V5,26:$V6,27:$V7,28:$V8},{10:$V2,22:38,25:$V5,26:$V6,27:$V7,28:$V8},o($Vh,[2,14]),{24:39,29:$Vi,31:$Vj},o($Vh,[2,16]),o($Vh,[2,17]),o($Vh,[2,18]),{10:[1,42]},{15:[1,43],33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu,44:$Vv,45:$Vw},{9:$V9,13:$Va,14:57,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},o($Vx,[2,38]),o($Vx,[2,39]),{10:[1,58]},o($Vx,[2,41]),o($Vx,[2,42]),{10:[1,59]},o($Vx,[2,44]),{10:$V2,18:60,20:15,21:$V3,22:18,23:$V4,25:$V5,26:$V6,27:$V7,28:$V8},o($Vh,[2,10]),o($Vy,[2,22]),o($Vy,[2,23]),o($Vh,[2,12]),o($Vh,[2,13]),o($Vh,[2,15]),{9:$V9,13:$Va,14:61,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},o($Vh,[2,21]),{24:62,29:$Vi,31:$Vj},{9:$V9,13:$Va,14:63,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},{9:$V9,13:$Va,14:64,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},{9:$V9,13:$Va,14:65,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},{9:$V9,13:$Va,14:66,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},{9:$V9,13:$Va,14:67,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},{9:$V9,13:$Va,14:68,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},{9:$V9,13:$Va,14:69,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},{9:$V9,13:$Va,14:70,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},{9:$V9,13:$Va,14:71,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},{9:$V9,13:$Va,14:72,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},{9:$V9,13:$Va,14:73,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},{9:$V9,13:$Va,14:74,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},{9:$V9,13:$Va,14:75,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},{9:$V9,13:$Va,14:76,28:$Vb,36:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg},{16:[1,77],33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu,44:$Vv,45:$Vw},o($Vx,[2,40]),o($Vx,[2,43]),o($V1,[2,8],{22:18,20:34,10:$V2,21:$V3,23:$V4,25:$V5,26:$V6,27:$V7,28:$V8}),{30:[1,78],33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu,44:$Vv,45:$Vw},o($Vh,[2,19]),{16:[1,79],33:$Vk,34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu,44:$Vv,45:$Vw},o($Vx,[2,24]),o($Vx,[2,25]),o($Vz,[2,26],{34:$Vl,35:$Vm}),o($Vz,[2,27],{34:$Vl,35:$Vm}),o($Vz,[2,28],{34:$Vl,35:$Vm}),o($VA,[2,29],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp}),o($VA,[2,30],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp}),o($VB,[2,31],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,42:$Vt,43:$Vu}),o($VA,[2,32],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp}),o($VA,[2,33],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp}),o([15,16,30,33],[2,34],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu,44:$Vv,45:$Vw}),o([15,16,30,33,44],[2,35],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,41:$Vs,42:$Vt,43:$Vu,45:$Vw}),o($VB,[2,36],{34:$Vl,35:$Vm,36:$Vn,37:$Vo,38:$Vp,39:$Vq,40:$Vr,42:$Vt,43:$Vu}),o($Vx,[2,37]),o($Vh,[2,20]),o($V1,[2,6])],
defaultActions: {6:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"yylineno":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:/* comentario en XQUERY */
break;
case 2:/* Cometario de múltiples líneas XQUERY */
break;
case 3:return 33;
break;
case 4:return 44;
break;
case 5:return 8;
break;
case 6:return 'for';
break;
case 7:return 38;
break;
case 8:return 'doc';
break;
case 9:return 15;
break;
case 10:return 'in';
break;
case 11:return 'at';
break;
case 12:return 'where';
break;
case 13:return 'order';
break;
case 14:return 'by';
break;
case 15:return 'return';
break;
case 16:return 'data';
break;
case 17:return 37;
break;
case 18:return 'ancestor-or-self';
break;
case 19:return 'descendant-or-self';
break;
case 20:return 'following-sibling';
break;
case 21:return 'preceding-sibling';
break;
case 22:return  'last';
break;
case 23:return  'position';
break;
case 24:return  'text';
break;
case 25:return  'ancestor'; 
break;
case 26:return  'attribute'
break;
case 27:return  'child';
break;
case 28:return  'descendant';
break;
case 29:return  'following';
break;
case 30:return  'namespace';
break;
case 31:return  'parent';
break;
case 32:return  'preceding';
break;
case 33:return  'sibling';
break;
case 34:return  'self';
break;
case 35:return  'node';
break;
case 36:yy_.yytext = yy_.yytext.slice(1,-1); return 49;
break;
case 37:return 34;
break;
case 38:return 35;
break;
case 39:return 36;
break;
case 40:return 38;
break;
case 41:return 37;
break;
case 42:return 42;
break;
case 43:return 43;
break;
case 44:return 39;
break;
case 45:return 40;
break;
case 46:return 41;
break;
case 47:return 'digual';
break;
case 48:return 45;
break;
case 49:return 11;
break;
case 50:return 44;
break;
case 51:return 33;
break;
case 52:return 'not';
break;
case 53:return 'semicolon';
break;
case 54:return 13;
break;
case 55:return 16
break;
case 56:return 'barraDoble';
break;
case 57:return 'barraSimple';
break;
case 58:return 44;
break;
case 59:return 33;
break;
case 60:return 'not';
break;
case 61:return 32;
break;
case 62:return 29;
break;
case 63:return 30;
break;
case 64:return 31;
break;
case 65:return 48;
break;
case 66:return 'ddpuntos';
break;
case 67:return 'puntosDobles';
break;
case 68:return 28;
break;
case 69:return 9;
break;
case 70:return 'llaveAbre';
break;
case 71:return "llaveCierra";
break;
case 72:return 'coma';
break;
case 73:return 47;
break;
case 74:return 46;
break;
case 75:return 10;
break;
case 76:return 21;
break;
case 77:return 23;
break;
case 78:
                                        console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);
                                    
break;
case 79:return 5
break;
}
},
rules: [/^(?:\s+)/,/^(?:\(:[\s\S\n]*?:\))/,/^(?:<!--[\s\S\n]*?-->)/,/^(?:or\b)/,/^(?:and\b)/,/^(?:let\b)/,/^(?:for\b)/,/^(?:mod\b)/,/^(?:doc\b)/,/^(?:to\b)/,/^(?:in\b)/,/^(?:at\b)/,/^(?:where\b)/,/^(?:order\b)/,/^(?:by\b)/,/^(?:return\b)/,/^(?:data\b)/,/^(?:div\b)/,/^(?:ancestor-or-self\b)/,/^(?:descendant-or-self\b)/,/^(?:following-sibling\b)/,/^(?:preceding-sibling\b)/,/^(?:last\b)/,/^(?:position\b)/,/^(?:text\b)/,/^(?:ancestor\b)/,/^(?:attribute\b)/,/^(?:child\b)/,/^(?:descendant\b)/,/^(?:following\b)/,/^(?:namespace\b)/,/^(?:parent\b)/,/^(?:preceding\b)/,/^(?:sibling\b)/,/^(?:self\b)/,/^(?:node\b)/,/^(?:"[^"]+")/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:%)/,/^(?:div\b)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?:=)/,/^(?:==)/,/^(?:!=)/,/^(?::=)/,/^(?:&&)/,/^(?:or\b)/,/^(?:!)/,/^(?:;)/,/^(?:\()/,/^(?:\))/,/^(?:\/\\\/)/,/^(?:\/)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!)/,/^(?:\|)/,/^(?:\[)/,/^(?:\])/,/^(?:\.\.)/,/^(?:\.)/,/^(?:::)/,/^(?:\.\.)/,/^(?:@)/,/^(?:\$)/,/^(?:\{)/,/^(?:\})/,/^(?:,)/,/^(?:(([0-9]+\.[0-9]*)|(\.[0-9]+)))/,/^(?:[0-9]+)/,/^(?:[a-zA-Z0-9_nÑ]+)/,/^(?:\/\/)/,/^(?:\/)/,/^(?:.)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramaticaXQUERYEstable;
exports.Parser = gramaticaXQUERYEstable.Parser;
exports.parse = function () { return gramaticaXQUERYEstable.parse.apply(gramaticaXQUERYEstable, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}