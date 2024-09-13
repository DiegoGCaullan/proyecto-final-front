export const getEncuestasFetch = async () => {
  try {
    const url = "http://localhost:3844/api/v1/encuesta";
    const response = await fetch(url);
    const result = await response.json();
    if (response.status !== 200) throw response;
    return { encuestas: result };
  } catch (error) {
    throw error;
  }
};
