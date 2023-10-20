import Link from "next/link";

function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li
            key={user.id}
            className="bg-slate-400 mb-2 p-4 rounded-md text-black flex items-center justify-between"
          >
            <img src={user.avatar} className="rounded-full w-20 mr-3" />
            <div className="justify-center">
              <h5 className="font-bold">
                {user.id} {user.first_name} {user.last_name}
              </h5>
              <p className="text-slate-100">
                <b className="text-slate-800">email:</b> {user.email}
              </p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Users;
