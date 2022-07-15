import { App, Credentials } from 'realm-web';

const id = process.env.NEXT_PUBLIC_MONGO_APP_ID;

if (!id) {
  throw Error('Missing NEXT_PUBLIC_MONGO_APP_ID environment variable');
}

const app = new App({
  id,
});

export const getValidAccessToken = async () => {
  if (!app.currentUser) {
    await app.logIn(Credentials.anonymous());
  } else {
    await app.currentUser.refreshCustomData();
  }

  return app.currentUser!.accessToken!;
};
