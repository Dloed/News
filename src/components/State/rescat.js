async function getNewsData(category) {
  const bodyText = category;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: bodyText,
    redirect: "follow",
  };

  const response = await fetch(
    "https://functions.yandexcloud.net/d4eem51ndt9kdbea8pds",
    requestOptions
  );
  if (!response.ok) {
    throw new Error("Ошибка загрузки новостей: " + response.statusText);
  }
  const answer = await response.text();
  
  return answer;
}
export default getNewsData;
