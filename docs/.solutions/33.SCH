scheme (x1 x2 x3 x4 y1 y2 y3 y4) cmp4 (out):
 local l1 l2 l3 l4
 (x1 x2 y1 y2) cmp2 (l1)
 (x1 x2 y1 y2) eq2 (l2)
 (x3 x4 y3 y4) cmp2 (l3)
 (l2 l3) and (l4)
 (l1 l4) or (out)
end

scheme (x1 x2 y1 y2) cmp2 (out):
 local l1 l2 l3 l4
 (x1 y1) cmp1 (l1)
 (x1 y1) eq1 (l2)
 (x2 y2) cmp1 (l3)
 (l2 l3) and (l4)
 (l1 l4) or (out)
end

scheme (x1 x2 y1 y2) eq2 (out):
 local l1 l2
 (x1 y1) eq1 (l1)
 (x2 y2) eq1 (l2)
 (l1 l2) and (out)
end

scheme (a b) cmp1 (out):
 local l
 (b) not (l)
 (a l) and (out)
end

scheme (a b) eq1 (out):
 local l1 l2 l3
 (a b) and (l1)
 (a b) or (l2)
 (l2) not (l3)
 (l1 l3) or (out)
end