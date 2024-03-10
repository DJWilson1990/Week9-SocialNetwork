"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function updateProfileImage(userId, imageUrl) {
  const queryString = `UPDATE users SET image_link = '${imageUrl}' WHERE users.id = '${userId}'`;
  console.log(queryString);
  await sql.query(queryString);
}

export async function saveProfile(formData) {
  const newProfile = formData.get("new_profile");
  const id = formData.get("user_id");
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const email = formData.get("email");
  const gender = formData.get("gender");
  const location = formData.get("location");
  const occupation = formData.get("occupation");
  const about = formData.get("about");
  console.log("utils" + formData);
  console.log("utils" + newProfile);
  let queryString = "";
  console.log(newProfile);
  if (newProfile === "true") {
    queryString = `INSERT INTO users (id, first_name, last_name, email, gender, location, occupation, about) VALUES ('${id}', '${firstName}', '${lastName}', '${email}', '${gender}', '${location}', '${occupation}', '${about}')`;
  } else {
    queryString = `UPDATE users SET first_name = '${firstName}', last_name = '${lastName}', gender = '${gender}', location = '${location}', occupation = '${occupation}', about = '${about}' WHERE id = '${id}'`;
  }
  try {
    const result = await sql.query(queryString);
  } catch (error) {
    return { result: false, message: error };
  }
}

export async function getProfile(id) {
  try {
    const profile = (await sql`SELECT * FROM users WHERE id = ${id}`).rows[0];
    return profile;
  } catch (err) {
    return undefined;
  }
}

export async function savePost({ formData, newPost }) {
  const userId = formData.get("user_id");
  const postContent = formData.get("content");
  const time = new Date().toISOString();

  let queryString = `INSERT INTO posts (content, time, user_id) VALUES ('${postContent}', '${time}', '${userId}')`;
  let result = {};
  try {
    result = await sql.query(queryString);
  } catch (error) {
    result = { result: false, message: error };
  }
  revalidatePath("/timeline");
  return result;
}

//for global timeline
export async function getPosts(userId) {
  const queryString = `SELECT posts.id, posts.content, posts.time, users.id AS user_id, users.first_name, users.last_name, users.image_link, (SELECT COUNT (*) FROM likes WHERE likes.post_id = posts.id) AS total_likes, (SELECT COUNT (*) FROM likes WHERE likes.post_id = posts.id AND likes.user_id = '${userId}') AS liked FROM posts INNER JOIN users ON posts.user_id = users.id ORDER BY posts.time DESC`;

  const posts = (await sql.query(queryString)).rows;
  return posts;
}

export async function addLike(postId, userId) {
  const queryString = `INSERT INTO likes (post_id, user_id) VALUES (${postId}, '${userId}')`;
  let result = {};
  try {
    const queryResult = await sql.query(queryString);
    result = { success: true, message: queryResult };
  } catch (error) {
    result = { success: false, message: error };
  }
  revalidatePath("/timeline");
  return result;
}
