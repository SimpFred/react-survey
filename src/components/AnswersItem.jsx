import PropType from 'prop-types';

// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list}) {
  return (
    <>
      {list.map((item, index) => (
        console.log("item", item),
        <li key={index}> {answersSet[item]}</li>
      ))}
      </>
  );
}

ItemsList.propTypes = {
  list: PropType.array,
};

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { username, colour, timeSpent, review }, onEdit, index
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colour}</span>
        </p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ul><ItemsList list={timeSpent} /></ul>
          
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <button className='answer__edit' onClick={() => onEdit(index)}>Edit</button>
      </article>
    </li>
  );
}

// This is a prop type validation for the component
AnswersItem.propTypes = {
  answerItem: PropType.shape({
    username: PropType.string,
    colour: PropType.string,
    timeSpent: PropType.array,
    review: PropType.string
  }),
  onEdit: PropType.func,
  index: PropType.number
};
