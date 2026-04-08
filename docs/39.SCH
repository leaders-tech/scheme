scheme (x1 x2 x3 x4 x5 x6 x7 x8) sort8 (z1 z2 z3 z4 z5 z6 z7 z8):
local a1 a2 a3 a4 a5 a6 a7 a8
      b1 b2 b3 b4
      c1
      d1 d2 d3 d4 d5 d6
      e1 e2 e3 e4
      f1
      g1 g2 g3 g4 g5 g6
      h1 h2
      j1
      i1 i2 i3 i4
      k1 k2
      l1
      m1 m2 m3 m4
      n1
      o1 o2
      p1
      
 (x1 x2) sort2 (a1 a2)
 (x3 x4) sort2 (a3 a4)
 (x5 x6) sort2 (a5 a6)
 (x7 x8) sort2 (a7 a8)
 (a1 a3) sort2 (b1 b2)
 (a5 a7) sort2 (b3 b4)
 (b1 b3) sort2 (z1 c1)
 
 (a2 a4) sort2 (d1 d2)
 (a6 a8) sort2 (d3 d4)
 (b2 b4) sort2 (d5 d6)
 (d1 d3) sort2 (e1 e2)
 (d5 c1) sort2 (e3 e4)
 (e1 e3) sort2 (z2 f1)
 
 (d2 d4) sort2 (g1 g2)
 (d6 e2) sort2 (g3 g4)
 (e4 f1) sort2 (g5 g6)
 (g1 g3) sort2 (h1 h2)
 (g5 h1) sort2 (z3 j1)

 (g2 g4) sort2 (i1 i2)
 (g6 h2) sort2 (i3 i4)
 (i1 i3) sort2 (k1 k2)
 (k1 j1) sort2 (z4 l1)
 
 (i2 i4) sort2 (m1 m2)
 (k2 l1) sort2 (m3 m4)
 (m1 m3) sort2 (z5 n1)
 
 (m2 m4) sort2 (o1 o2)
 (o1 n1) sort2 (z6 p1)
 
 (o2 p1) sort2 (z7 z8)
end

scheme (x1 x2) sort2 (out1 out2):
 (x1 x2) or (out2)
 (x1 x2) and (out1)
end