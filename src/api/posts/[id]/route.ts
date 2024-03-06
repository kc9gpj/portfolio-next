import connectDB from "@/lib/connect-db";
import { getBlogPosts, deleteBlogPosts, createBlogPosts, updateBlogPosts } from "@/lib/blog-posts";
import { createErrorResponse } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const id = params.id;
    const data: any = await getBlogPosts(id);

    // if (error) {
    //   throw error;
    // }

    let json_response = {
      status: "success",
      data: {
        data,
      },
    };
    return NextResponse.json(json_response);
  } catch (error: any) {
    if (typeof error === "string" && error.includes("Todo not found")) {
      return createErrorResponse("Todo not found", 404);
    }

    return createErrorResponse(error.message, 500);
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const id = params.id;
    let body = await request.json();

    const data: any = await updateBlogPosts(id, body);

    // if (error) {
    //   throw error;
    // }

    let json_response = {
      status: "success",
      data: {
        data,
      },
    };
    return NextResponse.json(json_response);
  } catch (error: any) {
    if (typeof error === "string" && error.includes("Todo not found")) {
      return createErrorResponse("Todo not found", 404);
    }

    return createErrorResponse(error.message, 500);
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const id = params.id;
    const data = await deleteBlogPosts(id);
    console.log(data)
    // if (error) {
    //   throw error;
    // }

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    if (typeof error === "string" && error.includes("Todo not found")) {
      return createErrorResponse("Todo not found", 404);
    }

    return createErrorResponse(error.message, 500);
  }
}
