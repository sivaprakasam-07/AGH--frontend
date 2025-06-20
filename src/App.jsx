import React, { useState } from 'react';
import AddProblem from './components/AdminPhaseAddProblemComponent/AddProblem.jsx';
import AddSection from './components/AdminPhaseAddSectionComponent/AddSection.jsx';
import { AppContainer,Panel } from './App';

function App() {
  const [triggerAddProblem, setTriggerAddProblem] = useState(false);

  return (
    <AppContainer>
      <Panel>
        <AddProblem triggerAdd={triggerAddProblem} setTriggerAdd={setTriggerAddProblem} />
      </Panel>
      <Panel>
        <AddSection setTriggerAdd={setTriggerAddProblem} />
      </Panel>
    </AppContainer>
  );
}

export default App;
