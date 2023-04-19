/**
 * Convert neo4j date objects in to a parsed javascript date object
 * @param dateString - the neo4j date object
 * @returns Date
 */
const parseDate = (neo4jDateTime) => {
  console.log(neo4jDateTime);
  const { year, month, day, hour, minute, second, nanosecond } = neo4jDateTime;

  const date = new Date(
    year.toInt(),
    month.toInt() - 1, // neo4j dates start at 1, js dates start at 0
    day.toInt(),
    hour.toInt(),
    minute.toInt(),
    second.toInt(),
    nanosecond.toInt() / 1000000 // js dates use milliseconds
  );

  return date;
};

export default parseDate;
