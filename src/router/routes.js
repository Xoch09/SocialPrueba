import { home } from "../views/Home";
import { signIn } from "../views/SignIn";
import { signUp } from "../views/SignUp";
import { about } from "../views/About";
import { feed } from "../views/Feed";


const paths = {
  homeView: {
    path: '/',
    template: home,
    title: 'Outsy - Home',
  },
  aboutView: {
    path: '/about',
    template: about,
    title: 'Outsy - Conócenos',

  },
  signInView: {
    path: '/sign-in',
    template: signIn,
    title: 'Outsy - Ingresa',

  },
  signUpView: {
    path: '/sign-up',
    template: signUp,
    title: 'Outsy - Regístrate',

  },
  feedView: {
    path: '/feed',
    template: feed,
    title: 'Outsy - Muro',
  },
  createPostView: {
    path: '/post/create',
    template: post,
    title: 'Outsy - Crear Post',
  },
  editPostView: {
    path: '/post/edit',
    template: post,
    title: 'Outsy - Editar Post',
  },
  postDetailView: {
    path: '/post/detail',
    template: postDetail,
    title: 'Outsy - Post',
  },
  profileView: {
    path: '/profile',
    template: profile,
    title: 'Outsy - Perfil',
  },
};

export default paths;