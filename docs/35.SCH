scheme (x1 x2 x3 x4 x5 x6 x7 x8) multiple3 (out):
 local y1 y2 y3 y4 y5 y6 y7 y8 a1 a2 a3 a4 a5 a6 b2 b3 b5 b6 c1 c2 c3 c4 c5 c6 d2 d3 d5 d6 g1 g2 g3 f2 f3 e1 e2 e3 out1 out2 n
 () zero (n)
 (x1 x2) rem (y1 y2)
 (x3 x4) rem (y3 y4)
 (x5 x6) rem (y5 y6)
 (x7 x8) rem (y7 y8)
 (y1 y2 y3 y4) add2 (a1 a2 a3)
 (y5 y6 y7 y8) add2 (a4 a5 a6)
 (a2 a3) rem (b2 b3)
 (a5 a6) rem (b5 b6)
 (n a1 b2 b3) add2 (c1 c2 c3)
 (n a4 b5 b6) add2 (c4 c5 c6)
 (c2 c3) rem (d2 d3)
 (c5 c6) rem (d5 d6)
 (d2 d3 d5 d6) add2 (e1 e2 e3)
 (n e1 e2 e3) add2 (g1 g2 g3)
 (g2 g3) and (out1)
 (g2) not (f2)
 (g3) not (f3)
 (f2 f3) and (out2)
 (out1 out2) or (out)
end

scheme (x1 x2) rem (y1 y2):
 local z notz
 (x1 x2) and (z)
 (z) not (notz)
 (x1 notz) and (y1)
 (x2 notz) and (y2)
end

scheme (x1 x2 y1 y2) add2 (z1 z2 z3):
 local t2
 (x2 y2) mod2 (z3)
 (x2 y2) and (t2)
 (x1 y1 t2) mod3 (z2)
 (x1 y1 t2) bol (z1)
end

scheme (x1 x2 x3) mod3 (out):
 local z1
 (x1 x2) mod2 (z1)
 (x3 z1) mod2 (out)
end

scheme (x1 x2) mod2 (out):
 local z1 z2 z3
 (x1 x2) or (z1)
 (x1 x2) and (z2)
 (z2) not (z3)
 (z3 z1) and (out)
end

scheme (x1 x2 x3) bol (out):
 local z1 z2 z3
 (x1 x2) and (z1)
 (x2 x3) and (z2)
 (x1 x3) and (z3)
 (z1 z2 z3) or3 (out)
end

scheme (x1 x2 x3) or3 (out):
 local f
 (x1 x2) or (f)
 (f x3) or (out)
end