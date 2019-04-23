export class Client {
// FIXME Hacer que se puedan leer y modificar estas propiedades
  public  _id: string;
  public name: string;
  public sex: string;
  public birthdate: string;
  public telephone: string;
  public email: string;
  public registration_date: string;

  constructor() {
   this._id = null;
   this.name = null;
   this.sex = null;
   this.birthdate = null;
   this.telephone = null;
   this.email = null;
   this.registration_date = null;
  }
}
