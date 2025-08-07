import { users } from "../route";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  const user = users.find(user => user.id === parseInt(id));

  if (!user) {
    return Response.json("No users Found");
  }

  return Response.json(user);
}
