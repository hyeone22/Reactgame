import { useState } from "react";

export default function Player({name, symbol}) {
  const [ isEditing, setIsEditing ] = useState(false); // Edit/Save 버튼

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }
  // Edit 버튼 클릭 시 input 창 등장
  let playerName = <span className="player-name">{name}</span>

  if(isEditing) {
    playerName = <input type="text" required value={name} />
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        {/* Edit 버튼 클릭시 Save로 문구 변경 */}
    </li>
  );
}
