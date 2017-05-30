(function (exports) {
'use strict';

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var not_found = /* tuple */[
  "Not_found",
  -6
];

var match_failure = /* tuple */[
  "Match_failure",
  -7
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

failure.tag = 248;

invalid_argument.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

assert_failure.tag = 248;


/*  Not a pure module */

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  }
  return result;
}

function caml_array_set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw [
          invalid_argument,
          "index out of bounds"
        ];
  } else {
    xs[index] = newval;
    return /* () */0;
  }
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [
          invalid_argument,
          "index out of bounds"
        ];
  } else {
    return xs[index];
  }
}


/* No side effect */

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var arity = f.length;
    var arity$1 = arity ? arity : 1;
    var len = args.length;
    var d = arity$1 - len | 0;
    if (d) {
      if (d < 0) {
        _args = caml_array_sub(args, arity$1, -d | 0);
        _f = f.apply(null, caml_array_sub(args, 0, arity$1));
        continue ;
        
      } else {
        return (function(f,args){
        return function (x) {
          return app(f, args.concat(/* array */[x]));
        }
        }(f,args));
      }
    } else {
      return f.apply(null, args);
    }
  }
}

function curry_1(o, a0, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return o(a0);
      case 2 : 
          return function (param) {
            return o(a0, param);
          };
      case 3 : 
          return function (param, param$1) {
            return o(a0, param, param$1);
          };
      case 4 : 
          return function (param, param$1, param$2) {
            return o(a0, param, param$1, param$2);
          };
      case 5 : 
          return function (param, param$1, param$2, param$3) {
            return o(a0, param, param$1, param$2, param$3);
          };
      case 6 : 
          return function (param, param$1, param$2, param$3, param$4) {
            return o(a0, param, param$1, param$2, param$3, param$4);
          };
      case 7 : 
          return function (param, param$1, param$2, param$3, param$4, param$5) {
            return o(a0, param, param$1, param$2, param$3, param$4, param$5);
          };
      
    }
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function curry_2(o, a0, a1, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return app(o(a0), /* array */[a1]);
      case 2 : 
          return o(a0, a1);
      case 3 : 
          return function (param) {
            return o(a0, a1, param);
          };
      case 4 : 
          return function (param, param$1) {
            return o(a0, a1, param, param$1);
          };
      case 5 : 
          return function (param, param$1, param$2) {
            return o(a0, a1, param, param$1, param$2);
          };
      case 6 : 
          return function (param, param$1, param$2, param$3) {
            return o(a0, a1, param, param$1, param$2, param$3);
          };
      case 7 : 
          return function (param, param$1, param$2, param$3, param$4) {
            return o(a0, a1, param, param$1, param$2, param$3, param$4);
          };
      
    }
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function curry_3(o, a0, a1, a2, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[a2]);
      case 3 : 
          return o(a0, a1, a2);
      case 4 : 
          return function (param) {
            return o(a0, a1, a2, param);
          };
      case 5 : 
          return function (param, param$1) {
            return o(a0, a1, a2, param, param$1);
          };
      case 6 : 
          return function (param, param$1, param$2) {
            return o(a0, a1, a2, param, param$1, param$2);
          };
      case 7 : 
          return function (param, param$1, param$2, param$3) {
            return o(a0, a1, a2, param, param$1, param$2, param$3);
          };
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2
              ]);
  }
  
}

function _3(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    return curry_3(o, a0, a1, a2, arity);
  }
}


/* No side effect */

function __(tag, block) {
  block.tag = tag;
  return block;
}


/* No side effect */

function caml_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function caml_compare(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    var a_type = typeof a;
    var b_type = typeof b;
    if (a_type === "string") {
      var x = a;
      var y = b;
      if (x < y) {
        return -1;
      } else if (x === y) {
        return 0;
      } else {
        return 1;
      }
    } else {
      var is_a_number = +(a_type === "number");
      var is_b_number = +(b_type === "number");
      if (is_a_number !== 0) {
        if (is_b_number !== 0) {
          return caml_int_compare(a, b);
        } else {
          return -1;
        }
      } else if (is_b_number !== 0) {
        return 1;
      } else if (a_type === "boolean" || a_type === "null" || a_type === "undefined") {
        var x$1 = a;
        var y$1 = b;
        if (x$1 === y$1) {
          return 0;
        } else if (x$1 < y$1) {
          return -1;
        } else {
          return 1;
        }
      } else if (a_type === "function" || b_type === "function") {
        throw [
              invalid_argument,
              "compare: functional value"
            ];
      } else {
        var tag_a = a.tag | 0;
        var tag_b = b.tag | 0;
        if (tag_a === 250) {
          _a = a[0];
          continue ;
          
        } else if (tag_b === 250) {
          _b = b[0];
          continue ;
          
        } else if (tag_a === 248) {
          return caml_int_compare(a[1], b[1]);
        } else if (tag_a === 251) {
          throw [
                invalid_argument,
                "equal: abstract value"
              ];
        } else if (tag_a !== tag_b) {
          if (tag_a < tag_b) {
            return -1;
          } else {
            return 1;
          }
        } else {
          var len_a = a.length;
          var len_b = b.length;
          if (len_a === len_b) {
            var a$1 = a;
            var b$1 = b;
            var _i = 0;
            var same_length = len_a;
            while(true) {
              var i = _i;
              if (i === same_length) {
                return 0;
              } else {
                var res = caml_compare(a$1[i], b$1[i]);
                if (res !== 0) {
                  return res;
                } else {
                  _i = i + 1 | 0;
                  continue ;
                  
                }
              }
            }
          } else if (len_a < len_b) {
            var a$2 = a;
            var b$2 = b;
            var _i$1 = 0;
            var short_length = len_a;
            while(true) {
              var i$1 = _i$1;
              if (i$1 === short_length) {
                return -1;
              } else {
                var res$1 = caml_compare(a$2[i$1], b$2[i$1]);
                if (res$1 !== 0) {
                  return res$1;
                } else {
                  _i$1 = i$1 + 1 | 0;
                  continue ;
                  
                }
              }
            }
          } else {
            var a$3 = a;
            var b$3 = b;
            var _i$2 = 0;
            var short_length$1 = len_b;
            while(true) {
              var i$2 = _i$2;
              if (i$2 === short_length$1) {
                return 1;
              } else {
                var res$2 = caml_compare(a$3[i$2], b$3[i$2]);
                if (res$2 !== 0) {
                  return res$2;
                } else {
                  _i$2 = i$2 + 1 | 0;
                  continue ;
                  
                }
              }
            }
          }
        }
      }
    }
  }
}

function caml_equal(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return /* true */1;
    } else {
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a_type === "null") {
        return /* false */0;
      } else {
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw [
                invalid_argument,
                "equal: functional value"
              ];
        } else if (b_type === "number" || b_type === "null" || b_type === "undefined") {
          return /* false */0;
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
            
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
            
          } else if (tag_a === 248) {
            return +(a[1] === b[1]);
          } else if (tag_a === 251) {
            throw [
                  invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            return /* false */0;
          } else {
            var len_a = a.length;
            var len_b = b.length;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while(true) {
                var i = _i;
                if (i === same_length) {
                  return /* true */1;
                } else if (caml_equal(a$1[i], b$1[i])) {
                  _i = i + 1 | 0;
                  continue ;
                  
                } else {
                  return /* false */0;
                }
              }
            } else {
              return /* false */0;
            }
          }
        }
      }
    }
  }
}

function caml_notequal(a, b) {
  return 1 - caml_equal(a, b);
}


/* No side effect */

/* stdin Not a pure module */

/* No side effect */

var imul = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);


/* imul Not a pure module */

/* repeat Not a pure module */

/* two_ptr_32_dbl Not a pure module */

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function parse_format(fmt) {
  var len = fmt.length;
  if (len > 31) {
    throw [
          invalid_argument,
          "format_int: format too long"
        ];
  }
  var f = /* record */[
    /* justify */"+",
    /* signstyle */"-",
    /* filter */" ",
    /* alternate : false */0,
    /* base : Dec */2,
    /* signedconv : false */0,
    /* width */0,
    /* uppercase : false */0,
    /* sign */1,
    /* prec */-1,
    /* conv */"f"
  ];
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= len) {
      return f;
    } else {
      var c = fmt.charCodeAt(i);
      var exit = 0;
      if (c >= 69) {
        if (c >= 88) {
          if (c >= 121) {
            exit = 1;
          } else {
            switch (c - 88 | 0) {
              case 0 : 
                  f[/* base */4] = /* Hex */1;
                  f[/* uppercase */7] = /* true */1;
                  _i = i + 1 | 0;
                  continue ;
                  case 13 : 
              case 14 : 
              case 15 : 
                  exit = 5;
                  break;
              case 12 : 
              case 17 : 
                  exit = 4;
                  break;
              case 23 : 
                  f[/* base */4] = /* Oct */0;
                  _i = i + 1 | 0;
                  continue ;
                  case 29 : 
                  f[/* base */4] = /* Dec */2;
                  _i = i + 1 | 0;
                  continue ;
                  case 1 : 
              case 2 : 
              case 3 : 
              case 4 : 
              case 5 : 
              case 6 : 
              case 7 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 16 : 
              case 18 : 
              case 19 : 
              case 20 : 
              case 21 : 
              case 22 : 
              case 24 : 
              case 25 : 
              case 26 : 
              case 27 : 
              case 28 : 
              case 30 : 
              case 31 : 
                  exit = 1;
                  break;
              case 32 : 
                  f[/* base */4] = /* Hex */1;
                  _i = i + 1 | 0;
                  continue ;
                  
            }
          }
        } else if (c >= 72) {
          exit = 1;
        } else {
          f[/* signedconv */5] = /* true */1;
          f[/* uppercase */7] = /* true */1;
          f[/* conv */10] = String.fromCharCode(lowercase(c));
          _i = i + 1 | 0;
          continue ;
          
        }
      } else {
        var switcher = c - 32 | 0;
        if (switcher > 25 || switcher < 0) {
          exit = 1;
        } else {
          switch (switcher) {
            case 3 : 
                f[/* alternate */3] = /* true */1;
                _i = i + 1 | 0;
                continue ;
                case 0 : 
            case 11 : 
                exit = 2;
                break;
            case 13 : 
                f[/* justify */0] = "-";
                _i = i + 1 | 0;
                continue ;
                case 14 : 
                f[/* prec */9] = 0;
                var j = i + 1 | 0;
                while((function(j){
                    return function () {
                      var w = fmt.charCodeAt(j) - /* "0" */48 | 0;
                      return +(w >= 0 && w <= 9);
                    }
                    }(j))()) {
                  f[/* prec */9] = (imul(f[/* prec */9], 10) + fmt.charCodeAt(j) | 0) - /* "0" */48 | 0;
                  j = j + 1 | 0;
                };
                _i = j;
                continue ;
                case 1 : 
            case 2 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 12 : 
            case 15 : 
                exit = 1;
                break;
            case 16 : 
                f[/* filter */2] = "0";
                _i = i + 1 | 0;
                continue ;
                case 17 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 23 : 
            case 24 : 
            case 25 : 
                exit = 3;
                break;
            
          }
        }
      }
      switch (exit) {
        case 1 : 
            _i = i + 1 | 0;
            continue ;
            case 2 : 
            f[/* signstyle */1] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            case 3 : 
            f[/* width */6] = 0;
            var j$1 = i;
            while((function(j$1){
                return function () {
                  var w = fmt.charCodeAt(j$1) - /* "0" */48 | 0;
                  return +(w >= 0 && w <= 9);
                }
                }(j$1))()) {
              f[/* width */6] = (imul(f[/* width */6], 10) + fmt.charCodeAt(j$1) | 0) - /* "0" */48 | 0;
              j$1 = j$1 + 1 | 0;
            };
            _i = j$1;
            continue ;
            case 4 : 
            f[/* signedconv */5] = /* true */1;
            f[/* base */4] = /* Dec */2;
            _i = i + 1 | 0;
            continue ;
            case 5 : 
            f[/* signedconv */5] = /* true */1;
            f[/* conv */10] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            
      }
    }
  }
}

function finish_formatting(param, rawbuffer) {
  var justify = param[/* justify */0];
  var signstyle = param[/* signstyle */1];
  var filter = param[/* filter */2];
  var alternate = param[/* alternate */3];
  var base = param[/* base */4];
  var signedconv = param[/* signedconv */5];
  var width = param[/* width */6];
  var uppercase = param[/* uppercase */7];
  var sign = param[/* sign */8];
  var len = rawbuffer.length;
  if (signedconv && (sign < 0 || signstyle !== "-")) {
    len = len + 1 | 0;
  }
  if (alternate) {
    if (base) {
      if (base === /* Hex */1) {
        len = len + 2 | 0;
      }
      
    } else {
      len = len + 1 | 0;
    }
  }
  var buffer = "";
  if (justify === "+" && filter === " ") {
    for(var i = len ,i_finish = width - 1 | 0; i <= i_finish; ++i){
      buffer = buffer + filter;
    }
  }
  if (signedconv) {
    if (sign < 0) {
      buffer = buffer + "-";
    } else if (signstyle !== "-") {
      buffer = buffer + signstyle;
    }
    
  }
  if (alternate && base === /* Oct */0) {
    buffer = buffer + "0";
  }
  if (alternate && base === /* Hex */1) {
    buffer = buffer + "0x";
  }
  if (justify === "+" && filter === "0") {
    for(var i$1 = len ,i_finish$1 = width - 1 | 0; i$1 <= i_finish$1; ++i$1){
      buffer = buffer + filter;
    }
  }
  buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
  if (justify === "-") {
    for(var i$2 = len ,i_finish$2 = width - 1 | 0; i$2 <= i_finish$2; ++i$2){
      buffer = buffer + " ";
    }
  }
  return buffer;
}

