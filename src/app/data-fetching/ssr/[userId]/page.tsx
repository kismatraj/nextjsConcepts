import { getUserDetails, getUserPosts } from "@/app/_lib/users";
import UserDetails from "../UserDetails";
import { Suspense } from "react";
import UserPost from "../UserPost";
import { Metadata } from "next";

type TParam = {
  params: {
    userId: string;
  };
};

export const generateMetadata = async ({
  params: { userId },
}: TParam): Promise<Metadata> => {
  const userPromise = getUserDetails(userId);
  const user = await userPromise;
  if (!user.name) return { title: "User not found" };

  return {
    title: `${user.name}`,
    description: `${user.name} page`,
  };
};

const UserDetailPage = async ({ params: { userId } }: TParam) => {
  const userPromise = await getUserDetails(userId);
  const postsPromise = await getUserPosts(userId);
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <Suspense fallback="Loading...">
          <UserDetails promise={userPromise} />
        </Suspense>
      </div>
      <div>
        <Suspense fallback="Loading...">
          <UserPost promise={postsPromise} />
        </Suspense>
      </div>
    </div>
  );
};

export default UserDetailPage;
