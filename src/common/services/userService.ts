export const getUserList = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => error)
}
