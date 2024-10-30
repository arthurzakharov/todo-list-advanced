export const getAllTodo = (shouldReject) => {
  return (
    fetch("https://dummyjson.com/todos")
      .then((d) => d.json())
      // ! Slow down response to see loading state for some time at least
      .then((data) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            shouldReject ? reject() : resolve(data);
          }, 2500);
        });
      })
  );
};
