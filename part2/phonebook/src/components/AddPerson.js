import React from "react";

export default function AddPerson({
  newName,
  handleChangeName,
  newNumber,
  handleChangeNumber,
  addNumber,
}) {
  return (
    <form onSubmit={addNumber}>
      <div>
        name: <input value={newName} onChange={handleChangeName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleChangeNumber} />
      </div>

      <div>
        <button type="submit" onClick={addNumber}>
          add
        </button>
      </div>
    </form>
  );
}
