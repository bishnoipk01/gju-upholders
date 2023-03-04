import Image from 'next/image';
import { executeRead } from '@/utils/neo4j';
import parseDate from '@/utils/js-date';

const getdates = async () => {
  const query = `MATCH (n:Temp) RETURN n.created AS date`;
  const results = await executeRead(query);
  const data = results[0].get('date');
  return data;
};

export default async function TestIt() {
  const data = await getdates();
  console.log(data);
  const jsDate = parseDate(data);
  console.log(jsDate);
  return <p>{jsDate.toDateString()}</p>;
}
