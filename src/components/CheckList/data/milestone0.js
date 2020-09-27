const milestone = {
  id: "",
    name: "milestone_0_topic_approval",
  title: "Topic approval",
  description: "",
  summary: "template that can be referred to via $milestone_0_preps.summary$",
  status: "open",
  is_required: true,
  closed_on: null,
  requires: [],
  comments: [],
  children: [
    {
      id: "",
      name: "",
      title: "",
      description: "",
      default_value: "",
      placeholder: "",
      value: "",
      type: "",
      users: {
        assignee: "petrenko",
        primary: ["petrenko"],
        backup: ["smith"],
        supervisors: ["xiang"],
      },
      comments: [{
        author: "xiang",
        added_on: "2020-09-25 01:02 UTC",
        message: "Some text\n and mention @smith referring to a field #milestone.field#\n quoting a field value $group.field$",
      }],
    },
  ],
};

export default milestone;
