const rowData = [
  {
    name: "country name 1",
    people: [
      {
        name: "c1 person 1",
        animals: [{name: "ducky"}, {name: "moew"}, {name: "doggy"}],
      },
      {
        name: "c1 person 2",
        animals: [{name: "ducky"}, {name: "moew"}, {name: "doggy"}],
      },
      {
        name: "c1 person 3",
        animals: [
          {name: "ducky"},
          {name: "moew"},
          {name: "doggy"},
          {name: "doggy"},
          {name: "doggy"},
        ],
      },
      {
        name: "c1 person 4",
        animals: [{name: "ducky"}, {name: "moew"}, {name: "doggy"}],
      },
      {
        name: "c1 person 5",
        animals: [{name: "ducky"}, {name: "moew"}, {name: "doggy"}, {name: "croaky"}],
      },
      {
        name: "c1 person 6",
        animals: [{name: "ducky"}, {name: "moew"}],
      },
    ],
  },
  {
    name: "country name 2",
    people: [
      {
        name: "c2 person 1",
        animals: [{name: "ducky"}, {name: "moew"}, {name: "doggy"}, {name: "croaky"}],
      },
      {
        name: "c2 person 2",
        animals: [{name: "ducky"}, {name: "moew"}, {name: "doggy"}],
      },
      {
        name: "c2 person 3",
        animals: [{name: "ducky"}, {name: "moew"}, {name: "doggy"}, {name: "foxy"}],
      },
    ],
  },
];

const oakfilteredData = [
  {
    name: "country name 1",
    people: [
      {
        name: "c1 person 5",
        animals: [{name: "croaky"}],
      },
    ],
  },
  {
    name: "country name 2",
    people: [
      {
        name: "c2 person 1",
        animals: [{name: "croaky"}],
      },
    ],
  },
];

const foxfilteredData = [
  {
    name: "country name 2",
    people: [
      {
        name: "c2 person 3",
        animals: [{name: "foxy"}],
      },
    ],
  },
];

const countedData = [
  {
    name: "country name 1 [6]",
    people: [
      {
        name: "c1 person 1 [3]",
        animals: [{name: "ducky"}, {name: "moew"}, {name: "doggy"}],
      },
      {
        name: "c1 person 2 [3]",
        animals: [{name: "ducky"}, {name: "moew"}, {name: "doggy"}],
      },
      {
        name: "c1 person 3 [5]",
        animals: [
          {name: "ducky"},
          {name: "moew"},
          {name: "doggy"},
          {name: "doggy"},
          {name: "doggy"},
        ],
      },
      {
        name: "c1 person 4 [3]",
        animals: [{name: "ducky"}, {name: "moew"}, {name: "doggy"}],
      },
      {
        name: "c1 person 5 [4]",
        animals: [{name: "ducky"}, {name: "moew"}, {name: "doggy"}, {name: "croaky"}],
      },
      {
        name: "c1 person 6 [2]",
        animals: [{name: "ducky"}, {name: "moew"}],
      },
    ],
  },
  {
    name: "country name 2 [3]",
    people: [
      {
        name: "c2 person 1 [4]",
        animals: [{name: "ducky"}, {name: "moew"}, {name: "doggy"}, {name: "croaky"}],
      },
      {
        name: "c2 person 2 [3]",
        animals: [{name: "ducky"}, {name: "moew"}, {name: "doggy"}],
      },
      {
        name: "c2 person 3 [4]",
        animals: [{name: "ducky"}, {name: "moew"}, {name: "doggy"}, {name: "foxy"}],
      },
    ],
  },
];

const objListWithChildrenList = [
  {
    name: "parent 1",
    children: [{name: "child 1"}, {name: "child 2"}],
  },
  {
    name: "parent 2",
    children: [{name: "child 1"}, {name: "child 2"}, {name: "child 3"}, {name: "child 4"}],
  },
];

const countedObjListWithChildrenList = [
  {
    name: "parent 1 [2]",
    children: [{name: "child 1"}, {name: "child 2"}],
  },
  {
    name: "parent 2 [4]",
    children: [{name: "child 1"}, {name: "child 2"}, {name: "child 3"}, {name: "child 4"}],
  },
];

module.exports = {
  rowData,
  oakfilteredData,
  foxfilteredData,
  countedData,
  objListWithChildrenList,
  countedObjListWithChildrenList,
};
