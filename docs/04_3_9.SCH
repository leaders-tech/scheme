scheme (in1 in2 in3 in4 in5 in6 in7 in8)
_program (out1 out2 out3 out4 out5 out6 out7 out8):
local loc1_0_0 loc1_0_1 loc1_0_2 loc1_0_3 loc1_0_4 loc1_0_5
      loc2_1_0 loc2_1_1 loc2_1_2 loc2_1_3 loc2_1_4 loc2_1_5
      loc3_1_0 loc3_2_0 loc3_2_1 loc3_2_2 loc3_2_3 loc3_2_4
      loc4_1_0 loc4_2_0 loc4_3_0 loc4_3_1 loc4_3_2 loc4_3_3
      loc5_1_0 loc5_2_0 loc5_3_0 loc5_4_0 loc5_4_1 loc5_4_2
      loc6_1_0 loc6_2_0 loc6_3_0 loc6_4_0 loc6_5_0 loc6_5_1
      loc7_1_0 loc7_2_0 loc7_3_0 loc7_4_0 loc7_5_0 loc7_6_0
      loc8_1_0 loc8_2_0 loc8_3_0 loc8_4_0 loc8_5_0 loc8_6_0
      
(in1 in2)      so (loc1_0_0 loc2_1_0)
(loc1_0_0 in3) so (loc1_0_1 loc3_1_0)
(loc1_0_1 in4) so (loc1_0_2 loc4_1_0)
(loc1_0_2 in5) so (loc1_0_3 loc5_1_0)
(loc1_0_3 in6) so (loc1_0_4 loc6_1_0)
(loc1_0_4 in7) so (loc1_0_5 loc7_1_0)
(loc1_0_5 in8) so (out1     loc8_1_0)

(loc2_1_0 loc3_1_0) so (loc2_1_1 loc3_2_0)
(loc2_1_1 loc4_1_0) so (loc2_1_2 loc4_2_0)
(loc2_1_2 loc5_1_0) so (loc2_1_3 loc5_2_0)
(loc2_1_3 loc6_1_0) so (loc2_1_4 loc6_2_0)
(loc2_1_4 loc7_1_0) so (loc2_1_5 loc7_2_0)
(loc2_1_5 loc8_1_0) so (out2     loc8_2_0)

(loc3_2_0 loc4_2_0) so (loc3_2_1 loc4_3_0)
(loc3_2_1 loc5_2_0) so (loc3_2_2 loc5_3_0)
(loc3_2_2 loc6_2_0) so (loc3_2_3 loc6_3_0)
(loc3_2_3 loc7_2_0) so (loc3_2_4 loc7_3_0)
(loc3_2_4 loc8_2_0) so (out3     loc8_3_0)

(loc4_3_0 loc5_3_0) so (loc4_3_1 loc5_4_0)
(loc4_3_1 loc6_3_0) so (loc4_3_2 loc6_4_0)
(loc4_3_2 loc7_3_0) so (loc4_3_3 loc7_4_0)
(loc4_3_3 loc8_3_0) so (out4     loc8_4_0)

(loc5_4_0 loc6_4_0) so (loc5_4_1 loc6_5_0)
(loc5_4_1 loc7_4_0) so (loc5_4_2 loc7_5_0)
(loc5_4_2 loc8_4_0) so (out5     loc8_5_0)

(loc6_5_0 loc7_5_0) so (loc6_5_1 loc7_6_0)
(loc6_5_1 loc8_5_0) so (out6     loc8_6_0)

(loc7_6_0 loc8_6_0) so (out7 out8)
end

scheme (in1 in2) so (out9 out10):
(in1 in2) and (out9)
(in1 in2) or (out10)
end