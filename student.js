class Student {
    ime = ""
    adresa = ""
    telefon = ""
    kurs = ""

    constructor(ime, adresa, telefon, kurs) {
        this.ime = ime
        this.adresa = adresa
        this.telefon = telefon
        this.kurs = kurs
    }

    getInfo = () => {
        return `
        <p>Ime: ${this.ime}</p>
        <p>Adresa: ${this.adresa}</p>
        <p>Telefon: ${this.telefon}</p>
        <p>Kurs: ${this.kurs}</p>
        `
    }
}

