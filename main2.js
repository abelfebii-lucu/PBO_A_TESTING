const pembersih = {
    bersihkan() {
        console.log(this.nama + " membersihkan ruangan.");
    }
};

const pengantar = {
    antarPaket() {
        console.log(this.nama + " mengantar paket.");
    }
};

const penjaga = {
    patroli() {
        console.log(this.nama + " berpatroli di area.");
    }
};

function applyCapabilities(Kelas, ...kemampuan) {
    Object.assign(Kelas.prototype, ...kemampuan);
}

class RobotRumah {
    constructor(nama) {
        this.nama = nama;
    }
}

class RobotKurir {
    constructor(nama) {
        this.nama = nama;
    }
}

applyCapabilities(RobotRumah, pembersih, penjaga);
applyCapabilities(RobotKurir, pengantar);

const RobotRumah_3535 = new RobotRumah("RobotRumah_3535");
const RobotKurir_3535 = new RobotKurir("RobotKurir_3535");

RobotRumah_3535.bersihkan();
RobotRumah_3535.patroli();
RobotKurir_3535.antarPaket();

const kurirBisaBersih = typeof RobotKurir_3535.bersihkan === "function";
const rumahBisaAntar = typeof RobotRumah_3535.antarPaket === "function";

console.log(RobotKurir_3535.nama + " bisa membersihkan? " + kurirBisaBersih);
console.log(RobotRumah_3535.nama + " bisa mengantar paket? " + rumahBisaAntar);