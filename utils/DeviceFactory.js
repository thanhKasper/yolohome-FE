class DeviceFactory {
    constructor() {
    }

    createDevice(name, loc) {
        throw "Implement something here"
    }
}

class LightFactory extends DeviceFactory {
    createDevice(name, loc, state) {
        return new DeviceLight(name, loc, state)
    }
}

class DoorFactory extends DeviceFactory {
    createDevice(name, loc, state) {
        return new DeviceDoor(name, loc, state)
    }
}

class FanFactory extends DeviceFactory {
    createDevice(name, loc, state) {
        return new DeviceFan(name, loc, state)
    }
}

class Device {
    setDeviceState(state) {
        throw "Implementing setDeviceState function"
    }

    displayState() {
        throw "Implementing displayState function"
    }
}

class DeviceLight extends Device {
    constructor(name, location, currState) {
        this.name = name
        this.location = location 
        this.state = currState
    }
}

class DeviceFan extends Device {
    constructor(name, location, currState) {
        this.name = name
        this.location = location
        this.state = currState
    }
}

class DeviceDoor extends Device {
    constructor(name, location, currState) {
        this.name = name
        this.location = location
        this.state = currState
    }
}