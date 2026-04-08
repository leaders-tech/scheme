scheme (x1 x2 x3 x4 x5 x6 x7 x8) del2pow (y1 y2 y3 y4 y5 y6 y7 y8):
local a1 a2 a3 a4 a5 a6 a7 a8
      b1 b2 b3 b4 b5 b6 b7 b8
      c1 c2 c3 c4 c5 c6 c7 c8
      d1 d2 d3 d4 d5 d6 d7 d8
      e1 e2 e3 e4 e5 e6 e7 e8
      f1 f2 f3 f4 f5 f6 f7 f8

 (x1 x2 x3 x4 x5 x6 x7 x8) shift_right (a1 a2 a3 a4 a5 a6 a7 a8)
 (a1 a2 a3 a4 a5 a6 a7 a8) shift_right (b1 b2 b3 b4 b5 b6 b7 b8)
 (b1 b2 b3 b4 b5 b6 b7 b8) shift_right (c1 c2 c3 c4 c5 c6 c7 c8)
 (c1 c2 c3 c4 c5 c6 c7 c8) shift_right (d1 d2 d3 d4 d5 d6 d7 d8)
 (d1 d2 d3 d4 d5 d6 d7 d8) shift_right (e1 e2 e3 e4 e5 e6 e7 e8)
 (e1 e2 e3 e4 e5 e6 e7 e8) shift_right (f1 f2 f3 f4 f5 f6 f7 f8)
 (f1 f2 f3 f4 f5 f6 f7 f8) shift_right (y1 y2 y3 y4 y5 y6 y7 y8)
end

scheme (x1 x2 x3 x4 x5 x6 x7 x8) shift_right (y1 y2 y3 y4 y5 y6 y7 y8):
 local _x8 t21 t22 t31 t32 t41 t42 t51 t52 t61 t62 t71 t72 t81

 (x8) not (_x8)
 
 (x1 x8) and (y1)
 
 (x1 _x8) and (t21)
 (x2 x8) and (t22)
 (t21 t22) or (y2)
 
 (x2 _x8) and (t31)
 (x3 x8) and (t32)
 (t31 t32) or (y3)
 
 (x3 _x8) and (t41)
 (x4 x8) and (t42)
 (t41 t42) or (y4)
 
 (x4 _x8) and (t51)
 (x5 x8) and (t52)
 (t51 t52) or (y5)
 
 (x5 _x8) and (t61)
 (x6 x8) and (t62)
 (t61 t62) or (y6)
 
 (x6 _x8) and (t71)
 (x7 x8) and (t72)
 (t71 t72) or (y7)
 
 (x7 _x8) and (t81)
 (x8 t81) or (y8)
end