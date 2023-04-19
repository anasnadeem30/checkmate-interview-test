import {GetServerSideProps, InferGetServerSidePropsType} from "next";

export default function SignedIn({ joke }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <h1>Signed In</h1>
      {/* Task 3: Your own presentation of the joke here (Free Style 😉 )*/}
      <div>
        <h2>{joke.setup}</h2>
        <p>{joke.punchline}</p>
      </div>
      {/* End of Task 3 */}
    </div>
  )

}

// Task 2: Fetch random jokes from the API
// https://official-joke-api.appspot.com/jokes/programming/random
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API and pass it to the page via props.joke
  const res = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
  const data = await res.json();
  const joke = data[0];
  return {
    props: {
      joke,
    }, // will be passed to the page component as props
  };
};