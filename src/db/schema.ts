import {pgTable,text} from "drizzle-orm/pg-core";  


export const testings = pgTable("testings", {   
    id: text("id").notNull().primaryKey(),
    name: text("name"),
   
});    