import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [ playerName, setPlayerName ] = useState(initialName);
  const [ isEditing, setIsEditing ] = useState(false); // Edit/Save 버튼

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  // input 창에 입려된 value 값을 저장
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  // Edit 버튼 클릭 시 input 창 등장
  let editablePlayerName = <span className="player-name">{playerName}</span>

  if(isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        {/* Edit 버튼 클릭시 Save로 문구 변경 */}
    </li>
  );
}
