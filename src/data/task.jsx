import React from "react";

const TASK = {
  id: "uuid",
  name: "String",
  owner: "User",
  due: "Date",
  description: "String",
  comment: ["Comment"],
};

const MOCK = {
  TASK: [
    {
      id: "uuid",
      name: "task1",
      owner: "User",
      due: "2020/03/10 01:11",
      description: "String",
      comment: "Comment",
    },
    {
      id: "uuid",
      name: "task2",
      owner: "User",
      due: "2020/03/10 01:11",
      description:
        "veryveryveryveryverylongveryveryveryveryverylongveryveryveryveryverylongveryveryveryveryverylong",
      comment: "Comment",
    },
  ],
};

export { TASK, MOCK };
