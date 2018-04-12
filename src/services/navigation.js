import routes from '../routes';

function to(history, url) {
  history.push(url);
}

function toLoginPage(history) {
  to(history, routes.login);
}

function toSignUpPage(history) {
  to(history, routes.signUp);
}

function toDashboardPage(history) {
  to(history, routes.dashboard);
}

export default {
  to,
  toLoginPage,
  toSignUpPage,
  toDashboardPage,
};
