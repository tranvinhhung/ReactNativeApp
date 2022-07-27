import Home from '~/components/Home/Home';
import Login from '~/components/Login/Login';

const publicRouter = [
  {
    path: 'Home',
    componnent: Home,
  },
  {
    path: 'Chuphinh',
    componnent: Login,
  },
];

const privateRouter = [{}];
export {publicRouter, privateRouter};
