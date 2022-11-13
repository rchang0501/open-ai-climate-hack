def check_power(self):
        """Poll for power consumption. If it fails once,
            assume it's not supported, and don't try again"""
        import wideq

        if not self._has_power:
            return

        try:
            power = self._ac.get_power()
            if power:
                self._attrs['power'] = power
                self._has_power = True
        except wideq.InvalidRequestError:
            LOGGER.info('Power consumption not available.')
            self._has_power = False