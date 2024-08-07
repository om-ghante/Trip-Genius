import { useCookies } from 'react-cookie';
//import jwt_decode from 'jwt-decode'; // Import as a named import

const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['jwtToken']);

  const isAuthenticated = () => {
    const token = cookies.jwtToken;
    if (token) {
      try {
        const decoded = jwt_decode(token);
        // Check if token is expired
        if (decoded.exp * 1000 > Date.now()) {
          return true;
        } else {
          removeCookie('jwtToken');
          return false;
        }
      } catch (error) {
        return false;
      }
    }
    return false;
  };

  const login = (token) => {
    setCookie('jwtToken', token, { path: '/' });
  };

  const logout = () => {
    removeCookie('jwtToken', { path: '/' });
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
