import { useNavigate } from "react-router-dom";

import NewMeedupFoorm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();
  function AddMeetupHandler(MeetupData) {
    fetch(
      "https://react-getting-started-eaee1-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "post",
        body: JSON.stringify(MeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }
  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeedupFoorm onAddMeetup={AddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
