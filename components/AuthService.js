import axios from 'axios';




const AuthService = {
  
  logout: async () => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/logout');
      const { data } = response;
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default AuthService;
