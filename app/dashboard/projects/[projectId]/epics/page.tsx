export async function EpicsPage({
  params,
}: {
  params: Promise<{
    projectId: string;
  }>;
}) {
  const param = await params;

  console.log(param);

  return <main />;
}

export default EpicsPage;
