async function sleep(time) {
  return Promise.resolve((res) => setTimeout(res, time));
}

export default sleep;
