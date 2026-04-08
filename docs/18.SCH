scheme (x1 x2 x3) table (out):
 local _x1 _x2 _x3 diz1 diz2 diz3
 (x1 x2 x3) and3 (diz3)
 (x2) not (_x2)
 (x1 _x2 x3) and3 (diz2)
 (x1) not (_x1)
 (x3) not (_x3)
 (_x1 _x2 _x3) and3 (diz1)
 (diz1 diz2 diz3) or3 (out)
end
 
 
scheme (x1 x2 x3) and3 (out):
 local z
 (x1 x2) and (z)
 (z x3) and (out)
end

scheme (x1 x2 x3) or3 (out):
 local z
 (x1 x2) or (z)
 (z x3) or (out)
end