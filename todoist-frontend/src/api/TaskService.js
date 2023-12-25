const baseURL = "http://localhost:8080/api/v1/tasks";

export const fetchAll = () => {
  return fetch(baseURL);
}

export const deleteById = (id) => {
  return fetch(baseURL + `/${id}`, {method: "DELETE"});
}

export const upsert = (task) => {
  return fetch("http://localhost:8080/api/v1/tasks", {method: "POST", headers: {"Content-Type": "application/json"} , body: JSON.stringify(task)});
}