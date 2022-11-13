if (results.HVAC_POWER):
	MyHVAC_cmd.Power = MyHVAC_cmd.HVAC_Power.On
else:
	MyHVAC_cmd.Power = MyHVAC_cmd.HVAC_Power.Off

# Parse HVAC Clim Mode	
if (results.HVAC_CLIMATE_CODE[0:1] == 'C'):
	MyHVAC_cmd.Mode	= MyHVAC_cmd.HVAC_Mode.Cold
elif (results.HVAC_CLIMATE_CODE[0:1] == 'H'):
	MyHVAC_cmd.Mode	= MyHVAC_cmd.HVAC_Mode.Hot
elif (results.HVAC_CLIMATE_CODE[0:1] == 'D'):
	MyHVAC_cmd.Mode	= MyHVAC_cmd.HVAC_Mode.Dry
else:
	MyHVAC_cmd.Mode	= MyHVAC_cmd.HVAC_Mode.Auto

# Parse HVAC Fan Mode
if (results.HVAC_FAN_MODE[0:1] == 'S'):
	MyHVAC_cmd.Fan	= MyHVAC_cmd.HVAC_Fan.Silent
elif (results.HVAC_FAN_MODE[0:1] == '1'):
	MyHVAC_cmd.Fan	= MyHVAC_cmd.HVAC_Fan.Speed1
elif (results.HVAC_FAN_MODE[0:1] == '2'):
	MyHVAC_cmd.Fan	= MyHVAC_cmd.HVAC_Fan.Speed2
elif (results.HVAC_FAN_MODE[0:1] == '3'):
	MyHVAC_cmd.Fan	= MyHVAC_cmd.HVAC_Fan.Speed3
elif (results.HVAC_FAN_MODE[0:1] == '4'):
	MyHVAC_cmd.Fan	= MyHVAC_cmd.HVAC_Fan.Speed4
elif (results.HVAC_FAN_MODE[0:1] == '5'):
	MyHVAC_cmd.Fan	= MyHVAC_cmd.HVAC_Fan.Speed5
else:
	MyHVAC_cmd.Fan	= MyHVAC_cmd.HVAC_Fan.Auto

# Parse HVAC_Vanne	Mode / HVAC_VANNE_V_CODE
if (results.HVAC_FAN_MODE[0:1] == 'S'):
	MyHVAC_cmd.Vanne	= MyHVAC_cmd.HVAC_Vanne.Swing
elif (results.HVAC_FAN_MODE[0:2] == 'B'):
	MyHVAC_cmd.Vanne	= MyHVAC_cmd.HVAC_Vanne.H5
elif (results.HVAC_FAN_MODE[0:1] == 'T'):
	MyHVAC_cmd.Vanne	= MyHVAC_cmd.HVAC_Vanne.H1
else:
	MyHVAC_cmd.Vanne	= MyHVAC_cmd.HVAC_Vanne.Auto

# Parse Temperature
MyHVAC_cmd.Temp	= results.HVAC_TEMPERATURE