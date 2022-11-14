
def ToggleHeat(month, day, HeatingUnit0, HeatingUnit1, HeatingUnit2):
    logging_string = ""
    if (month < 5 or month > 10):
        logging_string = "The heaters are on"
        HeatingUnit0.Power = 1
        if (day == 1):
            HeatingUnit1.Power = 0
            HeatingUnit2.Power = 0
        elif (day == 25 and month == 12):
            HeatingUnit1.Power = 1
            HeatingUnit2.Power = 0
        else:
            HeatingUnit1.Power = 1
            HeatingUnit2.Power = 1
    else:
        HeatingUnit0.Power = 0    
        HeatingUnit1.Power = 0
        HeatingUnit2.Power = 0
        logging_string = "The heaters are off"
        
    return logging_string