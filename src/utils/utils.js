"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function updateProfileImage(userId, imageUrl) {
  const queryString = `UPDATE users SET image_link = '${imageUrl}' WHERE users.id = '${userId}'`;
  console.log(queryString);
  await sql.query(queryString);
}

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
  try {
    const result = await sql.query(queryString);
    console.log("==================" + result);
  } catch (error) {
    console.log("================" + error);
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
    console.log("==================" + result);
  } catch (error) {
    console.log("================" + error);
    result = { result: false, message: error };
  }
  revalidatePath("/timeline");
  return result;
}

//for global timeline
export async function getPosts() {
  const posts = (
    await sql`SELECT posts.id, posts.content, posts.time, users.id AS user_id, users.first_name, users.last_name, users.image_link, (SELECT COUNT (*) FROM likes WHERE likes.post_id = posts.id) AS total_likes FROM posts INNER JOIN users ON posts.user_id = users.id ORDER BY posts.time DESC`
  ).rows;
  return posts;
}

//for profile timeline
export async function getUserPosts(userId) {
  const userPosts = (
    await sql`SELECT posts.id, posts.content, posts.time, users.id AS user_id, users.first_name, users.last_name, users.image_link, (SELECT COUNT (*) FROM likes WHERE likes.post_id = posts.id) AS total_likes FROM posts INNER JOIN users ON posts.user_id = users.id WHERE posts.user_id = ${userId} ORDER BY posts.time DESC`
  ).rows;

  return userPosts;
}

export async function addLike(postId, userId) {
  const queryString = `INSERT INTO likes (post_id, user_id) VALUES (${postId}, '${userId}')`;

  console.log(queryString);

  let result = {};
  const queryResult = await sql.query(queryString);
  // try {
  //   const queryResult = await sql.query(queryString);
  //   // console.log("=========pass=========" + queryResult);
  //   result = { success: true, message: queryResult };
  // } catch (error) {
  //   // console.log("=========error=======" + error);
  //   result = { success: false, message: error };
  // }

  // return result;
}
