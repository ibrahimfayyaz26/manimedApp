import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("cart.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists cart(id integer primary key,imageUri text not null,code text not null,name text not null, size text not null, stuff text not null, qty integer not null);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
