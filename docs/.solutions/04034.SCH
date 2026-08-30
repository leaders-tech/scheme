scheme (a1 a2 a3 a4 b1 b2 b3 b4) umnozhenie4
        (c1 c2 c3 c4 c5 c6 c7 c8):
        local d1 d2 d3 d4 d5 d6 d7 d8
              e1 e2 e3 e4 e5 e6 e7 e8
              f1 f2 f3 f4 f5 f6 f7 f8
              g1 g2 g3 g4 g5 g6 g7 g8
              s1 s2 s3 s4 s5 s6 s7 s8
              p1 p2 p3 p4 p5 p6 p7 p8 
              (a1 a2 a3 a4 c8) umnozhenie1 (d5 d6 d7 d8)
              (a1 a2 a3 a4 c7) umnozhenie1 (e4 e5 e6 e7)
              (a1 a2 a3 a4 c6) umnozhenie1 (f3 f4 f5 f6)
              (a1 a2 a3 a4 c5) umnozhenie1 (g2 g3 g4 g5)
              () zero (d1) 
              () zero (d2) 
              () zero (d3)
              () zero (d4)
              () zero (e1)
              () zero (e2)
              () zero (e3)
              () zero (e4)
              () zero (f1)
              () zero (f2)
              () zero (f3)
              () zero (f4)
              () zero (g1)
              () zero (g2)
              () zero (g3)
              () zero (g4)
              (d1 d2 d3 d4 d5 d6 d7 d8 e1 e2 e3 e4 e5 e6 e7 e8) slozhenie8 (s1 s2 s3 s4 s5 s6 s7 s8)
              (f1 f2 f3 f4 f5 f6 f7 f8 g1 g2 g3 g4 g5 g6 g7 g8) slozhenie8 (p1 p2 p3 p4 p5 p6 p7 p8)
              (s1 s2 s3 s4 s5 s6 s7 s8 p1 p2 p3 p4 p5 p6 p7 p8) slozhenie8 (c1 c2 c3 c4 c5 c6 c7 c8)
end              


scheme (a1 a2 a3 a4 a5 a6 a7 a8 b1 b2 b3 b4 b5 b6 b7 b8) slozhenie8
       (c1 c2 c3 c4 c5 c6 c7 c8):
       local 1 2 3 4 5 6 7 8 9 10
             (a1 a2 a3 a4 b1 b2 b3 b4) slozhenie4 (1 2 3 4 5)
             (a5 a6 a7 a8 b5 b6 b7 b8) slozhenie4 (6 c5 c6 c7 c8)
             () zero (7)
             () zero (8)
             () zero (9)
             (2 3 4 5 9 8 7 6) slozhenie4 (10 c1 c2 c3 c4)
end

scheme (in1 in2 in3 in4 in5 in6 in7 in8) slozhenie4
       (out1 out2 out3 out4 out5):
       local a1 b1 b2 b3 ac2 d1
       (in3 in4 in7 in8) dvoichnaya (a1 out4 out5)
       (in1 in2 in5 in6) dvoichnaya (b1 b2 b3)
       () zero (ac2)
       (b2 b3 ac2 a1) dvoichnaya (d1 out2 out3)
       (b1 d1) modul (out1)
end

scheme (in1 in2 in3 in4) dvoichnaya
       (out1 out2 out3):
       local loc1 loc2 loc3 loc4 loc5 loc6            
             (in4 in2) modul (out3)
             (in4 in2) and (loc1)
             (loc1 in1) modul (loc2)
             (loc2 in3) modul (out2)
             (loc1 in1) or (loc3)
             (loc1 in3) or (loc4)
             (in1 in3) or (loc5)
             (loc3 loc4) and (loc6)
             (loc6 loc5) and (out1)
end

scheme (in1 in2) modul (out):
       local a1 a2 a3
             (in1 in2) or (a1)
             (in1 in2) and (a2)
             (a2) not (a3)
             (a1 a3) and (out)
end