function caml_format_float(fmt, x) {
  var f = parse_format(fmt);
  var prec = f[/* prec */9] < 0 ? 6 : f[/* prec */9];
  var x$1 = x < 0 ? (f[/* sign */8] = -1, -x) : x;
  var s = "";
  if (isNaN(x$1)) {
    s = "nan";
    f[/* filter */2] = " ";
  } else if (isFinite(x$1)) {
    var match = f[/* conv */10];
    switch (match) {
      case "e" : 
          s = x$1.toExponential(prec);
          var i = s.length;
          if (s[i - 3 | 0] === "e") {
            s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
          }
          break;
      case "f" : 
          s = x$1.toFixed(prec);
          break;
      case "g" : 
          var prec$1 = prec !== 0 ? prec : 1;
          s = x$1.toExponential(prec$1 - 1 | 0);
          var j = s.indexOf("e");
          var exp = Number(s.slice(j + 1 | 0)) | 0;
          if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
            var i$1 = j - 1 | 0;
            while(s[i$1] === "0") {
              i$1 = i$1 - 1 | 0;
            }
            if (s[i$1] === ".") {
              i$1 = i$1 - 1 | 0;
            }
            s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
            var i$2 = s.length;
            if (s[i$2 - 3 | 0] === "e") {
              s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
            }
            
          } else {
            var p = prec$1;
            if (exp < 0) {
              p = p - (exp + 1 | 0) | 0;
              s = x$1.toFixed(p);
            } else {
              while(function () {
                    s = x$1.toFixed(p);
                    return +(s.length > (prec$1 + 1 | 0));
                  }()) {
                p = p - 1 | 0;
              }
            }
            if (p !== 0) {
              var k = s.length - 1 | 0;
              while(s[k] === "0") {
                k = k - 1 | 0;
              }
              if (s[k] === ".") {
                k = k - 1 | 0;
              }
              s = s.slice(0, k + 1 | 0);
            }
            
          }
          break;
      default:
        
    }
  } else {
    s = "inf";
    f[/* filter */2] = " ";
  }
  return finish_formatting(f, s);
}


/* float_of_string Not a pure module */

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}


/* No side effect */

var id$1 = [0];

function get_id() {
  id$1[0] += 1;
  return id$1[0];
}

function create(str) {
  var v_001 = get_id(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}

function isCamlExceptionOrOpenVariant(e) {
  if (e === undefined) {
    return /* false */0;
  } else if (e.tag === 248) {
    return /* true */1;
  } else {
    var slot = e[0];
    if (slot !== undefined) {
      return +(slot.tag === 248);
    } else {
      return /* false */0;
    }
  }
}


/* No side effect */

/* not_implemented Not a pure module */

/* No side effect */

var Exit = create("Pervasives.Exit");

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x | 0;
  }
}

function $caret$$1(a, b) {
  return a + b;
}

function valid_float_lexem(s) {
  var l = s.length;
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= l) {
      return $caret$$1(s, ".");
    } else {
      var match = get(s, i);
      if (match >= 48) {
        if (match >= 58) {
          return s;
        } else {
          _i = i + 1 | 0;
          continue ;
          
        }
      } else if (match !== 45) {
        return s;
      } else {
        _i = i + 1 | 0;
        continue ;
        
      }
    }
  }
}

function string_of_float(f) {
  return valid_float_lexem(caml_format_float("%.12g", f));
}

function $at(l1, l2) {
  if (l1) {
    return /* :: */[
            l1[0],
            $at(l1[1], l2)
          ];
  } else {
    return l2;
  }
}


/* No side effect */

function length(l) {
  var _len = 0;
  var _param = l;
  while(true) {
    var param = _param;
    var len = _len;
    if (param) {
      _param = param[1];
      _len = len + 1 | 0;
      continue ;
      
    } else {
      return len;
    }
  }
}

function rev_append(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      _l2 = /* :: */[
        l1[0],
        l2
      ];
      _l1 = l1[1];
      continue ;
      
    } else {
      return l2;
    }
  }
}

function rev(l) {
  return rev_append(l, /* [] */0);
}

function flatten(param) {
  if (param) {
    return $at(param[0], flatten(param[1]));
  } else {
    return /* [] */0;
  }
}

