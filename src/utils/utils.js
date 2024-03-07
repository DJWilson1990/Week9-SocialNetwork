"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function saveProfile({ formData, newProfile }) {
  const id = formData.get("user_id");
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const email = formData.get("email");
  const gender = formData.get("gender");
  const location = formData.get("location");
  const occupation = formData.get("occupation");
  console.log("utils" + formData);
  console.log("utils" + newProfile);
  let queryString = "";
  console.log(newProfile);
  if (newProfile === true) {
    queryString = `INSERT INTO users (id, first_name, last_name, email, gender, location, occupation) VALUES ('${id}', '${firstName}', '${lastName}', '${email}', '${gender}', '${location}', '${occupation}')`;
  }
  console.log(queryString);
  const result = await sql.query(queryString);
  console.log(result);
}

export async function getProfile(id) {
  try {
    const profile = (await sql`SELECT * FROM users WHERE id = ${id}`).rows[0];
    return profile;
  } catch (err) {
    return undefined;
  }
}

export async function getPosts() {
  const posts = (await sql`SELECT * FROM posts`).rows;
  return posts;
}
