const HabitList = ({ habitList }) => {
  return (
    <>
      <ul>
        {habitList.map((element) => (
          <li key={element.key}>{element.title}</li>
        ))}
      </ul>
    </>
  );
};

export default HabitList;
