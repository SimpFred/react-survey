import { useState } from "react";
import AnswersList from "../components/AnswersList";
import Input from "./Input";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";
import TextArea from "./TextArea";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [submittedForms, setSubmittedForms] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formdata, setFormData] = useState({
    username: "",
    colour: "",
    timeSpent: [],
    review: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        timeSpent: checked
          ? [...prevData.timeSpent, value]
          : prevData.timeSpent.filter((item) => item !== value),
      }));
    } else {
      setFormData({
        ...formdata,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const forms = [...submittedForms];
      forms[editIndex] = formdata;
      setSubmittedForms(forms);
      setEditIndex(null);
    } else {
      setSubmittedForms([...submittedForms, formdata]);
    }
    setFormData({
      username: "",
      colour: "",
      timeSpent: [],
      review: "",
      email: "",
    });
  };

  const handleEdit = (index) => {
    setFormData(submittedForms[index]);
    setEditIndex(index);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList submittedForms={submittedForms} onEdit={handleEdit} />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/* Radio inputs go here */}

            <ul>
              <li>
                <RadioButton
                  id="color-one"
                  name="colour"
                  value="1"
                  checked={formdata.colour === "1"}
                  onChange={handleChange}
                  label="1"
                />
              </li>
              <li>
                <RadioButton
                  id="color-two"
                  name="colour"
                  value="2"
                  checked={formdata.colour === "2"}
                  onChange={handleChange}
                  label="2"
                />
              </li>

              <li>
                <RadioButton
                  id="color-three"
                  name="colour"
                  value="3"
                  checked={formdata.colour === "3"}
                  onChange={handleChange}
                  label="3"
                />
              </li>

              <li>
                <RadioButton
                  id="color-four"
                  name="colour"
                  value="4"
                  checked={formdata.colour === "4"}
                  onChange={handleChange}
                  label="4"
                />
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {/* Checkboxes go here */}
            <ul>
              <li>
                <Checkbox
                  name="spend-time"
                  value="swimming"
                  checked={formdata.timeSpent.includes("swimming")}
                  onChange={handleChange}
                  label="Swimming"
                />
              </li>
              <li>
                <Checkbox
                  name="spend-time"
                  value="bathing"
                  checked={formdata.timeSpent.includes("bathing")}
                  onChange={handleChange}
                  label="Bathing"
                />
              </li>
              <li>
                <Checkbox
                  name="spend-time"
                  value="chatting"
                  checked={formdata.timeSpent.includes("chatting")}
                  onChange={handleChange}
                  label="Chatting"
                />
              </li>
              <li>
                <Checkbox
                  name="spend-time"
                  value="noTime"
                  checked={formdata.timeSpent.includes("noTime")}
                  onChange={handleChange}
                  label="I don't like to spend time with it"
                />
              </li>
            </ul>
          </div>
          <TextArea
            label="What else have you got to say about your rubber duck?"
            name="review"
            value={formdata.review}
            onChange={handleChange}
          />

          <Input
            label="Put your name here (if you feel like it):"
            type="text"
            name="username"
            value={formdata.username}
            onChange={handleChange}
          />

          <Input
            label="Leave us your email pretty please??"
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
          />

          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Survey;
