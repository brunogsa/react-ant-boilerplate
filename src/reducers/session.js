function sessionReducer() {
  const jwt = 'dummyjwt';
  const isLogged = true;

  const session = {
    isLogged,
    jwt,
  };

  return session;
}

export default sessionReducer;
