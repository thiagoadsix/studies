type User = {
  username: string;
  password: string;
};

type VerifyUserFn = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const dbUser = { username: 'Thiago', password: '123456' };
const sentUser = { username: 'Thiago', password: '123456' };

const logedIn = verifyUser(dbUser, sentUser);

console.log(logedIn);

export { verifyUser };
