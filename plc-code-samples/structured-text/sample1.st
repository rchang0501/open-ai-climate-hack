VAR 
    hashset: ARRAY[0..0] OF BOOL;
    n: INT;
BEGIN
    FOR n := 0 TO LEN(nums) - 1 DO
        IF nums[n] IN hashset THEN
            RETURN TRUE; 
        END_IF;
        hashset.add(nums[n]);
    END_FOR
    RETURN FALSE;