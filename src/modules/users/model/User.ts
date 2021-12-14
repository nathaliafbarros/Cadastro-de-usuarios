import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  update_at: Date;

  constructor() {
    // Vou criar esse construtor para que se evite criar um id novo ao querer fazer uma edição por exemplo.
    // Então sempre que essa classe for instanciada, vai ocorrer essa verificação para saber se o
    // id já existe ou não.
    if (!this.id) {
      this.id = uuidV4();
    }
    // admin deve sempre ser iniciada como false
    this.admin = false;
  }
}

export { User };
