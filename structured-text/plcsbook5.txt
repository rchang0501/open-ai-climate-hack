FRD (bcd_input, delay_time);
t.PRE := delay_time;
IF (test_input) THEN
t.EnableTimer := 1;
ELSE
t.EnableTimer := 0;
END_IF;
TONR(t);
set := t.DN;