function map(f, param) {
  if (param) {
    var r = _1(f, param[0]);
    return /* :: */[
            r,
            map(f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi(i, f, param) {
  if (param) {
    var r = _2(f, i, param[0]);
    return /* :: */[
            r,
            mapi(i + 1 | 0, f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function mapi$1(f, l) {
  return mapi(0, f, l);
}

function iter(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      _1(f, param[0]);
      _param = param[1];
      continue ;
      
    } else {
      return /* () */0;
    }
  }
}

function fold_left(f, _accu, _l) {
  while(true) {
    var l = _l;
    var accu = _accu;
    if (l) {
      _l = l[1];
      _accu = _2(f, accu, l[0]);
      continue ;
      
    } else {
      return accu;
    }
  }
}

function fold_left2(f, _accu, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    var accu = _accu;
    if (l1) {
      if (l2) {
        _l2 = l2[1];
        _l1 = l1[1];
        _accu = _3(f, accu, l1[0], l2[0]);
        continue ;
        
      } else {
        throw [
              invalid_argument,
              "List.fold_left2"
            ];
      }
    } else if (l2) {
      throw [
            invalid_argument,
            "List.fold_left2"
          ];
    } else {
      return accu;
    }
  }
}

function find_all(p) {
  return function (param) {
    var _accu = /* [] */0;
    var _param = param;
    while(true) {
      var param$1 = _param;
      var accu = _accu;
      if (param$1) {
        var l = param$1[1];
        var x = param$1[0];
        if (_1(p, x)) {
          _param = l;
          _accu = /* :: */[
            x,
            accu
          ];
          continue ;
          
        } else {
          _param = l;
          continue ;
          
        }
      } else {
        return rev_append(accu, /* [] */0);
      }
    }
  };
}

function chop(_k, _l) {
  while(true) {
    var l = _l;
    var k = _k;
    if (k) {
      if (l) {
        _l = l[1];
        _k = k - 1 | 0;
        continue ;
        
      } else {
        throw [
              assert_failure,
              [
                "list.ml",
                223,
                11
              ]
            ];
      }
    } else {
      return l;
    }
  }
}

function sort_uniq(cmp, l) {
  var sort = function (n, l) {
    var exit$$1 = 0;
    if (n !== 2) {
      if (n !== 3) {
        exit$$1 = 1;
      } else if (l) {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = _2(cmp, x1, x2);
            if (c) {
              if (c < 0) {
                var c$1 = _2(cmp, x2, x3);
                if (c$1) {
                  if (c$1 < 0) {
                    return /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$2 = _2(cmp, x1, x3);
                    if (c$2) {
                      if (c$2 < 0) {
                        return /* :: */[
                                x1,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x1,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x1,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                var c$3 = _2(cmp, x1, x3);
                if (c$3) {
                  if (c$3 < 0) {
                    return /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$4 = _2(cmp, x2, x3);
                    if (c$4) {
                      if (c$4 < 0) {
                        return /* :: */[
                                x2,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x2,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x2,
                              /* :: */[
                                x1,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                }
              }
            } else {
              var c$5 = _2(cmp, x2, x3);
              if (c$5) {
                if (c$5 < 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                return /* :: */[
                        x2,
                        /* [] */0
                      ];
              }
            }
          } else {
            exit$$1 = 1;
          }
        } else {
          exit$$1 = 1;
        }
      } else {
        exit$$1 = 1;
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = _2(cmp, x1$1, x2$1);
        if (c$6) {
          if (c$6 < 0) {
            return /* :: */[
                    x1$1,
                    /* :: */[
                      x2$1,
                      /* [] */0
                    ]
                  ];
          } else {
            return /* :: */[
                    x2$1,
                    /* :: */[
                      x1$1,
                      /* [] */0
                    ]
                  ];
          }
        } else {
          return /* :: */[
                  x1$1,
                  /* [] */0
                ];
        }
      } else {
        exit$$1 = 1;
      }
    } else {
      exit$$1 = 1;
    }
    if (exit$$1 === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = rev_sort(n1, l);
      var s2 = rev_sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = _2(cmp, h1, h2);
            if (c$7) {
              if (c$7 > 0) {
                _accu = /* :: */[
                  h1,
                  accu
                ];
                _l1 = t1;
                continue ;
                
              } else {
                _accu = /* :: */[
                  h2,
                  accu
                ];
                _l2 = t2;
                continue ;
                
              }
            } else {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l2 = t2;
              _l1 = t1;
              continue ;
              
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      }
    }
    
  };
  var rev_sort = function (n, l) {
    var exit$$1 = 0;
    if (n !== 2) {
      if (n !== 3) {
        exit$$1 = 1;
      } else if (l) {
        var match = l[1];
        if (match) {
          var match$1 = match[1];
          if (match$1) {
            var x3 = match$1[0];
            var x2 = match[0];
            var x1 = l[0];
            var c = _2(cmp, x1, x2);
            if (c) {
              if (c > 0) {
                var c$1 = _2(cmp, x2, x3);
                if (c$1) {
                  if (c$1 > 0) {
                    return /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$2 = _2(cmp, x1, x3);
                    if (c$2) {
                      if (c$2 > 0) {
                        return /* :: */[
                                x1,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x1,
                                  /* :: */[
                                    x2,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x1,
                              /* :: */[
                                x2,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                var c$3 = _2(cmp, x1, x3);
                if (c$3) {
                  if (c$3 > 0) {
                    return /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* :: */[
                                x3,
                                /* [] */0
                              ]
                            ]
                          ];
                  } else {
                    var c$4 = _2(cmp, x2, x3);
                    if (c$4) {
                      if (c$4 > 0) {
                        return /* :: */[
                                x2,
                                /* :: */[
                                  x3,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      } else {
                        return /* :: */[
                                x3,
                                /* :: */[
                                  x2,
                                  /* :: */[
                                    x1,
                                    /* [] */0
                                  ]
                                ]
                              ];
                      }
                    } else {
                      return /* :: */[
                              x2,
                              /* :: */[
                                x1,
                                /* [] */0
                              ]
                            ];
                    }
                  }
                } else {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                }
              }
            } else {
              var c$5 = _2(cmp, x2, x3);
              if (c$5) {
                if (c$5 > 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x3,
                            /* [] */0
                          ]
                        ];
                } else {
                  return /* :: */[
                          x3,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                }
              } else {
                return /* :: */[
                        x2,
                        /* [] */0
                      ];
              }
            }
          } else {
            exit$$1 = 1;
          }
        } else {
          exit$$1 = 1;
        }
      } else {
        exit$$1 = 1;
      }
    } else if (l) {
      var match$2 = l[1];
      if (match$2) {
        var x2$1 = match$2[0];
        var x1$1 = l[0];
        var c$6 = _2(cmp, x1$1, x2$1);
        if (c$6) {
          if (c$6 > 0) {
            return /* :: */[
                    x1$1,
                    /* :: */[
                      x2$1,
                      /* [] */0
                    ]
                  ];
          } else {
            return /* :: */[
                    x2$1,
                    /* :: */[
                      x1$1,
                      /* [] */0
                    ]
                  ];
          }
        } else {
          return /* :: */[
                  x1$1,
                  /* [] */0
                ];
        }
      } else {
        exit$$1 = 1;
      }
    } else {
      exit$$1 = 1;
    }
    if (exit$$1 === 1) {
      var n1 = (n >> 1);
      var n2 = n - n1 | 0;
      var l2 = chop(n1, l);
      var s1 = sort(n1, l);
      var s2 = sort(n2, l2);
      var _l1 = s1;
      var _l2 = s2;
      var _accu = /* [] */0;
      while(true) {
        var accu = _accu;
        var l2$1 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2$1) {
            var t2 = l2$1[1];
            var h2 = l2$1[0];
            var t1 = l1[1];
            var h1 = l1[0];
            var c$7 = _2(cmp, h1, h2);
            if (c$7) {
              if (c$7 < 0) {
                _accu = /* :: */[
                  h1,
                  accu
                ];
                _l1 = t1;
                continue ;
                
              } else {
                _accu = /* :: */[
                  h2,
                  accu
                ];
                _l2 = t2;
                continue ;
                
              }
            } else {
              _accu = /* :: */[
                h1,
                accu
              ];
              _l2 = t2;
              _l1 = t1;
              continue ;
              
            }
          } else {
            return rev_append(l1, accu);
          }
        } else {
          return rev_append(l2$1, accu);
        }
      }
    }
    
  };
  var len = length(l);
  if (len < 2) {
    return l;
  } else {
    return sort(len, l);
  }
}

var concat = flatten;

var filter = find_all;


/* No side effect */

/* No side effect */

/* No side effect */

/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function setStyle(n, key, value) {
  n.style[key] = value;
  return /* () */0;
}

function setStyleProperty(n, $staropt$star, key, value) {
  var priority = $staropt$star ? $staropt$star[0] : /* false */0;
  var style = n.style;
  var match = style.setProperty;
  if (match !== undefined) {
    return style.setProperty(key, value, priority ? "important" : null);
  } else {
    return setStyle(n, key, value);
  }
}

function insertBefore(n, child, refNode) {
  return n.insertBefore(child, refNode);
}

function setAttributeNsOptional(n, namespace, key, value) {
  if (namespace === "") {
    return n.setAttribute(key, value);
  } else {
    return n.setAttributeNS(namespace, key, value);
  }
}

function removeAttributeNsOptional(n, namespace, key) {
  if (namespace === "") {
    return n.removeAttribute(key);
  } else {
    return n.removeAttributeNS(namespace, key);
  }
}

function addEventListener(n, typ, listener, options) {
  return n.addEventListener(typ, listener, options);
}

function removeEventListener(n, typ, listener, options) {
  return n.removeEventListener(typ, listener, options);
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function createElementNsOptional(namespace, tagName) {
  if (namespace === "") {
    return document.createElement(tagName);
  } else {
    return document.createElementNS(namespace, tagName);
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
var noNode$1 = /* CommentNode */__(0, [""]);

function fullnode(namespace, tagName, key, unique, props, vdoms) {
  return /* Node */__(2, [
            namespace,
            tagName,
            key,
            unique,
            props,
            vdoms
          ]);
}

function eventHandler(callbacks, cb) {
  return function (ev) {
    var match = _1(cb[0], ev);
    if (match) {
      return _1(callbacks[0][/* enqueue */0], match[0]);
    } else {
      return /* () */0;
    }
  };
}

function eventHandler_GetCB(param) {
  if (param.tag) {
    var msg = param[0];
    return function () {
      return /* Some */[msg];
    };
  } else {
    return param[1];
  }
}

function compareEventHandlerTypes(left, param) {
  if (param.tag) {
    if (!left.tag || !caml_equal(param[0], left[0])) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  } else if (!left.tag && param[0] === left[0]) {
    return /* true */1;
  } else {
    return /* false */0;
  }
}

function eventHandler_Register(callbacks, elem, name, handlerType) {
  var cb = [eventHandler_GetCB(handlerType)];
  var handler = eventHandler(callbacks, cb);
  addEventListener(elem, name, handler, /* false */0);
  return /* Some */[/* record */[
            /* handler */handler,
            /* cb */cb
          ]];
}

function eventHandler_Unregister(elem, name, param) {
  if (param) {
    removeEventListener(elem, name, param[0][/* handler */0], /* false */0);
    return /* None */0;
  } else {
    return /* None */0;
  }
}

function eventHandler_Mutate(callbacks, elem, oldName, newName, oldHandlerType, newHandlerType, oldCache, newCache) {
  var match = oldCache[0];
  if (match) {
    if (oldName === newName) {
      newCache[0] = oldCache[0];
      if (compareEventHandlerTypes(oldHandlerType, newHandlerType)) {
        return /* () */0;
      } else {
        var cb = eventHandler_GetCB(newHandlerType);
        match[0][/* cb */1][0] = cb;
        return /* () */0;
      }
    } else {
      oldCache[0] = eventHandler_Unregister(elem, oldName, oldCache[0]);
      newCache[0] = eventHandler_Register(callbacks, elem, newName, newHandlerType);
      return /* () */0;
    }
  } else {
    newCache[0] = eventHandler_Register(callbacks, elem, newName, newHandlerType);
    return /* () */0;
  }
}

function patchVNodesOnElems_PropertiesApply_Add(callbacks, elem, _, param) {
  if (typeof param === "number") {
    return /* () */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          elem[param[0]] = param[1];
          return /* () */0;
      case 1 : 
          return setAttributeNsOptional(elem, param[0], param[1], param[2]);
      case 2 : 
          console.log(/* tuple */[
                "TODO:  Add Data Unhandled",
                param[0],
                param[1]
              ]);
          throw [
                failure,
                "TODO:  Add Data Unhandled"
              ];
      case 3 : 
          param[2][0] = eventHandler_Register(callbacks, elem, param[0], param[1]);
          return /* () */0;
      case 4 : 
          return fold_left(function (_, param) {
                      return setStyleProperty(elem, /* None */0, param[0], param[1]);
                    }, /* () */0, param[0]);
      
    }
  }
}

function patchVNodesOnElems_PropertiesApply_Remove(_, elem, _$1, param) {
  if (typeof param === "number") {
    return /* () */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          elem[param[0]] = undefined;
          return /* () */0;
      case 1 : 
          return removeAttributeNsOptional(elem, param[0], param[1]);
      case 2 : 
          console.log(/* tuple */[
                "TODO:  Remove Data Unhandled",
                param[0],
                param[1]
              ]);
          throw [
                failure,
                "TODO:  Remove Data Unhandled"
              ];
      case 3 : 
          var cache = param[2];
          cache[0] = eventHandler_Unregister(elem, param[0], cache[0]);
          return /* () */0;
      case 4 : 
          return fold_left(function (_, param) {
                      return setStyleProperty(elem, /* None */0, param[0], null);
                    }, /* () */0, param[0]);
      
    }
  }
}

function patchVNodesOnElems_PropertiesApply_RemoveAdd(callbacks, elem, idx, oldProp, newProp) {
  patchVNodesOnElems_PropertiesApply_Remove(callbacks, elem, idx, oldProp);
  patchVNodesOnElems_PropertiesApply_Add(callbacks, elem, idx, newProp);
  return /* () */0;
}

function patchVNodesOnElems_PropertiesApply_Mutate(_, elem, _$1, oldProp, _newProp) {
  if (typeof _newProp === "number") {
    throw [
          failure,
          "This should never be called as all entries through NoProp are gated."
        ];
  } else {
    switch (_newProp.tag | 0) {
      case 0 : 
          elem[_newProp[0]] = _newProp[1];
          return /* () */0;
      case 1 : 
          return setAttributeNsOptional(elem, _newProp[0], _newProp[1], _newProp[2]);
      case 2 : 
          console.log(/* tuple */[
                "TODO:  Mutate Data Unhandled",
                _newProp[0],
                _newProp[1]
              ]);
          throw [
                failure,
                "TODO:  Mutate Data Unhandled"
              ];
      case 3 : 
          throw [
                failure,
                "This will never be called because it is gated"
              ];
      case 4 : 
          if (typeof oldProp === "number") {
            throw [
                  failure,
                  "Passed a non-Style to a new Style as a Mutations while the old Style is not actually a style!"
                ];
          } else if (oldProp.tag === 4) {
            return fold_left2(function (_, param, param$1) {
                        var nv = param$1[1];
                        var nk = param$1[0];
                        var ok = param[0];
                        if (ok === nk) {
                          if (param[1] === nv) {
                            return /* () */0;
                          } else {
                            return setStyleProperty(elem, /* None */0, nk, nv);
                          }
                        } else {
                          setStyleProperty(elem, /* None */0, ok, null);
                          return setStyleProperty(elem, /* None */0, nk, nv);
                        }
                      }, /* () */0, oldProp[0], _newProp[0]);
          } else {
            throw [
                  failure,
                  "Passed a non-Style to a new Style as a Mutations while the old Style is not actually a style!"
                ];
          }
          break;
      
    }
  }
}

function patchVNodesOnElems_PropertiesApply(callbacks, elem, _idx, _oldProperties, _newProperties) {
  while(true) {
    var newProperties = _newProperties;
    var oldProperties = _oldProperties;
    var idx = _idx;
    if (oldProperties) {
      var oldProp = oldProperties[0];
      var exit = 0;
      if (newProperties) {
        if (typeof oldProp === "number") {
          if (typeof newProperties[0] === "number") {
            _newProperties = newProperties[1];
            _oldProperties = oldProperties[1];
            _idx = idx + 1 | 0;
            continue ;
            
          } else {
            exit = 1;
          }
        } else {
          switch (oldProp.tag | 0) {
            case 0 : 
                var newProp = newProperties[0];
                if (typeof newProp === "number") {
                  exit = 1;
                } else if (newProp.tag) {
                  exit = 1;
                } else {
                  if (!(oldProp[0] === newProp[0] && oldProp[1] === newProp[1])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, oldProp, newProp);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                }
                break;
            case 1 : 
                var newProp$1 = newProperties[0];
                if (typeof newProp$1 === "number") {
                  exit = 1;
                } else if (newProp$1.tag === 1) {
                  if (!(oldProp[0] === newProp$1[0] && oldProp[1] === newProp$1[1] && oldProp[2] === newProp$1[2])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, oldProp, newProp$1);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  exit = 1;
                }
                break;
            case 2 : 
                var newProp$2 = newProperties[0];
                if (typeof newProp$2 === "number") {
                  exit = 1;
                } else if (newProp$2.tag === 2) {
                  if (!(oldProp[0] === newProp$2[0] && oldProp[1] === newProp$2[1])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, oldProp, newProp$2);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  exit = 1;
                }
                break;
            case 3 : 
                var _newProp = newProperties[0];
                if (typeof _newProp === "number") {
                  exit = 1;
                } else if (_newProp.tag === 3) {
                  eventHandler_Mutate(callbacks, elem, oldProp[0], _newProp[0], oldProp[1], _newProp[1], oldProp[2], _newProp[2]);
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  exit = 1;
                }
                break;
            case 4 : 
                var newProp$3 = newProperties[0];
                if (typeof newProp$3 === "number") {
                  exit = 1;
                } else if (newProp$3.tag === 4) {
                  if (!caml_equal(oldProp[0], newProp$3[0])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, oldProp, newProp$3);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  exit = 1;
                }
                break;
            
          }
        }
      } else {
        return /* false */0;
      }
      if (exit === 1) {
        patchVNodesOnElems_PropertiesApply_RemoveAdd(callbacks, elem, idx, oldProp, newProperties[0]);
        _newProperties = newProperties[1];
        _oldProperties = oldProperties[1];
        _idx = idx + 1 | 0;
        continue ;
        
      }
      
    } else if (newProperties) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  }
}

function patchVNodesOnElems_Properties(callbacks, elem, oldProperties, newProperties) {
  return patchVNodesOnElems_PropertiesApply(callbacks, elem, 0, oldProperties, newProperties);
}

function patchVNodesOnElems_ReplaceNode(callbacks, elem, elems, idx, param) {
  if (param.tag === 2) {
    var newProperties = param[4];
    var oldChild = caml_array_get(elems, idx);
    var newChild = createElementNsOptional(param[0], param[1]);
    var match = patchVNodesOnElems_Properties(callbacks, newChild, map(function () {
              return /* NoProp */0;
            }, newProperties), newProperties);
    if (match !== 0) {
      var childChildren = newChild.childNodes;
      patchVNodesOnElems(callbacks, newChild, childChildren, 0, /* [] */0, param[5]);
      insertBefore(elem, newChild, oldChild);
      elem.removeChild(oldChild);
      return /* () */0;
    } else {
      throw [
            match_failure,
            [
              "/home/thomas/Workspace/bucklescript-test/node_modules/bucklescript-tea/src/vdom.ml",
              316,
              30
            ]
          ];
    }
  } else {
    throw [
          failure,
          "Node replacement should never be passed anything but a node itself"
        ];
  }
}

function patchVNodesOnElems_CreateElement(_callbacks, _param) {
  while(true) {
    var param = _param;
    var callbacks = _callbacks;
    switch (param.tag | 0) {
      case 0 : 
          var text = param[0];
          return document.createComment(text);
      case 1 : 
          var text$1 = param[0];
          return document.createTextNode(text$1);
      case 2 : 
          var newProperties = param[4];
          var newChild = createElementNsOptional(param[0], param[1]);
          var match = patchVNodesOnElems_Properties(callbacks, newChild, map(function () {
                    return /* NoProp */0;
                  }, newProperties), newProperties);
          if (match !== 0) {
            var childChildren = newChild.childNodes;
            patchVNodesOnElems(callbacks, newChild, childChildren, 0, /* [] */0, param[5]);
            return newChild;
          } else {
            throw [
                  match_failure,
                  [
                    "/home/thomas/Workspace/bucklescript-test/node_modules/bucklescript-tea/src/vdom.ml",
                    330,
                    30
                  ]
                ];
          }
          break;
      case 3 : 
          var vdom = _1(param[1], /* () */0);
          param[2][0] = vdom;
          _param = vdom;
          continue ;
          case 4 : 
          _param = param[1];
          _callbacks = _1(param[0], callbacks);
          continue ;
          
    }
  }
}

function patchVNodesOnElems_MutateNode(callbacks, elem, elems, idx, oldNode, newNode) {
  if (oldNode.tag === 2) {
    if (newNode.tag === 2) {
      if (oldNode[3] !== newNode[3] || oldNode[1] !== newNode[1]) {
        return patchVNodesOnElems_ReplaceNode(callbacks, elem, elems, idx, newNode);
      } else {
        var child = caml_array_get(elems, idx);
        var childChildren = child.childNodes;
        if (!patchVNodesOnElems_Properties(callbacks, child, oldNode[4], newNode[4])) {
          console.log("VDom:  Failed swapping properties because the property list length changed, use `noProp` to swap properties instead, not by altering the list structure.  This is a massive inefficiency until this issue is resolved.");
          patchVNodesOnElems_ReplaceNode(callbacks, elem, elems, idx, newNode);
        }
        return patchVNodesOnElems(callbacks, child, childChildren, 0, oldNode[5], newNode[5]);
      }
    } else {
      throw [
            failure,
            "Non-node passed to patchVNodesOnElems_MutateNode"
          ];
    }
  } else {
    throw [
          failure,
          "Non-node passed to patchVNodesOnElems_MutateNode"
        ];
  }
}

function patchVNodesOnElems(callbacks, elem, elems, _idx, _oldVNodes, _newVNodes) {
  while(true) {
    var newVNodes = _newVNodes;
    var oldVNodes = _oldVNodes;
    var idx = _idx;
    if (oldVNodes) {
      var oldNode = oldVNodes[0];
      var exit = 0;
      switch (oldNode.tag | 0) {
        case 0 : 
            if (newVNodes) {
              var match = newVNodes[0];
              if (match.tag) {
                exit = 1;
              } else if (oldNode[0] === match[0]) {
                _newVNodes = newVNodes[1];
                _oldVNodes = oldVNodes[1];
                _idx = idx + 1 | 0;
                continue ;
                
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case 1 : 
            if (newVNodes) {
              var match$1 = newVNodes[0];
              if (match$1.tag === 1) {
                var newText = match$1[0];
                if (oldNode[0] !== newText) {
                  var child = caml_array_get(elems, idx);
                  child.nodeValue = newText;
                }
                _newVNodes = newVNodes[1];
                _oldVNodes = oldVNodes[1];
                _idx = idx + 1 | 0;
                continue ;
                
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case 2 : 
            if (newVNodes) {
              var newNode = newVNodes[0];
              if (newNode.tag === 2) {
                var newRest = newVNodes[1];
                var newKey = newNode[2];
                var newTagName = newNode[1];
                var newNamespace = newNode[0];
                var oldRest = oldVNodes[1];
                var oldKey = oldNode[2];
                var oldTagName = oldNode[1];
                var oldNamespace = oldNode[0];
                if (oldKey === newKey && oldKey !== "") {
                  _newVNodes = newRest;
                  _oldVNodes = oldRest;
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else if (oldKey === "" || newKey === "") {
                  patchVNodesOnElems_MutateNode(callbacks, elem, elems, idx, oldNode, newNode);
                  _newVNodes = newRest;
                  _oldVNodes = oldRest;
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  var exit$1 = 0;
                  var exit$2 = 0;
                  if (oldRest) {
                    var match$2 = oldRest[0];
                    if (match$2.tag === 2) {
                      var olderRest = oldRest[1];
                      var olderKey = match$2[2];
                      var olderTagName = match$2[1];
                      var olderNamespace = match$2[0];
                      var exit$3 = 0;
                      if (newRest) {
                        var match$3 = newRest[0];
                        if (match$3.tag === 2) {
                          if (olderNamespace === newNamespace && olderTagName === newTagName && olderKey === newKey && oldNamespace === match$3[0] && oldTagName === match$3[1] && oldKey === match$3[2]) {
                            var firstChild$$1 = caml_array_get(elems, idx);
                            var secondChild = caml_array_get(elems, idx + 1 | 0);
                            elem.removeChild(secondChild);
                            insertBefore(elem, secondChild, firstChild$$1);
                            _newVNodes = newRest[1];
                            _oldVNodes = olderRest;
                            _idx = idx + 2 | 0;
                            continue ;
                            
                          } else {
                            exit$3 = 4;
                          }
                        } else {
                          exit$3 = 4;
                        }
                      } else {
                        exit$3 = 4;
                      }
                      if (exit$3 === 4) {
                        if (olderNamespace === newNamespace && olderTagName === newTagName && olderKey === newKey) {
                          var oldChild = caml_array_get(elems, idx);
                          elem.removeChild(oldChild);
                          _newVNodes = newRest;
                          _oldVNodes = olderRest;
                          _idx = idx + 1 | 0;
                          continue ;
                          
                        } else {
                          exit$2 = 3;
                        }
                      }
                      
                    } else {
                      exit$2 = 3;
                    }
                  } else {
                    exit$2 = 3;
                  }
                  if (exit$2 === 3) {
                    if (newRest) {
                      var match$4 = newRest[0];
                      if (match$4.tag === 2) {
                        if (oldNamespace === match$4[0] && oldTagName === match$4[1] && oldKey === match$4[2]) {
                          var oldChild$1 = caml_array_get(elems, idx);
                          var newChild = patchVNodesOnElems_CreateElement(callbacks, newNode);
                          insertBefore(elem, newChild, oldChild$1);
                          _newVNodes = newRest;
                          _idx = idx + 1 | 0;
                          continue ;
                          
                        } else {
                          exit$1 = 2;
                        }
                      } else {
                        exit$1 = 2;
                      }
                    } else {
                      exit$1 = 2;
                    }
                  }
                  if (exit$1 === 2) {
                    patchVNodesOnElems_MutateNode(callbacks, elem, elems, idx, oldNode, newNode);
                    _newVNodes = newRest;
                    _oldVNodes = oldRest;
                    _idx = idx + 1 | 0;
                    continue ;
                    
                  }
                  
                }
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case 3 : 
            if (newVNodes) {
              var match$5 = newVNodes[0];
              if (match$5.tag === 3) {
                var newRest$1 = newVNodes[1];
                var newCache = match$5[2];
                var newGen = match$5[1];
                var newKey$1 = match$5[0];
                var oldRest$1 = oldVNodes[1];
                var oldCache = oldNode[2];
                var oldKey$1 = oldNode[0];
                if (oldKey$1 === newKey$1) {
                  newCache[0] = oldCache[0];
                  _newVNodes = newRest$1;
                  _oldVNodes = oldRest$1;
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  var exit$4 = 0;
                  var exit$5 = 0;
                  if (oldRest$1) {
                    var match$6 = oldRest$1[0];
                    if (match$6.tag === 3) {
                      var olderRest$1 = oldRest$1[1];
                      var olderKey$1 = match$6[0];
                      var exit$6 = 0;
                      if (newRest$1) {
                        var match$7 = newRest$1[0];
                        if (match$7.tag === 3) {
                          if (olderKey$1 === newKey$1 && oldKey$1 === match$7[0]) {
                            var firstChild$1 = caml_array_get(elems, idx);
                            var secondChild$1 = caml_array_get(elems, idx + 1 | 0);
                            elem.removeChild(secondChild$1);
                            insertBefore(elem, secondChild$1, firstChild$1);
                            _newVNodes = newRest$1[1];
                            _oldVNodes = olderRest$1;
                            _idx = idx + 2 | 0;
                            continue ;
                            
                          } else {
                            exit$6 = 4;
                          }
                        } else {
                          exit$6 = 4;
                        }
                      } else {
                        exit$6 = 4;
                      }
                      if (exit$6 === 4) {
                        if (olderKey$1 === newKey$1) {
                          var oldChild$2 = caml_array_get(elems, idx);
                          elem.removeChild(oldChild$2);
                          var oldVdom = match$6[2][0];
                          newCache[0] = oldVdom;
                          _newVNodes = newRest$1;
                          _oldVNodes = olderRest$1;
                          _idx = idx + 1 | 0;
                          continue ;
                          
                        } else {
                          exit$5 = 3;
                        }
                      }
                      
                    } else {
                      exit$5 = 3;
                    }
                  } else {
                    exit$5 = 3;
                  }
                  if (exit$5 === 3) {
                    if (newRest$1) {
                      var match$8 = newRest$1[0];
                      if (match$8.tag === 3) {
                        if (match$8[0] === oldKey$1) {
                          var oldChild$3 = caml_array_get(elems, idx);
                          var newVdom = _1(newGen, /* () */0);
                          newCache[0] = newVdom;
                          var newChild$1 = patchVNodesOnElems_CreateElement(callbacks, newVdom);
                          insertBefore(elem, newChild$1, oldChild$3);
                          _newVNodes = newRest$1;
                          _idx = idx + 1 | 0;
                          continue ;
                          
                        } else {
                          exit$4 = 2;
                        }
                      } else {
                        exit$4 = 2;
                      }
                    } else {
                      exit$4 = 2;
                    }
                  }
                  if (exit$4 === 2) {
                    var oldVdom$1 = oldCache[0];
                    var newVdom$1 = _1(newGen, /* () */0);
                    newCache[0] = newVdom$1;
                    _newVNodes = /* :: */[
                      newVdom$1,
                      newRest$1
                    ];
                    _oldVNodes = /* :: */[
                      oldVdom$1,
                      oldRest$1
                    ];
                    continue ;
                    
                  }
                  
                }
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case 4 : 
            _oldVNodes = /* :: */[
              oldNode[1],
              oldVNodes[1]
            ];
            continue ;
            
      }
      if (exit === 1) {
        var oldRest$2 = oldVNodes[1];
        if (newVNodes) {
          var newNode$1 = newVNodes[0];
          if (newNode$1.tag === 4) {
            patchVNodesOnElems(_1(newNode$1[0], callbacks), elem, elems, idx, /* :: */[
                  oldNode,
                  /* [] */0
                ], /* :: */[
                  newNode$1[1],
                  /* [] */0
                ]);
            _newVNodes = newVNodes[1];
            _oldVNodes = oldRest$2;
            _idx = idx + 1 | 0;
            continue ;
            
          } else {
            var oldChild$4 = caml_array_get(elems, idx);
            var newChild$2 = patchVNodesOnElems_CreateElement(callbacks, newNode$1);
            insertBefore(elem, newChild$2, oldChild$4);
            elem.removeChild(oldChild$4);
            _newVNodes = newVNodes[1];
            _oldVNodes = oldRest$2;
            _idx = idx + 1 | 0;
            continue ;
            
          }
        } else {
          var child$1 = caml_array_get(elems, idx);
          elem.removeChild(child$1);
          _newVNodes = /* [] */0;
          _oldVNodes = oldRest$2;
          continue ;
          
        }
      }
      
    } else if (newVNodes) {
      var newChild$3 = patchVNodesOnElems_CreateElement(callbacks, newVNodes[0]);
      elem.appendChild(newChild$3);
      _newVNodes = newVNodes[1];
      _oldVNodes = /* [] */0;
      _idx = idx + 1 | 0;
      continue ;
      
    } else {
      return /* () */0;
    }
  }
}

function patchVNodesIntoElement(callbacks, elem, oldVNodes, newVNodes) {
  var elems = elem.childNodes;
  patchVNodesOnElems(callbacks, elem, elems, 0, oldVNodes, newVNodes);
  return newVNodes;
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function div($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode("", "div", key, unique, props, nodes);
}


/* No side effect */

function null_undefined_to_opt(x) {
  if (x === null || x === undefined) {
    return /* None */0;
  } else {
    return /* Some */[x];
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function updatePosition(sprite, param) {
  sprite.position.set(param[0], param[1]);
  return sprite;
}

var Sprite = /* module */[/* updatePosition */updatePosition];

function addChild(container, child) {
  container.addChild(child[0]);
  return /* () */0;
}

function clear(container) {
  container.removeChildren();
  return container;
}

function Container_001() {
  return new PIXI.Container();
}

var Container = /* module */[
  /* addChild */addChild,
  Container_001,
  /* clear */clear
];

function create$1(resource) {
  var _t = PIXI.loader.resources;
  return null_undefined_to_opt(_t[resource]);
}

function texture(name, t) {
  return null_undefined_to_opt(t.textures[name]);
}

var Resources = /* module */[
  /* create */create$1,
  /* texture */texture
];

function add$1(items, loader) {
  loader.add(items);
  return loader;
}

function load(cb, loader) {
  loader.load(cb);
  return loader;
}

function onProgress(cb, loader) {
  loader.on("progress", function (p) {
        return _1(cb, p.progress);
      });
  return loader;
}

var Loader = /* module */[
  /* PIXI.loader */PIXI.loader,
  /* add */add$1,
  /* onProgress */onProgress,
  /* load */load
];


/* Loader Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function map$4(f, a) {
  if (a) {
    return /* Some */[_1(f, a[0])];
  } else {
    return /* None */0;
  }
}

function andThen(f, a) {
  if (a) {
    return _1(f, a[0]);
  } else {
    return /* None */0;
  }
}

function withDefault($$default, opt) {
  if (opt) {
    return opt[0];
  } else {
    return $$default;
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function putSprite(stage, position, sprite) {
  _2(Container[/* addChild */0], stage, /* Sprite */__(1, [sprite]));
  _2(Sprite[/* updatePosition */0], sprite, position);
  return /* () */0;
}

function backgroundStage(maybePack) {
  var backgroundStage$1 = _1(Container[/* create */1], /* () */0);
  var maybeBackground = map$4(function (t) {
        return new PIXI.TilingSprite(t, 800, 600);
      }, andThen(_1(Resources[/* texture */1], "background.png"), maybePack));
  if (maybeBackground) {
    putSprite(backgroundStage$1, /* tuple */[
          0,
          0
        ], maybeBackground[0]);
  } else {
    console.log("No background found");
  }
  return backgroundStage$1;
}

var model = /* record */[
  /* renderer : None */0,
  /* textureLife : None */0,
  /* rootStage : None */0,
  /* spriteStage : None */0
];

_2(Loader[/* load */3], function (param) {
      var t = model;
      var opts = {
        antialias: /* true */1,
        transparent: /* false */0
      };
      var renderer = PIXI.autoDetectRenderer(800, 600, opts);
      var rootStage = _1(Container[/* create */1], /* () */0);
      var spriteStage = _1(Container[/* create */1], /* () */0);
      var maybePack = _1(Resources[/* create */0], "space/space.json");
      var textureLife = andThen(_1(Resources[/* texture */1], "spaceship.png"), maybePack);
      document.body.appendChild(renderer.view);
      _2(Container[/* addChild */0], rootStage, /* Container */__(2, [backgroundStage(maybePack)]));
      _2(Container[/* addChild */0], rootStage, /* Container */__(2, [spriteStage]));
      renderer.render(rootStage);
      t[/* renderer */0] = /* Some */[renderer];
      t[/* rootStage */2] = /* Some */[rootStage];
      t[/* spriteStage */3] = /* Some */[spriteStage];
      t[/* textureLife */1] = textureLife;
      return /* () */0;
    }, _2(Loader[/* onProgress */2], function (p) {
          console.log(string_of_float(p));
          return /* () */0;
        }, _2(Loader[/* add */1], /* array */["space/space.json"], Loader[/* init */0])));

function renderLife(stage, cellSize, texture, universe) {
  var renderPositionedCell = function (param) {
    var match = param[0];
    return putSprite(stage, /* tuple */[
                imul(match[0], cellSize),
                imul(match[1], cellSize)
              ], new PIXI.Sprite(texture));
  };
  map(renderPositionedCell, universe);
  return /* () */0;
}

function render(t, cellSize, universe) {
  var match = t[/* rootStage */2];
  var match$1 = t[/* spriteStage */3];
  var match$2 = t[/* textureLife */1];
  var match$3 = t[/* renderer */0];
  if (match) {
    if (match$1) {
      if (match$2) {
        if (match$3) {
          var spriteStage = match$1[0];
          _1(Container[/* clear */2], spriteStage);
          renderLife(spriteStage, cellSize, match$2[0], universe);
          return match$3[0].render(match[0]);
        } else {
          console.log("Nothing to render yet?");
          return /* () */0;
        }
      } else {
        console.log("Nothing to render yet?");
        return /* () */0;
      }
    } else {
      console.log("Nothing to render yet?");
      return /* () */0;
    }
  } else {
    console.log("Nothing to render yet?");
    return /* () */0;
  }
}

var init$3 = model;


/*  Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function view(model) {
  render(model[/* pixi */4], model[/* viewPort */2][/* cellSize */4], model[/* universe */0]);
  return div(/* None */0, /* None */0, /* [] */0, /* [] */0);
}


/* MyPixiRenderer Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function head(param) {
  if (param) {
    return /* Some */[param[0]];
  } else {
    return /* None */0;
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function newViewPort(a, b, c, d, e) {
  return /* record */[
          /* xMin */a,
          /* yMin */b,
          /* xMax */c,
          /* yMax */d,
          /* cellSize */e
        ];
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function run(callbacks, param) {
  if (typeof param === "number") {
    return /* () */0;
  } else {
    switch (param.tag | 0) {
      case 1 : 
          return fold_left(function (_, cmd) {
                      return run(callbacks, cmd);
                    }, /* () */0, param[0]);
      case 0 : 
      case 2 : 
          return _1(param[0], callbacks);
      
    }
  }
}

var none = /* NoCmd */0;


/* No side effect */

function Make(funarg) {
  var height = function (param) {
    if (param) {
      return param[3];
    } else {
      return 0;
    }
  };
  var create = function (l, v, r) {
    var hl = l ? l[3] : 0;
    var hr = r ? r[3] : 0;
    return /* Node */[
            l,
            v,
            r,
            hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          ];
  };
  var bal = function (l, v, r) {
    var hl = l ? l[3] : 0;
    var hr = r ? r[3] : 0;
    if (hl > (hr + 2 | 0)) {
      if (l) {
        var lr = l[2];
        var lv = l[1];
        var ll = l[0];
        if (height(ll) >= height(lr)) {
          return create(ll, lv, create(lr, v, r));
        } else if (lr) {
          return create(create(ll, lv, lr[0]), lr[1], create(lr[2], v, r));
        } else {
          throw [
                invalid_argument,
                "Set.bal"
              ];
        }
      } else {
        throw [
              invalid_argument,
              "Set.bal"
            ];
      }
    } else if (hr > (hl + 2 | 0)) {
      if (r) {
        var rr = r[2];
        var rv = r[1];
        var rl = r[0];
        if (height(rr) >= height(rl)) {
          return create(create(l, v, rl), rv, rr);
        } else if (rl) {
          return create(create(l, v, rl[0]), rl[1], create(rl[2], rv, rr));
        } else {
          throw [
                invalid_argument,
                "Set.bal"
              ];
        }
      } else {
        throw [
              invalid_argument,
              "Set.bal"
            ];
      }
    } else {
      return /* Node */[
              l,
              v,
              r,
              hl >= hr ? hl + 1 | 0 : hr + 1 | 0
            ];
    }
  };
  var add = function (x, t) {
    if (t) {
      var r = t[2];
      var v = t[1];
      var l = t[0];
      var c = _2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          return bal(add(x, l), v, r);
        } else {
          return bal(l, v, add(x, r));
        }
      } else {
        return t;
      }
    } else {
      return /* Node */[
              /* Empty */0,
              x,
              /* Empty */0,
              1
            ];
    }
  };
  var singleton = function (x) {
    return /* Node */[
            /* Empty */0,
            x,
            /* Empty */0,
            1
          ];
  };
  var add_min_element = function (v, param) {
    if (param) {
      return bal(add_min_element(v, param[0]), param[1], param[2]);
    } else {
      return singleton(v);
    }
  };
  var add_max_element = function (v, param) {
    if (param) {
      return bal(param[0], param[1], add_max_element(v, param[2]));
    } else {
      return singleton(v);
    }
  };
  var join = function (l, v, r) {
    if (l) {
      if (r) {
        var rh = r[3];
        var lh = l[3];
        if (lh > (rh + 2 | 0)) {
          return bal(l[0], l[1], join(l[2], v, r));
        } else if (rh > (lh + 2 | 0)) {
          return bal(join(l, v, r[0]), r[1], r[2]);
        } else {
          return create(l, v, r);
        }
      } else {
        return add_max_element(v, l);
      }
    } else {
      return add_min_element(v, r);
    }
  };
  var min_elt = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var l = param[0];
        if (l) {
          _param = l;
          continue ;
          
        } else {
          return param[1];
        }
      } else {
        throw not_found;
      }
    }
  };
  var max_elt = function (_param) {
    while(true) {
      var param = _param;
      if (param) {
        var r = param[2];
        if (r) {
          _param = r;
          continue ;
          
        } else {
          return param[1];
        }
      } else {
        throw not_found;
      }
    }
  };
  var remove_min_elt = function (param) {
    if (param) {
      var l = param[0];
      if (l) {
        return bal(remove_min_elt(l), param[1], param[2]);
      } else {
        return param[2];
      }
    } else {
      throw [
            invalid_argument,
            "Set.remove_min_elt"
          ];
    }
  };
  var concat$$1 = function (t1, t2) {
    if (t1) {
      if (t2) {
        return join(t1, min_elt(t2), remove_min_elt(t2));
      } else {
        return t1;
      }
    } else {
      return t2;
    }
  };
  var split$$1 = function (x, param) {
    if (param) {
      var r = param[2];
      var v = param[1];
      var l = param[0];
      var c = _2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          var match = split$$1(x, l);
          return /* tuple */[
                  match[0],
                  match[1],
                  join(match[2], v, r)
                ];
        } else {
          var match$1 = split$$1(x, r);
          return /* tuple */[
                  join(l, v, match$1[0]),
                  match$1[1],
                  match$1[2]
                ];
        }
      } else {
        return /* tuple */[
                l,
                /* true */1,
                r
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* false */0,
              /* Empty */0
            ];
    }
  };
  var is_empty = function (param) {
    if (param) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  };
  var mem$$1 = function (x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var c = _2(funarg[/* compare */0], x, param[1]);
        if (c) {
          _param = c < 0 ? param[0] : param[2];
          continue ;
          
        } else {
          return /* true */1;
        }
      } else {
        return /* false */0;
      }
    }
  };
  var remove = function (x, param) {
    if (param) {
      var r = param[2];
      var v = param[1];
      var l = param[0];
      var c = _2(funarg[/* compare */0], x, v);
      if (c) {
        if (c < 0) {
          return bal(remove(x, l), v, r);
        } else {
          return bal(l, v, remove(x, r));
        }
      } else {
        var t1 = l;
        var t2 = r;
        if (t1) {
          if (t2) {
            return bal(t1, min_elt(t2), remove_min_elt(t2));
          } else {
            return t1;
          }
        } else {
          return t2;
        }
      }
    } else {
      return /* Empty */0;
    }
  };
  var union = function (s1, s2) {
    if (s1) {
      if (s2) {
        var h2 = s2[3];
        var v2 = s2[1];
        var h1 = s1[3];
        var v1 = s1[1];
        if (h1 >= h2) {
          if (h2 === 1) {
            return add(v2, s1);
          } else {
            var match = split$$1(v1, s2);
            return join(union(s1[0], match[0]), v1, union(s1[2], match[2]));
          }
        } else if (h1 === 1) {
          return add(v1, s2);
        } else {
          var match$1 = split$$1(v2, s1);
          return join(union(match$1[0], s2[0]), v2, union(match$1[2], s2[2]));
        }
      } else {
        return s1;
      }
    } else {
      return s2;
    }
  };
  var inter = function (s1, s2) {
    if (s1) {
      if (s2) {
        var r1 = s1[2];
        var v1 = s1[1];
        var l1 = s1[0];
        var match = split$$1(v1, s2);
        var l2 = match[0];
        if (match[1] !== 0) {
          return join(inter(l1, l2), v1, inter(r1, match[2]));
        } else {
          return concat$$1(inter(l1, l2), inter(r1, match[2]));
        }
      } else {
        return /* Empty */0;
      }
    } else {
      return /* Empty */0;
    }
  };
  var diff = function (s1, s2) {
    if (s1) {
      if (s2) {
        var r1 = s1[2];
        var v1 = s1[1];
        var l1 = s1[0];
        var match = split$$1(v1, s2);
        var l2 = match[0];
        if (match[1] !== 0) {
          return concat$$1(diff(l1, l2), diff(r1, match[2]));
        } else {
          return join(diff(l1, l2), v1, diff(r1, match[2]));
        }
      } else {
        return s1;
      }
    } else {
      return /* Empty */0;
    }
  };
  var cons_enum = function (_s, _e) {
    while(true) {
      var e = _e;
      var s = _s;
      if (s) {
        _e = /* More */[
          s[1],
          s[2],
          e
        ];
        _s = s[0];
        continue ;
        
      } else {
        return e;
      }
    }
  };
  var compare = function (s1, s2) {
    var _e1 = cons_enum(s1, /* End */0);
    var _e2 = cons_enum(s2, /* End */0);
    while(true) {
      var e2 = _e2;
      var e1 = _e1;
      if (e1) {
        if (e2) {
          var c = _2(funarg[/* compare */0], e1[0], e2[0]);
          if (c !== 0) {
            return c;
          } else {
            _e2 = cons_enum(e2[1], e2[2]);
            _e1 = cons_enum(e1[1], e1[2]);
            continue ;
            
          }
        } else {
          return 1;
        }
      } else if (e2) {
        return -1;
      } else {
        return 0;
      }
    }
  };
  var equal = function (s1, s2) {
    return +(compare(s1, s2) === 0);
  };
  var subset = function (_s1, _s2) {
    while(true) {
      var s2 = _s2;
      var s1 = _s1;
      if (s1) {
        if (s2) {
          var r2 = s2[2];
          var l2 = s2[0];
          var r1 = s1[2];
          var v1 = s1[1];
          var l1 = s1[0];
          var c = _2(funarg[/* compare */0], v1, s2[1]);
          if (c) {
            if (c < 0) {
              if (subset(/* Node */[
                      l1,
                      v1,
                      /* Empty */0,
                      0
                    ], l2)) {
                _s1 = r1;
                continue ;
                
              } else {
                return /* false */0;
              }
            } else if (subset(/* Node */[
                    /* Empty */0,
                    v1,
                    r1,
                    0
                  ], r2)) {
              _s1 = l1;
              continue ;
              
            } else {
              return /* false */0;
            }
          } else if (subset(l1, l2)) {
            _s2 = r2;
            _s1 = r1;
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* false */0;
        }
      } else {
        return /* true */1;
      }
    }
  };
  var iter$$1 = function (f, _param) {
    while(true) {
      var param = _param;
      if (param) {
        iter$$1(f, param[0]);
        _1(f, param[1]);
        _param = param[2];
        continue ;
        
      } else {
        return /* () */0;
      }
    }
  };
  var fold = function (f, _s, _accu) {
    while(true) {
      var accu = _accu;
      var s = _s;
      if (s) {
        _accu = _2(f, s[1], fold(f, s[0], accu));
        _s = s[2];
        continue ;
        
      } else {
        return accu;
      }
    }
  };
  var for_all$$1 = function (p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (_1(p, param[1])) {
          if (for_all$$1(p, param[0])) {
            _param = param[2];
            continue ;
            
          } else {
            return /* false */0;
          }
        } else {
          return /* false */0;
        }
      } else {
        return /* true */1;
      }
    }
  };
  var exists$$1 = function (p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (_1(p, param[1])) {
          return /* true */1;
        } else if (exists$$1(p, param[0])) {
          return /* true */1;
        } else {
          _param = param[2];
          continue ;
          
        }
      } else {
        return /* false */0;
      }
    }
  };
  var filter$$1 = function (p, param) {
    if (param) {
      var v = param[1];
      var l$prime = filter$$1(p, param[0]);
      var pv = _1(p, v);
      var r$prime = filter$$1(p, param[2]);
      if (pv) {
        return join(l$prime, v, r$prime);
      } else {
        return concat$$1(l$prime, r$prime);
      }
    } else {
      return /* Empty */0;
    }
  };
  var partition$$1 = function (p, param) {
    if (param) {
      var v = param[1];
      var match = partition$$1(p, param[0]);
      var lf = match[1];
      var lt = match[0];
      var pv = _1(p, v);
      var match$1 = partition$$1(p, param[2]);
      var rf = match$1[1];
      var rt = match$1[0];
      if (pv) {
        return /* tuple */[
                join(lt, v, rt),
                concat$$1(lf, rf)
              ];
      } else {
        return /* tuple */[
                concat$$1(lt, rt),
                join(lf, v, rf)
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* Empty */0
            ];
    }
  };
  var cardinal = function (param) {
    if (param) {
      return (cardinal(param[0]) + 1 | 0) + cardinal(param[2]) | 0;
    } else {
      return 0;
    }
  };
  var elements_aux = function (_accu, _param) {
    while(true) {
      var param = _param;
      var accu = _accu;
      if (param) {
        _param = param[0];
        _accu = /* :: */[
          param[1],
          elements_aux(accu, param[2])
        ];
        continue ;
        
      } else {
        return accu;
      }
    }
  };
  var elements = function (s) {
    return elements_aux(/* [] */0, s);
  };
  var find$$1 = function (x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var v = param[1];
        var c = _2(funarg[/* compare */0], x, v);
        if (c) {
          _param = c < 0 ? param[0] : param[2];
          continue ;
          
        } else {
          return v;
        }
      } else {
        throw not_found;
      }
    }
  };
  var of_list = function (l) {
    if (l) {
      var match = l[1];
      var x0 = l[0];
      if (match) {
        var match$1 = match[1];
        var x1 = match[0];
        if (match$1) {
          var match$2 = match$1[1];
          var x2 = match$1[0];
          if (match$2) {
            var match$3 = match$2[1];
            var x3 = match$2[0];
            if (match$3) {
              if (match$3[1]) {
                var l$1 = sort_uniq(funarg[/* compare */0], l);
                var sub = function (n, l) {
                  var exit = 0;
                  if (n > 3 || n < 0) {
                    exit = 1;
                  } else {
                    switch (n) {
                      case 0 : 
                          return /* tuple */[
                                  /* Empty */0,
                                  l
                                ];
                      case 1 : 
                          if (l) {
                            return /* tuple */[
                                    /* Node */[
                                      /* Empty */0,
                                      l[0],
                                      /* Empty */0,
                                      1
                                    ],
                                    l[1]
                                  ];
                          } else {
                            exit = 1;
                          }
                          break;
                      case 2 : 
                          if (l) {
                            var match = l[1];
                            if (match) {
                              return /* tuple */[
                                      /* Node */[
                                        /* Node */[
                                          /* Empty */0,
                                          l[0],
                                          /* Empty */0,
                                          1
                                        ],
                                        match[0],
                                        /* Empty */0,
                                        2
                                      ],
                                      match[1]
                                    ];
                            } else {
                              exit = 1;
                            }
                          } else {
                            exit = 1;
                          }
                          break;
                      case 3 : 
                          if (l) {
                            var match$1 = l[1];
                            if (match$1) {
                              var match$2 = match$1[1];
                              if (match$2) {
                                return /* tuple */[
                                        /* Node */[
                                          /* Node */[
                                            /* Empty */0,
                                            l[0],
                                            /* Empty */0,
                                            1
                                          ],
                                          match$1[0],
                                          /* Node */[
                                            /* Empty */0,
                                            match$2[0],
                                            /* Empty */0,
                                            1
                                          ],
                                          2
                                        ],
                                        match$2[1]
                                      ];
                              } else {
                                exit = 1;
                              }
                            } else {
                              exit = 1;
                            }
                          } else {
                            exit = 1;
                          }
                          break;
                      
                    }
                  }
                  if (exit === 1) {
                    var nl = n / 2 | 0;
                    var match$3 = sub(nl, l);
                    var l$1 = match$3[1];
                    if (l$1) {
                      var match$4 = sub((n - nl | 0) - 1 | 0, l$1[1]);
                      return /* tuple */[
                              create(match$3[0], l$1[0], match$4[0]),
                              match$4[1]
                            ];
                    } else {
                      throw [
                            assert_failure,
                            [
                              "set.ml",
                              372,
                              18
                            ]
                          ];
                    }
                  }
                  
                };
                return sub(length(l$1), l$1)[0];
              } else {
                return add(match$3[0], add(x3, add(x2, add(x1, singleton(x0)))));
              }
            } else {
              return add(x3, add(x2, add(x1, singleton(x0))));
            }
          } else {
            return add(x2, add(x1, singleton(x0)));
          }
        } else {
          return add(x1, singleton(x0));
        }
      } else {
        return singleton(x0);
      }
    } else {
      return /* Empty */0;
    }
  };
  return [
          /* Empty */0,
          is_empty,
          mem$$1,
          add,
          singleton,
          remove,
          union,
          inter,
          diff,
          compare,
          equal,
          subset,
          iter$$1,
          fold,
          for_all$$1,
          exists$$1,
          filter$$1,
          partition$$1,
          cardinal,
          elements,
          min_elt,
          max_elt,
          min_elt,
          split$$1,
          find$$1,
          of_list
        ];
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function numberOfLive(neighbours) {
  return length(filter(function (param) {
                    return +(/* Alive */0 === param);
                  })(neighbours));
}

function underPopulationRule(cell, neighbours) {
  if (cell !== 0 || numberOfLive(neighbours) >= 2) {
    return /* Same */2;
  } else {
    return /* Dies */0;
  }
}

function livesOnRule(cell, neighbours) {
  if (cell !== 0) {
    return /* Same */2;
  } else {
    var numberOfLiveNeighbours = numberOfLive(neighbours);
    if (numberOfLiveNeighbours === 2 || numberOfLiveNeighbours === 3) {
      return /* Same */2;
    } else {
      return /* Dies */0;
    }
  }
}

function overPopulationRule(cell, neighbours) {
  if (cell !== 0 || numberOfLive(neighbours) <= 3) {
    return /* Same */2;
  } else {
    return /* Dies */0;
  }
}

function reproductionRule(cell, neighbours) {
  if (cell !== 0 && numberOfLive(neighbours) === 3) {
    return /* Revives */1;
  } else {
    return /* Same */2;
  }
}

function reduceLifeCycle(cell, neighbours) {
  var actions_000 = underPopulationRule(cell, neighbours);
  var actions_001 = /* :: */[
    livesOnRule(cell, neighbours),
    /* :: */[
      overPopulationRule(cell, neighbours),
      /* :: */[
        reproductionRule(cell, neighbours),
        /* [] */0
      ]
    ]
  ];
  var actions = /* :: */[
    actions_000,
    actions_001
  ];
  var reducedLifeCycle = head(filter(function (param) {
              return caml_notequal(/* Same */2, param);
            })(actions));
  return withDefault(/* Same */2, reducedLifeCycle);
}

function applyRules$1(cell, neighbours) {
  var action = reduceLifeCycle(cell, neighbours);
  switch (action) {
    case 0 : 
        return /* Dead */1;
    case 1 : 
        return /* Alive */0;
    case 2 : 
        return cell;
    
  }
}

var applyRulesTest_000 = /* tuple */[
  +(applyRules$1(/* Alive */0, /* :: */[
          /* Dead */1,
          /* [] */0
        ]) === /* Dead */1),
  "Underpopulation"
];

var applyRulesTest_001 = /* :: */[
  /* tuple */[
    +(applyRules$1(/* Alive */0, /* :: */[
            /* Alive */0,
            /* :: */[
              /* Alive */0,
              /* :: */[
                /* Dead */1,
                /* [] */0
              ]
            ]
          ]) === /* Alive */0),
    "Lives on with 2"
  ],
  /* :: */[
    /* tuple */[
      +(applyRules$1(/* Alive */0, /* :: */[
              /* Alive */0,
              /* :: */[
                /* Alive */0,
                /* :: */[
                  /* Alive */0,
                  /* :: */[
                    /* Alive */0,
                    /* [] */0
                  ]
                ]
              ]
            ]) === /* Dead */1),
      "Overpopulation"
    ],
    /* :: */[
      /* tuple */[
        +(applyRules$1(/* Dead */1, /* :: */[
                /* Alive */0,
                /* :: */[
                  /* Alive */0,
                  /* :: */[
                    /* Alive */0,
                    /* [] */0
                  ]
                ]
              ]) === /* Alive */0),
        "reproduction"
      ],
      /* :: */[
        /* tuple */[
          +(applyRules$1(/* Dead */1, /* :: */[
                  /* Dead */1,
                  /* :: */[
                    /* Dead */1,
                    /* :: */[
                      /* Dead */1,
                      /* :: */[
                        /* Alive */0,
                        /* :: */[
                          /* Alive */0,
                          /* :: */[
                            /* Alive */0,
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]) === /* Alive */0),
          "reproduction"
        ],
        /* [] */0
      ]
    ]
  ]
];


/* applyRulesTest Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function isNeighbour(param, param$1) {
  var y2 = param$1[1];
  var x2 = param$1[0];
  var y1 = param[1];
  var x1 = param[0];
  if (abs(x1 - x2 | 0) <= 1 && abs(y1 - y2 | 0) <= 1) {
    return caml_notequal(/* tuple */[
                x1,
                y1
              ], /* tuple */[
                x2,
                y2
              ]);
  } else {
    return /* false */0;
  }
}

function findNeighbours(universe, position) {
  return map(function (prim) {
              return prim[1];
            }, filter(function (param) {
                    return isNeighbour(position, param[0]);
                  })(universe));
}

function evolveCell(universe, param) {
  var position = param[0];
  var neighbours = findNeighbours(universe, position);
  var evolvedCell = applyRules$1(param[1], neighbours);
  return /* tuple */[
          position,
          evolvedCell
        ];
}

function findMaybeCell(universe, param) {
  var y = param[1];
  var x = param[0];
  var inBounds = function (param) {
    var match = param[0];
    if (match[0] === x) {
      return +(match[1] === y);
    } else {
      return /* false */0;
    }
  };
  return head(filter(inBounds)(universe));
}

function findCell(universe, position) {
  var match = findMaybeCell(universe, position);
  if (match) {
    return /* tuple */[
            position,
            match[0][1]
          ];
  } else {
    return /* tuple */[
            position,
            /* Dead */1
          ];
  }
}

var compare$4 = caml_compare;

var PosSet = Make(/* module */[/* compare */compare$4]);

function dedupe(universe) {
  var positions = map(function (prim) {
        return prim[0];
      }, universe);
  var dedupedPositions = _1(PosSet[/* elements */19], _1(PosSet[/* of_list */25], positions));
  return map(function (param) {
              return findCell(universe, param);
            }, dedupedPositions);
}

function evolve$1(universe) {
  var otherPositions = function (param) {
    var y = param[1];
    var x = param[0];
    return /* :: */[
            /* tuple */[
              x - 1 | 0,
              y - 1 | 0
            ],
            /* :: */[
              /* tuple */[
                x,
                y - 1 | 0
              ],
              /* :: */[
                /* tuple */[
                  x + 1 | 0,
                  y - 1 | 0
                ],
                /* :: */[
                  /* tuple */[
                    x - 1 | 0,
                    y
                  ],
                  /* :: */[
                    /* tuple */[
                      x + 1 | 0,
                      y
                    ],
                    /* :: */[
                      /* tuple */[
                        x - 1 | 0,
                        y + 1 | 0
                      ],
                      /* :: */[
                        /* tuple */[
                          x,
                          y + 1 | 0
                        ],
                        /* :: */[
                          /* tuple */[
                            x + 1 | 0,
                            y + 1 | 0
                          ],
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ];
  };
  var cells = function (position) {
    return map(function (param) {
                return findCell(universe, param);
              }, otherPositions(position));
  };
  var currentUniverse = dedupe(concat(map(cells, map(function (prim) {
                    return prim[0];
                  }, universe))));
  return filter(function (param) {
                return +(/* Alive */0 === param[1]);
              })(map(function (param) {
                  return evolveCell(universe, param);
                }, currentUniverse));
}


/* PosSet Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function update(model, msg$$1) {
  var xMin = model[/* viewPort */2][/* xMin */0];
  var yMin = model[/* viewPort */2][/* yMin */1];
  var xMax = model[/* viewPort */2][/* xMax */2];
  var yMax = model[/* viewPort */2][/* yMax */3];
  var cellSize = model[/* viewPort */2][/* cellSize */4];
  var newModel;
  if (typeof msg$$1 === "number") {
    switch (msg$$1) {
      case 0 : 
          newModel = model;
          break;
      case 1 : 
          newModel = /* record */[
            /* universe */evolve$1(model[/* universe */0]),
            /* examples */model[/* examples */1],
            /* viewPort */model[/* viewPort */2],
            /* running */model[/* running */3],
            /* pixi */model[/* pixi */4]
          ];
          break;
      case 2 : 
          newModel = /* record */[
            /* universe */model[/* universe */0],
            /* examples */model[/* examples */1],
            /* viewPort */model[/* viewPort */2],
            /* running */1 - model[/* running */3],
            /* pixi */model[/* pixi */4]
          ];
          break;
      case 3 : 
          newModel = /* record */[
            /* universe */model[/* universe */0],
            /* examples */model[/* examples */1],
            /* viewPort */newViewPort(xMin - 1 | 0, yMin - 1 | 0, xMax + 1 | 0, yMax + 1 | 0, cellSize - 2 | 0),
            /* running */model[/* running */3],
            /* pixi */model[/* pixi */4]
          ];
          break;
      case 4 : 
          newModel = /* record */[
            /* universe */model[/* universe */0],
            /* examples */model[/* examples */1],
            /* viewPort */newViewPort(xMin + 1 | 0, yMin + 1 | 0, xMax - 1 | 0, yMax - 1 | 0, cellSize + 2 | 0),
            /* running */model[/* running */3],
            /* pixi */model[/* pixi */4]
          ];
          break;
      case 5 : 
          newModel = /* record */[
            /* universe */model[/* universe */0],
            /* examples */model[/* examples */1],
            /* viewPort */newViewPort(xMin - 1 | 0, yMin, xMax - 1 | 0, yMax, cellSize),
            /* running */model[/* running */3],
            /* pixi */model[/* pixi */4]
          ];
          break;
      case 6 : 
          newModel = /* record */[
            /* universe */model[/* universe */0],
            /* examples */model[/* examples */1],
            /* viewPort */newViewPort(xMin + 1 | 0, yMin, xMax + 1 | 0, yMax, cellSize),
            /* running */model[/* running */3],
            /* pixi */model[/* pixi */4]
          ];
          break;
      case 7 : 
          newModel = /* record */[
            /* universe */model[/* universe */0],
            /* examples */model[/* examples */1],
            /* viewPort */newViewPort(xMin, yMin + 1 | 0, xMax, yMax + 1 | 0, cellSize),
            /* running */model[/* running */3],
            /* pixi */model[/* pixi */4]
          ];
          break;
      case 8 : 
          newModel = /* record */[
            /* universe */model[/* universe */0],
            /* examples */model[/* examples */1],
            /* viewPort */newViewPort(xMin, yMin - 1 | 0, xMax, yMax - 1 | 0, cellSize),
            /* running */model[/* running */3],
            /* pixi */model[/* pixi */4]
          ];
          break;
      
    }
  } else {
    var string = msg$$1[0];
    var newUniverse = withDefault(/* tuple */[
            "",
            /* [] */0
          ], head(filter(function (i) {
                      return +(i[0] === string);
                    })(model[/* examples */1])))[1];
    newModel = /* record */[
      /* universe */newUniverse,
      /* examples */model[/* examples */1],
      /* viewPort */model[/* viewPort */2],
      /* running */model[/* running */3],
      /* pixi */model[/* pixi */4]
    ];
  }
  return /* tuple */[
          newModel,
          none
        ];
}


/* GameOfLife Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function polyfills() {
  ((
  // remove polyfill
  (function() {
    if (!('remove' in Element.prototype)) {
      Element.prototype.remove = function() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }
  }())
  ));
  ((
  // requestAnimationFrame polyfill
  (function() {
      var lastTime = 0;
      var vendors = ['ms', 'moz', 'webkit', 'o'];
      for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
          window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
          window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                     || window[vendors[x]+'CancelRequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame)
          window.requestAnimationFrame = function(callback, element) {
              var currTime = new Date().getTime();
              var timeToCall = Math.max(0, 16 - (currTime - lastTime));
              var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
              lastTime = currTime + timeToCall;
              return id;
          };

      if (!window.cancelAnimationFrame)
          window.cancelAnimationFrame = function(id) {
              clearTimeout(id);
          };
  }())
  ));
  return /* () */0;
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function registration(key, enableCall) {
  return /* Registration */__(1, [
            key,
            function (callbacks) {
              return _1(enableCall, callbacks[0]);
            },
            [/* None */0]
          ]);
}

function run$1(oldCallbacks, newCallbacks, oldSub, newSub) {
  var enable = function (_callbacks, _param) {
    while(true) {
      var param = _param;
      var callbacks = _callbacks;
      if (typeof param === "number") {
        return /* () */0;
      } else {
        switch (param.tag | 0) {
          case 0 : 
              var subs = param[0];
              if (subs) {
                return iter((function(callbacks){
                          return function (param) {
                            return enable(callbacks, param);
                          }
                          }(callbacks)), subs);
              } else {
                return /* () */0;
              }
          case 1 : 
              param[2][0] = /* Some */[_1(param[1], callbacks)];
              return /* () */0;
          case 2 : 
              var subCallbacks = _1(param[0], callbacks);
              _param = param[1];
              _callbacks = subCallbacks;
              continue ;
              
        }
      }
    }
  };
  var disable = function (_callbacks, _param) {
    while(true) {
      var param = _param;
      var callbacks = _callbacks;
      if (typeof param === "number") {
        return /* () */0;
      } else {
        switch (param.tag | 0) {
          case 0 : 
              var subs = param[0];
              if (subs) {
                return iter((function(callbacks){
                          return function (param) {
                            return disable(callbacks, param);
                          }
                          }(callbacks)), subs);
              } else {
                return /* () */0;
              }
          case 1 : 
              var diCB = param[2];
              var match = diCB[0];
              if (match) {
                diCB[0] = /* None */0;
                return _1(match[0], /* () */0);
              } else {
                return /* () */0;
              }
          case 2 : 
              var subCallbacks = _1(param[0], callbacks);
              _param = param[1];
              _callbacks = subCallbacks;
              continue ;
              
        }
      }
    }
  };
  var exit = 0;
  if (typeof oldSub === "number") {
    if (typeof newSub === "number") {
      return newSub;
    } else {
      exit = 1;
    }
  } else {
    switch (oldSub.tag | 0) {
      case 0 : 
          if (typeof newSub === "number") {
            exit = 1;
          } else if (newSub.tag) {
            exit = 1;
          } else {
            var aux = function (_oldList, _newList) {
              while(true) {
                var newList = _newList;
                var oldList = _oldList;
                if (oldList) {
                  var oldRest = oldList[1];
                  var oldSubSub = oldList[0];
                  if (newList) {
                    run$1(oldCallbacks, newCallbacks, oldSubSub, newList[0]);
                    _newList = newList[1];
                    _oldList = oldRest;
                    continue ;
                    
                  } else {
                    disable(oldCallbacks, oldSubSub);
                    _newList = /* [] */0;
                    _oldList = oldRest;
                    continue ;
                    
                  }
                } else if (newList) {
                  enable(newCallbacks, newList[0]);
                  _newList = newList[1];
                  _oldList = /* [] */0;
                  continue ;
                  
                } else {
                  return /* () */0;
                }
              }
            };
            aux(oldSub[0], newSub[0]);
            return newSub;
          }
          break;
      case 1 : 
          if (typeof newSub === "number") {
            exit = 1;
          } else if (newSub.tag === 1) {
            if (oldSub[0] === newSub[0]) {
              newSub[2][0] = oldSub[2][0];
              return newSub;
            } else {
              exit = 1;
            }
          } else {
            exit = 1;
          }
          break;
      case 2 : 
          if (typeof newSub === "number") {
            exit = 1;
          } else if (newSub.tag === 2) {
            var olderCallbacks = _1(oldSub[0], oldCallbacks);
            var newerCallbacks = _1(newSub[0], newCallbacks);
            run$1(olderCallbacks, newerCallbacks, oldSub[1], newSub[1]);
            return newSub;
          } else {
            exit = 1;
          }
          break;
      
    }
  }
  if (exit === 1) {
    disable(oldCallbacks, oldSub);
    enable(newCallbacks, newSub);
    return newSub;
  }
  
}

var none$1 = /* NoSub */0;


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function programStateWrapper(initModel, pump, shutdown) {
  var model = [initModel];
  var callbacks = [/* record */[/* enqueue */function () {
        console.log("INVALID enqueue CALL!");
        return /* () */0;
      }]];
  var pumperInterface = _1(pump, callbacks);
  var pending = [/* None */0];
  var handler = function (msg$$1) {
    var match = pending[0];
    if (match) {
      pending[0] = /* Some */[/* :: */[
          msg$$1,
          match[0]
        ]];
      return /* () */0;
    } else {
      pending[0] = /* Some */[/* [] */0];
      var newModel = _2(pumperInterface[/* handleMsg */1], model[0], msg$$1);
      model[0] = newModel;
      var match$1 = pending[0];
      if (match$1) {
        var msgs = match$1[0];
        if (msgs) {
          pending[0] = /* None */0;
          return iter(handler, rev(msgs));
        } else {
          pending[0] = /* None */0;
          return /* () */0;
        }
      } else {
        throw [
              failure,
              "INVALID message queue state, should never be None during message processing!"
            ];
      }
    }
  };
  var finalizedCBs = /* record */[/* enqueue */handler];
  callbacks[0] = finalizedCBs;
  var pi_requestShutdown = function () {
    callbacks[0] = /* record */[/* enqueue */function () {
        console.log("INVALID message enqueued when shut down");
        return /* () */0;
      }];
    var cmd = _1(shutdown, model[0]);
    _1(pumperInterface[/* shutdown */2], cmd);
    return /* () */0;
  };
  _1(pumperInterface[/* startup */0], /* () */0);
  return {
          pushMsg: handler,
          shutdown: pi_requestShutdown
        };
}

function programLoop(update, view, subscriptions, initModel, initCmd, param) {
  if (param) {
    var parentNode = param[0];
    return function (callbacks) {
      var priorRenderedVdom = [/* [] */0];
      var latestModel = [initModel];
      var nextFrameID = [/* None */0];
      var doRender = function () {
        var match = nextFrameID[0];
        if (match) {
          var newVdom_000 = _1(view, latestModel[0]);
          var newVdom = /* :: */[
            newVdom_000,
            /* [] */0
          ];
          var justRenderedVdom = patchVNodesIntoElement(callbacks, parentNode, priorRenderedVdom[0], newVdom);
          priorRenderedVdom[0] = justRenderedVdom;
          nextFrameID[0] = /* None */0;
          return /* () */0;
        } else {
          return /* () */0;
        }
      };
      var scheduleRender = function () {
        var match = nextFrameID[0];
        if (match) {
          return /* () */0;
        } else {
          nextFrameID[0] = /* Some */[-1];
          return doRender(16);
        }
      };
      var clearPnode = function () {
        while(parentNode.childNodes.length > 0) {
          var match = parentNode.firstChild;
          if (match !== null) {
            parentNode.removeChild(match);
          }
          
        }
        return /* () */0;
      };
      var oldSub = [/* NoSub */0];
      var handleSubscriptionChange = function (model) {
        var newSub = _1(subscriptions, model);
        oldSub[0] = run$1(callbacks, callbacks, oldSub[0], newSub);
        return /* () */0;
      };
      var handlerStartup = function () {
        clearPnode(/* () */0);
        run(callbacks, initCmd);
        handleSubscriptionChange(latestModel[0]);
        nextFrameID[0] = /* Some */[-1];
        doRender(16);
        return /* () */0;
      };
      var handler = function (model, msg$$1) {
        var match = _2(update, model, msg$$1);
        var newModel = match[0];
        latestModel[0] = newModel;
        run(callbacks, match[1]);
        scheduleRender(/* () */0);
        handleSubscriptionChange(newModel);
        return newModel;
      };
      var handlerShutdown = function (cmd) {
        nextFrameID[0] = /* None */0;
        run(callbacks, cmd);
        oldSub[0] = run$1(callbacks, callbacks, oldSub[0], /* NoSub */0);
        priorRenderedVdom[0] = /* [] */0;
        clearPnode(/* () */0);
        return /* () */0;
      };
      return /* record */[
              /* startup */handlerStartup,
              /* handleMsg */handler,
              /* shutdown */handlerShutdown
            ];
    };
  } else {
    return function (callbacks) {
      var oldSub = [/* NoSub */0];
      var handleSubscriptionChange = function (model) {
        var newSub = _1(subscriptions, model);
        oldSub[0] = run$1(callbacks, callbacks, oldSub[0], newSub);
        return /* () */0;
      };
      return /* record */[
              /* startup */function () {
                run(callbacks, initCmd);
                handleSubscriptionChange(initModel);
                return /* () */0;
              },
              /* handleMsg */function (model, msg$$1) {
                var match = _2(update, model, msg$$1);
                var newModel = match[0];
                run(callbacks, match[1]);
                handleSubscriptionChange(newModel);
                return newModel;
              },
              /* shutdown */function (cmd) {
                run(callbacks, cmd);
                oldSub[0] = run$1(callbacks, callbacks, oldSub[0], /* NoSub */0);
                return /* () */0;
              }
            ];
    };
  }
}

function program(param, pnode, flags) {
  polyfills(/* () */0);
  var match = _1(param[/* init */0], flags);
  var initModel = match[0];
  var opnode = null_undefined_to_opt(pnode);
  var pumpInterface = programLoop(param[/* update */1], param[/* view */2], param[/* subscriptions */3], initModel, match[1], opnode);
  return programStateWrapper(initModel, pumpInterface, param[/* shutdown */4]);
}

function standardProgram(param, pnode, args) {
  return program(/* record */[
              /* init */param[/* init */0],
              /* update */param[/* update */1],
              /* view */param[/* view */2],
              /* subscriptions */param[/* subscriptions */3],
              /* shutdown */function () {
                return /* NoCmd */0;
              }
            ], pnode, args);
}


/* No side effect */

var $$Error = create("Js_exn.Error");

function internalToOCamlException(e) {
  if (isCamlExceptionOrOpenVariant(e)) {
    return e;
  } else {
    return [
            $$Error,
            e
          ];
  }
}


/* No side effect */

function to_list(a) {
  var _i = a.length - 1 | 0;
  var _res = /* [] */0;
  while(true) {
    var res = _res;
    var i = _i;
    if (i < 0) {
      return res;
    } else {
      _res = /* :: */[
        a[i],
        res
      ];
      _i = i - 1 | 0;
      continue ;
      
    }
  }
}

var Bottom = create("Array.Bottom");


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function toPosition(x, y, $$char) {
  if ($$char !== 79) {
    return /* tuple */[
            /* tuple */[
              x,
              y
            ],
            /* Dead */1
          ];
  } else {
    return /* tuple */[
            /* tuple */[
              x,
              y
            ],
            /* Alive */0
          ];
  }
}

function explode(s) {
  var _i = s.length - 1 | 0;
  var _l = /* [] */0;
  while(true) {
    var l = _l;
    var i = _i;
    if (i < 0) {
      return l;
    } else {
      _l = /* :: */[
        get(s, i),
        l
      ];
      _i = i - 1 | 0;
      continue ;
      
    }
  }
}

function lineToUniserse(x, input) {
  var chars = explode(input);
  return mapi$1(function (param, param$1) {
              return toPosition(x, param, param$1);
            }, chars);
}

function toUniverse(str) {
  var lines = to_list(str.split("\n"));
  return concat(mapi$1(lineToUniserse, lines));
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function create$2(positions) {
  var positionedCell = function (position) {
    return /* tuple */[
            position,
            /* Alive */0
          ];
  };
  return map(positionedCell, positions);
}

var blinker = create$2(/* :: */[
      /* tuple */[
        1,
        1
      ],
      /* :: */[
        /* tuple */[
          2,
          1
        ],
        /* :: */[
          /* tuple */[
            3,
            1
          ],
          /* [] */0
        ]
      ]
    ]);

var spaceShip = create$2(/* :: */[
      /* tuple */[
        2,
        0
      ],
      /* :: */[
        /* tuple */[
          0,
          1
        ],
        /* :: */[
          /* tuple */[
            2,
            1
          ],
          /* :: */[
            /* tuple */[
              1,
              2
            ],
            /* :: */[
              /* tuple */[
                2,
                2
              ],
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var pulsar = create$2(/* :: */[
      /* tuple */[
        4,
        2
      ],
      /* :: */[
        /* tuple */[
          5,
          2
        ],
        /* :: */[
          /* tuple */[
            6,
            2
          ],
          /* :: */[
            /* tuple */[
              10,
              2
            ],
            /* :: */[
              /* tuple */[
                11,
                2
              ],
              /* :: */[
                /* tuple */[
                  12,
                  2
                ],
                /* :: */[
                  /* tuple */[
                    2,
                    4
                  ],
                  /* :: */[
                    /* tuple */[
                      7,
                      4
                    ],
                    /* :: */[
                      /* tuple */[
                        9,
                        4
                      ],
                      /* :: */[
                        /* tuple */[
                          14,
                          4
                        ],
                        /* :: */[
                          /* tuple */[
                            2,
                            5
                          ],
                          /* :: */[
                            /* tuple */[
                              7,
                              5
                            ],
                            /* :: */[
                              /* tuple */[
                                9,
                                5
                              ],
                              /* :: */[
                                /* tuple */[
                                  14,
                                  5
                                ],
                                /* :: */[
                                  /* tuple */[
                                    2,
                                    6
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      7,
                                      6
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        9,
                                        6
                                      ],
                                      /* :: */[
                                        /* tuple */[
                                          14,
                                          6
                                        ],
                                        /* :: */[
                                          /* tuple */[
                                            4,
                                            7
                                          ],
                                          /* :: */[
                                            /* tuple */[
                                              5,
                                              7
                                            ],
                                            /* :: */[
                                              /* tuple */[
                                                6,
                                                7
                                              ],
                                              /* :: */[
                                                /* tuple */[
                                                  10,
                                                  7
                                                ],
                                                /* :: */[
                                                  /* tuple */[
                                                    11,
                                                    7
                                                  ],
                                                  /* :: */[
                                                    /* tuple */[
                                                      12,
                                                      7
                                                    ],
                                                    /* :: */[
                                                      /* tuple */[
                                                        4,
                                                        9
                                                      ],
                                                      /* :: */[
                                                        /* tuple */[
                                                          5,
                                                          9
                                                        ],
                                                        /* :: */[
                                                          /* tuple */[
                                                            6,
                                                            9
                                                          ],
                                                          /* :: */[
                                                            /* tuple */[
                                                              10,
                                                              9
                                                            ],
                                                            /* :: */[
                                                              /* tuple */[
                                                                11,
                                                                9
                                                              ],
                                                              /* :: */[
                                                                /* tuple */[
                                                                  12,
                                                                  9
                                                                ],
                                                                /* :: */[
                                                                  /* tuple */[
                                                                    2,
                                                                    10
                                                                  ],
                                                                  /* :: */[
                                                                    /* tuple */[
                                                                      7,
                                                                      10
                                                                    ],
                                                                    /* :: */[
                                                                      /* tuple */[
                                                                        9,
                                                                        10
                                                                      ],
                                                                      /* :: */[
                                                                        /* tuple */[
                                                                          14,
                                                                          10
                                                                        ],
                                                                        /* :: */[
                                                                          /* tuple */[
                                                                            2,
                                                                            11
                                                                          ],
                                                                          /* :: */[
                                                                            /* tuple */[
                                                                              7,
                                                                              11
                                                                            ],
                                                                            /* :: */[
                                                                              /* tuple */[
                                                                                9,
                                                                                11
                                                                              ],
                                                                              /* :: */[
                                                                                /* tuple */[
                                                                                  14,
                                                                                  11
                                                                                ],
                                                                                /* :: */[
                                                                                  /* tuple */[
                                                                                    2,
                                                                                    12
                                                                                  ],
                                                                                  /* :: */[
                                                                                    /* tuple */[
                                                                                      7,
                                                                                      12
                                                                                    ],
                                                                                    /* :: */[
                                                                                      /* tuple */[
                                                                                        9,
                                                                                        12
                                                                                      ],
                                                                                      /* :: */[
                                                                                        /* tuple */[
                                                                                          14,
                                                                                          12
                                                                                        ],
                                                                                        /* :: */[
                                                                                          /* tuple */[
                                                                                            4,
                                                                                            14
                                                                                          ],
                                                                                          /* :: */[
                                                                                            /* tuple */[
                                                                                              5,
                                                                                              14
                                                                                            ],
                                                                                            /* :: */[
                                                                                              /* tuple */[
                                                                                                6,
                                                                                                14
                                                                                              ],
                                                                                              /* :: */[
                                                                                                /* tuple */[
                                                                                                  10,
                                                                                                  14
                                                                                                ],
                                                                                                /* :: */[
                                                                                                  /* tuple */[
                                                                                                    11,
                                                                                                    14
                                                                                                  ],
                                                                                                  /* :: */[
                                                                                                    /* tuple */[
                                                                                                      12,
                                                                                                      14
                                                                                                    ],
                                                                                                    /* [] */0
                                                                                                  ]
                                                                                                ]
                                                                                              ]
                                                                                            ]
                                                                                          ]
                                                                                        ]
                                                                                      ]
                                                                                    ]
                                                                                  ]
                                                                                ]
                                                                              ]
                                                                            ]
                                                                          ]
                                                                        ]
                                                                      ]
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]
                                                          ]
                                                        ]
                                                      ]
                                                    ]
                                                  ]
                                                ]
                                              ]
                                            ]
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var glider = toUniverse("\n........................O...........\n......................O.O...........\n............OO......OO............OO\n...........O...O....OO............OO\nOO........O.....O...OO..............\nOO........O...O.OO....O.O...........\n..........O.....O.......O...........\n...........O...O....................\n............OO......................\n");

var bakersDozen = toUniverse("\nOO.........OO\nOOOO.O.....OO\nO.O..OOO\n...........O\n....OO....O.O\n....O.....O..O....O\n...........OO....OO\n\n...............OOO..O.O\n..........OO.....O.OOOO\n..........OO.........OO\n");

var thunderbird = toUniverse("\nOOO\n\n.O\n.O\n.O\n");

var all_000 = /* tuple */[
  "blinker",
  blinker
];

var all_001 = /* :: */[
  /* tuple */[
    "spaceShip",
    spaceShip
  ],
  /* :: */[
    /* tuple */[
      "pulsar",
      pulsar
    ],
    /* :: */[
      /* tuple */[
        "glider",
        glider
      ],
      /* :: */[
        /* tuple */[
          "bakersDozen",
          bakersDozen
        ],
        /* :: */[
          /* tuple */[
            "thunderbird",
            thunderbird
          ],
          /* [] */0
        ]
      ]
    ]
  ]
];

var all = /* :: */[
  all_000,
  all_001
];


/* blinker Not a pure module */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function $$setInterval(cb, msTime) {
  return window.setInterval(cb, msTime);
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function every(interval, tagger) {
  var key = string_of_float(interval);
  var enableCall = function (callbacks) {
    var id = $$setInterval(function () {
          return _1(callbacks[/* enqueue */0], _1(tagger, Date.now()));
        }, interval);
    return function () {
      return window.clearTimeout(id);
    };
  };
  return registration(key, enableCall);
}

var millisecond = 1.0;


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
function init$$1(universe) {
  return /* record */[
          /* universe */universe,
          /* examples */all,
          /* viewPort */newViewPort(0, 0, 10, 10, 35),
          /* running : true */1,
          /* pixi */init$3
        ];
}

function subscriptions(model) {
  if (model[/* running */3]) {
    return every(400 * millisecond, function () {
                return /* Evolve */1;
              });
  } else {
    return none$1;
  }
}

function partial_arg_000() {
  return /* tuple */[
          init$$1(pulsar),
          none
        ];
}

var partial_arg = /* record */[
  partial_arg_000,
  /* update */update,
  /* view */view,
  /* subscriptions */subscriptions
];

function main(param, param$1) {
  return standardProgram(partial_arg, param, param$1);
}


/* View Not a pure module */

exports.init = init$$1;
exports.subscriptions = subscriptions;
exports.main = main;

}((this.bstest = this.bstest || {})));
