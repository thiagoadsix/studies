// Singleton

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('A instância desse database já foi criada :)');

      return Database.database;
    }

    console.log('Criando nova instância.');

    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db = Database.getDatabase('localhost', 'thiago.adsix', '123456789');
db.connect();

const db2 = Database.getDatabase('localhost', 'thiago.adsix', '123456789');
db2.connect();
