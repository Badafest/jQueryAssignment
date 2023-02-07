export default async () => {
  try {
    const { data } = await axios.get("http://localhost:8000/students");
    return data;
  } catch (error) {
    console.log(error);
  }
};
