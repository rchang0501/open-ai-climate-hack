// all plcs book examples come from here: http://www.infoplc.net/files/descargas/rockwell/infoplc_net_plc_st.pdf

FUNCTION sample
INPUT_VAR
start : BOOL; (* a NO start input *)
stop : BOOL; (* a NC stop input *)
END_VAR
OUTPUT_VAR
motor : BOOL;(* a motor control relay
*)
END_VAR
motor := (motor + start) * stop;(* get the motor output *)
END_FUNCTION