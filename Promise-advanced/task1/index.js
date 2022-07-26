export const fetchUser = async (userId) => {
  try {
    const response = await fetch(`https://api.githb.com/users/${userId}`);
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    throw new Error('Failed to get user data');
  }
};
// test Data
// fetchUser('google').catch((err) => {
//   alert(err.message);
// });
