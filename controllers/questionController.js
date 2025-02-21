import questionModel from "../models/questionModel.js";
const showQ = async (req, res) => {
  try {
    const questions = await questionModel.find();
    res.status(200).json(questions);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
export { showQ };