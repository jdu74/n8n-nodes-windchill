import { INodeProperties } from "n8n-workflow";

export const PtcFactoryStandardControlCharacteristicFunctionIsCheckoutAllowedDescription: INodeProperties[] = [
	{
		displayName: 'StandardControlCharacteristicId',
		name: 'StandardControlCharacteristicId-string(path)',
		description: 'Standard Control Characteristic ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"GET /StandardControlCharacteristics('{StandardControlCharacteristicId}')/PTC.Factory.IsCheckoutAllowed()",
				],
			},
		},
		required: true,
	},
];
