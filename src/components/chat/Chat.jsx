import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Profile() {
  const { user, handleLogout } = useContext(UserContext);
  console.log(user);

  var i = 0;
  var txt =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."; /* The text */
  var speed = 40; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  return (
    <div>
      <h1>Chat</h1>
      <p>Hi {user && user.username}</p>
      <p id="demo"></p>
      <button onClick={() => typeWriter()}>Test Typewriter</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
