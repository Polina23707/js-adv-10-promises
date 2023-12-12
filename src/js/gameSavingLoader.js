import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      setTimeout(() => {
        read()
        .then(function(response) {
          return json(response);
        })
        .then(function(response) {
          resolve(response);
        })
      }, 500)
    })
  }
}