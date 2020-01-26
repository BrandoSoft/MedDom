class Device {
    constructor(name, parts) {
        this.name = name;
        this.parts = parts;
    }
    getParts() {
        return this.parts;
    }
}

const PSM50 = new Device("PSM 50 HV", [
    'czarmander',
    'uziemiacz',
    'diody',
    'prawa strona',
    'lewa strona',
    'radiator',
    'prostownik',
])