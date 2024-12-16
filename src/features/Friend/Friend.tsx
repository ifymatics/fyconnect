import { Person } from "@mui/icons-material";
import React from "react";
export type User = {
  fullName: string;
};
interface FriendProp {
  user: User;
}
const Friend: React.FC<FriendProp> = ({ user }) => {
  return (
    <li className="leftBarFriend">
      <Person className="leftBarItemIcon" />
      <span className="leftBarFriendName">{user.fullName}</span>
    </li>
  );
};

export default Friend;
