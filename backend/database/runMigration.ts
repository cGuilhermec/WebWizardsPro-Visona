import fs from "fs";
import path from "path";
import { createConection } from "./connection";

(async () => {

    const client = await createConection();

    const fileDataBaseDir = path.join(__dirname, "migrations");

    console.log("Inciciando migrate ", new Date());

    fs.readdir(fileDataBaseDir, (err, files) => {

        if (err){
            console.log(err);
        }

        files.forEach(file => {
            fs.readFile(path.join(fileDataBaseDir, file), async (err, content) => {
                if (err){
                    console.log(err);
                }
                const runMigrationQuery = content.toString();
                  await client.query(runMigrationQuery);  
            })
        })
    })
    console.log("Migrate feita com sucesso! ", new Date());
})();