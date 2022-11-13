// all plcs book examples come from here: http://www.infoplc.net/files/descargas/rockwell/infoplc_net_plc_st.pdf

avg = 0
i = 0
while i < 5:
    avg = avg + f[i]
    i = i + 1
avg = avg / 5