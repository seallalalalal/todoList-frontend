import React from "react";

const TASK = {
  name: "default String",
  owner: "default User",
  due: "default Date",
  description: "default String",
  comment: ["default Comment"],
};

const MOCK = {
  TASK: [
    {
      id: "uuid",
      name: "task1",
      owner: "User",
      due: "2020/03/10 01:11",
      description: "String",
      comment: ["Comment"],
    },
    {
      id: "uuid",
      name: "task2",
      owner: "User",
      due: "2020/03/10 01:11",
      description:
        "veryveryveryveryverylongveryveryveryveryverylongveryveryveryveryverylongveryveryveryveryverylong",
      comment: ["Comment", "Comment", "Comment", "Comment"],
    },
  ],
};

export { TASK, MOCK };
