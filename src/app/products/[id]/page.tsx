const page = async ({ params }: { params: { id: string } }) => {
  console.log(params);

  let { id } = await params;
  console.log(id);
  return <h1>Product - {id}</h1>;
};

export default page;
