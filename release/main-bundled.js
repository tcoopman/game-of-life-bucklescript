var gol = (function (exports) {
  'use strict';

  var out_of_memory = /* tuple */[
    "Out_of_memory",
    0
  ];

  var sys_error = /* tuple */[
    "Sys_error",
    -1
  ];

  var failure = /* tuple */[
    "Failure",
    -2
  ];

  var invalid_argument = /* tuple */[
    "Invalid_argument",
    -3
  ];

  var end_of_file = /* tuple */[
    "End_of_file",
    -4
  ];

  var division_by_zero = /* tuple */[
    "Division_by_zero",
    -5
  ];

  var not_found = /* tuple */[
    "Not_found",
    -6
  ];

  var match_failure = /* tuple */[
    "Match_failure",
    -7
  ];

  var stack_overflow = /* tuple */[
    "Stack_overflow",
    -8
  ];

  var sys_blocked_io = /* tuple */[
    "Sys_blocked_io",
    -9
  ];

  var assert_failure = /* tuple */[
    "Assert_failure",
    -10
  ];

  var undefined_recursive_module = /* tuple */[
    "Undefined_recursive_module",
    -11
  ];

  out_of_memory.tag = 248;

  sys_error.tag = 248;

  failure.tag = 248;

  invalid_argument.tag = 248;

  end_of_file.tag = 248;

  division_by_zero.tag = 248;

  not_found.tag = 248;

  match_failure.tag = 248;

  stack_overflow.tag = 248;

  sys_blocked_io.tag = 248;

  assert_failure.tag = 248;

  undefined_recursive_module.tag = 248;
  /*  Not a pure module */

  function caml_array_sub(x, offset, len) {
    var result = new Array(len);
    var j = 0;
    var i = offset;
    while(j < len) {
      result[j] = x[i];
      j = j + 1 | 0;
      i = i + 1 | 0;
    }  return result;
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

  function caml_make_vect(len, init) {
    var b = new Array(len);
    for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      b[i] = init;
    }
    return b;
  }
  /* No side effect */

  function app(_f, _args) {
    while(true) {
      var args = _args;
      var f = _f;
      var arity = f.length;
      var arity$1 = arity === 0 ? 1 : arity;
      var len = args.length;
      var d = arity$1 - len | 0;
      if (d === 0) {
        return f.apply(null, args);
      } else if (d < 0) {
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
    }}

  function curry_1(o, a0, arity) {
    if (arity > 7 || arity < 0) {
      return app(o, /* array */[a0]);
    } else {
      switch (arity) {
        case 0 : 
        case 1 : 
            return o(a0);
        case 2 : 
            return (function (param) {
                return o(a0, param);
              });
        case 3 : 
            return (function (param, param$1) {
                return o(a0, param, param$1);
              });
        case 4 : 
            return (function (param, param$1, param$2) {
                return o(a0, param, param$1, param$2);
              });
        case 5 : 
            return (function (param, param$1, param$2, param$3) {
                return o(a0, param, param$1, param$2, param$3);
              });
        case 6 : 
            return (function (param, param$1, param$2, param$3, param$4) {
                return o(a0, param, param$1, param$2, param$3, param$4);
              });
        case 7 : 
            return (function (param, param$1, param$2, param$3, param$4, param$5) {
                return o(a0, param, param$1, param$2, param$3, param$4, param$5);
              });
        
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
            return (function (param) {
                return o(a0, a1, param);
              });
        case 4 : 
            return (function (param, param$1) {
                return o(a0, a1, param, param$1);
              });
        case 5 : 
            return (function (param, param$1, param$2) {
                return o(a0, a1, param, param$1, param$2);
              });
        case 6 : 
            return (function (param, param$1, param$2, param$3) {
                return o(a0, a1, param, param$1, param$2, param$3);
              });
        case 7 : 
            return (function (param, param$1, param$2, param$3, param$4) {
                return o(a0, a1, param, param$1, param$2, param$3, param$4);
              });
        
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
            return (function (param) {
                return o(a0, a1, a2, param);
              });
        case 5 : 
            return (function (param, param$1) {
                return o(a0, a1, a2, param, param$1);
              });
        case 6 : 
            return (function (param, param$1, param$2) {
                return o(a0, a1, a2, param, param$1, param$2);
              });
        case 7 : 
            return (function (param, param$1, param$2, param$3) {
                return o(a0, a1, a2, param, param$1, param$2, param$3);
              });
        
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

  function curry_4(o, a0, a1, a2, a3, arity) {
    var exit = 0;
    if (arity > 7 || arity < 0) {
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3
                ]);
    } else {
      switch (arity) {
        case 0 : 
        case 1 : 
            exit = 1;
            break;
        case 2 : 
            return app(o(a0, a1), /* array */[
                        a2,
                        a3
                      ]);
        case 3 : 
            return app(o(a0, a1, a2), /* array */[a3]);
        case 4 : 
            return o(a0, a1, a2, a3);
        case 5 : 
            return (function (param) {
                return o(a0, a1, a2, a3, param);
              });
        case 6 : 
            return (function (param, param$1) {
                return o(a0, a1, a2, a3, param, param$1);
              });
        case 7 : 
            return (function (param, param$1, param$2) {
                return o(a0, a1, a2, a3, param, param$1, param$2);
              });
        
      }
    }
    if (exit === 1) {
      return app(o(a0), /* array */[
                  a1,
                  a2,
                  a3
                ]);
    }
    
  }

  function _4(o, a0, a1, a2, a3) {
    var arity = o.length;
    if (arity === 4) {
      return o(a0, a1, a2, a3);
    } else {
      return curry_4(o, a0, a1, a2, a3, arity);
    }
  }

  function curry_5(o, a0, a1, a2, a3, a4, arity) {
    var exit = 0;
    if (arity > 7 || arity < 0) {
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3,
                  a4
                ]);
    } else {
      switch (arity) {
        case 0 : 
        case 1 : 
            exit = 1;
            break;
        case 2 : 
            return app(o(a0, a1), /* array */[
                        a2,
                        a3,
                        a4
                      ]);
        case 3 : 
            return app(o(a0, a1, a2), /* array */[
                        a3,
                        a4
                      ]);
        case 4 : 
            return app(o(a0, a1, a2, a3), /* array */[a4]);
        case 5 : 
            return o(a0, a1, a2, a3, a4);
        case 6 : 
            return (function (param) {
                return o(a0, a1, a2, a3, a4, param);
              });
        case 7 : 
            return (function (param, param$1) {
                return o(a0, a1, a2, a3, a4, param, param$1);
              });
        
      }
    }
    if (exit === 1) {
      return app(o(a0), /* array */[
                  a1,
                  a2,
                  a3,
                  a4
                ]);
    }
    
  }

  function _5(o, a0, a1, a2, a3, a4) {
    var arity = o.length;
    if (arity === 5) {
      return o(a0, a1, a2, a3, a4);
    } else {
      return curry_5(o, a0, a1, a2, a3, a4, arity);
    }
  }

  function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
    var exit = 0;
    if (arity > 7 || arity < 0) {
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3,
                  a4,
                  a5
                ]);
    } else {
      switch (arity) {
        case 0 : 
        case 1 : 
            exit = 1;
            break;
        case 2 : 
            return app(o(a0, a1), /* array */[
                        a2,
                        a3,
                        a4,
                        a5
                      ]);
        case 3 : 
            return app(o(a0, a1, a2), /* array */[
                        a3,
                        a4,
                        a5
                      ]);
        case 4 : 
            return app(o(a0, a1, a2, a3), /* array */[
                        a4,
                        a5
                      ]);
        case 5 : 
            return app(o(a0, a1, a2, a3, a4), /* array */[a5]);
        case 6 : 
            return o(a0, a1, a2, a3, a4, a5);
        case 7 : 
            return (function (param) {
                return o(a0, a1, a2, a3, a4, a5, param);
              });
        
      }
    }
    if (exit === 1) {
      return app(o(a0), /* array */[
                  a1,
                  a2,
                  a3,
                  a4,
                  a5
                ]);
    }
    
  }

  function _6(o, a0, a1, a2, a3, a4, a5) {
    var arity = o.length;
    if (arity === 6) {
      return o(a0, a1, a2, a3, a4, a5);
    } else {
      return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
    }
  }

  function curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {
    var exit = 0;
    if (arity > 7 || arity < 0) {
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3,
                  a4,
                  a5,
                  a6
                ]);
    } else {
      switch (arity) {
        case 0 : 
        case 1 : 
            exit = 1;
            break;
        case 2 : 
            return app(o(a0, a1), /* array */[
                        a2,
                        a3,
                        a4,
                        a5,
                        a6
                      ]);
        case 3 : 
            return app(o(a0, a1, a2), /* array */[
                        a3,
                        a4,
                        a5,
                        a6
                      ]);
        case 4 : 
            return app(o(a0, a1, a2, a3), /* array */[
                        a4,
                        a5,
                        a6
                      ]);
        case 5 : 
            return app(o(a0, a1, a2, a3, a4), /* array */[
                        a5,
                        a6
                      ]);
        case 6 : 
            return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);
        case 7 : 
            return o(a0, a1, a2, a3, a4, a5, a6);
        
      }
    }
    if (exit === 1) {
      return app(o(a0), /* array */[
                  a1,
                  a2,
                  a3,
                  a4,
                  a5,
                  a6
                ]);
    }
    
  }

  function _7(o, a0, a1, a2, a3, a4, a5, a6) {
    var arity = o.length;
    if (arity === 7) {
      return o(a0, a1, a2, a3, a4, a5, a6);
    } else {
      return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);
    }
  }

  function curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
    var exit = 0;
    if (arity > 7 || arity < 0) {
      return app(o, /* array */[
                  a0,
                  a1,
                  a2,
                  a3,
                  a4,
                  a5,
                  a6,
                  a7
                ]);
    } else {
      switch (arity) {
        case 0 : 
        case 1 : 
            exit = 1;
            break;
        case 2 : 
            return app(o(a0, a1), /* array */[
                        a2,
                        a3,
                        a4,
                        a5,
                        a6,
                        a7
                      ]);
        case 3 : 
            return app(o(a0, a1, a2), /* array */[
                        a3,
                        a4,
                        a5,
                        a6,
                        a7
                      ]);
        case 4 : 
            return app(o(a0, a1, a2, a3), /* array */[
                        a4,
                        a5,
                        a6,
                        a7
                      ]);
        case 5 : 
            return app(o(a0, a1, a2, a3, a4), /* array */[
                        a5,
                        a6,
                        a7
                      ]);
        case 6 : 
            return app(o(a0, a1, a2, a3, a4, a5), /* array */[
                        a6,
                        a7
                      ]);
        case 7 : 
            return app(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);
        
      }
    }
    if (exit === 1) {
      return app(o(a0), /* array */[
                  a1,
                  a2,
                  a3,
                  a4,
                  a5,
                  a6,
                  a7
                ]);
    }
    
  }

  function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
    var arity = o.length;
    if (arity === 8) {
      return o(a0, a1, a2, a3, a4, a5, a6, a7);
    } else {
      return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
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

  function caml_bool_compare(x, y) {
    if (x) {
      if (y) {
        return 0;
      } else {
        return 1;
      }
    } else if (y) {
      return -1;
    } else {
      return 0;
    }
  }

  function caml_string_compare(s1, s2) {
    if (s1 === s2) {
      return 0;
    } else if (s1 < s2) {
      return -1;
    } else {
      return 1;
    }
  }
  /* No side effect */

  var for_in = function (o,foo){
          for (var x in o) { foo(x); }
        };

  function caml_compare(_a, _b) {
    while(true) {
      var b = _b;
      var a = _a;
      if (a === b) {
        return 0;
      } else {
        var a_type = typeof a;
        var b_type = typeof b;
        var exit = 0;
        switch (a_type) {
          case "boolean" : 
              if (b_type === "boolean") {
                return caml_bool_compare(a, b);
              } else {
                exit = 1;
              }
              break;
          case "function" : 
              if (b_type === "function") {
                throw [
                      invalid_argument,
                      "compare: functional value"
                    ];
              } else {
                exit = 1;
              }
              break;
          case "number" : 
              if (b_type === "number") {
                return caml_int_compare(a, b);
              } else {
                exit = 1;
              }
              break;
          case "string" : 
              if (b_type === "string") {
                return caml_string_compare(a, b);
              } else {
                return 1;
              }
          case "undefined" : 
              return -1;
          default:
            exit = 1;
        }
        if (exit === 1) {
          switch (b_type) {
            case "string" : 
                return -1;
            case "undefined" : 
                return 1;
            default:
              if (a_type === "boolean") {
                return 1;
              } else if (b_type === "boolean") {
                return -1;
              } else if (a_type === "function") {
                return 1;
              } else if (b_type === "function") {
                return -1;
              } else if (a_type === "number") {
                if (b === null || b.tag === 256) {
                  return 1;
                } else {
                  return -1;
                }
              } else if (b_type === "number") {
                if (a === null || a.tag === 256) {
                  return -1;
                } else {
                  return 1;
                }
              } else if (a === null) {
                if (b.tag === 256) {
                  return 1;
                } else {
                  return -1;
                }
              } else if (b === null) {
                if (a.tag === 256) {
                  return -1;
                } else {
                  return 1;
                }
              } else {
                var tag_a = a.tag | 0;
                var tag_b = b.tag | 0;
                if (tag_a === 250) {
                  _a = a[0];
                  continue ;
                } else if (tag_b === 250) {
                  _b = b[0];
                  continue ;
                } else if (tag_a === 256) {
                  if (tag_b === 256) {
                    return caml_int_compare(a[1], b[1]);
                  } else {
                    return -1;
                  }
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
                  var len_a = a.length | 0;
                  var len_b = b.length | 0;
                  if (len_a === len_b) {
                    if (Array.isArray(a)) {
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
                      }                  } else {
                      var a$2 = a;
                      var b$2 = b;
                      var min_key_lhs = /* record */[/* contents */undefined];
                      var min_key_rhs = /* record */[/* contents */undefined];
                      var do_key = function (param, key) {
                        var min_key = param[2];
                        var b = param[1];
                        if (!b.hasOwnProperty(key) || caml_compare(param[0][key], b[key]) > 0) {
                          var match = min_key[0];
                          if (match !== undefined && key >= match) {
                            return 0;
                          } else {
                            min_key[0] = key;
                            return /* () */0;
                          }
                        } else {
                          return 0;
                        }
                      };
                      var partial_arg = /* tuple */[
                        a$2,
                        b$2,
                        min_key_rhs
                      ];
                      var do_key_a = (function(partial_arg){
                      return function do_key_a(param) {
                        return do_key(partial_arg, param);
                      }
                      }(partial_arg));
                      var partial_arg$1 = /* tuple */[
                        b$2,
                        a$2,
                        min_key_lhs
                      ];
                      var do_key_b = (function(partial_arg$1){
                      return function do_key_b(param) {
                        return do_key(partial_arg$1, param);
                      }
                      }(partial_arg$1));
                      for_in(a$2, do_key_a);
                      for_in(b$2, do_key_b);
                      var match = min_key_lhs[0];
                      var match$1 = min_key_rhs[0];
                      if (match !== undefined) {
                        if (match$1 !== undefined) {
                          return caml_string_compare(match, match$1);
                        } else {
                          return -1;
                        }
                      } else if (match$1 !== undefined) {
                        return 1;
                      } else {
                        return 0;
                      }
                    }
                  } else if (len_a < len_b) {
                    var a$3 = a;
                    var b$3 = b;
                    var _i$1 = 0;
                    var short_length = len_a;
                    while(true) {
                      var i$1 = _i$1;
                      if (i$1 === short_length) {
                        return -1;
                      } else {
                        var res$1 = caml_compare(a$3[i$1], b$3[i$1]);
                        if (res$1 !== 0) {
                          return res$1;
                        } else {
                          _i$1 = i$1 + 1 | 0;
                          continue ;
                        }
                      }
                    }                } else {
                    var a$4 = a;
                    var b$4 = b;
                    var _i$2 = 0;
                    var short_length$1 = len_b;
                    while(true) {
                      var i$2 = _i$2;
                      if (i$2 === short_length$1) {
                        return 1;
                      } else {
                        var res$2 = caml_compare(a$4[i$2], b$4[i$2]);
                        if (res$2 !== 0) {
                          return res$2;
                        } else {
                          _i$2 = i$2 + 1 | 0;
                          continue ;
                        }
                      }
                    }                }
                }
              }
          }
        }
        
      }
    }}

  function caml_equal(_a, _b) {
    while(true) {
      var b = _b;
      var a = _a;
      if (a === b) {
        return true;
      } else {
        var a_type = typeof a;
        if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
          return false;
        } else {
          var b_type = typeof b;
          if (a_type === "function" || b_type === "function") {
            throw [
                  invalid_argument,
                  "equal: functional value"
                ];
          } else if (b_type === "number" || b_type === "undefined" || b === null) {
            return false;
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
              return a[1] === b[1];
            } else if (tag_a === 251) {
              throw [
                    invalid_argument,
                    "equal: abstract value"
                  ];
            } else if (tag_a !== tag_b) {
              return false;
            } else if (tag_a === 256) {
              return a[1] === b[1];
            } else {
              var len_a = a.length | 0;
              var len_b = b.length | 0;
              if (len_a === len_b) {
                if (Array.isArray(a)) {
                  var a$1 = a;
                  var b$1 = b;
                  var _i = 0;
                  var same_length = len_a;
                  while(true) {
                    var i = _i;
                    if (i === same_length) {
                      return true;
                    } else if (caml_equal(a$1[i], b$1[i])) {
                      _i = i + 1 | 0;
                      continue ;
                    } else {
                      return false;
                    }
                  }              } else {
                  var a$2 = a;
                  var b$2 = b;
                  var result = /* record */[/* contents */true];
                  var do_key_a = (function(b$2,result){
                  return function do_key_a(key) {
                    if (b$2.hasOwnProperty(key)) {
                      return 0;
                    } else {
                      result[0] = false;
                      return /* () */0;
                    }
                  }
                  }(b$2,result));
                  var do_key_b = (function(a$2,b$2,result){
                  return function do_key_b(key) {
                    if (!a$2.hasOwnProperty(key) || !caml_equal(b$2[key], a$2[key])) {
                      result[0] = false;
                      return /* () */0;
                    } else {
                      return 0;
                    }
                  }
                  }(a$2,b$2,result));
                  for_in(a$2, do_key_a);
                  if (result[0]) {
                    for_in(b$2, do_key_b);
                  }
                  return result[0];
                }
              } else {
                return false;
              }
            }
          }
        }
      }
    }}

  function caml_notequal(a, b) {
    return !caml_equal(a, b);
  }
  /* No side effect */

  /* node_std_output Not a pure module */

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
      /* alternate */false,
      /* base : Dec */2,
      /* signedconv */false,
      /* width */0,
      /* uppercase */false,
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
                    f[/* uppercase */7] = true;
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
            f[/* signedconv */5] = true;
            f[/* uppercase */7] = true;
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
                  f[/* alternate */3] = true;
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
                        return w >= 0 && w <= 9;
                      }
                      }(j))()) {
                    f[/* prec */9] = (imul(f[/* prec */9], 10) + fmt.charCodeAt(j) | 0) - /* "0" */48 | 0;
                    j = j + 1 | 0;
                  }                _i = j;
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
                    return w >= 0 && w <= 9;
                  }
                  }(j$1))()) {
                f[/* width */6] = (imul(f[/* width */6], 10) + fmt.charCodeAt(j$1) | 0) - /* "0" */48 | 0;
                j$1 = j$1 + 1 | 0;
              }            _i = j$1;
              continue ;
          case 4 : 
              f[/* signedconv */5] = true;
              f[/* base */4] = /* Dec */2;
              _i = i + 1 | 0;
              continue ;
          case 5 : 
              f[/* signedconv */5] = true;
              f[/* conv */10] = String.fromCharCode(c);
              _i = i + 1 | 0;
              continue ;
          
        }
      }
    }}

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
      if (base === /* Oct */0) {
        len = len + 1 | 0;
      } else if (base === /* Hex */1) {
        len = len + 2 | 0;
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
              }            if (s[i$1] === ".") {
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
                while((function () {
                        s = x$1.toFixed(p);
                        return s.length > (prec$1 + 1 | 0);
                      })()) {
                  p = p - 1 | 0;
                }            }
              if (p !== 0) {
                var k = s.length - 1 | 0;
                while(s[k] === "0") {
                  k = k - 1 | 0;
                }              if (s[k] === ".") {
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

  function caml_create_string(len) {
    if (len < 0) {
      throw [
            invalid_argument,
            "String.create"
          ];
    } else {
      var result = new Array(len);
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        result[i] = /* "\000" */0;
      }
      return result;
    }
  }

  function caml_blit_string(s1, i1, s2, i2, len) {
    if (len > 0) {
      var off1 = s1.length - i1 | 0;
      if (len <= off1) {
        for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
          s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
        }
        return /* () */0;
      } else {
        for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
          s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
        }
        for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
          s2[i2 + i$2 | 0] = /* "\000" */0;
        }
        return /* () */0;
      }
    } else {
      return 0;
    }
  }

  function caml_blit_bytes(s1, i1, s2, i2, len) {
    if (len > 0) {
      if (s1 === s2) {
        var s1$1 = s1;
        var i1$1 = i1;
        var i2$1 = i2;
        var len$1 = len;
        if (i1$1 < i2$1) {
          var range_a = (s1$1.length - i2$1 | 0) - 1 | 0;
          var range_b = len$1 - 1 | 0;
          var range = range_a > range_b ? range_b : range_a;
          for(var j = range; j >= 0; --j){
            s1$1[i2$1 + j | 0] = s1$1[i1$1 + j | 0];
          }
          return /* () */0;
        } else if (i1$1 > i2$1) {
          var range_a$1 = (s1$1.length - i1$1 | 0) - 1 | 0;
          var range_b$1 = len$1 - 1 | 0;
          var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
          for(var k = 0; k <= range$1; ++k){
            s1$1[i2$1 + k | 0] = s1$1[i1$1 + k | 0];
          }
          return /* () */0;
        } else {
          return 0;
        }
      } else {
        var off1 = s1.length - i1 | 0;
        if (len <= off1) {
          for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
            s2[i2 + i | 0] = s1[i1 + i | 0];
          }
          return /* () */0;
        } else {
          for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
            s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
          }
          for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
            s2[i2 + i$2 | 0] = /* "\000" */0;
          }
          return /* () */0;
        }
      }
    } else {
      return 0;
    }
  }

  function bytes_to_string(a) {
    var bytes = a;
    var len = a.length;
    var s = "";
    var s_len = len;
    if (len <= 4096 && len === bytes.length) {
      return String.fromCharCode.apply(null, bytes);
    } else {
      var offset = 0;
      while(s_len > 0) {
        var next = s_len < 1024 ? s_len : 1024;
        var tmp_bytes = new Array(next);
        caml_blit_bytes(bytes, offset, tmp_bytes, 0, next);
        s = s + String.fromCharCode.apply(null, tmp_bytes);
        s_len = s_len - next | 0;
        offset = offset + next | 0;
      }    return s;
    }
  }

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

  var id = /* record */[/* contents */0];

  function get_id() {
    id[0] += 1;
    return id[0];
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
      return false;
    } else if (e.tag === 248) {
      return true;
    } else {
      var slot = e[0];
      if (slot !== undefined) {
        return slot.tag === 248;
      } else {
        return false;
      }
    }
  }
  /* No side effect */

  /* No side effect */

  /* No side effect */

  var Exit = create("Pervasives.Exit");

  function abs(x) {
    if (x >= 0) {
      return x;
    } else {
      return -x | 0;
    }
  }

  var min_int$1 = -2147483648;

  function valid_float_lexem(s) {
    var l = s.length;
    var _i = 0;
    while(true) {
      var i = _i;
      if (i >= l) {
        return s + ".";
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
    }}

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

  var max_int$1 = 2147483647;
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
    }}

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
    }}

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
    }}

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
    }}

  function fold_right(f, l, accu) {
    if (l) {
      return _2(f, l[0], fold_right(f, l[1], accu));
    } else {
      return accu;
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
    }}

  function find_all(p) {
    return (function (param) {
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
        }    });
  }

  function chop(_k, _l) {
    while(true) {
      var l = _l;
      var k = _k;
      if (k === 0) {
        return l;
      } else if (l) {
        _l = l[1];
        _k = k - 1 | 0;
        continue ;
      } else {
        throw [
              assert_failure,
              /* tuple */[
                "list.ml",
                223,
                11
              ]
            ];
      }
    }}

  function sort_uniq(cmp, l) {
    var sort = function (n, l) {
      var exit$$1 = 0;
      if (n !== 2) {
        if (n !== 3 || !l) {
          exit$$1 = 1;
        } else {
          var match = l[1];
          if (match) {
            var match$1 = match[1];
            if (match$1) {
              var x3 = match$1[0];
              var x2 = match[0];
              var x1 = l[0];
              var c = _2(cmp, x1, x2);
              if (c === 0) {
                var c$1 = _2(cmp, x2, x3);
                if (c$1 === 0) {
                  return /* :: */[
                          x2,
                          /* [] */0
                        ];
                } else if (c$1 < 0) {
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
              } else if (c < 0) {
                var c$2 = _2(cmp, x2, x3);
                if (c$2 === 0) {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                } else if (c$2 < 0) {
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
                  var c$3 = _2(cmp, x1, x3);
                  if (c$3 === 0) {
                    return /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* [] */0
                            ]
                          ];
                  } else if (c$3 < 0) {
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
                }
              } else {
                var c$4 = _2(cmp, x1, x3);
                if (c$4 === 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                } else if (c$4 < 0) {
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
                  var c$5 = _2(cmp, x2, x3);
                  if (c$5 === 0) {
                    return /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ];
                  } else if (c$5 < 0) {
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
                }
              }
            } else {
              exit$$1 = 1;
            }
          } else {
            exit$$1 = 1;
          }
        }
      } else if (l) {
        var match$2 = l[1];
        if (match$2) {
          var x2$1 = match$2[0];
          var x1$1 = l[0];
          var c$6 = _2(cmp, x1$1, x2$1);
          if (c$6 === 0) {
            return /* :: */[
                    x1$1,
                    /* [] */0
                  ];
          } else if (c$6 < 0) {
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
              if (c$7 === 0) {
                _accu = /* :: */[
                  h1,
                  accu
                ];
                _l2 = t2;
                _l1 = t1;
                continue ;
              } else if (c$7 > 0) {
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
              return rev_append(l1, accu);
            }
          } else {
            return rev_append(l2$1, accu);
          }
        }    }
      
    };
    var rev_sort = function (n, l) {
      var exit$$1 = 0;
      if (n !== 2) {
        if (n !== 3 || !l) {
          exit$$1 = 1;
        } else {
          var match = l[1];
          if (match) {
            var match$1 = match[1];
            if (match$1) {
              var x3 = match$1[0];
              var x2 = match[0];
              var x1 = l[0];
              var c = _2(cmp, x1, x2);
              if (c === 0) {
                var c$1 = _2(cmp, x2, x3);
                if (c$1 === 0) {
                  return /* :: */[
                          x2,
                          /* [] */0
                        ];
                } else if (c$1 > 0) {
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
              } else if (c > 0) {
                var c$2 = _2(cmp, x2, x3);
                if (c$2 === 0) {
                  return /* :: */[
                          x1,
                          /* :: */[
                            x2,
                            /* [] */0
                          ]
                        ];
                } else if (c$2 > 0) {
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
                  var c$3 = _2(cmp, x1, x3);
                  if (c$3 === 0) {
                    return /* :: */[
                            x1,
                            /* :: */[
                              x2,
                              /* [] */0
                            ]
                          ];
                  } else if (c$3 > 0) {
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
                }
              } else {
                var c$4 = _2(cmp, x1, x3);
                if (c$4 === 0) {
                  return /* :: */[
                          x2,
                          /* :: */[
                            x1,
                            /* [] */0
                          ]
                        ];
                } else if (c$4 > 0) {
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
                  var c$5 = _2(cmp, x2, x3);
                  if (c$5 === 0) {
                    return /* :: */[
                            x2,
                            /* :: */[
                              x1,
                              /* [] */0
                            ]
                          ];
                  } else if (c$5 > 0) {
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
                }
              }
            } else {
              exit$$1 = 1;
            }
          } else {
            exit$$1 = 1;
          }
        }
      } else if (l) {
        var match$2 = l[1];
        if (match$2) {
          var x2$1 = match$2[0];
          var x1$1 = l[0];
          var c$6 = _2(cmp, x1$1, x2$1);
          if (c$6 === 0) {
            return /* :: */[
                    x1$1,
                    /* [] */0
                  ];
          } else if (c$6 > 0) {
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
              if (c$7 === 0) {
                _accu = /* :: */[
                  h1,
                  accu
                ];
                _l2 = t2;
                _l1 = t1;
                continue ;
              } else if (c$7 < 0) {
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
              return rev_append(l1, accu);
            }
          } else {
            return rev_append(l2$1, accu);
          }
        }    }
      
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

  function concat$2(sep, l) {
    if (l) {
      var hd$$1 = l[0];
      var num = /* record */[/* contents */0];
      var len = /* record */[/* contents */0];
      iter((function (s) {
              num[0] = num[0] + 1 | 0;
              len[0] = len[0] + s.length | 0;
              return /* () */0;
            }), l);
      var r = caml_create_string(len[0] + imul(sep.length, num[0] - 1 | 0) | 0);
      caml_blit_string(hd$$1, 0, r, 0, hd$$1.length);
      var pos = /* record */[/* contents */hd$$1.length];
      iter((function (s) {
              caml_blit_string(sep, 0, r, pos[0], sep.length);
              pos[0] = pos[0] + sep.length | 0;
              caml_blit_string(s, 0, r, pos[0], s.length);
              pos[0] = pos[0] + s.length | 0;
              return /* () */0;
            }), l[1]);
      return bytes_to_string(r);
    } else {
      return "";
    }
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function setStyle(n, key, value) {
    n.style[key] = value;
    return /* () */0;
  }

  function setStyleProperty(n, $staropt$star, key, value) {
    var priority = $staropt$star !== undefined ? $staropt$star : false;
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

  function remove_polyfill() {
    return (
    // remove polyfill
    (function() {
      if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function() {
          if (this.parentNode) {
            this.parentNode.removeChild(this);
          }
        };
      }  }())
    );
  }
  /* No side effect */

  var undefinedHeader = /* array */[];

  function some(x) {
    if (x === undefined) {
      var block = /* tuple */[
        undefinedHeader,
        0
      ];
      block.tag = 256;
      return block;
    } else if (x !== null && x[0] === undefinedHeader) {
      var nid = x[1] + 1 | 0;
      var block$1 = /* tuple */[
        undefinedHeader,
        nid
      ];
      block$1.tag = 256;
      return block$1;
    } else {
      return x;
    }
  }

  function nullable_to_opt(x) {
    if (x === null || x === undefined) {
      return undefined;
    } else {
      return some(x);
    }
  }

  function valFromOption(x) {
    if (x !== null && x[0] === undefinedHeader) {
      var depth = x[1];
      if (depth === 0) {
        return undefined;
      } else {
        return /* tuple */[
                undefinedHeader,
                depth - 1 | 0
              ];
      }
    } else {
      return x;
    }
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function createElementNsOptional(namespace, tagName) {
    if (namespace === "") {
      return document.createElement(tagName);
    } else {
      return document.createElementNS(namespace, tagName);
    }
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  var noNode = /* CommentNode */__(0, [""]);

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

  function renderToHtmlString(_param) {
    while(true) {
      var param = _param;
      switch (param.tag | 0) {
        case 0 : 
            return "<!-- " + (param[0] + " -->");
        case 1 : 
            return param[0];
        case 2 : 
            var tagName = param[1];
            var namespace = param[0];
            return concat$2("", /* :: */[
                        "<",
                        /* :: */[
                          namespace,
                          /* :: */[
                            namespace === "" ? "" : ":",
                            /* :: */[
                              tagName,
                              /* :: */[
                                concat$2("", map((function (p) {
                                            var param = p;
                                            if (typeof param === "number") {
                                              return "";
                                            } else {
                                              switch (param.tag | 0) {
                                                case 0 : 
                                                    return concat$2("", /* :: */[
                                                                " ",
                                                                /* :: */[
                                                                  param[0],
                                                                  /* :: */[
                                                                    "=\"",
                                                                    /* :: */[
                                                                      param[1],
                                                                      /* :: */[
                                                                        "\"",
                                                                        /* [] */0
                                                                      ]
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]);
                                                case 1 : 
                                                    return concat$2("", /* :: */[
                                                                " ",
                                                                /* :: */[
                                                                  param[1],
                                                                  /* :: */[
                                                                    "=\"",
                                                                    /* :: */[
                                                                      param[2],
                                                                      /* :: */[
                                                                        "\"",
                                                                        /* [] */0
                                                                      ]
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]);
                                                case 2 : 
                                                    return concat$2("", /* :: */[
                                                                " data-",
                                                                /* :: */[
                                                                  param[0],
                                                                  /* :: */[
                                                                    "=\"",
                                                                    /* :: */[
                                                                      param[1],
                                                                      /* :: */[
                                                                        "\"",
                                                                        /* [] */0
                                                                      ]
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]);
                                                case 3 : 
                                                    return "";
                                                case 4 : 
                                                    return concat$2("", /* :: */[
                                                                " style=\"",
                                                                /* :: */[
                                                                  concat$2(";", map((function (param) {
                                                                              return concat$2("", /* :: */[
                                                                                          param[0],
                                                                                          /* :: */[
                                                                                            ":",
                                                                                            /* :: */[
                                                                                              param[1],
                                                                                              /* :: */[
                                                                                                ";",
                                                                                                /* [] */0
                                                                                              ]
                                                                                            ]
                                                                                          ]
                                                                                        ]);
                                                                            }), param[0])),
                                                                  /* :: */[
                                                                    "\"",
                                                                    /* [] */0
                                                                  ]
                                                                ]
                                                              ]);
                                                
                                              }
                                            }
                                          }), param[4])),
                                /* :: */[
                                  ">",
                                  /* :: */[
                                    concat$2("", map(renderToHtmlString, param[5])),
                                    /* :: */[
                                      "</",
                                      /* :: */[
                                        tagName,
                                        /* :: */[
                                          ">",
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
                      ]);
        case 3 : 
            _param = _1(param[1], /* () */0);
            continue ;
        case 4 : 
            _param = param[1];
            continue ;
        
      }
    }}

  function eventHandler(callbacks, cb) {
    return (function (ev) {
        var match = _1(cb[0], ev);
        if (match !== undefined) {
          return _1(callbacks[0][/* enqueue */0], valFromOption(match));
        } else {
          return /* () */0;
        }
      });
  }

  function eventHandler_GetCB(param) {
    if (param.tag) {
      var msg = param[0];
      return (function () {
          return some(msg);
        });
    } else {
      return param[1];
    }
  }

  function compareEventHandlerTypes(left, param) {
    if (param.tag) {
      if (!left.tag || !caml_equal(param[0], left[0])) {
        return false;
      } else {
        return true;
      }
    } else if (left.tag) {
      return false;
    } else {
      return param[0] === left[0];
    }
  }

  function eventHandler_Register(callbacks, elem, name, handlerType) {
    var cb = /* record */[/* contents */eventHandler_GetCB(handlerType)];
    var handler = eventHandler(callbacks, cb);
    addEventListener(elem, name, handler, false);
    return /* record */[
            /* handler */handler,
            /* cb */cb
          ];
  }

  function eventHandler_Unregister(elem, name, param) {
    if (param !== undefined) {
      removeEventListener(elem, name, param[/* handler */0], false);
      return undefined;
    }
    
  }

  function eventHandler_Mutate(callbacks, elem, oldName, newName, oldHandlerType, newHandlerType, oldCache, newCache) {
    var match = oldCache[0];
    if (match !== undefined) {
      if (oldName === newName) {
        newCache[0] = oldCache[0];
        if (compareEventHandlerTypes(oldHandlerType, newHandlerType)) {
          return /* () */0;
        } else {
          var cb = eventHandler_GetCB(newHandlerType);
          match[/* cb */1][0] = cb;
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
            return fold_left((function (_, param) {
                          return setStyleProperty(elem, undefined, param[0], param[1]);
                        }), /* () */0, param[0]);
        
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
            return fold_left((function (_, param) {
                          return setStyleProperty(elem, undefined, param[0], null);
                        }), /* () */0, param[0]);
        
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
              return fold_left2((function (_, param, param$1) {
                            var nv = param$1[1];
                            var nk = param$1[0];
                            var ok = param[0];
                            if (ok === nk) {
                              if (param[1] === nv) {
                                return /* () */0;
                              } else {
                                return setStyleProperty(elem, undefined, nk, nv);
                              }
                            } else {
                              setStyleProperty(elem, undefined, ok, null);
                              return setStyleProperty(elem, undefined, nk, nv);
                            }
                          }), /* () */0, oldProp[0], _newProp[0]);
            } else {
              throw [
                    failure,
                    "Passed a non-Style to a new Style as a Mutations while the old Style is not actually a style!"
                  ];
            }
        
      }
    }
  }

  function patchVNodesOnElems_PropertiesApply(callbacks, elem, _idx, _oldProperties, _newProperties) {
    while(true) {
      var newProperties = _newProperties;
      var oldProperties = _oldProperties;
      var idx = _idx;
      if (oldProperties) {
        var _oldProp = oldProperties[0];
        var exit = 0;
        if (newProperties) {
          if (typeof _oldProp === "number") {
            if (typeof newProperties[0] === "number") {
              _newProperties = newProperties[1];
              _oldProperties = oldProperties[1];
              _idx = idx + 1 | 0;
              continue ;
            } else {
              exit = 1;
            }
          } else {
            switch (_oldProp.tag | 0) {
              case 0 : 
                  var newProp = newProperties[0];
                  if (typeof newProp === "number" || newProp.tag) {
                    exit = 1;
                  } else {
                    if (!(_oldProp[0] === newProp[0] && _oldProp[1] === newProp[1])) {
                      patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, _oldProp, newProp);
                    }
                    _newProperties = newProperties[1];
                    _oldProperties = oldProperties[1];
                    _idx = idx + 1 | 0;
                    continue ;
                  }
                  break;
              case 1 : 
                  var newProp$1 = newProperties[0];
                  if (typeof newProp$1 === "number" || newProp$1.tag !== 1) {
                    exit = 1;
                  } else {
                    if (!(_oldProp[0] === newProp$1[0] && _oldProp[1] === newProp$1[1] && _oldProp[2] === newProp$1[2])) {
                      patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, _oldProp, newProp$1);
                    }
                    _newProperties = newProperties[1];
                    _oldProperties = oldProperties[1];
                    _idx = idx + 1 | 0;
                    continue ;
                  }
                  break;
              case 2 : 
                  var newProp$2 = newProperties[0];
                  if (typeof newProp$2 === "number" || newProp$2.tag !== 2) {
                    exit = 1;
                  } else {
                    if (!(_oldProp[0] === newProp$2[0] && _oldProp[1] === newProp$2[1])) {
                      patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, _oldProp, newProp$2);
                    }
                    _newProperties = newProperties[1];
                    _oldProperties = oldProperties[1];
                    _idx = idx + 1 | 0;
                    continue ;
                  }
                  break;
              case 3 : 
                  var _newProp = newProperties[0];
                  if (typeof _newProp === "number" || _newProp.tag !== 3) {
                    exit = 1;
                  } else {
                    eventHandler_Mutate(callbacks, elem, _oldProp[0], _newProp[0], _oldProp[1], _newProp[1], _oldProp[2], _newProp[2]);
                    _newProperties = newProperties[1];
                    _oldProperties = oldProperties[1];
                    _idx = idx + 1 | 0;
                    continue ;
                  }
                  break;
              case 4 : 
                  var newProp$3 = newProperties[0];
                  if (typeof newProp$3 === "number" || newProp$3.tag !== 4) {
                    exit = 1;
                  } else {
                    if (!caml_equal(_oldProp[0], newProp$3[0])) {
                      patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, _oldProp, newProp$3);
                    }
                    _newProperties = newProperties[1];
                    _oldProperties = oldProperties[1];
                    _idx = idx + 1 | 0;
                    continue ;
                  }
                  break;
              
            }
          }
        } else {
          return false;
        }
        if (exit === 1) {
          patchVNodesOnElems_PropertiesApply_RemoveAdd(callbacks, elem, idx, _oldProp, newProperties[0]);
          _newProperties = newProperties[1];
          _oldProperties = oldProperties[1];
          _idx = idx + 1 | 0;
          continue ;
        }
        
      } else if (newProperties) {
        return false;
      } else {
        return true;
      }
    }}

  function patchVNodesOnElems_Properties(callbacks, elem, oldProperties, newProperties) {
    return patchVNodesOnElems_PropertiesApply(callbacks, elem, 0, oldProperties, newProperties);
  }

  function patchVNodesOnElems_ReplaceNode(callbacks, elem, elems, idx, param) {
    if (param.tag === 2) {
      var newProperties = param[4];
      var oldChild = caml_array_get(elems, idx);
      var newChild = createElementNsOptional(param[0], param[1]);
      var match = patchVNodesOnElems_Properties(callbacks, newChild, map((function () {
                  return /* NoProp */0;
                }), newProperties), newProperties);
      if (match) {
        var childChildren = newChild.childNodes;
        patchVNodesOnElems(callbacks, newChild, childChildren, 0, /* [] */0, param[5]);
        insertBefore(elem, newChild, oldChild);
        elem.removeChild(oldChild);
        return /* () */0;
      } else {
        throw [
              match_failure,
              /* tuple */[
                "vdom.ml",
                319,
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
            var match = patchVNodesOnElems_Properties(callbacks, newChild, map((function () {
                        return /* NoProp */0;
                      }), newProperties), newProperties);
            if (match) {
              var childChildren = newChild.childNodes;
              patchVNodesOnElems(callbacks, newChild, childChildren, 0, /* [] */0, param[5]);
              return newChild;
            } else {
              throw [
                    match_failure,
                    /* tuple */[
                      "vdom.ml",
                      333,
                      30
                    ]
                  ];
            }
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
    }}

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
                if (match.tag || oldNode[0] !== match[0]) {
                  exit = 1;
                } else {
                  _newVNodes = newVNodes[1];
                  _oldVNodes = oldVNodes[1];
                  _idx = idx + 1 | 0;
                  continue ;
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
                          if (match$3.tag === 2 && olderNamespace === newNamespace && olderTagName === newTagName && olderKey === newKey && oldNamespace === match$3[0] && oldTagName === match$3[1] && oldKey === match$3[2]) {
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
                        if (match$4.tag === 2 && oldNamespace === match$4[0] && oldTagName === match$4[1] && oldKey === match$4[2]) {
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
                          if (match$7.tag === 3 && olderKey$1 === newKey$1 && oldKey$1 === match$7[0]) {
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
                        if (match$8.tag === 3 && match$8[0] === oldKey$1) {
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
    }}

  function patchVNodesIntoElement(callbacks, elem, oldVNodes, newVNodes) {
    var elems = elem.childNodes;
    patchVNodesOnElems(callbacks, elem, elems, 0, oldVNodes, newVNodes);
    return newVNodes;
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

  function map$4(f, a) {
    var l = a.length;
    if (l === 0) {
      return /* array */[];
    } else {
      var r = caml_make_vect(l, _1(f, a[0]));
      for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
        r[i] = _1(f, a[i]);
      }
      return r;
    }
  }

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
    }}

  function fold_right$1(f, a, x) {
    var r = x;
    for(var i = a.length - 1 | 0; i >= 0; --i){
      r = _2(f, a[i], r);
    }
    return r;
  }

  var Bottom = create("Array.Bottom");
  /* No side effect */

  function classify(x) {
    var ty = typeof x;
    if (ty === "string") {
      return /* JSONString */__(0, [x]);
    } else if (ty === "number") {
      return /* JSONNumber */__(1, [x]);
    } else if (ty === "boolean") {
      if (x === true) {
        return /* JSONTrue */1;
      } else {
        return /* JSONFalse */0;
      }
    } else if (x === null) {
      return /* JSONNull */2;
    } else if (Array.isArray(x)) {
      return /* JSONArray */__(3, [x]);
    } else {
      return /* JSONObject */__(2, [x]);
    }
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  var classify$1 = classify;
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function error(param) {
    if (param.tag) {
      return some(param[0]);
    }
    
  }

  function first(fst, e) {
    if (e.tag) {
      return e;
    } else {
      return fst;
    }
  }

  function error_of_first(fst, param) {
    if (param.tag) {
      return some(param[0]);
    } else {
      return error(fst);
    }
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function height(param) {
    if (param) {
      return param[4];
    } else {
      return 0;
    }
  }

  function create$1(l, x, d, r) {
    var hl = height(l);
    var hr = height(r);
    return /* Node */[
            l,
            x,
            d,
            r,
            hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          ];
  }

  function singleton(x, d) {
    return /* Node */[
            /* Empty */0,
            x,
            d,
            /* Empty */0,
            1
          ];
  }

  function bal(l, x, d, r) {
    var hl = l ? l[4] : 0;
    var hr = r ? r[4] : 0;
    if (hl > (hr + 2 | 0)) {
      if (l) {
        var lr = l[3];
        var ld = l[2];
        var lv = l[1];
        var ll = l[0];
        if (height(ll) >= height(lr)) {
          return create$1(ll, lv, ld, create$1(lr, x, d, r));
        } else if (lr) {
          return create$1(create$1(ll, lv, ld, lr[0]), lr[1], lr[2], create$1(lr[3], x, d, r));
        } else {
          throw [
                invalid_argument,
                "Map.bal"
              ];
        }
      } else {
        throw [
              invalid_argument,
              "Map.bal"
            ];
      }
    } else if (hr > (hl + 2 | 0)) {
      if (r) {
        var rr = r[3];
        var rd = r[2];
        var rv = r[1];
        var rl = r[0];
        if (height(rr) >= height(rl)) {
          return create$1(create$1(l, x, d, rl), rv, rd, rr);
        } else if (rl) {
          return create$1(create$1(l, x, d, rl[0]), rl[1], rl[2], create$1(rl[3], rv, rd, rr));
        } else {
          throw [
                invalid_argument,
                "Map.bal"
              ];
        }
      } else {
        throw [
              invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      return /* Node */[
              l,
              x,
              d,
              r,
              hl >= hr ? hl + 1 | 0 : hr + 1 | 0
            ];
    }
  }

  function is_empty(param) {
    if (param) {
      return false;
    } else {
      return true;
    }
  }

  function add$1(x, data, param) {
    if (param) {
      var r = param[3];
      var d = param[2];
      var v = param[1];
      var l = param[0];
      var c = caml_string_compare(x, v);
      if (c === 0) {
        return /* Node */[
                l,
                x,
                data,
                r,
                param[4]
              ];
      } else if (c < 0) {
        return bal(add$1(x, data, l), v, d, r);
      } else {
        return bal(l, v, d, add$1(x, data, r));
      }
    } else {
      return /* Node */[
              /* Empty */0,
              x,
              data,
              /* Empty */0,
              1
            ];
    }
  }

  function find$1(x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var c = caml_string_compare(x, param[1]);
        if (c === 0) {
          return param[2];
        } else {
          _param = c < 0 ? param[0] : param[3];
          continue ;
        }
      } else {
        throw not_found;
      }
    }}

  function mem$1(x, _param) {
    while(true) {
      var param = _param;
      if (param) {
        var c = caml_string_compare(x, param[1]);
        if (c === 0) {
          return true;
        } else {
          _param = c < 0 ? param[0] : param[3];
          continue ;
        }
      } else {
        return false;
      }
    }}

  function min_binding(_param) {
    while(true) {
      var param = _param;
      if (param) {
        var l = param[0];
        if (l) {
          _param = l;
          continue ;
        } else {
          return /* tuple */[
                  param[1],
                  param[2]
                ];
        }
      } else {
        throw not_found;
      }
    }}

  function max_binding(_param) {
    while(true) {
      var param = _param;
      if (param) {
        var r = param[3];
        if (r) {
          _param = r;
          continue ;
        } else {
          return /* tuple */[
                  param[1],
                  param[2]
                ];
        }
      } else {
        throw not_found;
      }
    }}

  function remove_min_binding(param) {
    if (param) {
      var l = param[0];
      if (l) {
        return bal(remove_min_binding(l), param[1], param[2], param[3]);
      } else {
        return param[3];
      }
    } else {
      throw [
            invalid_argument,
            "Map.remove_min_elt"
          ];
    }
  }

  function remove$1(x, param) {
    if (param) {
      var r = param[3];
      var d = param[2];
      var v = param[1];
      var l = param[0];
      var c = caml_string_compare(x, v);
      if (c === 0) {
        var t1 = l;
        var t2 = r;
        if (t1) {
          if (t2) {
            var match = min_binding(t2);
            return bal(t1, match[0], match[1], remove_min_binding(t2));
          } else {
            return t1;
          }
        } else {
          return t2;
        }
      } else if (c < 0) {
        return bal(remove$1(x, l), v, d, r);
      } else {
        return bal(l, v, d, remove$1(x, r));
      }
    } else {
      return /* Empty */0;
    }
  }

  function iter$4(f, _param) {
    while(true) {
      var param = _param;
      if (param) {
        iter$4(f, param[0]);
        _2(f, param[1], param[2]);
        _param = param[3];
        continue ;
      } else {
        return /* () */0;
      }
    }}

  function map$5(f, param) {
    if (param) {
      var l$prime = map$5(f, param[0]);
      var d$prime = _1(f, param[2]);
      var r$prime = map$5(f, param[3]);
      return /* Node */[
              l$prime,
              param[1],
              d$prime,
              r$prime,
              param[4]
            ];
    } else {
      return /* Empty */0;
    }
  }

  function mapi$5(f, param) {
    if (param) {
      var v = param[1];
      var l$prime = mapi$5(f, param[0]);
      var d$prime = _2(f, v, param[2]);
      var r$prime = mapi$5(f, param[3]);
      return /* Node */[
              l$prime,
              v,
              d$prime,
              r$prime,
              param[4]
            ];
    } else {
      return /* Empty */0;
    }
  }

  function fold(f, _m, _accu) {
    while(true) {
      var accu = _accu;
      var m = _m;
      if (m) {
        _accu = _3(f, m[1], m[2], fold(f, m[0], accu));
        _m = m[3];
        continue ;
      } else {
        return accu;
      }
    }}

  function for_all$1(p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (_2(p, param[1], param[2]) && for_all$1(p, param[0])) {
          _param = param[3];
          continue ;
        } else {
          return false;
        }
      } else {
        return true;
      }
    }}

  function exists$1(p, _param) {
    while(true) {
      var param = _param;
      if (param) {
        if (_2(p, param[1], param[2]) || exists$1(p, param[0])) {
          return true;
        } else {
          _param = param[3];
          continue ;
        }
      } else {
        return false;
      }
    }}

  function add_min_binding(k, v, param) {
    if (param) {
      return bal(add_min_binding(k, v, param[0]), param[1], param[2], param[3]);
    } else {
      return singleton(k, v);
    }
  }

  function add_max_binding(k, v, param) {
    if (param) {
      return bal(param[0], param[1], param[2], add_max_binding(k, v, param[3]));
    } else {
      return singleton(k, v);
    }
  }

  function join(l, v, d, r) {
    if (l) {
      if (r) {
        var rh = r[4];
        var lh = l[4];
        if (lh > (rh + 2 | 0)) {
          return bal(l[0], l[1], l[2], join(l[3], v, d, r));
        } else if (rh > (lh + 2 | 0)) {
          return bal(join(l, v, d, r[0]), r[1], r[2], r[3]);
        } else {
          return create$1(l, v, d, r);
        }
      } else {
        return add_max_binding(v, d, l);
      }
    } else {
      return add_min_binding(v, d, r);
    }
  }

  function concat$4(t1, t2) {
    if (t1) {
      if (t2) {
        var match = min_binding(t2);
        return join(t1, match[0], match[1], remove_min_binding(t2));
      } else {
        return t1;
      }
    } else {
      return t2;
    }
  }

  function concat_or_join(t1, v, d, t2) {
    if (d !== undefined) {
      return join(t1, v, valFromOption(d), t2);
    } else {
      return concat$4(t1, t2);
    }
  }

  function split$1(x, param) {
    if (param) {
      var r = param[3];
      var d = param[2];
      var v = param[1];
      var l = param[0];
      var c = caml_string_compare(x, v);
      if (c === 0) {
        return /* tuple */[
                l,
                some(d),
                r
              ];
      } else if (c < 0) {
        var match = split$1(x, l);
        return /* tuple */[
                match[0],
                match[1],
                join(match[2], v, d, r)
              ];
      } else {
        var match$1 = split$1(x, r);
        return /* tuple */[
                join(l, v, d, match$1[0]),
                match$1[1],
                match$1[2]
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              undefined,
              /* Empty */0
            ];
    }
  }

  function merge$1(f, s1, s2) {
    var exit$$1 = 0;
    if (s1) {
      var v1 = s1[1];
      if (s1[4] >= height(s2)) {
        var match = split$1(v1, s2);
        return concat_or_join(merge$1(f, s1[0], match[0]), v1, _3(f, v1, some(s1[2]), match[1]), merge$1(f, s1[3], match[2]));
      } else {
        exit$$1 = 1;
      }
    } else if (s2) {
      exit$$1 = 1;
    } else {
      return /* Empty */0;
    }
    if (exit$$1 === 1) {
      if (s2) {
        var v2 = s2[1];
        var match$1 = split$1(v2, s1);
        return concat_or_join(merge$1(f, match$1[0], s2[0]), v2, _3(f, v2, match$1[1], some(s2[2])), merge$1(f, match$1[2], s2[3]));
      } else {
        throw [
              assert_failure,
              /* tuple */[
                "map.ml",
                270,
                10
              ]
            ];
      }
    }
    
  }

  function filter$1(p, param) {
    if (param) {
      var d = param[2];
      var v = param[1];
      var l$prime = filter$1(p, param[0]);
      var pvd = _2(p, v, d);
      var r$prime = filter$1(p, param[3]);
      if (pvd) {
        return join(l$prime, v, d, r$prime);
      } else {
        return concat$4(l$prime, r$prime);
      }
    } else {
      return /* Empty */0;
    }
  }

  function partition$1(p, param) {
    if (param) {
      var d = param[2];
      var v = param[1];
      var match = partition$1(p, param[0]);
      var lf = match[1];
      var lt = match[0];
      var pvd = _2(p, v, d);
      var match$1 = partition$1(p, param[3]);
      var rf = match$1[1];
      var rt = match$1[0];
      if (pvd) {
        return /* tuple */[
                join(lt, v, d, rt),
                concat$4(lf, rf)
              ];
      } else {
        return /* tuple */[
                concat$4(lt, rt),
                join(lf, v, d, rf)
              ];
      }
    } else {
      return /* tuple */[
              /* Empty */0,
              /* Empty */0
            ];
    }
  }

  function cons_enum(_m, _e) {
    while(true) {
      var e = _e;
      var m = _m;
      if (m) {
        _e = /* More */[
          m[1],
          m[2],
          m[3],
          e
        ];
        _m = m[0];
        continue ;
      } else {
        return e;
      }
    }}

  function compare$4(cmp, m1, m2) {
    var _e1 = cons_enum(m1, /* End */0);
    var _e2 = cons_enum(m2, /* End */0);
    while(true) {
      var e2 = _e2;
      var e1 = _e1;
      if (e1) {
        if (e2) {
          var c = caml_string_compare(e1[0], e2[0]);
          if (c !== 0) {
            return c;
          } else {
            var c$1 = _2(cmp, e1[1], e2[1]);
            if (c$1 !== 0) {
              return c$1;
            } else {
              _e2 = cons_enum(e2[2], e2[3]);
              _e1 = cons_enum(e1[2], e1[3]);
              continue ;
            }
          }
        } else {
          return 1;
        }
      } else if (e2) {
        return -1;
      } else {
        return 0;
      }
    }}

  function equal(cmp, m1, m2) {
    var _e1 = cons_enum(m1, /* End */0);
    var _e2 = cons_enum(m2, /* End */0);
    while(true) {
      var e2 = _e2;
      var e1 = _e1;
      if (e1) {
        if (e2 && caml_string_compare(e1[0], e2[0]) === 0 && _2(cmp, e1[1], e2[1])) {
          _e2 = cons_enum(e2[2], e2[3]);
          _e1 = cons_enum(e1[2], e1[3]);
          continue ;
        } else {
          return false;
        }
      } else if (e2) {
        return false;
      } else {
        return true;
      }
    }}

  function cardinal(param) {
    if (param) {
      return (cardinal(param[0]) + 1 | 0) + cardinal(param[3]) | 0;
    } else {
      return 0;
    }
  }

  function bindings_aux(_accu, _param) {
    while(true) {
      var param = _param;
      var accu = _accu;
      if (param) {
        _param = param[0];
        _accu = /* :: */[
          /* tuple */[
            param[1],
            param[2]
          ],
          bindings_aux(accu, param[3])
        ];
        continue ;
      } else {
        return accu;
      }
    }}

  function bindings(s) {
    return bindings_aux(/* [] */0, s);
  }

  var ObjectDict = [
    /* Empty */0,
    is_empty,
    mem$1,
    add$1,
    singleton,
    remove$1,
    merge$1,
    compare$4,
    equal,
    iter$4,
    fold,
    for_all$1,
    exists$1,
    filter$1,
    partition$1,
    cardinal,
    bindings,
    min_binding,
    max_binding,
    min_binding,
    split$1,
    find$1,
    map$5,
    mapi$5
  ];

  var ParseFail = create("Tea_json.Decoder.ParseFail");

  var string = /* Decoder */[(function (value) {
        var match = classify$1(value);
        if (typeof match === "number" || match.tag) {
          return /* Error */__(1, ["Non-string value"]);
        } else {
          return /* Ok */__(0, [match[0]]);
        }
      })];

  var $$int = /* Decoder */[(function (value) {
        var match = classify$1(value);
        if (typeof match === "number" || match.tag !== 1) {
          return /* Error */__(1, ["Non-int value"]);
        } else {
          var n = match[0];
          if (n > min_int$1 && n < max_int$1) {
            return /* Ok */__(0, [n | 0]);
          } else {
            return /* Error */__(1, ["number out of int range"]);
          }
        }
      })];

  var $$float = /* Decoder */[(function (value) {
        var match = classify$1(value);
        if (typeof match === "number" || match.tag !== 1) {
          return /* Error */__(1, ["Non-float-value"]);
        } else {
          return /* Ok */__(0, [match[0]]);
        }
      })];

  var bool = /* Decoder */[(function (value) {
        var match = classify$1(value);
        if (typeof match === "number") {
          switch (match) {
            case 0 : 
                return /* Ok */__(0, [false]);
            case 1 : 
                return /* Ok */__(0, [true]);
            case 2 : 
                return /* Error */__(1, ["Non-boolean value"]);
            
          }
        } else {
          return /* Error */__(1, ["Non-boolean value"]);
        }
      })];

  function $$null$1(v) {
    return /* Decoder */[(function (value) {
                var match = classify$1(value);
                if (typeof match === "number" && match >= 2) {
                  return /* Ok */__(0, [v]);
                } else {
                  return /* Error */__(1, ["Non-null value"]);
                }
              })];
  }

  function list(param) {
    var decoder = param[0];
    return /* Decoder */[(function (value) {
                var match = classify$1(value);
                if (typeof match === "number" || match.tag !== 3) {
                  return /* Error */__(1, ["Non-list value"]);
                } else {
                  var parse = function (v) {
                    var match = _1(decoder, v);
                    if (match.tag) {
                      throw [
                            ParseFail,
                            match[0]
                          ];
                    } else {
                      return match[0];
                    }
                  };
                  try {
                    return /* Ok */__(0, [map(parse, to_list(match[0]))]);
                  }
                  catch (raw_exn){
                    var exn = internalToOCamlException(raw_exn);
                    if (exn[0] === ParseFail) {
                      return /* Error */__(1, ["list -> " + exn[1]]);
                    } else {
                      throw exn;
                    }
                  }
                }
              })];
  }

  function array(param) {
    var decoder = param[0];
    return /* Decoder */[(function (value) {
                var match = classify$1(value);
                if (typeof match === "number" || match.tag !== 3) {
                  return /* Error */__(1, ["Non-array value"]);
                } else {
                  var parse = function (v) {
                    var match = _1(decoder, v);
                    if (match.tag) {
                      throw [
                            ParseFail,
                            match[0]
                          ];
                    } else {
                      return match[0];
                    }
                  };
                  try {
                    return /* Ok */__(0, [map$4(parse, match[0])]);
                  }
                  catch (raw_exn){
                    var exn = internalToOCamlException(raw_exn);
                    if (exn[0] === ParseFail) {
                      return /* Error */__(1, ["array -> " + exn[1]]);
                    } else {
                      throw exn;
                    }
                  }
                }
              })];
  }

  function keyValuePairs(param) {
    var decoder = param[0];
    return /* Decoder */[(function (value) {
                var match = classify$1(value);
                if (typeof match === "number" || match.tag !== 2) {
                  return /* Error */__(1, ["Non-keyValuePair value"]);
                } else {
                  var o = match[0];
                  var keys = Object.keys(o);
                  var parse = function (k, l) {
                    var match = o[k];
                    if (match !== undefined) {
                      var match$1 = _1(decoder, match);
                      if (match$1.tag) {
                        throw [
                              ParseFail,
                              match$1[0]
                            ];
                      } else {
                        return /* :: */[
                                /* tuple */[
                                  k,
                                  match$1[0]
                                ],
                                l
                              ];
                      }
                    } else {
                      throw [
                            ParseFail,
                            "Key is undefined: " + k
                          ];
                    }
                  };
                  try {
                    return /* Ok */__(0, [fold_right$1(parse, keys, /* [] */0)]);
                  }
                  catch (raw_exn){
                    var exn = internalToOCamlException(raw_exn);
                    if (exn[0] === ParseFail) {
                      return /* Error */__(1, ["Invalid keyValuePair parsing: " + exn[1]]);
                    } else {
                      throw exn;
                    }
                  }
                }
              })];
  }

  function dict(param) {
    var decoder = param[0];
    return /* Decoder */[(function (value) {
                var match = classify$1(value);
                if (typeof match === "number" || match.tag !== 2) {
                  return /* Error */__(1, ["Non-dict value"]);
                } else {
                  var o = match[0];
                  var keys = Object.keys(o);
                  var parse = function (k, d) {
                    var match = o[k];
                    if (match !== undefined) {
                      var match$1 = _1(decoder, match);
                      if (match$1.tag) {
                        throw [
                              ParseFail,
                              match$1[0]
                            ];
                      } else {
                        return add$1(k, match$1[0], d);
                      }
                    } else {
                      throw [
                            ParseFail,
                            "Key is undefined: " + k
                          ];
                    }
                  };
                  try {
                    return /* Ok */__(0, [fold_right$1(parse, keys, /* Empty */0)]);
                  }
                  catch (raw_exn){
                    var exn = internalToOCamlException(raw_exn);
                    if (exn[0] === ParseFail) {
                      return /* Error */__(1, ["Invalid dict parsing: " + exn[1]]);
                    } else {
                      throw exn;
                    }
                  }
                }
              })];
  }

  function field(key, param) {
    var decoder = param[0];
    return /* Decoder */[(function (value) {
                var match = classify$1(value);
                if (typeof match === "number" || match.tag !== 2) {
                  return /* Error */__(1, ["Non-fieldable value"]);
                } else {
                  var match$1 = match[0][key];
                  if (match$1 !== undefined) {
                    var o = _1(decoder, match$1);
                    if (o.tag) {
                      return /* Error */__(1, ["field `" + (key + ("` -> " + o[0]))]);
                    } else {
                      return o;
                    }
                  } else {
                    return /* Error */__(1, ["Field Value is undefined: " + key]);
                  }
                }
              })];
  }

  function at(fields, dec) {
    return fold_right(field, fields, dec);
  }

  function index$2(idx, param) {
    var decoder = param[0];
    return /* Decoder */[(function (value) {
                var match = classify$1(value);
                if (typeof match === "number" || match.tag !== 3) {
                  return /* Error */__(1, ["Non-array value"]);
                } else {
                  var a = match[0];
                  if (idx < 0 || idx > a.length) {
                    return /* Error */__(1, ["Array index out of range: " + String(idx)]);
                  } else {
                    return _1(decoder, caml_array_get(a, idx));
                  }
                }
              })];
  }

  function maybe(param) {
    var decoder = param[0];
    return /* Decoder */[(function (value) {
                var match = _1(decoder, value);
                if (match.tag) {
                  return /* Ok */__(0, [undefined]);
                } else {
                  return /* Ok */__(0, [some(match[0])]);
                }
              })];
  }

  function oneOf(decoders) {
    return /* Decoder */[(function (value) {
                var parse = function (v, _param) {
                  while(true) {
                    var param = _param;
                    if (param) {
                      var rest = param[1];
                      try {
                        var ok$$1 = _1(param[0][0], v);
                        if (ok$$1.tag) {
                          return parse(v, rest);
                        } else {
                          return ok$$1;
                        }
                      }
                      catch (exn){
                        _param = rest;
                        continue ;
                      }
                    } else {
                      return /* Error */__(1, ["No one-of's matched"]);
                    }
                  }              };
                return parse(value, decoders);
              })];
  }

  function map$1$1(mapper, param) {
    var decoder1 = param[0];
    return /* Decoder */[(function (value) {
                var match = _1(decoder1, value);
                if (match.tag) {
                  return /* Error */__(1, ["map " + match[0]]);
                } else {
                  return /* Ok */__(0, [_1(mapper, match[0])]);
                }
              })];
  }

  function map2$1(mapper, param, param$1) {
    var decoder2 = param$1[0];
    var decoder1 = param[0];
    return /* Decoder */[(function (value) {
                var match = _1(decoder1, value);
                var match$1 = _1(decoder2, value);
                var exit$$1 = 0;
                if (match.tag || match$1.tag) {
                  exit$$1 = 1;
                } else {
                  return /* Ok */__(0, [_2(mapper, match[0], match$1[0])]);
                }
                if (exit$$1 === 1) {
                  var match$2 = error_of_first(match, match$1);
                  if (match$2 !== undefined) {
                    return /* Error */__(1, ["map2 -> " + match$2]);
                  } else {
                    throw [
                          failure,
                          "Impossible case"
                        ];
                  }
                }
                
              })];
  }

  function map3(mapper, param, param$1, param$2) {
    var decoder3 = param$2[0];
    var decoder2 = param$1[0];
    var decoder1 = param[0];
    return /* Decoder */[(function (value) {
                var match = _1(decoder1, value);
                var match$1 = _1(decoder2, value);
                var match$2 = _1(decoder3, value);
                var exit$$1 = 0;
                if (match.tag || match$1.tag || match$2.tag) {
                  exit$$1 = 1;
                } else {
                  return /* Ok */__(0, [_3(mapper, match[0], match$1[0], match$2[0])]);
                }
                if (exit$$1 === 1) {
                  var match$3 = first(match$2, first(match$1, match));
                  if (match$3.tag) {
                    return /* Error */__(1, ["map3 -> " + match$3[0]]);
                  } else {
                    throw [
                          failure,
                          "Impossible case"
                        ];
                  }
                }
                
              })];
  }

  function map4(mapper, param, param$1, param$2, param$3) {
    var decoder4 = param$3[0];
    var decoder3 = param$2[0];
    var decoder2 = param$1[0];
    var decoder1 = param[0];
    return /* Decoder */[(function (value) {
                var match = _1(decoder1, value);
                var match$1 = _1(decoder2, value);
                var match$2 = _1(decoder3, value);
                var match$3 = _1(decoder4, value);
                var exit$$1 = 0;
                if (match.tag || match$1.tag || match$2.tag || match$3.tag) {
                  exit$$1 = 1;
                } else {
                  return /* Ok */__(0, [_4(mapper, match[0], match$1[0], match$2[0], match$3[0])]);
                }
                if (exit$$1 === 1) {
                  var match$4 = first(match$3, first(match$2, first(match$1, match)));
                  if (match$4.tag) {
                    return /* Error */__(1, ["map4 -> " + match$4[0]]);
                  } else {
                    throw [
                          failure,
                          "Impossible case"
                        ];
                  }
                }
                
              })];
  }

  function map5(mapper, param, param$1, param$2, param$3, param$4) {
    var decoder5 = param$4[0];
    var decoder4 = param$3[0];
    var decoder3 = param$2[0];
    var decoder2 = param$1[0];
    var decoder1 = param[0];
    return /* Decoder */[(function (value) {
                var match = _1(decoder1, value);
                var match$1 = _1(decoder2, value);
                var match$2 = _1(decoder3, value);
                var match$3 = _1(decoder4, value);
                var match$4 = _1(decoder5, value);
                var exit$$1 = 0;
                if (match.tag || match$1.tag || match$2.tag || match$3.tag || match$4.tag) {
                  exit$$1 = 1;
                } else {
                  return /* Ok */__(0, [_5(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0])]);
                }
                if (exit$$1 === 1) {
                  var match$5 = first(match$4, first(match$3, first(match$2, first(match$1, match))));
                  if (match$5.tag) {
                    return /* Error */__(1, ["map5 -> " + match$5[0]]);
                  } else {
                    throw [
                          failure,
                          "Impossible case"
                        ];
                  }
                }
                
              })];
  }

  function map6(mapper, param, param$1, param$2, param$3, param$4, param$5) {
    var decoder6 = param$5[0];
    var decoder5 = param$4[0];
    var decoder4 = param$3[0];
    var decoder3 = param$2[0];
    var decoder2 = param$1[0];
    var decoder1 = param[0];
    return /* Decoder */[(function (value) {
                var match = _1(decoder1, value);
                var match$1 = _1(decoder2, value);
                var match$2 = _1(decoder3, value);
                var match$3 = _1(decoder4, value);
                var match$4 = _1(decoder5, value);
                var match$5 = _1(decoder6, value);
                var exit$$1 = 0;
                if (match.tag || match$1.tag || match$2.tag || match$3.tag || match$4.tag || match$5.tag) {
                  exit$$1 = 1;
                } else {
                  return /* Ok */__(0, [_6(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0], match$5[0])]);
                }
                if (exit$$1 === 1) {
                  var match$6 = first(match$5, first(match$4, first(match$3, first(match$2, first(match$1, match)))));
                  if (match$6.tag) {
                    return /* Error */__(1, ["map6 -> " + match$6[0]]);
                  } else {
                    throw [
                          failure,
                          "Impossible case"
                        ];
                  }
                }
                
              })];
  }

  function map7(mapper, param, param$1, param$2, param$3, param$4, param$5, param$6) {
    var decoder7 = param$6[0];
    var decoder6 = param$5[0];
    var decoder5 = param$4[0];
    var decoder4 = param$3[0];
    var decoder3 = param$2[0];
    var decoder2 = param$1[0];
    var decoder1 = param[0];
    return /* Decoder */[(function (value) {
                var match = _1(decoder1, value);
                var match$1 = _1(decoder2, value);
                var match$2 = _1(decoder3, value);
                var match$3 = _1(decoder4, value);
                var match$4 = _1(decoder5, value);
                var match$5 = _1(decoder6, value);
                var match$6 = _1(decoder7, value);
                var exit$$1 = 0;
                if (match.tag || match$1.tag || match$2.tag || match$3.tag || match$4.tag || match$5.tag || match$6.tag) {
                  exit$$1 = 1;
                } else {
                  return /* Ok */__(0, [_7(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0], match$5[0], match$6[0])]);
                }
                if (exit$$1 === 1) {
                  var match$7 = first(match$6, first(match$5, first(match$4, first(match$3, first(match$2, first(match$1, match))))));
                  if (match$7.tag) {
                    return /* Error */__(1, ["map7 -> " + match$7[0]]);
                  } else {
                    throw [
                          failure,
                          "Impossible case"
                        ];
                  }
                }
                
              })];
  }

  function map8(mapper, param, param$1, param$2, param$3, param$4, param$5, param$6, param$7) {
    var decoder8 = param$7[0];
    var decoder7 = param$6[0];
    var decoder6 = param$5[0];
    var decoder5 = param$4[0];
    var decoder4 = param$3[0];
    var decoder3 = param$2[0];
    var decoder2 = param$1[0];
    var decoder1 = param[0];
    return /* Decoder */[(function (value) {
                var match = _1(decoder1, value);
                var match$1 = _1(decoder2, value);
                var match$2 = _1(decoder3, value);
                var match$3 = _1(decoder4, value);
                var match$4 = _1(decoder5, value);
                var match$5 = _1(decoder6, value);
                var match$6 = _1(decoder7, value);
                var match$7 = _1(decoder8, value);
                var exit$$1 = 0;
                if (match.tag || match$1.tag || match$2.tag || match$3.tag || match$4.tag || match$5.tag || match$6.tag || match$7.tag) {
                  exit$$1 = 1;
                } else {
                  return /* Ok */__(0, [_8(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0], match$5[0], match$6[0], match$7[0])]);
                }
                if (exit$$1 === 1) {
                  var match$8 = first(match$7, first(match$6, first(match$5, first(match$4, first(match$3, first(match$2, first(match$1, match)))))));
                  if (match$8.tag) {
                    return /* Error */__(1, ["map8 -> " + match$8[0]]);
                  } else {
                    throw [
                          failure,
                          "Impossible case"
                        ];
                  }
                }
                
              })];
  }

  function succeed(v) {
    return /* Decoder */[(function () {
                return /* Ok */__(0, [v]);
              })];
  }

  function fail(e) {
    return /* Decoder */[(function () {
                return /* Error */__(1, [e]);
              })];
  }

  var value = /* Decoder */[(function (value) {
        return /* Ok */__(0, [value]);
      })];

  function andThen(func, param) {
    var decoder = param[0];
    return /* Decoder */[(function (value) {
                var err = _1(decoder, value);
                if (err.tag) {
                  return err;
                } else {
                  var match = _1(func, err[0]);
                  return _1(match[0], value);
                }
              })];
  }

  function lazy_(func) {
    return andThen(func, /* Decoder */[(function () {
                    return /* Ok */__(0, [/* () */0]);
                  })]);
  }

  function nullable(decoder) {
    return oneOf(/* :: */[
                $$null$1(undefined),
                /* :: */[
                  map$1$1((function (v) {
                          return some(v);
                        }), decoder),
                  /* [] */0
                ]
              ]);
  }

  function decodeValue(param, value) {
    try {
      return _1(param[0], value);
    }
    catch (raw_exn){
      var exn = internalToOCamlException(raw_exn);
      if (exn[0] === ParseFail) {
        return /* Error */__(1, [exn[1]]);
      } else {
        return /* Error */__(1, ["Unknown JSON parsing error"]);
      }
    }
  }

  function decodeEvent(param, value) {
    try {
      return _1(param[0], value);
    }
    catch (raw_exn){
      var exn = internalToOCamlException(raw_exn);
      if (exn[0] === ParseFail) {
        return /* Error */__(1, [exn[1]]);
      } else {
        return /* Error */__(1, ["Unknown JSON parsing error"]);
      }
    }
  }

  function decodeString$2(decoder, string) {
    try {
      var value = JSON.parse(string);
      return decodeValue(decoder, value);
    }
    catch (exn){
      return /* Error */__(1, ["Invalid JSON string"]);
    }
  }

  var Decoder = /* module */[
    /* ObjectDict */ObjectDict,
    /* ParseFail */ParseFail,
    /* string */string,
    /* int */$$int,
    /* float */$$float,
    /* bool */bool,
    /* null */$$null$1,
    /* list */list,
    /* array */array,
    /* keyValuePairs */keyValuePairs,
    /* dict */dict,
    /* field */field,
    /* at */at,
    /* index */index$2,
    /* maybe */maybe,
    /* oneOf */oneOf,
    /* map */map$1$1,
    /* map2 */map2$1,
    /* map3 */map3,
    /* map4 */map4,
    /* map5 */map5,
    /* map6 */map6,
    /* map7 */map7,
    /* map8 */map8,
    /* succeed */succeed,
    /* fail */fail,
    /* value */value,
    /* andThen */andThen,
    /* lazy_ */lazy_,
    /* nullable */nullable,
    /* decodeValue */decodeValue,
    /* decodeEvent */decodeEvent,
    /* decodeString */decodeString$2
  ];
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function div$2($staropt$star, $staropt$star$1, props, nodes) {
    var key = $staropt$star !== undefined ? $staropt$star : "";
    var unique = $staropt$star$1 !== undefined ? $staropt$star$1 : "";
    return fullnode("", "div", key, unique, props, nodes);
  }

  var targetValue = Decoder[/* at */12](/* :: */[
        "target",
        /* :: */[
          "value",
          /* [] */0
        ]
      ], Decoder[/* string */2]);

  var targetChecked = Decoder[/* at */12](/* :: */[
        "target",
        /* :: */[
          "checked",
          /* [] */0
        ]
      ], Decoder[/* bool */5]);

  var keyCode = Decoder[/* field */11]("keyCode", Decoder[/* int */3]);
  /* targetValue Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

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

  function create$2(resource) {
    var _t = PIXI.loader.resources;
    return nullable_to_opt(_t[resource]);
  }

  function texture(name, t) {
    return nullable_to_opt(t.textures[name]);
  }

  var Resources = /* module */[
    /* create */create$2,
    /* texture */texture
  ];

  function add$2(items, loader) {
    loader.add(items);
    return loader;
  }

  function load(cb, loader) {
    loader.load(cb);
    return loader;
  }

  function onProgress(cb, loader) {
    loader.on("progress", (function (p) {
            return _1(cb, p.progress);
          }));
    return loader;
  }

  var Loader = /* module */[
    /* PIXI.loader */PIXI.loader,
    /* add */add$2,
    /* onProgress */onProgress,
    /* load */load
  ];
  /* Loader Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function map$6(f, a) {
    if (a !== undefined) {
      return some(_1(f, valFromOption(a)));
    }
    
  }

  function andThen$1(f, a) {
    if (a !== undefined) {
      return _1(f, valFromOption(a));
    }
    
  }

  function withDefault($$default, opt) {
    if (opt !== undefined) {
      return valFromOption(opt);
    } else {
      return $$default;
    }
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function putSprite(stage, position, sprite) {
    Container[/* addChild */0](stage, /* Sprite */__(1, [sprite]));
    Sprite[/* updatePosition */0](sprite, position);
    return /* () */0;
  }

  function backgroundStage(maybePack) {
    var backgroundStage$1 = _1(Container[/* create */1], /* () */0);
    var partial_arg = Resources[/* texture */1];
    var maybeBackground = map$6((function (t) {
            return new PIXI.TilingSprite(t, 800, 600);
          }), andThen$1((function (param) {
                return partial_arg("background.png", param);
              }), maybePack));
    if (maybeBackground !== undefined) {
      putSprite(backgroundStage$1, /* tuple */[
            0,
            0
          ], valFromOption(maybeBackground));
    } else {
      console.log("No background found");
    }
    return backgroundStage$1;
  }

  var model = /* record */[
    /* renderer */undefined,
    /* textureLife */undefined,
    /* rootStage */undefined,
    /* spriteStage */undefined
  ];

  Loader[/* load */3]((function (param) {
          var t = model;
          var opts = {
            antialias: true,
            transparent: false
          };
          var renderer = PIXI.autoDetectRenderer(800, 600, opts);
          var rootStage = _1(Container[/* create */1], /* () */0);
          var spriteStage = _1(Container[/* create */1], /* () */0);
          var maybePack = Resources[/* create */0]("space/space.json");
          var partial_arg = Resources[/* texture */1];
          var textureLife = andThen$1((function (param) {
                  return partial_arg("spaceship.png", param);
                }), maybePack);
          var rootElem = document.getElementById("root");
          rootElem.appendChild(renderer.view);
          Container[/* addChild */0](rootStage, /* Container */__(2, [backgroundStage(maybePack)]));
          Container[/* addChild */0](rootStage, /* Container */__(2, [spriteStage]));
          renderer.render(rootStage);
          t[/* renderer */0] = some(renderer);
          t[/* rootStage */2] = some(rootStage);
          t[/* spriteStage */3] = some(spriteStage);
          t[/* textureLife */1] = textureLife;
          return /* () */0;
        }), Loader[/* onProgress */2]((function (p) {
              console.log(string_of_float(p));
              return /* () */0;
            }), Loader[/* add */1](/* array */["space/space.json"], Loader[/* init */0])));

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
    if (match !== undefined) {
      if (match$1 !== undefined) {
        if (match$2 !== undefined) {
          if (match$3 !== undefined) {
            var spriteStage = valFromOption(match$1);
            Container[/* clear */2](spriteStage);
            renderLife(spriteStage, cellSize, valFromOption(match$2), universe);
            return valFromOption(match$3).render(valFromOption(match));
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

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function view(model) {
    render(model[/* pixi */4], model[/* viewPort */2][/* cellSize */4], model[/* universe */0]);
    return div$2(undefined, undefined, /* [] */0, /* [] */0);
  }
  /* Tea_html Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function head(param) {
    if (param) {
      return some(param[0]);
    }
    
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE


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

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function run(callbacks, param) {
    if (typeof param === "number") {
      return /* () */0;
    } else {
      switch (param.tag | 0) {
        case 1 : 
            return fold_left((function (_, cmd) {
                          return run(callbacks, cmd);
                        }), /* () */0, param[0]);
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
        if (c === 0) {
          return t;
        } else if (c < 0) {
          return bal(add(x, l), v, r);
        } else {
          return bal(l, v, add(x, r));
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
      }  };
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
      }  };
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
        if (c === 0) {
          return /* tuple */[
                  l,
                  true,
                  r
                ];
        } else if (c < 0) {
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
                /* Empty */0,
                false,
                /* Empty */0
              ];
      }
    };
    var is_empty = function (param) {
      if (param) {
        return false;
      } else {
        return true;
      }
    };
    var mem$$1 = function (x, _param) {
      while(true) {
        var param = _param;
        if (param) {
          var c = _2(funarg[/* compare */0], x, param[1]);
          if (c === 0) {
            return true;
          } else {
            _param = c < 0 ? param[0] : param[2];
            continue ;
          }
        } else {
          return false;
        }
      }  };
    var remove = function (x, param) {
      if (param) {
        var r = param[2];
        var v = param[1];
        var l = param[0];
        var c = _2(funarg[/* compare */0], x, v);
        if (c === 0) {
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
        } else if (c < 0) {
          return bal(remove(x, l), v, r);
        } else {
          return bal(l, v, remove(x, r));
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
      if (s1 && s2) {
        var r1 = s1[2];
        var v1 = s1[1];
        var l1 = s1[0];
        var match = split$$1(v1, s2);
        var l2 = match[0];
        if (match[1]) {
          return join(inter(l1, l2), v1, inter(r1, match[2]));
        } else {
          return concat$$1(inter(l1, l2), inter(r1, match[2]));
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
          if (match[1]) {
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
      }  };
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
      }  };
    var equal = function (s1, s2) {
      return compare(s1, s2) === 0;
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
            if (c === 0) {
              if (subset(l1, l2)) {
                _s2 = r2;
                _s1 = r1;
                continue ;
              } else {
                return false;
              }
            } else if (c < 0) {
              if (subset(/* Node */[
                      l1,
                      v1,
                      /* Empty */0,
                      0
                    ], l2)) {
                _s1 = r1;
                continue ;
              } else {
                return false;
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
              return false;
            }
          } else {
            return false;
          }
        } else {
          return true;
        }
      }  };
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
      }  };
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
      }  };
    var for_all$$1 = function (p, _param) {
      while(true) {
        var param = _param;
        if (param) {
          if (_1(p, param[1]) && for_all$$1(p, param[0])) {
            _param = param[2];
            continue ;
          } else {
            return false;
          }
        } else {
          return true;
        }
      }  };
    var exists$$1 = function (p, _param) {
      while(true) {
        var param = _param;
        if (param) {
          if (_1(p, param[1]) || exists$$1(p, param[0])) {
            return true;
          } else {
            _param = param[2];
            continue ;
          }
        } else {
          return false;
        }
      }  };
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
      }  };
    var elements = function (s) {
      return elements_aux(/* [] */0, s);
    };
    var find$$1 = function (x, _param) {
      while(true) {
        var param = _param;
        if (param) {
          var v = param[1];
          var c = _2(funarg[/* compare */0], x, v);
          if (c === 0) {
            return v;
          } else {
            _param = c < 0 ? param[0] : param[2];
            continue ;
          }
        } else {
          throw not_found;
        }
      }  };
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
                              /* tuple */[
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

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function numberOfLive(neighbours) {
    return length(filter((function (param) {
                        return /* Alive */0 === param;
                      }))(neighbours));
  }

  function underPopulationRule(cell, neighbours) {
    if (cell || numberOfLive(neighbours) >= 2) {
      return /* Same */2;
    } else {
      return /* Dies */0;
    }
  }

  function livesOnRule(cell, neighbours) {
    if (cell) {
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
    if (cell || numberOfLive(neighbours) <= 3) {
      return /* Same */2;
    } else {
      return /* Dies */0;
    }
  }

  function reproductionRule(cell, neighbours) {
    if (cell && numberOfLive(neighbours) === 3) {
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
    var reducedLifeCycle = head(filter((function (param) {
                  return caml_notequal(/* Same */2, param);
                }))(actions));
    return withDefault(/* Same */2, reducedLifeCycle);
  }

  function applyRules(cell, neighbours) {
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
    applyRules(/* Alive */0, /* :: */[
          /* Dead */1,
          /* [] */0
        ]) === /* Dead */1,
    "Underpopulation"
  ];

  var applyRulesTest_001 = /* :: */[
    /* tuple */[
      applyRules(/* Alive */0, /* :: */[
            /* Alive */0,
            /* :: */[
              /* Alive */0,
              /* :: */[
                /* Dead */1,
                /* [] */0
              ]
            ]
          ]) === /* Alive */0,
      "Lives on with 2"
    ],
    /* :: */[
      /* tuple */[
        applyRules(/* Alive */0, /* :: */[
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
            ]) === /* Dead */1,
        "Overpopulation"
      ],
      /* :: */[
        /* tuple */[
          applyRules(/* Dead */1, /* :: */[
                /* Alive */0,
                /* :: */[
                  /* Alive */0,
                  /* :: */[
                    /* Alive */0,
                    /* [] */0
                  ]
                ]
              ]) === /* Alive */0,
          "reproduction"
        ],
        /* :: */[
          /* tuple */[
            applyRules(/* Dead */1, /* :: */[
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
                ]) === /* Alive */0,
            "reproduction"
          ],
          /* [] */0
        ]
      ]
    ]
  ];
  /* applyRulesTest Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

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
      return false;
    }
  }

  function findNeighbours(universe, position) {
    return map((function (prim) {
                  return prim[1];
                }), filter((function (param) {
                        return isNeighbour(position, param[0]);
                      }))(universe));
  }

  function evolveCell(universe, param) {
    var position = param[0];
    var neighbours = findNeighbours(universe, position);
    var evolvedCell = applyRules(param[1], neighbours);
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
        return match[1] === y;
      } else {
        return false;
      }
    };
    return head(filter(inBounds)(universe));
  }

  function findCell(universe, position) {
    var match = findMaybeCell(universe, position);
    if (match !== undefined) {
      return /* tuple */[
              position,
              match[1]
            ];
    } else {
      return /* tuple */[
              position,
              /* Dead */1
            ];
    }
  }

  var compare$5 = caml_compare;

  var PosSet = Make(/* module */[/* compare */compare$5]);

  function dedupe(universe) {
    var positions = map((function (prim) {
            return prim[0];
          }), universe);
    var dedupedPositions = _1(PosSet[/* elements */19], _1(PosSet[/* of_list */25], positions));
    return map((function (param) {
                  return findCell(universe, param);
                }), dedupedPositions);
  }

  function evolve(universe) {
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
      return map((function (param) {
                    return findCell(universe, param);
                  }), otherPositions(position));
    };
    var currentUniverse = dedupe(concat(map(cells, map((function (prim) {
                        return prim[0];
                      }), universe))));
    return filter((function (param) {
                    return /* Alive */0 === param[1];
                  }))(map((function (param) {
                      return evolveCell(universe, param);
                    }), currentUniverse));
  }
  /* PosSet Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

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
              /* universe */evolve(model[/* universe */0]),
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
              /* running */!model[/* running */3],
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
            ], head(filter((function (i) {
                          return i[0] === string;
                        }))(model[/* examples */1])))[1];
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

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function $$setInterval(cb, msTime) {
    return window.setInterval(cb, msTime);
  }

  function requestAnimationFrame_polyfill() {
    return (
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
    );
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function polyfills() {
    remove_polyfill(/* () */0);
    requestAnimationFrame_polyfill(/* () */0);
    return /* () */0;
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function registration(key, enableCall) {
    return /* Registration */__(1, [
              key,
              (function (callbacks) {
                  return _1(enableCall, callbacks[0]);
                }),
              /* record */[/* contents */undefined]
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
                param[2][0] = _1(param[1], callbacks);
                return /* () */0;
            case 2 : 
                var subCallbacks = _1(param[0], callbacks);
                _param = param[1];
                _callbacks = subCallbacks;
                continue ;
            
          }
        }
      }  };
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
                if (match !== undefined) {
                  diCB[0] = undefined;
                  return _1(match, /* () */0);
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
      }  };
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
            if (typeof newSub === "number" || newSub.tag) {
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
                }            };
              aux(oldSub[0], newSub[0]);
              return newSub;
            }
            break;
        case 1 : 
            if (typeof newSub === "number" || !(newSub.tag === 1 && oldSub[0] === newSub[0])) {
              exit = 1;
            } else {
              newSub[2][0] = oldSub[2][0];
              return newSub;
            }
            break;
        case 2 : 
            if (typeof newSub === "number" || newSub.tag !== 2) {
              exit = 1;
            } else {
              var olderCallbacks = _1(oldSub[0], oldCallbacks);
              var newerCallbacks = _1(newSub[0], newCallbacks);
              run$1(olderCallbacks, newerCallbacks, oldSub[1], newSub[1]);
              return newSub;
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

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function programStateWrapper(initModel, pump, shutdown) {
    var model = /* record */[/* contents */initModel];
    var callbacks = /* record */[/* contents : record */[/* enqueue */(function () {
            console.log("INVALID enqueue CALL!");
            return /* () */0;
          })]];
    var pumperInterface = _1(pump, callbacks);
    var pending = /* record */[/* contents */undefined];
    var handler = function (msg$$1) {
      var match = pending[0];
      if (match !== undefined) {
        pending[0] = /* :: */[
          msg$$1,
          match
        ];
        return /* () */0;
      } else {
        pending[0] = /* [] */0;
        var newModel = _2(pumperInterface[/* handleMsg */2], model[0], msg$$1);
        model[0] = newModel;
        var match$1 = pending[0];
        if (match$1 !== undefined) {
          var msgs = match$1;
          if (msgs) {
            pending[0] = undefined;
            return iter(handler, rev(msgs));
          } else {
            pending[0] = undefined;
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
      callbacks[0] = /* record */[/* enqueue */(function () {
            console.log("INVALID message enqueued when shut down");
            return /* () */0;
          })];
      var cmd = _1(shutdown, model[0]);
      _1(pumperInterface[/* shutdown */3], cmd);
      return /* () */0;
    };
    var render_string = function () {
      return _1(pumperInterface[/* render_string */1], model[0]);
    };
    _1(pumperInterface[/* startup */0], /* () */0);
    return {
            pushMsg: handler,
            shutdown: pi_requestShutdown,
            getHtmlString: render_string
          };
  }

  function programLoop(update, view, subscriptions, initModel, initCmd, param) {
    if (param !== undefined) {
      var parentNode = valFromOption(param);
      return (function (callbacks) {
          var priorRenderedVdom = /* record */[/* contents : [] */0];
          var latestModel = /* record */[/* contents */initModel];
          var nextFrameID = /* record */[/* contents */undefined];
          var doRender = function () {
            var match = nextFrameID[0];
            if (match !== undefined) {
              var newVdom_000 = _1(view, latestModel[0]);
              var newVdom = /* :: */[
                newVdom_000,
                /* [] */0
              ];
              var justRenderedVdom = patchVNodesIntoElement(callbacks, parentNode, priorRenderedVdom[0], newVdom);
              priorRenderedVdom[0] = justRenderedVdom;
              nextFrameID[0] = undefined;
              return /* () */0;
            } else {
              return /* () */0;
            }
          };
          var scheduleRender = function () {
            var match = nextFrameID[0];
            if (match !== undefined) {
              return /* () */0;
            } else {
              nextFrameID[0] = -1;
              return doRender(16);
            }
          };
          var clearPnode = function () {
            while(parentNode.childNodes.length > 0) {
              var match = parentNode.firstChild;
              if (match !== null) {
                parentNode.removeChild(match);
              }
              
            }          return /* () */0;
          };
          var oldSub = /* record */[/* contents : NoSub */0];
          var handleSubscriptionChange = function (model) {
            var newSub = _1(subscriptions, model);
            oldSub[0] = run$1(callbacks, callbacks, oldSub[0], newSub);
            return /* () */0;
          };
          var handlerStartup = function () {
            clearPnode(/* () */0);
            run(callbacks, initCmd);
            handleSubscriptionChange(latestModel[0]);
            nextFrameID[0] = -1;
            doRender(16);
            return /* () */0;
          };
          var render_string = function (model) {
            return renderToHtmlString(_1(view, model));
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
            nextFrameID[0] = undefined;
            run(callbacks, cmd);
            oldSub[0] = run$1(callbacks, callbacks, oldSub[0], /* NoSub */0);
            priorRenderedVdom[0] = /* [] */0;
            clearPnode(/* () */0);
            return /* () */0;
          };
          return /* record */[
                  /* startup */handlerStartup,
                  /* render_string */render_string,
                  /* handleMsg */handler,
                  /* shutdown */handlerShutdown
                ];
        });
    } else {
      return (function (callbacks) {
          var oldSub = /* record */[/* contents : NoSub */0];
          var handleSubscriptionChange = function (model) {
            var newSub = _1(subscriptions, model);
            oldSub[0] = run$1(callbacks, callbacks, oldSub[0], newSub);
            return /* () */0;
          };
          return /* record */[
                  /* startup */(function () {
                      run(callbacks, initCmd);
                      handleSubscriptionChange(initModel);
                      return /* () */0;
                    }),
                  /* render_string */(function (model) {
                      return renderToHtmlString(_1(view, model));
                    }),
                  /* handleMsg */(function (model, msg$$1) {
                      var match = _2(update, model, msg$$1);
                      var newModel = match[0];
                      run(callbacks, match[1]);
                      handleSubscriptionChange(newModel);
                      return newModel;
                    }),
                  /* shutdown */(function (cmd) {
                      run(callbacks, cmd);
                      oldSub[0] = run$1(callbacks, callbacks, oldSub[0], /* NoSub */0);
                      return /* () */0;
                    })
                ];
        });
    }
  }

  function program(param, pnode, flags) {
    polyfills(/* () */0);
    var match = _1(param[/* init */0], flags);
    var initModel = match[0];
    var opnode = (pnode == null) ? undefined : some(pnode);
    var pumpInterface = programLoop(param[/* update */1], param[/* view */2], param[/* subscriptions */3], initModel, match[1], opnode);
    return programStateWrapper(initModel, pumpInterface, param[/* shutdown */4]);
  }

  function standardProgram(param, pnode, args) {
    return program(/* record */[
                /* init */param[/* init */0],
                /* update */param[/* update */1],
                /* view */param[/* view */2],
                /* subscriptions */param[/* subscriptions */3],
                /* shutdown */(function () {
                    return /* NoCmd */0;
                  })
              ], pnode, args);
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

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
    }}

  function lineToUniserse(x, input) {
    var chars = explode(input);
    return mapi$1((function (param, param$1) {
                  return toPosition(x, param, param$1);
                }), chars);
  }

  function toUniverse(str) {
    var lines = to_list(str.split("\n"));
    return concat(mapi$1(lineToUniserse, lines));
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function create$3(positions) {
    var positionedCell = function (position) {
      return /* tuple */[
              position,
              /* Alive */0
            ];
    };
    return map(positionedCell, positions);
  }

  var blinker = create$3(/* :: */[
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

  var spaceShip = create$3(/* :: */[
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

  var pulsar = create$3(/* :: */[
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

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function every(interval, tagger) {
    var key = string_of_float(interval);
    var enableCall = function (callbacks) {
      var id = $$setInterval((function () {
              return _1(callbacks[/* enqueue */0], _1(tagger, Date.now()));
            }), interval);
      return (function () {
          return window.clearTimeout(id);
        });
    };
    return registration(key, enableCall);
  }

  var millisecond = 1.0;
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 4.0.2, PLEASE EDIT WITH CARE

  function init$4(universe) {
    return /* record */[
            /* universe */universe,
            /* examples */all,
            /* viewPort */newViewPort(0, 0, 10, 10, 35),
            /* running */true,
            /* pixi */init$3
          ];
  }

  function subscriptions(model) {
    if (model[/* running */3]) {
      return every(400 * millisecond, (function () {
                    return /* Evolve */1;
                  }));
    } else {
      return none$1;
    }
  }

  function partial_arg_000() {
    return /* tuple */[
            init$4(pulsar),
            none
          ];
  }

  var partial_arg = /* record */[
    partial_arg_000,
    /* update */update,
    /* view */view,
    /* subscriptions */subscriptions
  ];

  function main$1(param, param$1) {
    return standardProgram(partial_arg, param, param$1);
  }
  /* View Not a pure module */

  exports.init = init$4;
  exports.subscriptions = subscriptions;
  exports.main = main$1;

  return exports;

}({}));
