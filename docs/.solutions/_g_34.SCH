scheme (a1 a2 a3 a4 b1 b2 b3 b4) umn(r1 r2 r3 r4 r5 r6 r7 r8):
local   s5 s6 s7 nul k7 k6 k5 k4 l6 l5 l4 l3 m5 m4 m3 m2 vibros1 vibros2 vibros3  h1 h12 h2 h22 h3  h32 h41 h42 h5 h6 loc1 loc2 loc3 loc4 loc5 loc6 loc7 loc8 loc9 loc10 loc11 loc12 loc13 loc14 loc15 loc16 loc17 loc18 loc19 loc20 loc21 loc22 loc23 loc24 loc25 loc26
()zero(nul)
(b4 a4)and(r8)
(b4 a3)and(s7)
(b4 a2)and(s6)
(b4 a1)and(s5)
(b3 a4)and(k7)
(b3 a3)and(k6)
(b3 a2)and(k5)
(b3 a1)and(k4)
(b2 a4)and(l6)
(b2 a3)and(l5)
(b2 a2)and(l4)
(b2 a1)and(l3)
(b1 a4)and(m5)
(b1 a3)and(m4)
(b1 a2)and(m3)
(b1 a1)and(m2)
(s7 k7)sum(h6 r7)
(s6 k6)sum(loc1 loc2)
(h6 l6)sum(loc3 loc4)
(loc1 loc2 loc3 loc4)sum2(h41 h5 r6)
(h5 s5)sum(loc5 loc6)
(m5 l5)sum(loc7 loc8)
(loc5 loc6 nul k5)sum2(vibros1  loc9 loc10)
(loc9 loc10 loc7 loc8)sum2(h3 h42 h5)
(h41 h42)sum(loc11 loc12)
(k4 l4)sum(loc13 loc14)
(loc13 loc14 nul m4)sum2(vibros2 loc15 loc16)
(loc15 loc16 loc11 loc12)sum2(h2 h32 r4)
(h3 h32)sum(loc17 loc18)
(l3 m3)sum (loc19 loc20)
(loc17 loc18 loc19 loc20)sum2(h1 h22 r3)
(h2 h22)sum(loc21 loc22)
(loc21 loc22 nul m2)sum2(vibros3 h12 r2)
(h12 h1)or(r1)
end

scheme (a1 a2 a3 a4 b1 b2 b3 b4)sum4 (out1 out2 out3 out4 out5):
local loc1 loc2 loc3 loc4 loc5 loc6  loc7 loc8 nul
()zero(nul)
(a3 a4 b3 b4)sum2(loc1 out4 out5)
(a1 a2 b1 b2)sum2(loc2 loc3 loc4)
(loc1 loc4)sum(loc6 out3)
(loc6 loc3)sum(loc7 out2)
(loc7 loc2)sum(loc8 out1)
end



scheme(a1 a2 b1 b2)sum2(out1 out2 out3):
local loc1 loc2 loc3 loc4 loc5
(a2 b2)sum(loc1 out3)
(loc1 a1)sum(loc2 loc3)
(loc3 b1)sum(loc4 out2)
(loc4 loc2)sum(loc5 out1)
end

scheme(in1 in2)sum (out1 out2):
(in1 in2)and(out1)
(in1 in2)xor(out2)
end

scheme (in1 in2) xor(out):
local loc1 loc2 loc3
(in1 in2)and (loc1)
(in1 in2)or (loc2)
(loc1)not(loc3)
(loc2 loc3)and(out)

end