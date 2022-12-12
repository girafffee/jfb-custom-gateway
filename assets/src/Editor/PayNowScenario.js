const { compose } = wp.compose;

const {
	      withSelect,
	      withDispatch,
      } = wp.data;
const {
	      __,
      } = wp.i18n;
const {
	      TextControl,
	      SelectControl,
	      BaseControl,
      } = wp.components;

const {
	      withSelectFormFields,
	      withSelectGateways,
	      withDispatchGateways,
      } = JetFBHooks;

const { GatewayFetchButton } = JetFBComponents;

export const scenarioID = 'PAY_NOW';

function PayNowScenario( {
	gatewayGeneral,
	gatewaySpecific,
	setGateway,
	setGatewaySpecific,
	formFields,
	getSpecificOrGlobal,
	loadingGateway,
	scenarioSource,
	noticeOperations,
	scenarioLabel,
} ) {

	const displayNotice = status => response => {
		noticeOperations.removeNotice( gatewayGeneral.gateway );
		noticeOperations.createNotice( {
			status,
			content: response.message,
			id: gatewayGeneral.gateway,
		} );
	};

	return <>
		<BaseControl
			label={ __( 'Request Button', 'jfb-custom-gateway' ) }
		>
			<div className="jet-user-fields-map__list">
				{ (
					!loadingGateway.success && !loadingGateway.loading
				) && <span
					className={ 'description-controls' }
				>
					{ __(
						'Click on the button to further manage the payment settings',
						'jfb-custom-gateway'
					) }
				</span> }
				<GatewayFetchButton
					initialLabel={ __(
						'Sync Access Token',
						'jfb-custom-gateway',
					) }
					label={ __( 'Access Token updated', 'jfb-custom-gateway' ) }
					apiArgs={ {
						...scenarioSource.fetch,
						data: {
							public: getSpecificOrGlobal( 'public' ),
							secret: getSpecificOrGlobal( 'secret' ),
						},
					} }
					onFail={ displayNotice( 'error' ) }
				/>
			</div>
		</BaseControl>
		{ loadingGateway.success && <>
			<TextControl
				label={ __( 'Currency Code', 'jfb-custom-gateway' ) }
				value={ gatewaySpecific.currency }
				onChange={ currency => setGatewaySpecific( { currency } ) }
			/>
			<SelectControl
				label={ __( 'Price/amount field', 'jfb-custom-gateway' ) }
				key={ 'form_fields_price_field' }
				value={ gatewayGeneral.price_field }
				labelPosition="side"
				onChange={ price_field => {
					setGateway( { price_field } );
				} }
				options={ formFields }
			/>
		</> }
	</>;
}

export default compose(
	withSelect( ( ...props ) => (
		{
			...withSelectFormFields( [], '--' )( ...props ),
			...withSelectGateways( ...props ),
		}
	) ),
	withDispatch( ( ...props ) => (
		{
			...withDispatchGateways( ...props ),
		}
	) ),
)( PayNowScenario );