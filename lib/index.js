const fetch = require("superagent");
const apis = require("./apis.json");

module.exports = {
  cat: async function (type = "image") {
    if (type === "image") {
      const response = await fetch(apis.cat + "/cat?json=true");
      return apis.cat + response.body.url;
    } else if (type === "gif") {
      const response = await fetch(apis.cat + "/cat/gif?json=true");
      return apis.cat + response.body.url;
    } else {
      throw new ReferenceError(`\"${type}\" is not a valid reference.`);
    }
  },
  dog: async function () {
    const response = await fetch(apis.dog);
    return response.body.message;
  },
  fox: async function () {
    const response = await fetch(apis.fox);
    return response.body.image;
  },
  duck: async function () {
    const response = await fetch(apis.duck);
    return response.body.url;
  },
};
