scheme (x y) gr (out):
 local loc
 (x y) impl (loc)
 (loc) not (out)
end


scheme (x1 x2) equal (out):
 local loc
 (x1 x2) mod2 (loc)
 (loc) not (out)
end


scheme (x1 x2) impl (out):
 local loc
 (x1) not (loc)
 (loc x2) or (out)
end


scheme (x1 x2 x3) or_3 (out):
 local loc
 (x1 x2) or (loc)
 (loc x3) or (out)
end


scheme (x1 x2) mod2 (out):
 local loc1 loc2 loc3
 (x1 x2) or (loc1)
 (x1 x2) and (loc2)
 (loc2) not (loc3)
 (loc1 loc3) and (out)
end