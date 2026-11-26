class Kendaraan {
    constructor(nama) {
        this.nama = nama;
    }

    info() {
        console.log("Kendaraan: " + this.nama);
    }
}

class KendaraanBensin extends Kendaraan {
    isiBensin(liter) {
        console.log(this.nama + " mengisi bensin " + liter + " liter.");
    }
}

class KendaraanListrik extends Kendaraan {
    isiDaya(kwh) {
        console.log(this.nama + " mengisi daya " + kwh + " kWh.");
    }
}

class MobilBensin extends KendaraanBensin {}

class MobilListrik extends KendaraanListrik {}

class MotorBensin extends KendaraanBensin {}

function isiSemuaBensin(daftar) {
    daftar.forEach((x) => x.isiBensin(20));
}

function isiSemuaDaya(daftar) {
    daftar.forEach((x) => x.isiDaya(40));
}

const Avanza_3535 = new MobilBensin("Avanza_3535");
const Ioniq_3535 = new MobilListrik("Ioniq_3535");
const Beat_3535 = new MotorBensin("Beat_3535");

Avanza_3535.info();
Ioniq_3535.info();
Beat_3535.info();

isiSemuaBensin([Avanza_3535, Beat_3535]);
isiSemuaDaya([Ioniq_3535]);