const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    try {
      return parts.pop().split(";").shift();
    } catch {
      return null;
    }
  }
  return null;
};


export default getCookie;