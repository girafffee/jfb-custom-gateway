import CustomGateway from './CustomGateway';
import { gatewayID } from './CustomGateway';
import PayNowScenario from './PayNowScenario';
import { scenarioID } from './PayNowScenario';

const {
	      registerGateway,
      } = JetFBActions;

registerGateway(
	gatewayID,
	CustomGateway,
);

registerGateway(
	gatewayID,
	PayNowScenario,
	scenarioID,
);