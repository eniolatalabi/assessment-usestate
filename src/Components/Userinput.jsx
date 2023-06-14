import React from 'react'

function Userinput(prop) {
  return (
    <div>
      {/* Created input and added aria-label since there is no specified label */}
      <input
        className='bg-blue-400 border-solid h-10 border-2'
        type="text"
        name="userInput"
        id="input"
        aria-label="input"
        placeholder="Add a user"
        // adding the value effect to the input box
        values={prop.value}
        // making the change effect upon edit of username
        onChange= {prop.onChange}

      />
    </div>
  );
}

export default Userinput
