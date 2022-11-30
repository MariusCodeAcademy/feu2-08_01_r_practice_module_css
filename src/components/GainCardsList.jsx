import Grid from './UI/grid/Grid';

function GainCardsList(props) {
  return (
    <Grid>
      {props.items.map((cObj) => (
        <li key={cObj.id}>{cObj.title}</li>
      ))}
    </Grid>
  );
}
export default GainCardsList;
