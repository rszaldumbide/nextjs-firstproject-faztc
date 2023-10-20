import Users from "@/components/Users";

async function fetchUssers() {
  const resp = await fetch("https://reqres.in/api/users");
  const data = await resp.json();
  return data.data;
}

async function HomePage() {
  const users = await fetchUssers();

  return <Users users={users} />;
}

export default HomePage;
