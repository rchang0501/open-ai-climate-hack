# this is a snippet taken from: https://github.com/sampsyo/hass-smartthinq/blob/master/climate.py

def _ac_devices(hass, client, fahrenheit):
    """Generate all the AC (climate) devices associated with the user's
    LG account.
    Log errors for devices that can't be used for whatever reason.
    """
    import wideq

    persistent_notification = hass.components.persistent_notification

    for device in client.devices:
        if device.type == wideq.DeviceType.AC:
            try:
                d = LGDevice(client, device, fahrenheit)
            except wideq.NotConnectedError:
                LOGGER.error(
                    'SmartThinQ device not available: %s', device.name
                )
                persistent_notification.async_create(
                    'SmartThinQ device not available: %s' % device.name,
                    title='SmartThinQ Error',
                )
            else:
                yield d