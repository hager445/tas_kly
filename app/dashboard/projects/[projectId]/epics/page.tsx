export async function EpicsPage({ params }) {
  const param = await params;

  console.log(param);

  return <main />;
}

export default EpicsPage;
