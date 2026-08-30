scheme (x1 x2 x3 x4 y1 y2 y3 y4) mult (z1 z2 z3 z4 z5 z6 z7 z8):
local n a1 a2 a3 b1 b2 b3 b4 c1 c2 c3 c4 d1 d2 d3 d4 p1 p2 p3 p4 q1 q2 q3 q4
 () zero (n)
 (x1 x2 x3 x4 y4) and_4 (a1 a2 a3 z8)
 (x1 x2 x3 x4 y3) and_4 (b1 b2 b3 b4)
 (x1 x2 x3 x4 y2) and_4 (c1 c2 c3 c4)
 (x1 x2 x3 x4 y1) and_4 (d1 d2 d3 d4)
 (n a1 a2 a3 b1 b2 b3 b4) add4 (p1 p2 p3 p4 z7)
 (p1 p2 p3 p4 c1 c2 c3 c4) add4 (q1 q2 q3 q4 z6)
 (q1 q2 q3 q4 d1 d2 d3 d4) add4 (z1 z2 z3 z4 z5)
end

scheme (x1 x2 x3 x4 y) and_4 (y1 y2 y3 y4):
 (x1 y) and (y1)
 (x2 y) and (y2)
 (x3 y) and (y3)
 (x4 y) and (y4)
end

scheme (x1 x2 x3 x4 y1 y2 y3 y4) add4 (z z1 z2 z3 z4):
 local t1 t2 t3 t4 t5 null
 () zero (null)
 (x3 x4 y3 y4) add2 (t4 z3 z4)
 (x1 x2 y1 y2) add2 (t1 t2 t3)
 (t2 t3 null t4) add2 (t5 z1 z2)
 (t5 t1) or (z)
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