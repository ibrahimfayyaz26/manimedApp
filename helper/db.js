import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("cart.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists cartItems(id integer primary key,imageUri text not null,code text not null,name text not null);",
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

export const putData = (imageUri, code, name) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((t) => {
      t.executeSql(
        "insert into cartItems(imageUri,code,name)values(?,?,?)",
        [imageUri, code, name],
        (_, result) => resolve(result),
        (_, er) => reject(er)
      );
    });
  });
  return promise;
};

export const getData = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((t) => {
      t.executeSql(
        "select * from cartItems",
        [],
        (_, result) => resolve(result),
        (_, er) => reject(er)
      );
    });
  });
  return promise;
};

export const deleteData = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((t) => {
      t.executeSql(
        `delete from cartItems where id = ?;`,
        [id],
        (_, result) => resolve(result),
        (_, er) => reject(er)
      );
    });
  });
  return promise;
};
