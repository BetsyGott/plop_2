// VV MLAB const is pointing to ~/.bash_profile MERN variable, which has the full login string for mlab
const config = {
  mongoURL: process.env.MLAB,
  port: process.env.PORT || 8000,
};

export default config;
