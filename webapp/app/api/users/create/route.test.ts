import { expect, test } from 'vitest'
import { addOrganization, addExpert} from './route';
import pool from "../../../../lib/db";
import { fail } from 'assert';


test("AddOrganization and GetOrganization",async () => {
    //test of the actual function
    const name = "Test Organization";
    const location = "Test Location";
    const field = "Test Field";
    const description = "Test Description";
    const id = await addOrganization(name, location, field, description);   

    const result = await pool.query(
      `SELECT * FROM "Organization" WHERE organization_id = $1`,
      [id]
    );

    // Wenn ein Datensatz gefunden wurde, gib die ID zurück
    if (result.rows.length > 0) {
      expect(result.rows[0].name).toBe(name);
      expect(result.rows[0].location).toBe(location);
      expect(result.rows[0].field).toBe(field);
      expect(result.rows[0].description).toBe(description);

      await pool.query(`DELETE FROM "Organization" WHERE organization_id = $1`, [id]);
    }
    else{
      fail("Organization was not added to the database");
    }

})

test("AddExpert", async () => {
    const name = "Test Expert";
    const prename = "Test Prename";
    const title = "Test Title";
    const email = "Test Email";
    const description = "Test Description";
    const primary_organization = "Test Organization";
    const location = "Test Location";
    const network = "Test Network";
    const result = await addExpert(name, prename, title, email, description, primary_organization, location, network);
})