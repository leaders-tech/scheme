scheme (x1 x2) compare (out):
 local z
 (x1 x2) mod2 (z)
 (z x2) and (out)
end

scheme (x1 x2) mod2 (out):
 local z1 z2 z3
 (x1 x2) or (z1)
 (x1 x2) and (z2)
 (z2) not (z3)
 (z3 z1) and (out)
end