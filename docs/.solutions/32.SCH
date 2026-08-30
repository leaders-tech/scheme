scheme (x1 x2 x3 x4 y1 y2 y3 y4) add4 (z z1 z2 z3 z4):
 local t1 t2 t3 t4 t5 n
 () zero (n)
 (x3 x4 y3 y4) add2 (t4 z3 z4)
 (x1 x2 y1 y2) add2 (t1 t2 t3)
 (t2 t3 n t4) add2 (t5 z1 z2)
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