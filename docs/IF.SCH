scheme (in1 in2 in3) if (out):
local loc1 loc2 loc3 loc4 loc5
 (in1) not (loc1)
 (in2) not (loc2)
 (loc1 loc2 in3) and3 (loc3)
 (in1 in3) or (loc4)
 (in2 loc3) or (loc5)
 (loc4 loc5) and (out)
end

scheme (in1 in2 in3) and3 (out):
local loc1
 (in1 in2) and (loc1)
 (loc1 in3) and (out)
end