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
  const about = formData.get("about");
  console.log("utils" + formData);
  console.log("utils" + newProfile);
  let queryString = "";
  console.log(newProfile);
  if (newProfile === true) {
    queryString = `INSERT INTO users (id, first_name, last_name, email, gender, location, occupation, about) VALUES ('${id}', '${firstName}', '${lastName}', '${email}', '${gender}', '${location}', '${occupation}', '${about}')`;
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

export async function savePost({ formData, newPost }) {
  const userId = formData.get("user_id");
  const postContent = formData.get("content");
  const time = new Date().toDateString();

  console.log("~~~~~~" + userId);
  console.log("~~~~~~" + postContent);
  console.log("~~~~~~" + time);
  // console.log("utils" + formData);
  // console.log("utils" + newPost);

  let queryString = `INSERT INTO posts (content, time, user_id) VALUES ('${postContent}', '${time}', '${userId}')`;

  console.log(queryString);

  const result = await sql.query(queryString);
}

//for global timeline
export async function getPosts() {
  const posts = (
    await sql`SELECT posts.content, posts.time, users.first_name, users.last_name FROM posts INNER JOIN users ON posts.user_id = users.id`
  ).rows;
  return posts;
}

//for profile timeline
export async function getUserPosts(userId) {
  const userPosts = (
    await sql`SELECT posts.content, posts.time, users.first_name, users.last_name FROM posts INNER JOIN users ON posts.user_id = users.id WHERE posts.user_id = userId`
  ).rows;
  console.log("test log" + userPosts);
  return userPosts;
}
