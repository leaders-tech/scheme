scheme (x1 x2 x3 x4) diff (out):
 local z1 z2
 (x1 x2) mod2 (z1)
 (x3 x4) mod2 (z2)
 (z1 z2) mod2 (out)
end

scheme (x1 x2) mod2 (out):
 local z1 z2 z3
 (x1 x2) or (z1)
 (x1 x2) and (z2)
 (z2) not (z3)
 (z3 z1) and (out)
end