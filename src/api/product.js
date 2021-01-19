import axios from 'axios';

export const getProducts = async () => {
  try {
    const { data } = await axios.get(
      'https://pokeapi.co/api/v2/pokemon',
    );
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getProductById = async ({ queryKey }) => {
  const [, { id }] = queryKey;
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};
