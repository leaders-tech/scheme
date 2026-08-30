scheme (x1 x2 x3 x4 x5 x6 x7 x8 y1 y2 y3 y4)
       div
       (r1 r2 r3 r4 r5 r6 r7 r8 rem1 rem2 rem3 rem4):
 local n x21 x22 x23 x24
         x31 x32 x33 x34
         x41 x42 x43 x44
         x51 x52 x53 x54
         x61 x62 x63 x64
         x71 x72 x73 x74
         x81 x82 x83 x84
 () zero (n)
 (n n n n x1 n y1 y2 y3 y4) prod (r1 x21 x22 x23 x24)
 (n n n x24 x2 n y1 y2 y3 y4) prod (r2 x31 x32 x33 x34)
 (n n x33 x34 x3 n y1 y2 y3 y4) prod (r3 x41 x42 x43 x44)
 (n x42 x43 x44 x4 n y1 y2 y3 y4) prod (r4 x51 x52 x53 x54)
 (x51 x52 x53 x54 x5 n y1 y2 y3 y4) prod (r5 x61 x62 x63 x64)
 (x61 x62 x63 x64 x6 n y1 y2 y3 y4) prod (r6 x71 x72 x73 x74)
 (x71 x72 x73 x74 x7 n y1 y2 y3 y4) prod (r7 x81 x82 x83 x84)
 (x81 x82 x83 x84 x8 n y1 y2 y3 y4) prod (r8 rem1 rem2 rem3 rem4)
end

scheme (x1 x2 x3 x4 x5 y1 y2 y3 y4 y5) prod (r ost1 ost2 ost3 ost4):
 local c m1 m2 m3 m4 m5 trash
 (x1 x2 x3 x4 x5 y1 y2 y3 y4 y5) cmp5 (r)
 (y1 y2 y3 y4 y5 r) mult (m1 m2 m3 m4 m5)
 (x1 x2 x3 x4 x5 m1 m2 m3 m4 m5) minus5 (trash ost1 ost2 ost3 ost4)
end

scheme (x1 x2 x3 x4 x5 y1 y2 y3 y4 y5) cmp5 (out):
 local n br1 br2 br3 br4 br5 eq1 eq2 eq3 eq4 eq5 or1 or2 or12 ors cmp2 cmp3 cmp4 cmp5
 () zero (n)
 (x1 y1) cmp (br1)
 (x2 y2) cmp (cmp2)
 (x3 y3) cmp (cmp3)
 (x4 y4) cmp (cmp4)
 (x5 y5) cmp (cmp5)
 (n n n n x1 n n n n y1) eq5 (eq1)
 (n n n x1 x2 n n n y1 y2) eq5 (eq2)
 (n n x1 x2 x3 n n y1 y2 y3) eq5 (eq3)
 (n x1 x2 x3 x4 n y1 y2 y3 y4) eq5 (eq4)
 (x1 x2 x3 x4 x5 y1 y2 y3 y4 y5) eq5 (eq5)
 (cmp2 eq1) and (br2)
 (cmp3 eq2) and (br3)
 (cmp4 eq3) and (br4)
 (cmp5 eq4) and (br5)
 (br1 br2) or (or1)
 (br3 br4) or (or2)
 (or1 or2) or (or12)
 (or12 br5) or (ors)
 (ors eq5) or (out)
end


scheme (x1 x2 x3 x4 x5 y1 y2 y3 y4 y5) eq5 (out):
 local mod_1 mod_2 mod_3 mod_4 mod_5 not_1 not_2 not_3 not_4 not_5 or1 or2 or12
 (x1 y1) mod2 (mod_1)
 (x2 y2) mod2 (mod_2)
 (x3 y3) mod2 (mod_3)
 (x4 y4) mod2 (mod_4)
 (x5 y5) mod2 (mod_5)
 (mod_1) not (not_1)
 (mod_2) not (not_2)
 (mod_3) not (not_3)
 (mod_4) not (not_4)
 (mod_5) not (not_5)
 (not_1 not_2) and (or1)
 (not_3 not_4) and (or2)
 (or1 or2) and (or12)
 (or12 not_5) and (out)
end

scheme (x1 x2 x3 x4 x5 y1 y2 y3 y4 y5) minus5 (z1 z2 z3 z4 z5):
 local f4 f3 f2 f1
       x4_n x3_n x2_n x1_n

 (x5 y5) mod2 (z5)
 (y5 x5) cmp (f4)

 (x4 f4) mod2 (x4_n)
 (x4_n y4) mod2 (z4)
 (f4 x4 y4) calc_flag (f3)
 
 (x3 f3) mod2 (x3_n)
 (x3_n y3) mod2 (z3)
 (f3 x3 y3) calc_flag (f2)
 
 (x2 f2) mod2 (x2_n)
 (x2_n y2) mod2 (z2)
 (f2 x2 y2) calc_flag (f1)
 
 (x1 f1) mod2 (x1_n)
 (x1_n y1) mod2 (z1)
 
end

scheme (f x y) calc_flag (out):
 local c m r
 (y x) cmp (c)
 (x y) mod2 (m)
 (f m) cmp (r)
 (c r) or (out)
end

scheme (x1 x2) mod2 (out):
 local z1 z2 z3
 (x1 x2) or (z1)
 (x1 x2) and (z2)
 (z2) not (z3)
 (z3 z1) and (out)
end

scheme (a b) cmp (out):
 local l
 (b) not (l)
 (a l) and (out)
end

scheme (x1 x2 x3 x4 x5 f) mult (y1 y2 y3 y4 y5):
 (x1 f) and (y1)
 (x2 f) and (y2)
 (x3 f) and (y3)
 (x4 f) and (y4)
 (x5 f) and (y5)
end