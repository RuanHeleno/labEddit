import { knex } from "knex";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export abstract class BaseDatabase {
  protected static async fetchDatabaseContent() {
    const response = await axios.get(
      "https://github.com/RuanHeleno/labEddit/blob/main/backend/labEddit.db"
    ); // Substitua pela URL Raw do seu arquivo .db
    return response.data;
  }

  protected static async getConnection() {
    const dbContent = await this.fetchDatabaseContent();

    return knex({
      client: "sqlite3",
      connection: {
        filename: dbContent,
      },
      useNullAsDefault: true,
      pool: {
        min: 0,
        max: 1,
        afterCreate: (conn: any, cb: any) => {
          conn.run("PRAGMA foreign_keys = ON", cb);
        },
      },
    });
  }
}
