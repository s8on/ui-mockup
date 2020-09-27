import milestone0 from "./milestone0";
import milestone1 from "./milestone1";
import milestone2 from "./milestone2";
import milestone3 from "./milestone3";

const data = {
  id: "12232",
  name: "ref_name",
  title: "Workshop: React Patterns",
  description: "Checklist for React patterns workshop",
  summary: "This is the template of a summary can refer to children fields $milestone_0_preps/stage_1$",
  cloned_from: "source_checklist_id",
  cloned_on: "2020-09-01 01:01:00 UTC",
  is_public: true,
  users: {
    primary: ["petrenko"],
    backup: ["smith", "leroix"],
    supervisors: ["xiang", "macdonald"],
  },
  children: [
    milestone0,
    milestone1,
    milestone2,
    milestone3,
  ],
};

export default data;
