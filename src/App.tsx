import React from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          NAV
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="red">
            ASIDE
          </GridItem>
        </Show>
        <GridItem area="main" bg="yellow">
          MAIN
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
