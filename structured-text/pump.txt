(* This routine will start the pump when the control valve is open and stop the pump when the control valve is closed or not open*)
IF #ControlValve1_Closed = false AND #ControlValve1_Open = True THEN
    #Pump_Start := True;
ELSIF #ControlValve1_Closed = true OR #ControlValve1_Open = False THEN
    #Pump_Start := False;
END_IF;