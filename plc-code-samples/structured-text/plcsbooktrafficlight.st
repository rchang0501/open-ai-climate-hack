SBR();
IF S:FS THEN
state := 0;
green_EW.TimerEnable := 1;
yellow_EW.TimerEnable := 0;
green_NS.TimerEnable := 0;
yellow_NS.TimerEnable := 0;
END_IF;
TONR(green_EW); TONR(yellow_EW);
TONR(green_NS); TONR(yellow_NS);
CASE state OF
0: IF green_EW.DN THEN
state :=1;
green_EW.TimerEnable := 0;
yellow_EW.TimerEnable := 1;
END_IF
1: IF yellow_EW.DN THEN
state :=2;
yellow_EW.TimerEnable := 0;
green_NS.TimerEnable := 1;
END_IF
2: IF green_NS.DN THEN
state :=3;
green_NS.TimerEnable := 0;
yellow_NS.TimerEnable := 1;
END_IF
3: IF yellow_NS.DN THEN
state :=0;
yellow_NS.TimerEnable := 0;
green_EW.TimerEnable := 1;
END_IF
light_EW_green := (state = 0);
light_EW_yellow := (state = 1);
light_EW_red := (state = 2) OR (state = 3);
light_NS_green := (state = 2);
light_NS_yellow := (state = 3);
light_NS_red := (state = 0) OR (state = 1);
RET();