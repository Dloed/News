async function getNewsDataAll(query) {
  const bodyText = query;
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: bodyText,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://functions.yandexcloud.net/d4e6vv0f97vf0ml95l39",
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Ошибка загрузки новостей: " + response.statusText);
    }

    const answer = await response.text();

    return answer;
  } catch (error) {
    console.error("Ошибка запроса:", error);
    throw error;
  }
}

export default getNewsDataAll;
