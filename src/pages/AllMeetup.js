import { useState, useEffect } from "react";

import MeetupItem from "../components/meetups/MeetupItem";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMeetups, setLoadingMeetups] = useState([]);

  useEffect(() => {
    // isLoading(true)
    fetch(
      "https://react-getting-started-eaee1-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadingMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups </h1>
      <MeetupList meetups={loadingMeetups} />
    </section>
  );
}

export default AllMeetupPage;
