import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import TotalUserClient from '../components/TotalUserClient';


const USERS_PER_PAGE = 500;

const TotalUserPage = async ({ searchParams }) => {
  const page = parseInt(searchParams.page || '1');
  const skip = (page - 1) * USERS_PER_PAGE;

  const db = await dbConnect(collectionNameObj.userCollections);
  const totalUsers = await db.countDocuments();
  const users = await db.find({}).skip(skip).limit(USERS_PER_PAGE).toArray();
  const totalPages = Math.ceil(totalUsers / USERS_PER_PAGE);

  // Format _id and createdAt for serialization
  const formattedUsers = users.map((user) => ({
    ...user,
    _id: user._id.toString(),
    createdAt: user.createdAt ? new Date(user.createdAt).toISOString() : null,
  }));

  return (
    <TotalUserClient
      users={formattedUsers}
      totalUsers={totalUsers}
      totalPages={totalPages}
      currentPage={page}
      skip={skip}
    />
  );
};

export default TotalUserPage;
