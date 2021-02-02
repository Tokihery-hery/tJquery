class Dog {
    constructor(name, lastname, annee) {
        this.anarana = name
        this.fanampiny = lastname
        this.taonany = annee
        this.fullName = (newYear) => {
            return new Dog('Lahatra', "fetra", newYear).calcAge(this.taonany)
        }
        this.calcAge = (yearNow) => {
            return this.taonany > yearNow ? `A ${this.taonany} has ${this.taonany - yearNow} year${this.taonany - yearNow <= 1 ? '' : 's'} to back ${yearNow}` : `After ${yearNow - this.taonany} year${yearNow - this.taonany <= 1 ? '' : 's'} is ${this.taonany} to ${yearNow}`
        }
    }
    fn = () => {
        console.log("hello " + this.taonany);
    }
    df = () => {
        console.log(new Dog("Seheno", "Stephanie", 2748).calcAge(this.taonany))
    }
}
let mombaIlayOlona = new Dog("Tokihery", "Nambinintsoa", 2009)

console.log(mombaIlayOlona.fullName(2023));
console.log(mombaIlayOlona.calcAge(2067));
mombaIlayOlona.fn()
mombaIlayOlona.df()

