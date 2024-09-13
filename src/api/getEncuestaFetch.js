export const getEncuestaFetch = async ({ params }) => {
  try {
    const url = `http://localhost:3844/api/v1/encuesta/${params.id}`;
    const response = await fetch(url);
    const result = await response.json();

    if (response.status !== 200) throw response;

    return { encuesta: result };
  } catch (error) {
    throw error;
  }
};
