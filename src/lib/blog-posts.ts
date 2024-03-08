import BlogPost from "@/models/blog";
import connectDB from "./connect-db";
import { stringToObjectId } from "./utils";

interface Filter {
  page?: number;
  limit?: number;
}

export async function getBlog(filter: Filter = {}) {
  try {
    await connectDB();

    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const skip = (page - 1) * limit;
    const posts = await BlogPost.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean().exec();
    const results = posts.length;

    return {
      posts: posts,
      page,
      limit,
      results,
    };
  } catch (error) {
    return { error };
  }
}


export async function createBlogPosts(title: string) {
  try {
    await connectDB();

    const post = await BlogPost.create({ title });

    return {
      post,
    };
  } catch (error) {
    return { error };
  }
}

export async function getBlogPosts(slug: string) {
  try {
    await connectDB();

    const post = await BlogPost.findOne({ slug }).lean().exec();
    if (post) {
      return {
        post,
      };
    } else {
      return { error: "post not found" };
    }
  } catch (error) {
    return { error: error };
  }
}


export async function updateBlogPosts(
  id: string,
  { title, completed }: { title?: string; completed?: boolean }
) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return { error: "post not found" };
    }

    const post = await BlogPost.findByIdAndUpdate(
      parsedId,
      { title, completed },
      { new: true }
    )
      .lean()
      .exec();

    if (post) {
      return {
        post,
      };
    } else {
      return { error: "post not found" };
    }
  } catch (error) {
    return { error };
  }
}

export async function deleteBlogPosts(id: string) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return { error: "post not found" };
    }

    const post = await BlogPost.findByIdAndDelete(parsedId).exec();

    if (post) {
      return {};
    } else {
      return { error: "post not found" };
    }
  } catch (error) {
    return { error };
  }
}
