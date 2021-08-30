import Knex from "knex";
export class KnexDB{
    db!: Knex;
    private initialized!: boolean;
    private knexConfig: Knex.Config;

    constructor(){
        this.knexConfig={};
        console.log("knex init started");
    }
    init():Promise<boolean>{
        return new Promise(async(resolve, reject)=>{
            if(this.initialized == true)
                resolve(true);

            this.knexConfig = {
                client:"pg",
                connection: process.env.POSTGRES_URL || "",
                pool:{
                    min:1,
                    max:3
                },
            };

            this.db = Knex(this.knexConfig);
            this.initialized = true;
            resolve(true);
        });
    }
}
const knexDB = new KnexDB();
export default knexDB;