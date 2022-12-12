const gatewayID = 'custom';

const {
	      compose,
      } = wp.compose;
const {
	      __,
      } = wp.i18n;

const {
	      withSelect,
	      withDispatch,
      } = wp.data;

const {
	      TextControl,
	      ToggleControl,
	      SelectControl,
	      withNotices,
      } = wp.components;

const {
	      useEffect,
      } = wp.element;

const {
	      renderGateway,
      } = JetFBActions;

const {
	      withSelectGateways,
	      withDispatchGateways,
      } = JetFBHooks;

let CustomGatewayMain = function ( {
	setGatewayRequest,
	gatewaySpecific,
	setGatewaySpecific,
	gatewayScenario,
	setGatewayScenario,
	getSpecificOrGlobal,
	additionalSourceGateway,
	noticeOperations,
	noticeUI,
} ) {

	const {
		      id: scenario = 'PAY_NOW',
	      } = gatewayScenario;

	useEffect( () => {
		setGatewayRequest( { id: scenario } );
	}, [ scenario ] );

	useEffect( () => {
		setGatewayRequest( { id: scenario } );
	}, [] );

	return <>
		{ noticeUI }
		<ToggleControl
			key={ 'use_global' }
			label={ __( 'Use Global Settings', 'jfb-custom-gateway' ) }
			checked={ gatewaySpecific.use_global }
			onChange={ use_global => setGatewaySpecific( { use_global } ) }
		/>
		<TextControl
			label={ __( 'Public Key', 'jfb-custom-gateway' ) }
			value={ getSpecificOrGlobal( 'public' ) }
			onChange={ value => setGatewaySpecific( { public: value } ) }
			disabled={ gatewaySpecific.use_global }
		/>
		<TextControl
			label={ __( 'Secret Key', 'jfb-custom-gateway' ) }
			value={ getSpecificOrGlobal( 'secret' ) }
			onChange={ secret => setGatewaySpecific( { secret } ) }
			disabled={ gatewaySpecific.use_global }
		/>
		<SelectControl
			labelPosition="side"
			label={ __( 'Gateway Action', 'jfb-custom-gateway' ) }
			value={ scenario }
			onChange={ id => {
				setGatewayScenario( { id } );
			} }
			options={ additionalSourceGateway.scenarios }
		/>
		{ renderGateway( gatewayID, { noticeOperations }, scenario ) }
	</>;
};

export default compose(
	withSelect( withSelectGateways ),
	withDispatch( withDispatchGateways ),
	withNotices,
)( CustomGatewayMain );

export { gatewayID };