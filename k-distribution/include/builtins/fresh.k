// Copyright (c) 2014-2016 K Team. All Rights Reserved.

module FRESH-HOOKS
  imports STRING-SYNTAX-HOOKS
  syntax KItem ::= fresh(String)   [function, hook(KREFLECTION.fresh), impure]
endmodule

